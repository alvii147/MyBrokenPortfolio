from django.utils import timezone
from django.conf import settings
from rest_framework.generics import ListAPIView
from rest_framework.decorators import api_view
from rest_framework.response import Response

import html
import datetime
from textblob import TextBlob

from .serializers import EndorsementSerializer
from .models import EndorsementRequest, Endorsement

# get list of all approved endorsements
class ListEndorsementAPIView(ListAPIView):
    queryset = Endorsement.objects.all()
    serializer_class = EndorsementSerializer

# create new endorsement request
@api_view(['POST'])
def CreateEndorsementRequestAPIView(request):
    email = html.escape(request.POST['email'])
    first_name = html.escape(request.POST['first_name'])
    last_name = html.escape(request.POST['last_name'])
    role = html.escape(request.POST['role'])
    relationship = html.escape(request.POST['relationship'])
    message = html.escape(request.POST['message'])
    remote_addr = request.META.get('REMOTE_ADDR')

    # get datetime object 24 hours from now
    day_from_now = timezone.now() - datetime.timedelta(days=1)

    # if remote IP address is valid
    if remote_addr:
        # get number of requests in the last 24 hours
        past_requests_today = EndorsementRequest.objects.filter(
            remote_addr=remote_addr,
            requested_at__gte=day_from_now,
        ).count()

        # if too many requests in the last 24 hours
        if past_requests_today >= settings.ENDORSEMENT_REQUESTS_PER_IP_PER_DAY:
            # return with status 'too many'
            return Response({'status': 'toomany'})

    # get number of past endorsements under same email
    past_endorsements = Endorsement.objects.filter(email=email).count()
    # get number of past endorsement requests under same email
    past_endorsements += EndorsementRequest.objects.filter(email=email).count()
    # if past endorsements exist
    if past_endorsements > 0:
        # return with status 'already exists'
        return Response({'status': 'alreadyexists'})

    # perform textual analysis of message
    message_analysis = TextBlob(message)
    polarity = message_analysis.sentiment.polarity
    subjectivity = message_analysis.sentiment.subjectivity

    # iterate over POS tags
    for tag in message_analysis.tags:
        # if word is an adjective
        if tag[1][:2] == 'JJ':
            # perform analysis of word
            word_analysis = TextBlob(tag[0])
            # if polarity of word is positive
            if word_analysis.sentiment.polarity > 0:
                # update word in message to include css class
                html_word = f'<span class="positive-adjective-word">{tag[0]}</span>'
                message = message.replace(tag[0], html_word)

    # create new endorsement request
    endorsement_request = EndorsementRequest(
        email=email,
        first_name=first_name,
        last_name=last_name,
        role=role,
        relationship=relationship,
        message=message,
        polarity=polarity,
        subjectivity=subjectivity,
        remote_addr=remote_addr,
    )
    endorsement_request.save()

    return Response({'status': 'success'})
