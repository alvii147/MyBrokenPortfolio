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
    # return all objects
    queryset = Endorsement.objects.all()
    # set serializer class
    serializer_class = EndorsementSerializer

# create new endorsement request
@api_view(['POST'])
def CreateEndorsementRequestAPIView(request):
    # get email from request data
    email = html.escape(request.POST['email'])
    # get first name from request data
    first_name = html.escape(request.POST['first_name'])
    # get last name from request data
    last_name = html.escape(request.POST['last_name'])
    # get role from request data
    role = html.escape(request.POST['role'])
    # get relationship from request data
    relationship = html.escape(request.POST['relationship'])
    # get message from request data
    message = html.escape(request.POST['message'])
    # get remote IP address from request data
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

    # perform analysis of entire message
    message_analysis = TextBlob(message)
    # get polarity of message
    polarity = message_analysis.sentiment.polarity
    # get subjectivity of message
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

    # create endorsement request
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
    # save endorsement request
    endorsement_request.save()

    # return with status 'success'
    return Response({'status': 'success'})