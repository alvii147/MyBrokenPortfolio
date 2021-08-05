# Generated by Django 3.2.5 on 2021-08-05 13:56

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ContactMessage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('subject', models.CharField(blank=True, max_length=78)),
                ('body', models.TextField(blank=True)),
            ],
        ),
        migrations.CreateModel(
            name='ContactMessageRequest',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('subject', models.CharField(blank=True, max_length=78)),
                ('body', models.TextField(blank=True)),
                ('remote_addr', models.CharField(blank=True, max_length=50, null=True)),
                ('requested_at', models.DateTimeField(auto_now_add=True, null=True)),
            ],
        ),
    ]