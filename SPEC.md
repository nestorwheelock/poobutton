# POOBUTTON - Project Specification (SPEC Phase)

**Project:** PooButton Django Plugin
**Version:** 0.1.0
**Date:** 2025-09-30
**Status:** AWAITING CLIENT APPROVAL GATE #1

---

## 🎯 Project Charter

### What
A portable Django plugin that adds a retro arcade-style interactive "Don't Press the PooButton" easter egg to any Django site. Users press a button, hear funny sounds with escalating warnings, then get surprised with a full-screen video (someone pooping).

### Why
Fun gimmick easter egg for multiple sites. Adds humor/personality. Portable and reusable across projects as a joke page.

### How
Django app (portable) with static button page, JavaScript for interactions, session tracking for press count, audio playback, and video reveal. Retro arcade "bad video game" aesthetic.

### Success Criteria
- ✅ Installable as Django app via pip or git
- ✅ Works on desktop and mobile browsers
- ✅ Button animates/depresses on click
- ✅ Plays audio on each press (fart + warnings)
- ✅ Shows text warnings on screen
- ✅ Triggers full-screen video after 5 presses
- ✅ Auto-reloads after video ends
- ✅ No external dependencies beyond Django
- ✅ Retro arcade aesthetic with CRT effects

### Risks
- **Browser autoplay policies:** Some mobile browsers block autoplay even with user interaction
  - *Mitigation:* Use button click as interaction trigger, test widely
- **Video file size:** Large MP4 in git repo can bloat history
  - *Mitigation:* Document video hosting alternatives in README, add to .gitignore
- **Full-screen API:** iOS Safari has quirks with full-screen video
  - *Mitigation:* Fall back to inline large video if full-screen fails
- **Session storage:** Users lose progress on browser close
  - *Mitigation:* Expected behavior for gimmick easter egg

---

## 📖 User Stories

### US-1: View the Button
**As a** visitor
**I want to** see a retro red arcade button on the page
**So that** I'm tempted to press it

**Acceptance Criteria:**
- Button displays centered on page
- Button has retro arcade styling (red, glowing, 3D effect)
- Page has CRT scanline effects and dark background
- Title reads "Don't Press the PooButton"

---

### US-2: Press the Button
**As a** visitor
**I want to** press the button and see it depress
**So that** I get tactile visual feedback

**Acceptance Criteria:**
- Button has CSS depression animation on click/touch
- Animation completes in ~150ms
- Works on both desktop and mobile

---

### US-3: Hear Fart Sound
**As a** visitor
**I want to** hear a fart sound when I first press the button
**So that** I'm surprised and amused

**Acceptance Criteria:**
- Audio plays immediately on first press
- No delay or lag
- Works on mobile browsers

---

### US-4: See Warning Messages
**As a** visitor
**I want to** see escalating text warnings after each press
**So that** I'm warned but still tempted to continue

**Acceptance Criteria:**
- Text displays on screen after each press
- Messages escalate: "OOPS!" → "UH OHH... DON'T DO IT AGAIN!" → "WE'RE WARNING YOU... STOP PRESSING!" → "SERIOUSLY? LAST CHANCE!" → "OH NO..."
- Text has retro arcade font and glowing red color
- Text blinks/pulses for visibility

---

### US-5: Hear Warning Sounds
**As a** visitor
**I want to** hear different warning sounds with each press
**So that** the experience escalates with each interaction

**Acceptance Criteria:**
- Each press (2-5) plays unique audio matching text warning
- Audio doesn't overlap or conflict
- Volume is consistent across all sounds

---

### US-6: Trigger Video
**As a** visitor
**I want to** the final press to show a full-screen video
**So that** I experience the "punchline" of the joke

**Acceptance Criteria:**
- After 5th press, video plays full-screen automatically
- Video is of someone pooping (user-provided)
- Video has audio
- Button disappears during video playback

---

