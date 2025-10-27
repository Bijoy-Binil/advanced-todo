from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.http import JsonResponse

# Create your models here.

class UserSerialzier(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=8,style={'input_type':'password'})
    confirm_password = serializers.CharField(write_only=True, min_length=8,style={'input_type':'password'})
    class Meta:
        model=User
        fields=["id","username","email","password",'confirm_password']

    def create(self,validated_data):
            password=validated_data.pop('password')
            confirm_password = validated_data.pop('confirm_password')
            email = validated_data.pop('email')
            if User.objects.filter(email=email).exists():
                 raise serializers.ValidationError({"email":"email already exist."})
            if password != confirm_password:
                raise serializers.ValidationError({"password":"Passwords do not match."})
            user = User.objects.create_user(

            password=password,
            username=validated_data['username'],
        )
            return user
    

class LoginSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=8, style={'input_type': 'password'})

    class Meta:
        model = User
        fields = ['username', 'password']

    def validate(self, attrs):
        username = attrs.get('username')
        password = attrs.get('password')

        if not username or not password:
            raise serializers.ValidationError({"detail": "Both username and password are required."})

        user = authenticate(username=username, password=password)
        if not user:
            raise serializers.ValidationError({"detail": "Invalid username or password."})

        attrs['user'] = user
        return attrs