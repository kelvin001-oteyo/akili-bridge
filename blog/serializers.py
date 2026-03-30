from rest_framework import serializers
from .models import BlogPost

class BlogPostSerializer(serializers.ModelSerializer):
    author = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = BlogPost
        fields = ["id", "title", "excerpt", "body", "image", "category", "author", "created_at"]
