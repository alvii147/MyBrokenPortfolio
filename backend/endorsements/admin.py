from django.contrib import admin
from .models import Endorsement, EndorsementRequest

@admin.action(description='Approve endorsement requests')
def approve_request(modeladmin, request, queryset):
    for endorsement_request in queryset:
        endorsement = Endorsement(
            email=endorsement_request.email,
            first_name=endorsement_request.first_name,
            last_name=endorsement_request.last_name,
            role=endorsement_request.role,
            relationship=endorsement_request.relationship,
            message=endorsement_request.message,
            polarity=endorsement_request.polarity,
            subjectivity=endorsement_request.subjectivity,
        )
        endorsement.save()

        endorsement_request.delete()

class EndorsementAdmin(admin.ModelAdmin):
    list_display = (
        'email',
        'first_name',
        'last_name',
        'role',
        'relationship',
        'message',
        'polarity',
        'subjectivity',
    )

admin.site.register(Endorsement, EndorsementAdmin)

class EndorsementRequestAdmin(admin.ModelAdmin):
    list_display = (
        'email',
        'first_name',
        'last_name',
        'role',
        'relationship',
        'message',
        'polarity',
        'subjectivity',
        'remote_addr',
        'requested_at',
    )
    actions = [approve_request]

admin.site.register(EndorsementRequest, EndorsementRequestAdmin)