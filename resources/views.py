from rest_framework import viewsets
from .models import Resource
from .serializers import ResourceSerializer
from fellowship.permissions import IsAdmin

class ResourceViewSet(viewsets.ModelViewSet):
    queryset = Resource.objects.all()
    serializer_class = ResourceSerializer
    permission_classes = [IsAdmin]