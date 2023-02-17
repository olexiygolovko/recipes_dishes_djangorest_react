from rest_framework import generics
from django.shortcuts import render
from .serialisers import RecipesSerializer

from .models import Recipes



class RecipesAPIView(generics.ListAPIView):
    queryset = Recipes.objects.all()
    serializer_class = RecipesSerializer
