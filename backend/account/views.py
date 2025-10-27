from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import AllowAny
from django.contrib.auth.models import User
import json
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.contrib.auth import authenticate
from .serializers import UserSerialzier
# Create your views here.
class RegisterView(generics.ListCreateAPIView):
    queryset=User.objects.all()
    serializer_class=UserSerialzier
    permission_classes=[AllowAny]

@csrf_exempt
def user_login(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            username = data.get("username")
            password = data.get("password")
        except:
            return JsonResponse({"bool": False, "msg": "Invalid JSON"})

        user = authenticate(username=username, password=password)
        if user is not None:
            return JsonResponse({"user_login": True, "user": user.username})
        return JsonResponse({"bool": False, "msg": "Invalid credentials"})

    return JsonResponse({"msg": "Only POST method allowed"})

