# 🚽 PooButton - Don't Press the PooButton

> **Status:** 🚦 SPEC Phase Complete - Awaiting CLIENT APPROVAL GATE #1

A retro arcade-style interactive "Don't Press the PooButton" Easter egg for Django sites. Features a big red button with escalating warnings that leads to a hilarious video surprise.

---

## 📋 Project Status: SPEC Phase

This project is currently in the **SPEC (Specification) Phase**. All planning documents have been prepared and are awaiting client approval before development begins.

### Current Phase: SPEC ✅
- ✅ Project Charter completed
- ✅ User Stories defined (8 stories)
- ✅ Scope boundaries documented
- ✅ Technical architecture planned
- ✅ Acceptance Test Plan prepared
- ✅ Risks & assumptions identified

### Next Phase: BUILD 🔒
**BLOCKED:** Awaiting CLIENT APPROVAL GATE #1

No code will be written until client formally approves the SPEC documentation.

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

## 🚦 CLIENT APPROVAL GATE #1

### Action Required

**Client must review and approve SPEC.md before development begins.**

### How to Approve

1. **Review:** Read [SPEC.md](./SPEC.md) thoroughly
2. **Questions:** Open a GitHub issue with any questions or concerns
3. **Approve:** Create a GitHub issue titled "CLIENT APPROVAL GATE #1" and comment **"approved"**
4. **Or Request Changes:** Comment with specific changes needed

### What You're Approving

By approving, you authorize:
- ✅ Development to proceed to BUILD phase
- ✅ The scope as defined in SPEC.md
- ✅ Technical approach (Django + vanilla JavaScript)
- ✅ 5 button presses before video trigger
- ✅ Session-based tracking (no database)

### Known Limitations (Approved in Advance)

- iOS Safari fullscreen may not work (falls back to inline video)
- Requires session cookies enabled
- Video files excluded from git (user provides)

---

## 📂 Repository Contents

```
poobutton/
├── README.md          # This file - project overview
├── SPEC.md            # Complete specification (CLIENT REVIEW REQUIRED)
├── LICENSE            # GPL-3.0 License
├── .gitignore         # Configured for Python/Django
└── instructions       # Original project requirements
```

**Note:** No code has been written yet. This is intentional per the AI-Native Development Workflow.

---

## 🔄 Development Workflow

This project follows a strict phased development process:

1. **SPEC Phase** ✅ (Current) - Planning & requirements documentation
2. **🚦 CLIENT APPROVAL GATE #1** 🔒 (Blocked) - Client sign-off required
3. **BUILD Phase** ⏳ (Next) - Test-Driven Development implementation
4. **VALIDATION Phase** ⏳ - Internal quality assurance
5. **ACCEPTANCE TEST Phase** ⏳ - Client hands-on testing
6. **🚦 CLIENT APPROVAL GATE #2** ⏳ - Client acceptance sign-off
7. **SHIP Phase** ⏳ - Production deployment

**Current Status:** Waiting at Gate #1

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
