# Generated by Django 4.0.6 on 2022-08-08 19:30

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0013_alter_profile_uid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='uid',
            field=models.IntegerField(default=uuid.UUID('179badb5-e980-4821-a8bd-5b2589857b0d')),
        ),
    ]
