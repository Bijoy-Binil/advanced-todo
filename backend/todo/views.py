from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import AllowAny,IsAuthenticated
from django.contrib.auth.models import User
from django.http import JsonResponse
from .models import Todo
from .serializers import TodoSerializer,TodoDetailSerializer
# Create your views here.
# ✅ View for list + create
class TodoView(generics.ListCreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Todo.objects.filter(user=self.request.user)


# ✅ View for detail + update + delete
class TodoDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoDetailSerializer
    permission_classes = [AllowAny]
    lookup_field = "pk"


