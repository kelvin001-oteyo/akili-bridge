from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import FellowshipApplication, DashboardContent, UndergraduateApplication, Notification, NewsletterSubscription

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "email", "is_applicant", "is_admin"]

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ["id", "username", "email", "password"]

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data["username"],
            email=validated_data["email"],
            password=validated_data["password"],
            is_applicant=True
        )
        return user

class FellowshipApplicationSerializer(serializers.ModelSerializer):
    applicant = UserSerializer(read_only=True)

    class Meta:
        model = FellowshipApplication
        fields = [
            "id",
            "applicant",
            "full_name",
            "email",
            "country",
            "discipline",
            "status",   # ✅ status exposed
            "cv",
            "transcript",
            "sop",
            "phone",
            "university",
            "degree",
            "year",
            "gpa",
            "availability",
            "timezone",
            "lab1",
            "lab2",
            "portfolio",
            "sampleWork",
            "created_at",
        ]

class DashboardContentSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)

    class Meta:
        model = DashboardContent
        fields = [
            "id",
            "title",
            "body",
            "image",
            "created_at",
            "updated_at",
            "author",
        ]

class UndergraduateApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = UndergraduateApplication
        fields = [
            "id",
            "full_name",
            "email",
            "phone_number",
            "country",
            "university",
            "degree_program",
            "year_of_study",
            "gpa",
            "availability",
            "time_zone",
            "target_lab_first",
            "target_lab_second",
            "portfolio_link",
            "cv",
            "transcript",
            "statement",
            "sample_work",
            "status",       # ✅ status exposed
            "submitted_at",
        ]

# ✅ New Notifications Serializer
class NotificationSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Notification
        fields = ["id", "user", "message", "created_at", "is_read"]


class NewsletterSubscriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsletterSubscription
        fields = [
            "id",
            "first_name",
            "last_name",
            "email",
            "role",
            "source",
            "created_at",
            "updated_at",
        ]
