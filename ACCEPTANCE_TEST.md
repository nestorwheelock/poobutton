# 🎪 ACCEPTANCE TEST - Client Validation

**Project:** PooButton v0.1.0
**Phase:** Acceptance Testing
**Date:** 2025-09-30
**Status:** Ready for Client Testing

---

## Purpose

This document guides the client through hands-on testing to validate that the PooButton app meets all requirements before shipping to production.

---

## 🚦 CLIENT APPROVAL GATE #2

**You must complete this acceptance test and formally approve before the app ships.**

---

## Pre-Test Setup

### 1. Media Files Required

The app needs these files to work (you must provide them):

```
poobutton/static/poobutton/audio/fart.mp3       - Initial fart sound
poobutton/static/poobutton/audio/warning1.mp3   - "Oops" warning
poobutton/static/poobutton/audio/warning2.mp3   - "Uh ohh" warning
poobutton/static/poobutton/audio/warning3.mp3   - "We're warning you" warning
poobutton/static/poobutton/audio/warning4.mp3   - "Last chance" warning
poobutton/static/poobutton/video/finale.mp4     - The poop video (or .webm)
```

**Audio Recommendations:**
- MP3 format for best browser compatibility
- Keep files small (< 1MB each)
- Funny/silly voice recordings work great
- Test that audio plays on your phone/browser first

**Video Recommendations:**
- MP4 (H.264) for best compatibility
- Resolution: 1280x720 or 1920x1080
- Keep under 50MB if possible
- Test on mobile and desktop

### 2. Start Demo Server

```bash
cd demo_project
python manage.py runserver
```

### 3. Open in Browser

Visit: **http://127.0.0.1:8000/poobutton/**

---

## 🧪 Acceptance Test Cases

### Test Case 1: Button Display
**Expected:**
- Dark purple/pink gradient background
- CRT scanline effect visible
- Retro arcade cabinet frame
- Big red glowing button centered
- Title: "POO BUTTON" in yellow
- Subtitle: "PRESS AT YOUR OWN RISK" in red
- Pixelated "Press Start 2P" font

**Result:** [ ] PASS  [ ] FAIL

**Issues:**
___________________________________

---

### Test Case 2: Button Interaction
**Expected:**
- Hovering over button makes it slightly larger
- Clicking button makes it visually depress
- Button "pops back" after ~150ms
- Works on mobile touch

**Result:** [ ] PASS  [ ] FAIL

**Issues:**
___________________________________

---

### Test Case 3: Press Sequence
**Test each press individually:**

**Press 1:**
- Sound: Fart
- Text: "OOPS!" in red, glowing
- Text fades after 2.5 seconds
- **Result:** [ ] PASS  [ ] FAIL

**Press 2:**
- Sound: Warning 1
- Text: "UH OHH...\nDON'T DO IT AGAIN!"
- Text fades after 2.5 seconds
- **Result:** [ ] PASS  [ ] FAIL

**Press 3:**
- Sound: Warning 2
- Text: "WE'RE WARNING YOU...\nSTOP PRESSING!"
- Text fades after 2.5 seconds
- **Result:** [ ] PASS  [ ] FAIL

**Press 4:**
- Sound: Warning 3
- Text: "SERIOUSLY?\nLAST CHANCE!"
- Text fades after 2.5 seconds
- **Result:** [ ] PASS  [ ] FAIL

**Press 5:**
- Sound: Warning 4
- Text: "OH NO..." briefly
- Then: 1 second pause
- Then: Video goes full-screen and plays
- **Result:** [ ] PASS  [ ] FAIL

---

### Test Case 4: Video Playback
**Expected:**
- Video fills entire screen
- Video plays automatically with audio
- Button disappears during video
- Video is the "someone pooping" clip you provided

**Result:** [ ] PASS  [ ] FAIL

**Issues:**
___________________________________

---

### Test Case 5: Auto-Reload
**Expected:**
- When video ends, screen exits fullscreen
- Page automatically reloads within 1 second
- Button resets to initial state
- Press count resets to 0 (start over)

**Result:** [ ] PASS  [ ] FAIL

**Issues:**
___________________________________

---

### Test Case 6: Session Persistence
**Test:**
1. Press button 3 times
2. Navigate away to http://127.0.0.1:8000/admin/
3. Use browser back button
4. Press button again

**Expected:**
- Should continue from press 4 (not restart)
- Session tracks your progress

**Result:** [ ] PASS  [ ] FAIL

**Issues:**
___________________________________

---

### Test Case 7: Mobile Testing
**Test on smartphone/tablet:**
- Button touch works
- Audio plays on mobile
- Video plays (may not fullscreen on iOS - that's OK)
- Text is readable
- Layout adjusts for small screen

**Result:** [ ] PASS  [ ] FAIL

**Issues:**
___________________________________

---

### Test Case 8: Multiple Browsers
**Test on at least 2:**
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari

**Expected:** Works consistently

**Result:** [ ] PASS  [ ] FAIL

**Issues:**
___________________________________

---

## 📊 Overall Quality Assessment

Rate each aspect (1-5, 5 is best):

| Aspect | Rating | Comments |
|--------|--------|----------|
| Visual Design (retro arcade look) | __ / 5 | |
| Button Feel (tactile feedback) | __ / 5 | |
| Audio Quality | __ / 5 | |
| Video Quality | __ / 5 | |
| Humor/Fun Factor | __ / 5 | |
| Mobile Experience | __ / 5 | |
| Overall Polish | __ / 5 | |

---

## 🐛 Issues Found

### Critical (Must fix before ship):
1. ___________________________________
2. ___________________________________

### Major (Should fix before ship):
1. ___________________________________
2. ___________________________________

### Minor (Can fix later):
1. ___________________________________
2. ___________________________________

### Enhancements (Future versions):
1. ___________________________________
2. ___________________________________

---

## ✅ Acceptance Decision

**Select ONE:**

### [ ] APPROVED FOR PRODUCTION
I have tested all functionality and approve shipping as-is. The app meets all requirements and is ready for production use.

**Signature:** ________________
**Date:** ___________

---

### [ ] APPROVED WITH KNOWN ISSUES
I approve shipping with the following documented limitations (check all that apply):

- [ ] iOS fullscreen doesn't work (expected - will use inline video)
- [ ] Other: _________________________________

**Signature:** ________________
**Date:** ___________

---

### [ ] CONDITIONAL APPROVAL - Fix Critical Issues
Fix the critical issues listed above, then ship without re-testing.

**Critical issues to fix:**
1. ___________________________________
2. ___________________________________

**Signature:** ________________
**Date:** ___________

---

### [ ] FIX AND RE-TEST
Fix the issues listed above and schedule a new acceptance test.

**Issues to fix:**
1. ___________________________________
2. ___________________________________
3. ___________________________________

**Next test date:** ___________

---

### [ ] REJECTED - Major Rework Needed
The implementation does not meet requirements. Return to BUILD or SPEC phase.

**Reasons:**
1. ___________________________________
2. ___________________________________

**Action:** Revise approach and resubmit

---

## 📝 Client Notes

Use this space for any additional feedback:

___________________________________
___________________________________
___________________________________
___________________________________

---

## Next Steps

**If APPROVED:**
1. Developer commits code to GitHub
2. Developer tags release v0.1.0
3. Developer updates documentation
4. App is ready for production use

**If CHANGES NEEDED:**
1. Developer fixes issues
2. Developer re-runs tests
3. If FIX AND RE-TEST: Schedule new acceptance test
4. If CONDITIONAL: Ship after fixes

---

**Prepared by:** Claude Code
**Approved by:** _______________ (Client)
**Date:** ___________
