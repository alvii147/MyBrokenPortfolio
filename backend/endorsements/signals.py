from django.db.models.signals import post_save
from django.dispatch import receiver
from utils.email import send_email

from .models import EndorsementRequest

# signal to notify through email on new endorsement request
@receiver(post_save, sender=EndorsementRequest)
def send_endorsement_email(sender, instance, created, **kwargs):
    # if newly created
    if created:
        # full name of requester
        requester = f'{instance.first_name} {instance.last_name}'
        # email subject
        subject = f'New endorsement from {requester}'
        # convert new lines in message to line breaks
        message = '<br />'.join(instance.message.split('\n'))

        # email body
        body = '<p>'
        body += 'A new endorsement request was submitted from '
        body += '<strong>'
        body += f'{requester} ({instance.email}).'
        body += '</strong>'
        body += '</p>'

        body += '<p>'
        body += 'Endorsement message:'
        body += '<br /><br />'
        body += '<i>'
        body += f'{message}'
        body += '</i>'
        body += '</p>'

        send_email(subject, body)
