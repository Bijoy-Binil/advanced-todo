from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import AllowAny
from django.contrib.auth.models import User
from .serializers import UserSerialzier
# Create your views here.
class RegisterView(generics.ListCreateAPIView):
    queryset=User.objects.all()
    serializer_class=UserSerialzier
    permission_classes=[AllowAny]
