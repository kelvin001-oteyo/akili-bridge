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

from .serializers import (
    UserSerializer,
    FellowshipApplicationSerializer,
    RegisterSerializer,
    DashboardContentSerializer,
    UndergraduateApplicationSerializer,
    NotificationSerializer,
    NewsletterSubscriptionSerializer,
)
from .models import FellowshipApplication, DashboardContent, UndergraduateApplication, Notification, NewsletterSubscription
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
            token, created = Token.objects.get_or_create(user=user)
            response.data['token'] = token.key
        return response

# Fellowship applications API
class FellowshipApplicationViewSet(viewsets.ModelViewSet):
    queryset = FellowshipApplication.objects.all().order_by("-created_at")
    serializer_class = FellowshipApplicationSerializer

    def get_permissions(self):
        if self.action == "create":
            permission_classes = [AllowAny]
        else:
            permission_classes = [permissions.IsAuthenticatedOrReadOnly]
        return [permission() for permission in permission_classes]

    def perform_create(self, serializer):
        if self.request.user.is_authenticated:
            serializer.save(applicant=self.request.user)
        else:
            serializer.save()

# Dashboard content API
class DashboardContentViewSet(viewsets.ModelViewSet):
    queryset = DashboardContent.objects.all().order_by("-created_at")
    serializer_class = DashboardContentSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

# Undergraduate applications API
class UndergraduateApplicationViewSet(viewsets.ModelViewSet):
    queryset = UndergraduateApplication.objects.all().order_by("-submitted_at")
    serializer_class = UndergraduateApplicationSerializer

    def get_permissions(self):
        if self.action == "create":
            permission_classes = [AllowAny]
        else:
            permission_classes = [IsAdmin]
        return [permission() for permission in permission_classes]

    def perform_create(self, serializer):
        application = serializer.save()
        html_content = render_to_string("emails/application_received.html", {"full_name": application.full_name})
        msg = EmailMultiAlternatives(
            subject="Application Received",
            body="Thank you for applying to Akili Bridge. Your application is now under review.",
            from_email="no-reply@akilibridge.com",
            to=[application.email],
        )
        msg.attach_alternative(html_content, "text/html")
        msg.send()
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
