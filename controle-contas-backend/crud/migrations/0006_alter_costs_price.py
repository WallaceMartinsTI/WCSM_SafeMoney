# Generated by Django 3.2.4 on 2022-02-11 02:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('crud', '0005_auto_20220210_2328'),
    ]

    operations = [
        migrations.AlterField(
            model_name='costs',
            name='price',
            field=models.DecimalField(decimal_places=2, max_digits=9, verbose_name='Valor'),
        ),
    ]
