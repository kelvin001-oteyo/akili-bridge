from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import UndergraduateApplication

@receiver(post_save, sender=UndergraduateApplication)
def send_status_update(sender, instance, **kwargs):
    if instance.status in ["accepted", "rejected"]:
        html_content = render_to_string("emails/application_status.html", {
            "full_name": instance.full_name,
            "status": instance.status,
        })
        subject = "Application Update"
        msg = EmailMultiAlternatives(
            subject=subject,
            body="Your application status has been updated.",
            from_email="no-reply@akilibridge.com",
            to=[instance.email],
        )
        msg.attach_alternative(html_content, "text/html")
        msg.send()
