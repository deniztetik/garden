from django.shortcuts import render

# Create your views here.
from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse, Http404
from django.shortcuts import get_object_or_404, render

# from .models import Question

# Create your views here.
def index(request):
    # context = {'latest_question_list' : latest_question_list}
    return render(request, 'home/index.html', {})
