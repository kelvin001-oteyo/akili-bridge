# core/urls.py
from rest_framework import routers
from blog.views import BlogPostViewSet
from django.urls import path, include

router = routers.DefaultRouter()
# Mounted at \"api/blog/\" in core/urls.py, so keep the prefix empty to avoid a double \"api/\".
# Final routes become:
#   /api/blog/            -> list/create
#   /api/blog/<id>/       -> retrieve/update/delete
router.register(r"", BlogPostViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
