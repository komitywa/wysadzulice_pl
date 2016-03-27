# -*- coding: utf-8 -*-

from __future__ import unicode_literals

from os import path

from django.db import migrations


def insert_catalog_ids(apps, schema_editor):
    CatalogItem = apps.get_model('wysadzulice', 'CatalogItem')
    for item in CatalogItem.objects.all():
        item.catalog_id = path.splitext(path.basename(item.image))[0]
        item.save()


class Migration(migrations.Migration):

    dependencies = [
        ('wysadzulice', '0005_catalogitem_catalog_id'),
    ]

    operations = [
        migrations.RunPython(insert_catalog_ids)
    ]
