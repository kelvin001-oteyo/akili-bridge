from django.contrib import admin
from django.urls import include, path, re_path
from django.conf import settings
from django.conf.urls.static import static

from core.views import frontend

urlpatterns = [
    # Django admin
    path("admin/", admin.site.urls),
    
    # API endpoints - All under /api/
    path("api/", include("fellowship.urls")),  # Fellowship includes auth and all fellowship endpoints
    path("api/blog/", include("blog.urls")),
    path("api/resources/", include("resources.urls")),
    
    # React frontend routes
    path("", frontend, name="home"),
    path("admin-dashboard/", frontend, name="admin-dashboard"),
    path("dashboard/", frontend, name="dashboard"),
    path("about/", frontend, name="about"),
    path("what-we-do/", frontend, name="what-we-do"),
    path("apply/", frontend, name="apply"),
    path("labs/", frontend, name="labs"),
    path("careers/", frontend, name="careers"),
    path("news/", frontend, name="news"),
    path("auth/", frontend, name="auth"),
    path("blog/", frontend, name="blog"),
    path("confirm-email/<uuid:token>/", frontend, name="confirm-email"),
    path("reset-password/<uuid:token>/", frontend, name="reset-password"),
    
    # Catch-all for any other frontend routes (excludes API, admin, static, media)
    re_path(r"^(?!api/|admin/|static/|media/).*$", frontend),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)