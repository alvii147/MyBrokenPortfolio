from rest_framework import serializers
from .models import Endorsement

class EndorsementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Endorsement
        fields = (
            'id',
            'first_name',
            'last_name',
            'role',
            'relationship',
            'message',
            'polarity',
            'subjectivity',
        )
