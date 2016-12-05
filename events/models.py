from django.db import models

# Create your models here.
class Event(models.Model):
    pub_date = models.DateTimeField('date created')
    event_date = models.DateTimeField()
    title = models.CharField(max_length = 200)
    location = models.CharField(max_length = 200)
    org_name = models.CharField(max_length = 200)
    org_website = models.CharField(max_length = 200)
    org_email = models.CharField(max_length = 200)
    username = models.CharField(max_length = 200)
    user_email = models.EmailField(max_length = 200)

    def __str__(self):
        return self.title

    def dictToClass(self, reqBody):
        self.pub_date = reqBody['pub_date']
        self.event_date = reqBody['event_date']
        self.title = reqBody['title']
        self.location = reqBody['location']
        self.org_name = reqBody['org_name']
        self.org_website = reqBody['org_website']
        self.username = reqBody['username']
        self.user_email = reqBody['user_email']
