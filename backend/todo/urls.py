
from django.urls import path
from . import views
urlpatterns = [
    path('todo/',views.TodoView.as_view() ),
    path('todo/<int:pk>/',views.TodoDetailView.as_view() ),
]
