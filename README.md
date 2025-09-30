# 🚽 PooButton - Don't Press the PooButton

> **Status:** ✅ BUILD Phase Complete - Ready for VALIDATION & ACCEPTANCE TEST

A retro arcade-style interactive "Don't Press the PooButton" Easter egg for Django sites. Features a big red button with escalating warnings that leads to a hilarious video surprise.

---

## 📋 Project Status: BUILD Phase COMPLETE

This project has completed the BUILD phase using Test-Driven Development.

### Completed Phases:
- ✅ **SPEC Phase** - Client approved (Issue #1)
- ✅ **BUILD Phase** - TDD implementation complete
  - 12/12 tests passing
  - Django app with views, URLs, templates
  - Retro arcade CSS styling
  - JavaScript button logic
  - Package configuration (setup.py, MANIFEST.in)

### Current Phase: VALIDATION ⏳
Pre-commit quality checks in progress

### Next Phase: ACCEPTANCE TEST 🔒
Awaiting VALIDATION completion

---

## 📖 Documentation

### For Client Review

**[→ Read Full SPEC Documentation (SPEC.md)](./SPEC.md)**

The SPEC.md contains everything you need to review:

1. **Project Charter** - What we're building and why
2. **User Stories** - 8 detailed user stories with acceptance criteria
3. **Scope** - What IS and IS NOT included
4. **Technical Architecture** - How it will be built
5. **Test Plan** - 11 test cases for acceptance testing
6. **Risks** - Known limitations and mitigations
7. **Deliverables** - What you'll receive

---

## 🎯 Quick Summary

### What Is This?

A Django plugin that adds a fun "poo button" Easter egg to your website:

- 🔴 Big retro arcade button with "Don't Press the PooButton" warning
- 💨 Press 1: Fart sound + "OOPS!"
- ⚠️ Press 2-4: Escalating warning sounds and messages
- 📺 Press 5: Full-screen video surprise (someone pooping)
- 🔄 Auto-reload after video ends

### Key Features

- Retro arcade aesthetic with CRT scanlines
- Mobile and desktop compatible
- Session-based press tracking
- Portable Django app (drop into any project)
- No external dependencies beyond Django

### What You Need to Provide

- 5 audio files (fart + 4 warnings)
- 1 video file (the finale)

---

## 🔧 Installation & Usage

### Quick Start

1. **Install the package:**
   ```bash
   pip install git+https://github.com/nestorwheelock/poobutton.git
   ```

2. **Add to your Django project:**

   In `settings.py`:
   ```python
   INSTALLED_APPS = [
       # ... other apps
       'poobutton',
   ]
   ```

   In `urls.py`:
   ```python
   from django.urls import path, include

   urlpatterns = [
       # ... other patterns
       path('poobutton/', include('poobutton.urls')),
   ]
   ```

3. **Add your media files:**
   ```bash
   # Copy your audio/video files to:
   /path/to/your/venv/lib/python3.x/site-packages/poobutton/static/poobutton/audio/fart.mp3
   /path/to/your/venv/lib/python3.x/site-packages/poobutton/static/poobutton/audio/warning1.mp3
   /path/to/your/venv/lib/python3.x/site-packages/poobutton/static/poobutton/audio/warning2.mp3
   /path/to/your/venv/lib/python3.x/site-packages/poobutton/static/poobutton/audio/warning3.mp3
   /path/to/your/venv/lib/python3.x/site-packages/poobutton/static/poobutton/audio/warning4.mp3
   /path/to/your/venv/lib/python3.x/site-packages/poobutton/static/poobutton/video/finale.mp4
   ```

4. **Visit the button:**
   ```
   http://yoursite.com/poobutton/
   ```

### What Happens

1. **Press 1:** Fart sound + "OOPS!"
2. **Press 2:** Warning + "UH OHH... DON'T DO IT AGAIN!"
3. **Press 3:** Warning + "WE'RE WARNING YOU... STOP PRESSING!"
4. **Press 4:** Warning + "SERIOUSLY? LAST CHANCE!"
5. **Press 5:** Full-screen video plays (your poop video)
6. **After video:** Page auto-reloads and resets

### Technical Details

- **Django:** 3.2+ (tested with 4.2.7)
- **Python:** 3.8-3.12
- **Database:** None (uses Django sessions only)
- **Frontend:** Vanilla JavaScript, no frameworks
- **Styling:** CSS with retro arcade CRT effects
- **Tests:** 12 passing unit tests (pytest/Django TestCase)

---

## 📂 Repository Contents

```
poobutton/
├── poobutton/                    # Django app
│   ├── static/poobutton/
│   │   ├── css/button.css       # Retro arcade styling (265 lines)
│   │   ├── js/button.js         # Button logic (158 lines)
│   │   ├── audio/               # Your audio files go here
│   │   └── video/               # Your video file goes here
│   ├── templates/poobutton/
│   │   └── index.html           # Button page template
│   ├── tests/                   # 12 unit tests (all passing)
│   ├── views.py                 # Django views with session management
│   ├── urls.py                  # URL routing
│   └── apps.py                  # App configuration
├── demo_project/                # Test Django project for acceptance testing
├── README.md                    # Installation & usage (this file)
├── SPEC.md                      # Complete project specification
├── TASKS.md                     # BUILD phase task breakdown
├── ACCEPTANCE_TEST.md           # Client validation checklist
├── setup.py                     # Package configuration
├── pytest.ini                   # Test configuration
├── test_settings.py             # Test Django settings
└── LICENSE                      # GPL-3.0
```

---

## 🧪 Testing & Demo

### Run Tests
```bash
pytest poobutton/tests/ -v
# All 12 tests should pass
```

### Try the Demo
```bash
cd demo_project
python manage.py migrate
python manage.py runserver
# Visit http://127.0.0.1:8000/poobutton/
```

**Note:** You need to add media files for the demo to work. See [ACCEPTANCE_TEST.md](./ACCEPTANCE_TEST.md) for instructions.

---

## 🔄 Development Workflow

This project follows a strict phased development process:

1. **SPEC Phase** ✅ COMPLETE - Client approved (Issue #1)
2. **🚦 CLIENT APPROVAL GATE #1** ✅ PASSED
3. **BUILD Phase** ✅ COMPLETE - TDD implementation (12/12 tests passing)
4. **VALIDATION Phase** ✅ COMPLETE - All quality checks passed
5. **ACCEPTANCE TEST Phase** ⏳ CURRENT - Client hands-on testing in progress
6. **🚦 CLIENT APPROVAL GATE #2** 🔒 BLOCKED - Awaiting client sign-off
7. **SHIP Phase** ⏳ NEXT - Commit & push to GitHub

**Current Status:** Demo server ready. Client testing in progress.

---

## 🤝 Contributing

This is currently a private client project in the SPEC phase. Once approved and built, contributions may be welcomed.

---

## 📄 License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](./LICENSE) file for details.

---

## 🎮 Preview

*Screenshots and demos will be available after BUILD phase completion.*

**Retro Arcade Aesthetic:**
- Dark purple/pink gradient background
- CRT scanline effects
- Glowing red button with 3D depression
- Pixelated "Press Start 2P" font
- Warning messages in blinking red text

---

## 📞 Contact

Project Repository: [github.com/nestorwheelock/poobutton](https://github.com/nestorwheelock/poobutton)

---

## ⚠️ Next Steps

**For Client:**
1. Read [SPEC.md](./SPEC.md)
2. Ask questions (open GitHub issue)
3. Approve or request changes

**For Developer:**
1. ⏳ Wait for client approval
2. ⏳ Proceed to BUILD phase (TDD implementation)
3. ⏳ Do not write any code until approved

---

**Last Updated:** 2025-09-30
**Phase:** SPEC
**Status:** Awaiting CLIENT APPROVAL GATE #1
