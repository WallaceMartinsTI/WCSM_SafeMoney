from django import views
from rest_framework import viewsets
from crud.models import Costs
from crud.serializers import CostsSerializer


class CostsViewSet(viewsets.ModelViewSet):
  serializer_class = CostsSerializer

  def get_queryset(self):
      return Costs.objects.all()
