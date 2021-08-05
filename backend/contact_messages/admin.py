from django.contrib import admin
from .models import ContactMessageRequest

class ContactMessageRequestAdmin(admin.ModelAdmin):
    list_display = (
        'email',
        'subject',
        'body',
        'remote_addr',
        'requested_at',
    )

admin.site.register(ContactMessageRequest, ContactMessageRequestAdmin)