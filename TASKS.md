# PooButton - BUILD Phase Task Breakdown

**Status:** Not started (awaiting CLIENT APPROVAL GATE #1)

This document breaks down the BUILD phase into discrete, testable tasks following TDD workflow.

---

## BUILD Phase Tasks

### 1. Django App Foundation
- [ ] **Task 1.1:** Write test for Django app config loading
- [ ] **Task 1.2:** Create poobutton app with apps.py
- [ ] **Task 1.3:** Verify app can be added to INSTALLED_APPS

### 2. URL Routing
- [ ] **Task 2.1:** Write test for URL patterns resolve correctly
- [ ] **Task 2.2:** Create urls.py with app_name and patterns
- [ ] **Task 2.3:** Verify URL reverse lookups work

### 3. Session Management
- [ ] **Task 3.1:** Write test for session initialization (press_count = 0)
- [ ] **Task 3.2:** Create button_view() that initializes session
- [ ] **Task 3.3:** Write test for session persistence across requests
- [ ] **Task 3.4:** Verify session counter maintains state

### 4. Button Page View
- [ ] **Task 4.1:** Write test for button_view renders correct template
- [ ] **Task 4.2:** Create views.py with button_view() function
- [ ] **Task 4.3:** Write test for context includes press_count
- [ ] **Task 4.4:** Verify view passes press_count to template

### 5. Press Increment API
- [ ] **Task 5.1:** Write test for increment_press POST endpoint
- [ ] **Task 5.2:** Create increment_press() view
- [ ] **Task 5.3:** Write test for increment returns JSON with count
- [ ] **Task 5.4:** Write test for GET request returns 400 error
- [ ] **Task 5.5:** Verify press count increments correctly

### 6. Reset Functionality
- [ ] **Task 6.1:** Write test for reset_view resets session to 0
- [ ] **Task 6.2:** Create reset_view() function
- [ ] **Task 6.3:** Verify reset works after multiple presses

### 7. HTML Template
- [ ] **Task 7.1:** Create index.html template structure
- [ ] **Task 7.2:** Add arcade cabinet HTML markup
- [ ] **Task 7.3:** Add button element with proper IDs
- [ ] **Task 7.4:** Add warning text display area
- [ ] **Task 7.5:** Add hidden video element
- [ ] **Task 7.6:** Add 5 audio elements with correct IDs
- [ ] **Task 7.7:** Add CSRF token and URL template tags
- [ ] **Task 7.8:** Verify template renders without errors

### 8. CSS Styling
- [ ] **Task 8.1:** Create button.css with reset and base styles
- [ ] **Task 8.2:** Add retro arcade background gradient
- [ ] **Task 8.3:** Add CRT scanline overlay effect
- [ ] **Task 8.4:** Style arcade cabinet container
- [ ] **Task 8.5:** Style game screen with CRT glow
- [ ] **Task 8.6:** Style button with 3D red gradient
- [ ] **Task 8.7:** Add button depression animation (.button-down)
- [ ] **Task 8.8:** Style warning text with glow and blink
- [ ] **Task 8.9:** Add mobile responsive breakpoints
- [ ] **Task 8.10:** Verify styles load and apply correctly

### 9. JavaScript Button Logic
- [ ] **Task 9.1:** Create button.js with IIFE wrapper
- [ ] **Task 9.2:** Add button click/touch event listeners
- [ ] **Task 9.3:** Implement button depression animation
- [ ] **Task 9.4:** Add AJAX call to increment endpoint
- [ ] **Task 9.5:** Implement press count tracking
- [ ] **Task 9.6:** Add error handling for AJAX failures
- [ ] **Task 9.7:** Verify button press increments count

### 10. Audio Playback
- [ ] **Task 10.1:** Implement audio element selection by index
- [ ] **Task 10.2:** Add audio.play() with error handling
- [ ] **Task 10.3:** Reset currentTime to 0 before playing
- [ ] **Task 10.4:** Preload audio on page load
- [ ] **Task 10.5:** Verify each press plays correct audio

### 11. Warning Text Display
- [ ] **Task 11.1:** Define warnings array with 5 messages
- [ ] **Task 11.2:** Update warning text on each press
- [ ] **Task 11.3:** Add/remove 'show' class for visibility
- [ ] **Task 11.4:** Add 2.5 second fade-out timeout
- [ ] **Task 11.5:** Verify text displays correctly for each press

### 12. Video Trigger
- [ ] **Task 12.1:** Detect when press_count >= MAX_PRESSES
- [ ] **Task 12.2:** Disable button after max presses
- [ ] **Task 12.3:** Add 1 second delay before video
- [ ] **Task 12.4:** Show video with .playing class
- [ ] **Task 12.5:** Attempt fullscreen with fallbacks
- [ ] **Task 12.6:** Call video.play() with error handling
- [ ] **Task 12.7:** Verify video triggers on 5th press

### 13. Auto-Reload After Video
- [ ] **Task 13.1:** Add 'ended' event listener to video
- [ ] **Task 13.2:** Exit fullscreen if active
- [ ] **Task 13.3:** Call window.location.reload()
- [ ] **Task 13.4:** Add fullscreenchange listener for manual exit
- [ ] **Task 13.5:** Verify page reloads after video ends

### 14. Package Configuration
- [ ] **Task 14.1:** Create setup.py with package metadata
- [ ] **Task 14.2:** Create MANIFEST.in for static files
- [ ] **Task 14.3:** Add package_data to setup.py
- [ ] **Task 14.4:** Create .gitkeep files for audio/video dirs
- [ ] **Task 14.5:** Test pip install -e . works

### 15. Documentation
- [ ] **Task 15.1:** Create README.md with installation instructions
- [ ] **Task 15.2:** Add usage examples
- [ ] **Task 15.3:** Document audio file requirements
- [ ] **Task 15.4:** Document video file requirements
- [ ] **Task 15.5:** Add troubleshooting section
- [ ] **Task 15.6:** Add browser compatibility notes

### 16. Test Suite
- [ ] **Task 16.1:** Create tests/__init__.py
- [ ] **Task 16.2:** Create test_views.py
- [ ] **Task 16.3:** Write test_button_view_loads
- [ ] **Task 16.4:** Write test_button_view_initializes_session
- [ ] **Task 16.5:** Write test_increment_press_increments_count
- [ ] **Task 16.6:** Write test_increment_press_requires_post
- [ ] **Task 16.7:** Write test_reset_view_resets_count
- [ ] **Task 16.8:** Write test_urls_resolve
- [ ] **Task 16.9:** Run all tests and verify 100% pass

---

## Task Execution Order (TDD)

For each task:
1. ✍️ Write failing test first
2. 🔴 Run test, verify it fails
3. ✅ Write minimal code to pass test
4. 🟢 Run test, verify it passes
5. ♻️ Refactor if needed, keep tests green
6. ✔️ Mark task complete in todo list

---

## Estimated Effort

- **Setup & Foundation:** 1-2 hours (Tasks 1-6)
- **Frontend (HTML/CSS):** 2-3 hours (Tasks 7-8)
- **JavaScript Logic:** 3-4 hours (Tasks 9-13)
- **Package & Docs:** 1-2 hours (Tasks 14-15)
- **Testing:** 1-2 hours (Task 16)

**Total:** 8-13 hours

---

## Dependencies

All tasks depend on CLIENT APPROVAL GATE #1 being completed.

Task dependencies within BUILD phase:
- Tasks 1-6 must complete before 7-13 (backend before frontend)
- Task 16 (tests) runs throughout (TDD)
- Task 14-15 can run in parallel at end

---

**Status:** Ready for CLIENT APPROVAL. Tasks will be added to todo list once BUILD phase begins.
