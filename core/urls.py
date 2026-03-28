from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse

from fellowship.views import RegisterView, LoginView
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

from django.conf import settings
from django.conf.urls.static import static


# ✅ Homepage (fixes 404)
def home(request):
    return JsonResponse({
        "status": "success",
        "message": "Akili Bridge API is live 🚀",
        "endpoints": {
            "admin": "/admin/",
            "auth_register": "/api/auth/register/",
            "auth_login": "/api/auth/login/",
            "auth_refresh": "/api/auth/refresh/",
            "blog": "/api/blog/",
            "resources": "/api/resources/",
            "fellowship": "/api/fellowship/"
        }
    })


urlpatterns = [
    path("", home),  # 👈 homepage route

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
