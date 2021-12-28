from django.db import models

# endorsement request model
# queues of endorsements will sit here until approved
class EndorsementRequest(models.Model):
    email = models.EmailField(max_length=254, unique=True)
    first_name = models.CharField(max_length=50, blank=True)
    last_name = models.CharField(max_length=50, blank=True)
    role = models.CharField(max_length=75, blank=True)
    relationship = models.CharField(max_length=75, blank=True)
    message = models.TextField(blank=True)
    polarity = models.FloatField()
    subjectivity = models.FloatField()
    remote_addr = models.CharField(max_length=50, null=True, blank=True)
    requested_at = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return f'{self.first_name} {self.last_name}'

# endorsement model
class Endorsement(models.Model):
    email = models.EmailField(max_length=254, unique=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    role = models.CharField(max_length=75)
    relationship = models.CharField(max_length=75)
    message = models.TextField()
    polarity = models.FloatField()
    subjectivity = models.FloatField()

    def __str__(self):
        return f'{self.first_name} {self.last_name}'
