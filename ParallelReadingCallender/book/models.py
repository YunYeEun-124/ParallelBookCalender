from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()
# Create your models here.
class Book(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    author = models.CharField(max_length=50)
    title = models.CharField(max_length=50)
    total_page = models.IntegerField(default=0)
    now_page = models.IntegerField(default=0)
    cover = models.ImageField(blank=True,upload_to='book_covers/')
    done = models.BooleanField(default = False) #완독은 트루, 아니면 false
    created_date = models.DateField(auto_now_add=True)
    updated_date = models.DateField(auto_now=True)

    def __str__(self):
        return self.title
    
class Comments(models.Model):
    book = models.ForeignKey(Book,related_name='comments',on_delete=models.CASCADE)
    comment = models.TextField()
    date = models.DateField(auto_now_add=True)
    def __str__(self):
        return self.comment