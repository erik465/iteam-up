# Generated by Django 4.0.6 on 2022-08-08 19:31

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0015_alter_profile_uid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='uid',
            field=models.IntegerField(default=uuid.UUID('8b6231f4-b2a1-405f-88a2-29d43b63d232')),
        ),
    ]