### US-7: Auto-Reload After Video
**As a** visitor
**I want to** the page to reload after the video ends
**So that** I can press the button again or share with others

**Acceptance Criteria:**
- Video ends → page reloads automatically within 1 second
- Button resets to initial state
- Press count resets to 0

---

### US-8: Portable Installation
**As a** developer
**I want to** add this to any Django project easily
**So that** I can use it across multiple sites as a gimmick

**Acceptance Criteria:**
- Add to INSTALLED_APPS
- Include URLs in project urls.py
- Works immediately without additional configuration
- All assets (CSS/JS) included in package

---

## 🔲 Scope Boundaries

### IN SCOPE
- Django app with portable package structure
- Single button page with retro arcade styling
- Session-based press counter (5 presses total)
- Audio playback (user provides 5 audio files)
- Text warning display with escalating messages
- Full-screen video trigger after 5 presses
- Auto-reload after video ends
- Mobile and desktop browser support
- CRT scanline effects and retro aesthetic
- README with installation instructions
- Test suite for views and URLs

### OUT OF SCOPE
- Audio file generation/sourcing (user provides)
- Video hosting service integration
- Admin interface for configuration
- Multiple button themes or skins
- User accounts/authentication
- Analytics or tracking
- Customizable press count via settings (hardcoded to 5)
- Multiple videos or randomization
- Localization/internationalization
- Database models (session-only storage)

---

## 🏗️ Technical Architecture

### Django App Structure
```
poobutton/
├── poobutton/
│   ├── __init__.py
│   ├── apps.py
│   ├── views.py
│   ├── urls.py
│   ├── templates/
│   │   └── poobutton/
│   │       └── index.html
│   ├── static/
│   │   └── poobutton/
│   │       ├── css/
│   │       │   └── button.css
│   │       ├── js/
│   │       │   └── button.js
│   │       ├── audio/
│   │       │   ├── .gitkeep
│   │       │   ├── fart.mp3 (user-provided)
│   │       │   ├── warning1.mp3 (user-provided)
│   │       │   ├── warning2.mp3 (user-provided)
│   │       │   ├── warning3.mp3 (user-provided)
│   │       │   └── warning4.mp3 (user-provided)
│   │       └── video/
│   │           ├── .gitkeep
│   │           └── finale.mp4 (user-provided)
│   └── tests/
│       ├── __init__.py
│       └── test_views.py
├── setup.py
├── MANIFEST.in
├── README.md
├── LICENSE
└── .gitignore
```

### Tech Stack
- **Backend:** Django 3.2+ (views, URLs, templates, sessions)
- **Frontend:** Vanilla JavaScript (no framework dependencies)
- **Styling:** CSS3 (animations, retro arcade aesthetic)
- **Media:** HTML5 Audio/Video APIs
- **Session Management:** Django sessions middleware

### Key Components

#### 1. Views (views.py)
- `button_view()`: Renders button page, initializes session
- `increment_press()`: AJAX endpoint to increment press count
- `reset_view()`: Resets session press count

#### 2. Template (index.html)
- Arcade cabinet container
- Game screen with CRT effects
- Button element with top/shadow divs
- Warning text display area
- Hidden video element
- Audio elements (5 total)
- CSRF token for AJAX

#### 3. CSS (button.css)
- Retro arcade color scheme (purple/pink gradient background)
- CRT scanline overlay effect
- Button 3D styling with red gradient
- Button depression animation
- Warning text glow/blink effects
- Press Start 2P font (Google Fonts)
- Mobile responsive breakpoints

#### 4. JavaScript (button.js)
- Button click/touch handler
- AJAX call to increment press count
- Audio playback sequencing
- Warning text display timing
- Video trigger after 5 presses
- Fullscreen API (with fallbacks)
- Auto-reload on video end

### Data Flow
1. User visits `/poobutton/`
2. Django view initializes session: `press_count = 0`
3. User clicks button
4. JavaScript sends POST to `/poobutton/press/`
5. Django increments `press_count`, returns JSON
6. JavaScript plays audio[count], shows warning[count]
7. On 5th press: hide button, show full-screen video
8. Video ends: reload page, reset session

