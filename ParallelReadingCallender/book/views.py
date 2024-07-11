from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
  # 추가한 권한을 가져옵니다.

from .serializers import *
from .models import *

class BookViewSet(ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user_pk = self.request.query_params.get('pk',None)
        if user_pk is not None :
          return Book.objects.filter(user_id=user_pk)
        return super().get_queryset()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)  # 현재 인증된 사용자를 user 필드에 할당합니다.

