# Generated by Django 4.0.6 on 2022-08-08 19:30

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_alter_profile_uid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='uid',
            field=models.IntegerField(default=uuid.UUID('f2b17d19-92f4-4ab0-b84d-b12a8d91616f')),
        ),
    ]
