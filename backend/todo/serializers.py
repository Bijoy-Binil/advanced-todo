from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.http import JsonResponse
from .models import Todo
# Create your models here.

# ✅ Serializer for list + create
class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ["id", "tasks","user"]
        read_only_fields = ["user"]  # prevent manual posting of user
    def create(self, validated_data):
        # attach the user from request context
        request = self.context.get("request")
        if request and hasattr(request, "user"):
            validated_data["user"] = request.user
        return super().create(validated_data)
    
    
# ✅ Serializer for detail + update + delete
class TodoDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ["id", "tasks","user"]