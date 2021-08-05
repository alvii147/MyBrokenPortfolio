from django.utils import timezone
from django.conf import settings
from rest_framework.decorators import api_view
from rest_framework.response import Response

import html
import datetime

from .models import ContactMessageRequest

@api_view(['POST'])
def CreateContactMessageRequestAPIView(request):
    # get email from request data
    email = html.escape(request.POST['email'])
    # get subject from request data
    subject = html.escape(request.POST['subject'])
    # get body from request data
    body = html.escape(request.POST['body'])
    # get remote IP address from request data
    remote_addr = request.META.get('REMOTE_ADDR')

    # get datetime object 24 hours from now
    day_from_now = timezone.now() - datetime.timedelta(days=1)

    # if remote IP address is valid
    if remote_addr:
        # get number of requests in the last 24 hours
        past_requests_today = ContactMessageRequest.objects.filter(
            remote_addr=remote_addr,
            requested_at__gte=day_from_now,
        ).count()

        # if too many requests in the last 24 hours
        if past_requests_today >= settings.CONTACT_MESSAGE_REQUESTS_PER_IP_PER_DAY:
            # return with status 'too many'
            return Response({'status': 'toomany'})

    # get number of past contact messages under same email in the last 24 hours
    past_contact_messages_today = ContactMessageRequest.objects.filter(
        email=email,
        requested_at__gte=day_from_now,
    ).count()

    # if too many contact messages in the last 24 hours
    if past_contact_messages_today >= settings.CONTACT_MESSAGE_REQUESTS_PER_EMAIL_PER_DAY:
        # return with status 'too many'
        return Response({'status': 'toomany'})

    # create contact message request
    contact_msg = ContactMessageRequest(
        email=email,
        subject=subject,
        body=body,
        remote_addr=remote_addr,
    )
    # save contact message request
    contact_msg.save()

    # return with status 'success'
    return Response({'status': 'success'})