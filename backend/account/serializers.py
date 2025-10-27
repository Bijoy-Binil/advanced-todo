from rest_framework import serializers
from django.contrib.auth.models import User
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
            user = User.objects.create_user(password=password, **validated_data)
            print("user==>",user)
            return user   