from django.urls import path
from . import views

urlpatterns = [
    path('', views.ListEndorsementAPIView.as_view(), name='read-endorsements'),
    path('request/', views.CreateEndorsementRequestAPIView, name='create-endorsement-request'),
]