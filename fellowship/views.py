from rest_framework import viewsets, permissions, generics
from rest_framework.permissions import AllowAny
from django.contrib.auth import get_user_model
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from rest_framework_simplejwt.tokens import RefreshToken
from django.utils import timezone
from datetime import timedelta
from django.core.mail import send_mail
from django.conf import settings
from django.shortcuts import get_object_or_404

from .serializers import (
    UserSerializer,
    FellowshipApplicationSerializer,
    RegisterSerializer,
    DashboardContentSerializer,
    UndergraduateApplicationSerializer,
    NotificationSerializer,
    NewsletterSubscriptionSerializer,
)
from .models import (
    FellowshipApplication, 
    DashboardContent, 
    UndergraduateApplication, 
    Notification, 
    NewsletterSubscription,
    PasswordResetToken,
    EmailConfirmationToken,
)
from .permissions import IsAdmin

User = get_user_model()


# Registration endpoint
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = [AllowAny]
    
    def create(self, request, *args, **kwargs):
        response = super().create(request, *args, **kwargs)
        if response.status_code == 201:
            user = User.objects.get(username=response.data['username'])
            
            # Create JWT token
            refresh = RefreshToken.for_user(user)
            response.data['access'] = str(refresh.access_token)
            response.data['refresh'] = str(refresh)
            
            # Send email confirmation (completely optional - won't block registration)
            try:
                token = EmailConfirmationToken.objects.create(
                    user=user,
                    expires_at=timezone.now() + timedelta(hours=24)
                )
                
                confirmation_link = f"{settings.FRONTEND_URL}/confirm-email/{token.token}"
                
                html_content = render_to_string("emails/welcome_email.html", {
                    "user": user,
                    "confirmation_link": confirmation_link
                })
                msg = EmailMultiAlternatives(
                    subject="Welcome to Akili Bridge - Confirm Your Email",
                    body=f"Welcome! Please click this link to confirm your email: {confirmation_link}",
                    from_email=settings.DEFAULT_FROM_EMAIL,
                    to=[user.email],
                )
                msg.attach_alternative(html_content, "text/html")
                msg.send(fail_silently=True)
            except Exception as exc:
                # Log but don't break registration
                print(f"Email send skipped: {exc}")
            
        return response


# Fellowship applications API
class FellowshipApplicationViewSet(viewsets.ModelViewSet):
    serializer_class = FellowshipApplicationSerializer

    def get_queryset(self):
        user = self.request.user
        
        # If admin, they can see all applications
        if user.is_authenticated and user.is_admin:
            return FellowshipApplication.objects.all().order_by("-created_at")
        
        # If authenticated user (applicant), only show their own applications
        if user.is_authenticated:
            return FellowshipApplication.objects.filter(applicant=user).order_by("-created_at")
        
        # For unauthenticated users, return empty queryset
        return FellowshipApplication.objects.none()

    def get_permissions(self):
        if self.action == "create":
            permission_classes = [AllowAny]
        elif self.action in ["list", "retrieve"]:
            permission_classes = [permissions.IsAuthenticated]
        else:
            permission_classes = [IsAdmin]
        return [permission() for permission in permission_classes]

    def perform_create(self, serializer):
        if self.request.user.is_authenticated:
            serializer.save(applicant=self.request.user)
        else:
            serializer.save()
        
        # Best-effort notification email - won't break submission
        try:
            application = serializer.instance
            html_content = render_to_string(
                "emails/application_received.html",
                {"full_name": application.full_name},
            )
            msg = EmailMultiAlternatives(
                subject="Application Received",
                body="Thank you for applying to Akili Bridge. Your application is now under review.",
                from_email=settings.DEFAULT_FROM_EMAIL,
                to=[application.email],
            )
            msg.attach_alternative(html_content, "text/html")
            msg.send(fail_silently=True)
        except Exception as exc:
            print(f"Fellowship application email skipped: {exc}")


# Dashboard content API
class DashboardContentViewSet(viewsets.ModelViewSet):
    queryset = DashboardContent.objects.all().order_by("-created_at")
    serializer_class = DashboardContentSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


