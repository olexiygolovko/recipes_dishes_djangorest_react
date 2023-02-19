from django.db import models


class Recipes(models.Model):

    CATEGORY_CHOICES = (
        ('Супы', 'Супы'),
        ('Закуски', 'Закуски'),
        ('Салаты', 'Салаты'),
        ('Дессерты', 'Дессерты'),
        ('Вторые блюда', 'Вторые блюда')
    )
    categoryType = models.CharField(max_length=20, choices=CATEGORY_CHOICES, verbose_name='Категория')
    name = models.CharField(max_length=256, verbose_name='Наименование')
    recipe = models.TextField(verbose_name='Рецепт')

    class Meta:
        verbose_name_plural = 'Рецепты'
        verbose_name = 'Рецепты'

    def __str__(self):
        return f'{self.name} | {self.categoryType}'