from django.urls import path
from . import views

urlpatterns = [
    path('request/', views.CreateContactMessageRequestAPIView, name='create-contact-message-request'),
]
