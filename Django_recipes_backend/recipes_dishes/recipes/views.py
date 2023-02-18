from django.forms import model_to_dict
from rest_framework import generics, viewsets
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import action

from .models import Recipes, Category
from .serialisers import RecipesSerializer, CategorySerializer


class RecipesViewsSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = RecipesSerializer

    def get_queryset(self):
        pk = self.kwargs.get('pk')

        if not pk:
            return Recipes.objects.all()

        return Recipes.objects.filter(pk=pk)

    @action(methods=['get'], detail=True)
    def category(self, request, pk=None):
        category = Category.objects.get(pk=pk)
        return Response({'category': category.name})


class CategoryViewsSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = CategorySerializer

    def get_queryset(self):
        pk = self.kwargs.get('pk')

        if not pk:
            return Category.objects.all()

        return Category.objects.filter(pk=pk)

    @action(methods=['get'], detail=True)
    def category(self, request, pk=None):
        category = Category.objects.get(pk=pk)
        return Response({'category': category.name})
