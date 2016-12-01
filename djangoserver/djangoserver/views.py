from django.http import HttpResponse, Http404
from django.shortcuts import get_object_or_404, render
from django.template import loader

def index(request):
    t = loader.get_template('djangoserver/index.html')
    return HttpResponse(t)
