from django.apps import AppConfig


class EndorsementsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'endorsements'

    def ready(self):
        import endorsements.signals
