from django.db import models

# contact message request model
class ContactMessageRequest(models.Model):
    # contact email address
    email = models.EmailField(max_length=254)
    # contact email subject
    subject = models.CharField(max_length=78, blank=True)
    # contact email body
    body = models.TextField(blank=True)
    # contact IP address
    remote_addr = models.CharField(max_length=50, null=True, blank=True)
    # date and time of request
    requested_at = models.DateTimeField(auto_now_add=True, null=True)

    # string representation
    def __str__(self):
        return f'{self.email}: {self.subject}'