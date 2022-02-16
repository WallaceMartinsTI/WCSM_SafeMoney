from rest_framework import serializers
from crud.models import Costs


class CostsSerializer(serializers.ModelSerializer):
  class Meta:
    model = Costs
    fields = ['id', 'name', 'description', 'price', 'created', 'updated']
