# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wysadzulice', '0004_insert_catalog_items'),
    ]

    operations = [
        migrations.AddField(
            model_name='catalogitem',
            name='catalog_id',
            field=models.CharField(max_length=250, default=''),
            preserve_default=False,
        ),
    ]
