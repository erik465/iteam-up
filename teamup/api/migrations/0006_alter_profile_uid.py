# Generated by Django 4.0.6 on 2022-08-08 19:30

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_alter_profile_uid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='uid',
            field=models.IntegerField(default=uuid.UUID('06a59d1c-caee-4339-81f6-ab673291d4c2')),
        ),
    ]
