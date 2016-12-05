######################
##### EVENTS API #####
######################

import json

from django.http import HttpResponse, Http404
from django.core import serializers
from django.views.decorators.csrf import csrf_exempt

from .models import Event

@csrf_exempt
def index(request):
    # app.get('/', function(req, res) {
      # get data from db
      # res.send(data)
    #});
    #  app.post('/', function(req, res) {
    #
    # });
    if request.method == "GET":
        data = serializers.serialize("json", Event.objects.all())
        return HttpResponse(data)
    elif request.method == "POST":
        # these two lines convert JSON into a Python dict
        # so we can further process the data
        body_unicode = request.body.decode('utf-8')
        body = json.loads(r'%s' % body_unicode)
        ###
        print(body)
        # create new event, convert request body dict into model properties,
        # and then save in db
        event = Event() # var event = new Event();
        event.dictToClass(body)
        event.save()
        createdEvent = Event.objects.filter(id=Event.objects.all().count() - 1)
        return HttpResponse(serializers.serialize("json", createdEvent))

@csrf_exempt
def detail(request, event_id):
    if request.method == "GET":
        event = Event.objects.filter(pk=event_id)
        # if event wasn't found
        if event.count() == 0:
            raise Http404("Question does not exist")
        else:
            return HttpResponse(serializers.serialize("json", event))
    elif request.method == "PUT":
        body_unicode = request.body.decode('utf-8')
        body = json.loads(r'%s' % body_unicode)
        print(body)
        id = body.pop('pk')
        event = Event.objects.filter(id=id)
        event.update(**body)
        return HttpResponse(serializers.serialize("json", event))
