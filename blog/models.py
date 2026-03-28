# blog/models.py
from django.db import models
from django.conf import settings

class BlogPost(models.Model):
    title = models.CharField(max_length=200)
    excerpt = models.TextField(blank=True)
    body = models.TextField()
    image = models.ImageField(upload_to="blog/", blank=True, null=True)
    category = models.CharField(max_length=100, default="Announcement")
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
