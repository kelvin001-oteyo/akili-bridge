from django.contrib.auth.models import AbstractUser
from django.db import models

# Extend User for applicants/admins
class User(AbstractUser):
    is_applicant = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)

# Fellowship Applications
class FellowshipApplication(models.Model):
    applicant = models.ForeignKey(User, on_delete=models.CASCADE, related_name="applications")
    full_name = models.CharField(max_length=200)
    email = models.EmailField()
    country = models.CharField(max_length=100)
    discipline = models.CharField(max_length=100)
    status = models.CharField(
        max_length=50,
        choices=[
            ("submitted", "Submitted"),
            ("under_review", "Under Review"),
            ("shortlisted", "Shortlisted"),
            ("accepted", "Accepted"),
            ("rejected", "Rejected"),
        ],
        default="submitted"
    )
    cv = models.FileField(upload_to="applications/cv/")
    transcript = models.FileField(upload_to="applications/transcripts/")
    sop = models.FileField(upload_to="applications/sop/")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.full_name} - {self.status}"

# Blog / News
class BlogPost(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    author = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

# Resource Hub
class Resource(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    file = models.FileField(upload_to="resources/")
    category = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title