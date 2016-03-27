# -*- coding: utf-8 -*-

from django.db import models


class CatalogItem(models.Model):
    image = models.CharField(max_length=250)
    catalog_id = models.CharField(max_length=250)


class Campaign(models.Model):
    lat = models.FloatField()
    lng = models.FloatField()
    zoom = models.FloatField()
    heading = models.FloatField()
    pitch = models.FloatField()
    items = models.ManyToManyField(CatalogItem)


class Planting(models.Model):
    campaign = models.ForeignKey(Campaign)


class PlantedObject(models.Model):
    planting = models.ForeignKey(Planting)
    object_id = models.IntegerField()
    x = models.FloatField()
    y = models.FloatField()
    scale = models.FloatField()
