# PooButton Demo Project

This is a minimal Django project to demonstrate the PooButton app in action.

## Setup

1. **Install poobutton** (already done if you're in dev):
   ```bash
   pip install -e ..
   ```

2. **Configure media**:

   **YouTube video:** The app uses an embedded YouTube video (https://youtu.be/i92cm8FrCLE). To change it, edit `../poobutton/templates/poobutton/index.html` and replace the video ID in the iframe src.

   **Audio files (REQUIRED - not included):**

   You need to provide 5 audio files for full functionality:

   ```bash
   # Add your audio files to:
   ../poobutton/static/poobutton/audio/fart.mp3
   ../poobutton/static/poobutton/audio/warning1.mp3
   ../poobutton/static/poobutton/audio/warning2.mp3
   ../poobutton/static/poobutton/audio/warning3.mp3
   ../poobutton/static/poobutton/audio/warning4.mp3
   ```

3. **Run migrations**:
   ```bash
   python manage.py migrate
   ```

4. **Start dev server**:
   ```bash
   python manage.py runserver
   ```

5. **Visit the button**:
   ```
   http://127.0.0.1:8000/poobutton/
   ```

## What to Test

Press the button 5 times and observe:

1. **Press 1**: Fart sound + "OOPS!" message
2. **Press 2**: Warning sound + "UH OHH... DON'T DO IT AGAIN!"
3. **Press 3**: Warning sound + "WE'RE WARNING YOU... STOP PRESSING!"
4. **Press 4**: Warning sound + "SERIOUSLY? LAST CHANCE!"
5. **Press 5**: Final warning + Full-screen video plays

After video ends, page should auto-reload and reset.

## Troubleshooting

**No audio?**
- Make sure you copied audio files to the correct locations
- Check browser console for 404 errors
- Audio files must be named exactly as specified

**No video?**
- Check that the YouTube video ID is correct
- Verify the video is publicly accessible
- Check browser console for iframe errors

**Button doesn't work?**
- Check browser console for JavaScript errors
- Make sure `django.contrib.sessions` is in INSTALLED_APPS
- Clear browser cache and reload

**Video doesn't go fullscreen?**
- iOS Safari doesn't support fullscreen API (this is expected)
- YouTube iframe will play inline on iOS instead
- Some browsers block autoplay - user interaction required
