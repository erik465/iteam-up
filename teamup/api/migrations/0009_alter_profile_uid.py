# Generated by Django 4.0.6 on 2022-08-08 19:30

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_alter_profile_uid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='uid',
            field=models.IntegerField(default=uuid.UUID('0e1be941-3f2e-4a2a-b505-d4a7d8201320')),
        ),
    ]