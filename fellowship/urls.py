from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenRefreshView

from .views import (
    DashboardContentViewSet,
    FellowshipApplicationViewSet,
    NewsletterSubscriptionViewSet,
    NotificationViewSet,
    UndergraduateApplicationViewSet,
    RegisterView,
    LoginView,
    RequestEmailConfirmationView,
    ConfirmEmailView,
    RequestPasswordResetView,
    VerifyPasswordResetTokenView,
    ResetPasswordView,
)

router = DefaultRouter()
router.register(r"applications", FellowshipApplicationViewSet, basename="applications")
router.register(r"dashboard-content", DashboardContentViewSet, basename="dashboard-content")
router.register(r"undergraduate-applications", UndergraduateApplicationViewSet, basename="undergraduate-applications")
router.register(r"newsletter-subscriptions", NewsletterSubscriptionViewSet, basename="newsletter-subscriptions")
router.register(r"notifications", NotificationViewSet, basename="notifications")

# Custom URL patterns for authentication and other non-router views
custom_urlpatterns = [
    # Authentication endpoints
    path("register/", RegisterView.as_view(), name="register"),
    path("login/", LoginView.as_view(), name="login"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    
    # Email confirmation endpoints
    path("request-email-confirmation/", RequestEmailConfirmationView.as_view(), name="request-email-confirmation"),
    path("confirm-email/<uuid:token>/", ConfirmEmailView.as_view(), name="confirm-email"),
    
    # Password reset endpoints
    path("request-password-reset/", RequestPasswordResetView.as_view(), name="request-password-reset"),
    path("verify-password-reset-token/", VerifyPasswordResetTokenView.as_view(), name="verify-password-reset-token"),
    path("reset-password/", ResetPasswordView.as_view(), name="reset-password"),
]

# Combine router URLs with custom URLs
urlpatterns = custom_urlpatterns + router.urls