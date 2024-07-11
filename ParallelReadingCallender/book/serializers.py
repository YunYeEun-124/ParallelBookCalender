from rest_framework import serializers
from .models import Book,Comments

class CommentSerializer(serializers.ModelSerializer):
    class Meta :
        model = Comments
        fields = '__all__'

class BookSerializer(serializers.ModelSerializer):
    email = serializers.ReadOnlyField(source='user.email')    #해당 이메일사용자의 book만 직렬화한다. 
    comments = CommentSerializer(many=True,read_only = True) #직렬화를 해야 데이터들이 출력됨. 

    class Meta:
        model = Book  # Ensure this points to your Book model
        fields = ('id', 'title', 'email', 'comments', 'total_page', 'now_page', 'cover', 'done', 'created_date', 'updated_date')  
        # 

