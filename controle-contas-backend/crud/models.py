from django.db import models

class Costs(models.Model):
  name = models.CharField(max_length=34, verbose_name="Nome")
  description = models.CharField(max_length=64, verbose_name="Descrição")
  price = models.DecimalField(verbose_name="Valor", max_digits=9, decimal_places=2)
  created = models.DateTimeField(auto_now_add=True)
  updated = models.DateTimeField(auto_now=True)

  def __str__(self):
    return self.name
