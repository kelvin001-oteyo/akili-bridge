from django.contrib import admin
from django.urls import include, path, re_path
from django.conf import settings
from django.conf.urls.static import static

from core.views import frontend
from fellowship.views import LoginView, RegisterView
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    # Django admin
    path("admin/", admin.site.urls),
    
    # API endpoints
    path("api/fellowship/", include("fellowship.urls")),
    path("api/blog/", include("blog.urls")),
    path("api/resources/", include("resources.urls")),
    path("api/auth/register/", RegisterView.as_view(), name="register"),
    path("api/auth/login/", LoginView.as_view(), name="login"),
    path("api/auth/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    
    # React frontend routes (explicitly list the ones you need)
    path("", frontend),  # Home
    path("admin-dashboard/", frontend),  # Admin dashboard
    path("dashboard/", frontend),  # User dashboard
    path("about/", frontend),  # About pages
    path("what-we-do/", frontend),  # What we do pages
    path("apply/", frontend),  # Apply pages
    path("labs/", frontend),  # Labs
    path("careers/", frontend),  # Careers pages
    path("news/", frontend),  # News
    path("auth/", frontend),  # Auth pages
    path("blog/", frontend),  # Blog
    
    # Catch-all for any other frontend routes
    re_path(r"^(?!api/|admin/|static/|media/).*$", frontend),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
