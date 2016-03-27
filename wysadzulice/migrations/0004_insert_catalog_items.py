# -*- coding: utf-8 -*-

from __future__ import unicode_literals

import os

from django.db import migrations


def insert_catalog_items(apps, schema_editor):
    CatalogItem = apps.get_model('wysadzulice', 'CatalogItem')
    directory = os.path.join(os.path.dirname(__file__), '..', 'assets',
                             'assets', 'catalog')
    for item in os.listdir(directory):
        CatalogItem(
            image='/static/wysadzulice/assets/main/catalog/{}'.format(item)
            ).save()


class Migration(migrations.Migration):

    dependencies = [
        ('wysadzulice', '0003_auto_20160327_1941'),
    ]

    operations = [
        migrations.RunPython(insert_catalog_items)
    ]
