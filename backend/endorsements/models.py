from django.db import models

# endorsement request model
class EndorsementRequest(models.Model):
    # endorser email
    email = models.EmailField(max_length=254, unique=True)
    # endorser first name
    first_name = models.CharField(max_length=50, blank=True)
    # endorse last name
    last_name = models.CharField(max_length=50, blank=True)
    # endorser role
    role = models.CharField(max_length=75, blank=True)
    # endorser relationship
    relationship = models.CharField(max_length=75, blank=True)
    # endorser message
    message = models.TextField(blank=True)
    # endorser message polarity
    polarity = models.FloatField()
    # endorser message subjectivity
    subjectivity = models.FloatField()
    # endorser IP address
    remote_addr = models.CharField(max_length=50, null=True, blank=True)
    # date and time of request
    requested_at = models.DateTimeField(auto_now_add=True, null=True)

    # string representation
    def __str__(self):
        return f'{self.first_name} {self.last_name}'

# endorsement model
class Endorsement(models.Model):
    # endorser email
    email = models.EmailField(max_length=254, unique=True)
    # endorser first name
    first_name = models.CharField(max_length=50)
    # endorse last name
    last_name = models.CharField(max_length=50)
    # endorser role
    role = models.CharField(max_length=75)
    # endorser relationship
    relationship = models.CharField(max_length=75)
    # endorser message
    message = models.TextField()
    # endorser message polarity
    polarity = models.FloatField()
    # endorser message subjectivity
    subjectivity = models.FloatField()

    # string representation
    def __str__(self):
        return f'{self.first_name} {self.last_name}'