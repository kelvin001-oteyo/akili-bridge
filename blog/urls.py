# core/urls.py
from rest_framework import routers
from blog.views import BlogPostViewSet
from django.urls import path, include

router = routers.DefaultRouter()
router.register(r"blog", BlogPostViewSet)

urlpatterns = [
    path("api/", include(router.urls)),
]
