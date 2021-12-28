from django.db.models.signals import post_save
from django.dispatch import receiver
from utils.email import send_email

from .models import ContactMessageRequest

# signal to notify through email on new contact request
@receiver(post_save, sender=ContactMessageRequest)
def send_contact_message_email(sender, instance, created, **kwargs):
    # if newly created
    if created:
        # email subject
        subject = f'New Porfolio Contact Message: {instance.subject}'

        # convert new lines in message to line breaks
        message = '<br />'.join(instance.body.split('\n'))

        # email body
        body = '<p>'
        body += 'A new contact message request was submitted from '
        body += '<strong>'
        body += f'{instance.email}:'
        body += '</strong>'
        body += '</p>'

        body += '<p>'
        body += '<br /><br />'
        body += f'{message}'
        body += '</p>'

        # send email
        send_email(subject, body)