### Session Schema
```python
request.session['press_count'] = 0  # Integer, 0-5+
```

---

## 🧪 Acceptance Test Plan

### Pre-Testing Setup
1. Install poobutton in test Django project
2. Add 5 audio files to `static/poobutton/audio/`
3. Add 1 video file to `static/poobutton/video/`
4. Run Django dev server
5. Open `/poobutton/` in browsers

### Test Cases

#### TC-1: Installation Test
**Steps:**
1. Clone repository
2. Run `pip install -e .`
3. Add `'poobutton'` to INSTALLED_APPS
4. Add `path('poobutton/', include('poobutton.urls'))` to urls.py
5. Run `python manage.py collectstatic`
6. Visit `/poobutton/`

**Expected:** Page loads with button visible

---

#### TC-2: Button Display Test
**Steps:**
1. Visit `/poobutton/` on desktop
2. Observe button styling
3. Visit `/poobutton/` on mobile
4. Observe responsive layout

**Expected:**
- Red arcade button centered on dark background
- CRT scanlines visible
- Title "Don't Press the PooButton" visible
- Button is large and tempting
- Mobile: scaled appropriately

---

#### TC-3: Button Press Animation
**Steps:**
1. Click button on desktop
2. Touch button on mobile
3. Observe visual feedback

**Expected:**
- Button depresses visually (~8px downward)
- Animation completes in ~150ms
- Button returns to up position
- Shadow effect adjusts

---

#### TC-4: Audio Playback Test
**Steps:**
1. Press button 1st time
2. Wait 3 seconds
3. Press button 2nd time
4. Wait 3 seconds
5. Press button 3rd time
6. Repeat through 5th press

**Expected:**
- Press 1: Fart sound plays
- Press 2-5: Different warning sounds play
- No audio overlap
- Audio plays on mobile browsers

---

#### TC-5: Warning Text Display
**Steps:**
1. Press button 5 times
2. Observe text after each press

**Expected:**
- Press 1: "OOPS!" appears, glows red, fades after 2.5s
- Press 2: "UH OHH... DON'T DO IT AGAIN!"
- Press 3: "WE'RE WARNING YOU... STOP PRESSING!"
- Press 4: "SERIOUSLY? LAST CHANCE!"
- Press 5: "OH NO..." then video triggers

---

#### TC-6: Video Trigger Test
**Steps:**
1. Press button 5 times rapidly
2. Observe transition to video

**Expected:**
- After 5th press, 1 second delay
- Button disappears
- Video appears full-screen
- Video plays automatically with audio
- Fullscreen activated (or large inline on iOS)

---

#### TC-7: Auto-Reload Test
**Steps:**
1. Trigger video
2. Let video play to completion
3. Observe page behavior

**Expected:**
- Video ends
- Page reloads within 1 second
- Button resets to initial state
- Press count = 0

---

#### TC-8: Session Persistence Test
**Steps:**
1. Visit `/poobutton/`
2. Press button 3 times
3. Navigate away to another page
4. Use browser back button
5. Press button again

**Expected:**
- Press count persists in session
- Continues from press 4 (not reset)

---

#### TC-9: Session Reset Test
**Steps:**
1. Press button 3 times
2. Open new tab
3. Visit `/poobutton/` in new tab
4. Press button

**Expected:**
- New tab has independent session
- Starts at press 1, not press 4

---

#### TC-10: Cross-Browser Test
**Browsers:**
- Chrome (Desktop & Mobile)
- Firefox (Desktop & Mobile)
- Safari (Desktop & iOS)
- Edge (Desktop)

**Expected:**
- All features work consistently
- Minor fullscreen differences acceptable on iOS

---

#### TC-11: Django Tests
**Steps:**
```bash
python manage.py test poobutton
```

