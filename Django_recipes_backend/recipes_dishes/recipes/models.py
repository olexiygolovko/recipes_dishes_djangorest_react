from django.db import models


class Recipes(models.Model):

    CATEGORY_CHOICES = (
        ('Soups', 'Soups'),
        ('Snacks', 'Snacks'),
        ('Salads', 'Salads'),
        ('Desserts', 'Desserts'),
        ('Second courses', 'Second courses')
    )
    categoryType = models.CharField(max_length=20, choices=CATEGORY_CHOICES, verbose_name='Category')
    name = models.CharField(max_length=256, verbose_name='Name')
    recipe = models.TextField(verbose_name='Recipe')

    class Meta:
        verbose_name_plural = 'Recipes'
        verbose_name = 'Recipes'

    def __str__(self):
        return f'{self.name} | {self.categoryType}'