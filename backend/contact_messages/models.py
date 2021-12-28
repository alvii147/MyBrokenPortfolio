from django.db import models

# contact message request model
class ContactMessageRequest(models.Model):
    email = models.EmailField(max_length=254)
    subject = models.CharField(max_length=78, blank=True)
    body = models.TextField(blank=True)
    remote_addr = models.CharField(max_length=50, null=True, blank=True)
    requested_at = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return f'{self.email}: {self.subject}'
