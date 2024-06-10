from django.shortcuts import render,redirect

# Create your views here.
def home(request):
    return render(request,'admin.html')

from django.shortcuts import render
from django.http import JsonResponse


def get_response(request):
    user_message = request.GET.get('message')
    response = generate_response(user_message)
    return JsonResponse({'message': response})

def generate_response(user_message):
    # Simple bot responses for demonstration
    responses = {
        "hello": "Hi there! How can I help you?",
        "how are you": "I'm just a bot, but I'm doing great! How about you?",
        "what is your name": "I'm a simple chatbot created for this example.",
        "bye": "Goodbye! Have a great day!"
    }
    message = user_message.lower()
    return responses.get(message, "I'm not sure how to respond to that.")
