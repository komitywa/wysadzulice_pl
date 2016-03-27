# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wysadzulice', '0002_auto_20160213_1645'),
    ]

    operations = [
        migrations.CreateModel(
            name='CatalogItem',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, serialize=False, verbose_name='ID')),
                ('image', models.CharField(max_length=250)),
            ],
        ),
        migrations.AddField(
            model_name='campaign',
            name='items',
            field=models.ManyToManyField(to='wysadzulice.CatalogItem'),
        ),
    ]