# Undergraduate applications API
class UndergraduateApplicationViewSet(viewsets.ModelViewSet):
    serializer_class = UndergraduateApplicationSerializer

    def get_queryset(self):
        user = self.request.user
        
        # If admin, they can see all applications
        if user.is_authenticated and user.is_admin:
            return UndergraduateApplication.objects.all().order_by("-submitted_at")
        
        # For non-admin authenticated users, filter by email if they have one
        if user.is_authenticated and user.email:
            return UndergraduateApplication.objects.filter(email=user.email).order_by("-submitted_at")
        
        # For unauthenticated users, return empty queryset
        return UndergraduateApplication.objects.none()

    def get_permissions(self):
        if self.action == "create":
            permission_classes = [AllowAny]
        elif self.action in ["list", "retrieve"]:
            permission_classes = [permissions.IsAuthenticated]
        else:
            permission_classes = [IsAdmin]
        return [permission() for permission in permission_classes]

    def perform_create(self, serializer):
        application = serializer.save()
        
        # Best-effort email - won't break submission
        try:
            html_content = render_to_string(
                "emails/application_received.html",
                {"full_name": application.full_name},
            )
            msg = EmailMultiAlternatives(
                subject="Application Received",
                body="Thank you for applying to Akili Bridge. Your application is now under review.",
                from_email=settings.DEFAULT_FROM_EMAIL,
                to=[application.email],
            )
            msg.attach_alternative(html_content, "text/html")
            msg.send(fail_silently=True)
        except Exception as exc:
            print(f"Undergraduate application email skipped: {exc}")
        return application


# Notifications API
class NotificationViewSet(viewsets.ModelViewSet):
    serializer_class = NotificationSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        # Users only see their own notifications
        return Notification.objects.filter(user=self.request.user).order_by("-created_at")


class NewsletterSubscriptionViewSet(viewsets.ModelViewSet):
    queryset = NewsletterSubscription.objects.all()
    serializer_class = NewsletterSubscriptionSerializer

    def get_permissions(self):
        if self.action == "create":
            permission_classes = [AllowAny]
        else:
            permission_classes = [IsAdmin]
        return [permission() for permission in permission_classes]


