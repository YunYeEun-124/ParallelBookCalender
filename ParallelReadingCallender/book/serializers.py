from rest_framework import serializers
from .models import Book

class BookSerializer(serializers.ModelSerializer):
    email = serializers.ReadOnlyField(source='user.email')  # user 필드를 읽기 전용으로 설정합니다.
    class Meta:
        model = Book  # Ensure this points to your Book model
        fields = '__all__'  # Serialize all fields of the Book model

