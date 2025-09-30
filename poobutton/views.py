from django.shortcuts import render
from django.http import JsonResponse


def button_view(request):
    """
    Display the poo button page.
    Tracks press count in session.
    """
    # Initialize press count in session if not exists
    if 'press_count' not in request.session:
        request.session['press_count'] = 0

    context = {
        'press_count': request.session['press_count'],
    }

    return render(request, 'poobutton/index.html', context)


def reset_view(request):
    """
    Reset the press count (called after video ends).
    """
    request.session['press_count'] = 0
    request.session.modified = True
    return button_view(request)


def increment_press(request):
    """
    AJAX endpoint to increment press count.
    Returns current count.
    """
    if request.method == 'POST':
        request.session['press_count'] = request.session.get('press_count', 0) + 1
        request.session.modified = True

        return JsonResponse({
            'press_count': request.session['press_count'],
            'max_presses': 5
        })

    return JsonResponse({'error': 'POST required'}, status=400)
