from rest_framework.routers import DefaultRouter

from .views import (
    DashboardContentViewSet,
    FellowshipApplicationViewSet,
    NotificationViewSet,
    UndergraduateApplicationViewSet,
)

router = DefaultRouter()
router.register(r"applications", FellowshipApplicationViewSet, basename="applications")
router.register(r"dashboard-content", DashboardContentViewSet, basename="dashboard-content")
router.register(r"undergraduate-applications", UndergraduateApplicationViewSet, basename="undergraduate-applications")
router.register(r"notifications", NotificationViewSet, basename="notifications")

urlpatterns = router.urls
