# Generated by Django 3.2.5 on 2021-08-05 15:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contact_messages', '0002_delete_contactmessage'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contactmessagerequest',
            name='email',
            field=models.EmailField(max_length=254),
        ),
    ]
