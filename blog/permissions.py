from rest_framework import permissions

class IsApplicant(permissions.BasePermission):
    """
    Allow only applicants to create fellowship applications.
    """
    def has_permission(self, request, view):
        return request.user.is_authenticated and getattr(request.user, "is_applicant", False)


class IsAdmin(permissions.BasePermission):
    """
    Allow only admins to create/manage blogs and resources.
    """
    def has_permission(self, request, view):
        return request.user.is_authenticated and getattr(request.user, "is_admin", False)