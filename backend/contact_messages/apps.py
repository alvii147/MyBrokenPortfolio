from django.apps import AppConfig


class ContactMessagesConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'contact_messages'

    def ready(self):
        import contact_messages.signals
