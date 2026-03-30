from django.contrib import admin
from django.utils.html import format_html
from .models import User, FellowshipApplication, DashboardContent, UndergraduateApplication, NewsletterSubscription

@admin.register(DashboardContent)
class DashboardContentAdmin(admin.ModelAdmin):
    list_display = ("title", "author", "created_at")
    search_fields = ("title", "body")
    list_filter = ("created_at", "author")


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ("username", "email", "is_applicant", "is_admin", "is_staff", "is_superuser")
    search_fields = ("username", "email")


@admin.register(FellowshipApplication)
class FellowshipApplicationAdmin(admin.ModelAdmin):
    list_display = ("full_name", "email", "country", "discipline", "status", "created_at", "cv_link", "transcript_link", "sop_link")
    list_filter = ("status", "country", "discipline")
    search_fields = ("full_name", "email")

    def cv_link(self, obj):
        if obj.cv:
            return format_html('<a href="{}" target="_blank">CV</a>', obj.cv.url)
        return "-"
    cv_link.short_description = "CV"

    def transcript_link(self, obj):
        if obj.transcript:
            return format_html('<a href="{}" target="_blank">Transcript</a>', obj.transcript.url)
        return "-"
    transcript_link.short_description = "Transcript"

    def sop_link(self, obj):
        if obj.sop:
            return format_html('<a href="{}" target="_blank">SOP</a>', obj.sop.url)
        return "-"
    sop_link.short_description = "SOP"


# ✅ Undergraduate Application admin
@admin.register(UndergraduateApplication)
class UndergraduateApplicationAdmin(admin.ModelAdmin):
    list_display = (
        "full_name",
        "email",
        "country",
        "university",
        "degree_program",
        "year_of_study",
        "gpa",
        "status",
        "submitted_at",
        "cv_link",
        "transcript_link",
        "statement_link",
    )
    list_filter = ("status", "country", "university")
    search_fields = ("full_name", "email", "university")

    def cv_link(self, obj):
        if obj.cv:
            return format_html('<a href="{}" target="_blank">CV</a>', obj.cv.url)
        return "-"
    cv_link.short_description = "CV"

    def transcript_link(self, obj):
        if obj.transcript:
            return format_html('<a href="{}" target="_blank">Transcript</a>', obj.transcript.url)
        return "-"
    transcript_link.short_description = "Transcript"

    def statement_link(self, obj):
        if obj.statement:
            return format_html('<a href="{}" target="_blank">Statement</a>', obj.statement.url)
        return "-"
    statement_link.short_description = "Statement"


@admin.register(NewsletterSubscription)
class NewsletterSubscriptionAdmin(admin.ModelAdmin):
    list_display = ("email", "first_name", "last_name", "role", "source", "created_at")
    search_fields = ("email", "first_name", "last_name", "source")
    list_filter = ("role", "source", "created_at")
