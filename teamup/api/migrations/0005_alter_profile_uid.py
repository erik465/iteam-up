# Generated by Django 4.0.6 on 2022-08-08 19:30

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_profile_location_alter_profile_uid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='uid',
            field=models.IntegerField(default=uuid.UUID('c3d7b063-759f-4ae1-b20e-dcd7002f57ac')),
        ),
    ]