# Login API
class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")

        user = authenticate(username=username, password=password)
        if user is not None:
            serializer = UserSerializer(user)
            refresh = RefreshToken.for_user(user)
            return Response({
                "access": str(refresh.access_token),
                "refresh": str(refresh),
                "user": serializer.data
            }, status=status.HTTP_200_OK)
        return Response({"error": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)


# Email Confirmation Views
class RequestEmailConfirmationView(APIView):
    permission_classes = [AllowAny]
    
    def post(self, request):
        email = request.data.get('email')
        try:
            user = User.objects.get(email=email)
            
            # Check if email is already confirmed
            if user.email_confirmed:
                return Response({"message": "Email already confirmed"}, status=status.HTTP_400_BAD_REQUEST)
            
            # Delete any existing tokens for this user
            EmailConfirmationToken.objects.filter(user=user).delete()
            
            # Create new token
            token = EmailConfirmationToken.objects.create(
                user=user,
                expires_at=timezone.now() + timedelta(hours=24)
            )
            
            # Send confirmation email
            confirmation_link = f"{settings.FRONTEND_URL}/confirm-email/{token.token}"
            
            try:
                html_content = render_to_string("emails/confirm_email.html", {
                    "user": user,
                    "confirmation_link": confirmation_link
                })
                
                msg = EmailMultiAlternatives(
                    subject="Confirm Your Email Address",
                    body=f"Please click this link to confirm your email: {confirmation_link}",
                    from_email=settings.DEFAULT_FROM_EMAIL,
                    to=[user.email],
                )
                msg.attach_alternative(html_content, "text/html")
                msg.send(fail_silently=True)
            except Exception as exc:
                print(f"Email confirmation skipped: {exc}")
            
            return Response({"message": "Confirmation email sent"}, status=status.HTTP_200_OK)
            
        except User.DoesNotExist:
            return Response({"error": "User with this email does not exist"}, status=status.HTTP_404_NOT_FOUND)


class ConfirmEmailView(APIView):
    permission_classes = [AllowAny]
    
    def post(self, request, token):
        try:
            confirmation_token = EmailConfirmationToken.objects.get(token=token)
            
            if not confirmation_token.is_valid():
                return Response({"error": "Invalid or expired token"}, status=status.HTTP_400_BAD_REQUEST)
            
            # Confirm the user's email
            user = confirmation_token.user
            user.email_confirmed = True
            user.save()
            
            # Mark token as used
            confirmation_token.is_used = True
            confirmation_token.save()
            
            return Response({"message": "Email confirmed successfully"}, status=status.HTTP_200_OK)
            
        except EmailConfirmationToken.DoesNotExist:
            return Response({"error": "Invalid token"}, status=status.HTTP_404_NOT_FOUND)


# Password Reset Views
class RequestPasswordResetView(APIView):
    permission_classes = [AllowAny]
    
    def post(self, request):
        email = request.data.get('email')
        try:
            user = User.objects.get(email=email)
            
            # Delete any existing tokens for this user
            PasswordResetToken.objects.filter(user=user).delete()
            
            # Create new token
            token = PasswordResetToken.objects.create(
                user=user,
                expires_at=timezone.now() + timedelta(hours=24)
            )
            
            # Send password reset email
            reset_link = f"{settings.FRONTEND_URL}/reset-password/{token.token}"
            
            html_content = render_to_string("emails/password_reset.html", {
                "user": user,
                "reset_link": reset_link
            })
            
            # Try sending email - won't fail
            try:
                msg = EmailMultiAlternatives(
                    subject="Password Reset Request",
                    body=f"Please click this link to reset your password: {reset_link}",
                    from_email=settings.DEFAULT_FROM_EMAIL,
                    to=[user.email],
                )
                msg.attach_alternative(html_content, "text/html")
                msg.send(fail_silently=True)
            except Exception as exc:
                print(f"Password reset email skipped: {exc}")
            
            return Response({"message": "Password reset email sent"}, status=status.HTTP_200_OK)
            
        except User.DoesNotExist:
            # Return success even if user doesn't exist for security
            return Response({"message": "If this email exists, a reset link has been sent"}, status=status.HTTP_200_OK)


class VerifyPasswordResetTokenView(APIView):
    permission_classes = [AllowAny]
    
    def post(self, request):
        token = request.data.get('token')
        try:
            reset_token = PasswordResetToken.objects.get(token=token)
            if reset_token.is_valid():
                return Response({"valid": True}, status=status.HTTP_200_OK)
            else:
                return Response({"valid": False, "error": "Token expired"}, status=status.HTTP_400_BAD_REQUEST)
        except PasswordResetToken.DoesNotExist:
            return Response({"valid": False, "error": "Invalid token"}, status=status.HTTP_404_NOT_FOUND)


class ResetPasswordView(APIView):
    permission_classes = [AllowAny]
    
    def post(self, request):
        token = request.data.get('token')
        new_password = request.data.get('new_password')
        confirm_password = request.data.get('confirm_password')
        
        # Validate passwords match
        if new_password != confirm_password:
            return Response({"error": "Passwords do not match"}, status=status.HTTP_400_BAD_REQUEST)
        
        # Validate password strength (optional)
        if len(new_password) < 8:
            return Response({"error": "Password must be at least 8 characters"}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            reset_token = PasswordResetToken.objects.get(token=token)
            
            if not reset_token.is_valid():
                return Response({"error": "Invalid or expired token"}, status=status.HTTP_400_BAD_REQUEST)
            
            # Reset password
            user = reset_token.user
            user.set_password(new_password)
            user.save()
            
            # Delete the used token
            reset_token.delete()
            
            # Optional: Send confirmation email (won't break)
            try:
                html_content = render_to_string("emails/password_reset_confirmation.html", {"user": user})
                msg = EmailMultiAlternatives(
                    subject="Password Reset Successful",
                    body="Your password has been successfully reset.",
                    from_email=settings.DEFAULT_FROM_EMAIL,
                    to=[user.email],
                )
                msg.attach_alternative(html_content, "text/html")
                msg.send(fail_silently=True)
            except Exception as exc:
                print(f"Password reset confirmation email skipped: {exc}")
            
            return Response({"message": "Password reset successful"}, status=status.HTTP_200_OK)
            
        except PasswordResetToken.DoesNotExist:
            return Response({"error": "Invalid token"}, status=status.HTTP_404_NOT_FOUND)
