from django.conf import settings
from django.contrib import messages
from django.db.models import Q
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import Group as AuthGroup
from django.contrib.sites.models import RequestSite
from django.core import signing
from django.core.mail import send_mail
from django.core.urlresolvers import reverse, reverse_lazy
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.views.generic import TemplateView, ListView
from django.views.generic.base import View
from django.views.generic.edit import (FormView, UpdateView, CreateView,
                                       DeleteView)

from apps.accounts.mixins import UnbannedUserMixin
from .models import Project


class ProjectCreate(UnbannedUserMixin, TemplateView):
    template_name = 'editor.html'

    def get_context_data(self, **kwargs):
        context = super(ProjectEdit, self).get_context_data(**kwargs)
        context['new_project'] = True
        return context


# class ProjectView(UnbannedUserMixin, TemplateView):
#     template_name = 'template.html'

class ProjectEdit(UnbannedUserMixin, TemplateView):
    template_name = 'editor.html'

    def get_context_data(self, **kwargs):
        context = super(ProjectEdit, self).get_context_data(**kwargs)
        context['project'] = Project.objects.get(id=kwargs['pk'])
        return context