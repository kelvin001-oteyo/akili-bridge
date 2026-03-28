from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings





class DashboardContent(models.Model):
    id = models.BigAutoField(primary_key=True)
    title = models.CharField(max_length=200)
    body = models.TextField()
    image = models.ImageField(upload_to="dashboard/", blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    author = models.ForeignKey('User', on_delete=models.CASCADE)

    def __str__(self):
        return self.title


# Custom User model
class User(AbstractUser):
    id = models.BigAutoField(primary_key=True)
    is_applicant = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)

    # Override the groups and user_permissions fields to avoid reverse accessor clashes
    groups = models.ManyToManyField(
        'auth.Group',
        verbose_name='groups',
        blank=True,
        help_text='The groups this user belongs to.',
        related_name='fellowship_user_set',
        related_query_name='fellowship_user',
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        verbose_name='user permissions',
        blank=True,
        help_text='Specific permissions for this user.',
        related_name='fellowship_user_set',
        related_query_name='fellowship_user',
    )

    def __str__(self):
        return self.username


# Fellowship Application model
class FellowshipApplication(models.Model):
    id = models.BigAutoField(primary_key=True)
    applicant = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="applications",
        null=True,
        blank=True
    )

    full_name = models.CharField(max_length=255)
    email = models.EmailField()
    country = models.CharField(max_length=100)
    discipline = models.CharField(max_length=100)

    # File uploads
    cv = models.FileField(upload_to="applications/cv/")
    transcript = models.FileField(upload_to="applications/transcripts/")
    sop = models.FileField(upload_to="applications/sop/", blank=True, null=True)
    sampleWork = models.FileField(upload_to="applications/sample_work/", blank=True, null=True)

    # Extra fields to match frontend
    phone = models.CharField(max_length=20, blank=True, null=True)
    university = models.CharField(max_length=255, blank=True, null=True)
    degree = models.CharField(max_length=255, blank=True, null=True)
    year = models.CharField(max_length=50, blank=True, null=True)
    gpa = models.CharField(max_length=10, blank=True, null=True)
    availability = models.CharField(max_length=50, blank=True, null=True)
    timezone = models.CharField(max_length=50, blank=True, null=True)
    lab1 = models.CharField(max_length=255, blank=True, null=True)
    lab2 = models.CharField(max_length=255, blank=True, null=True)
    portfolio = models.URLField(blank=True, null=True)

    # Status tracking
    status = models.CharField(
        max_length=20,
        choices=[
            ("pending", "Pending"),
            ("reviewed", "Reviewed"),
            ("accepted", "Accepted"),
            ("rejected", "Rejected"),
        ],
        default="pending"
    )

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.full_name} - {self.discipline}"



# Undergraduate Application model
class UndergraduateApplication(models.Model):
    id = models.BigAutoField(primary_key=True)

    # Applicant info
    full_name = models.CharField(max_length=255)
    email = models.EmailField()
    phone_number = models.CharField(max_length=20)
    country = models.CharField(max_length=100)

    # Academic info
    university = models.CharField(max_length=255)
    degree_program = models.CharField(max_length=255)
    year_of_study = models.CharField(max_length=50)
    gpa = models.CharField(max_length=10)

    # Availability
    availability = models.CharField(max_length=100)
    time_zone = models.CharField(max_length=50)

    # Research preferences
    target_lab_first = models.CharField(max_length=100)
    target_lab_second = models.CharField(max_length=100, blank=True, null=True)
    portfolio_link = models.URLField(blank=True, null=True)

    # Required documents
    cv = models.FileField(upload_to="undergraduate/cv/")
    transcript = models.FileField(upload_to="undergraduate/transcripts/")
    statement = models.FileField(upload_to="undergraduate/statements/")
    sample_work = models.FileField(upload_to="undergraduate/samples/", blank=True, null=True)

    # Status tracking
    status = models.CharField(
        max_length=20,
        choices=[
            ("pending", "Pending"),
            ("reviewed", "Reviewed"),
            ("accepted", "Accepted"),
            ("rejected", "Rejected"),
        ],
        default="pending"
    )

    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.full_name} - {self.status}"

class Notification(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False)

    def __str__(self):
        return f"Notification for {self.user.username} - {self.message[:30]}"

