from django.contrib import admin
from django.urls import path, include
from core.views import frontend  # 👈 IMPORT THIS

from fellowship.views import RegisterView, LoginView
from rest_framework_simplejwt.views import TokenRefreshView

from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path("", frontend),  # ✅ NOW SERVES YOUR FRONTEND

    path("admin/", admin.site.urls),
    path("api/fellowship/", include("fellowship.urls")),
    path("api/blog/", include("blog.urls")),
    path("api/resources/", include("resources.urls")),

    path("api/auth/register/", RegisterView.as_view(), name="register"),
    path("api/auth/login/", LoginView.as_view(), name="login"),
    path("api/auth/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
]


# ✅ Serve media files in development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