**Expected:**
- All unit tests pass
- Views return correct responses
- Session increments correctly
- URLs resolve properly

---

## ⚠️ Risks & Assumptions

### Risks
1. **Audio autoplay restrictions**
   - Risk: Mobile browsers block autoplay
   - Mitigation: User click triggers playback
   - Fallback: Display "Enable sound" message if blocked

2. **Video file size**
   - Risk: Large files bloat git repo
   - Mitigation: Add *.mp4 to .gitignore, document external hosting
   - Fallback: User provides link to externally hosted video

3. **Fullscreen API limitations**
   - Risk: iOS Safari doesn't support fullscreen API
   - Mitigation: Fall back to inline large video
   - Acceptable limitation documented in README

4. **Session cookie restrictions**
   - Risk: Users with cookies disabled lose progress
   - Mitigation: Document session requirement
   - Acceptable limitation for joke app

### Assumptions
- User has Django 3.2+ installed
- User will provide 5 audio files (MP3 format)
- User will provide 1 video file (MP4 or WebM)
- User's Django project has session middleware enabled
- Press count hardcoded to 5 (no configuration needed)
- Video content is appropriate for user's audience
- Video file size < 50MB for reasonable git storage

---

## 📦 Deliverables

1. **Django App Package**
   - Installable via `pip install -e .`
   - All code in `poobutton/` directory
   - Proper `setup.py` and `MANIFEST.in`

2. **Documentation**
   - README.md with installation instructions
   - SPEC.md (this document)
   - Inline code comments
   - Docstrings for all functions

3. **Frontend Assets**
   - HTML template with arcade cabinet structure
   - CSS with retro styling and animations
   - JavaScript with button logic and video trigger

4. **Test Suite**
   - Unit tests for views
   - URL resolution tests
   - Session management tests

5. **Configuration Files**
   - .gitignore (excludes media files)
   - LICENSE (GPL-3.0)
   - setup.py (package metadata)

6. **GitHub Repository**
   - All code pushed to github.com/nestorwheelock/poobutton
   - Clean commit history
   - Proper .gitignore to avoid media files

---

## 📋 CLIENT APPROVAL CHECKLIST

**SPEC Phase Complete - Ready for Review:**

- ✅ Project Charter documented (What, Why, How, Success Criteria, Risks)
- ✅ User Stories written with acceptance criteria (8 stories)
- ✅ Scope boundaries documented (IN and OUT of scope)
- ✅ Risks & assumptions identified with mitigations
- ✅ Technical architecture planned (file structure, tech stack, data flow)
- ✅ Acceptance Test Plan prepared (11 test cases)
- ✅ Deliverables list complete
- ✅ GitHub repository created (github.com/nestorwheelock/poobutton)

---

## 🚦 CLIENT APPROVAL FORM

```
═══════════════════════════════════════
CLIENT APPROVAL - SPEC PHASE
═══════════════════════════════════════
Project: PooButton v0.1.0
Date: 2025-09-30

I have reviewed and approve:
□ Project Charter
□ User Stories & Acceptance Criteria
□ Scope Boundaries (IN/OUT)
□ Risks & Assumptions
□ Technical Approach
□ Deliverables
□ Acceptance Test Plan

I understand:
□ What IS included in this version
□ What is NOT included (future versions)
□ Known limitations (iOS fullscreen, session cookies)
□ Changes after approval will delay delivery

I authorize:
□ Development to proceed to BUILD phase
□ Estimated effort: 8-12 hours
□ Target delivery: TBD

CLIENT SIGNATURE: ________________
DATE: ___________________________

DEVELOPER SIGNATURE: Claude Code
DATE: 2025-09-30
═══════════════════════════════════════
```

**ACTION REQUIRED:** Client must approve this SPEC before BUILD phase can begin.

**Approval Method:** Create GitHub issue titled "CLIENT APPROVAL GATE #1 - SPEC" and client comments "approved" to authorize BUILD phase.
