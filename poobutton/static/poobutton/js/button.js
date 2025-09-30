// Poo Button Game Logic
(function() {
    'use strict';

    const MAX_PRESSES = 5;
    let pressCount = 0;

    // Warning messages for each press
    const warnings = [
        "OOPS!", // Press 1 (fart)
        "UH OHH...\nDON'T DO IT AGAIN!",
        "WE'RE WARNING YOU...\nSTOP PRESSING!",
        "SERIOUSLY?\nLAST CHANCE!",
        "OH NO..." // Press 5 (triggers video)
    ];

    // DOM Elements
    const button = document.getElementById('arcade-button');
    const warningText = document.getElementById('warning-text');
    const video = document.getElementById('finale-video');

    // Audio elements
    const audioElements = [];
    for (let i = 0; i < MAX_PRESSES; i++) {
        audioElements.push(document.getElementById(`audio-${i}`));
    }

    // Button Press Handler
    button.addEventListener('click', handleButtonPress);
    button.addEventListener('touchstart', handleButtonPress, { passive: true });

    function handleButtonPress(e) {
        e.preventDefault();

        // Visual button press effect
        button.classList.remove('button-up');
        button.classList.add('button-down');

        setTimeout(() => {
            button.classList.remove('button-down');
            button.classList.add('button-up');
        }, 150);

        // Increment press count via AJAX
        fetch(PRESS_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': CSRF_TOKEN
            },
            credentials: 'same-origin'
        })
        .then(response => response.json())
        .then(data => {
            pressCount = data.press_count;
            handlePress(pressCount);
        })
        .catch(error => {
            console.error('Error incrementing press:', error);
            // Fallback to client-side increment
            pressCount++;
            handlePress(pressCount);
        });
    }

    function handlePress(count) {
        const index = count - 1;

        // Play audio for this press
        if (audioElements[index]) {
            audioElements[index].currentTime = 0;
            audioElements[index].play().catch(err => {
                console.log('Audio play failed:', err);
            });
        }

        // Show warning text
        if (warnings[index]) {
            warningText.textContent = warnings[index];
            warningText.classList.add('show');

            setTimeout(() => {
                warningText.classList.remove('show');
            }, 2500);
        }

        // Check if final press
        if (count >= MAX_PRESSES) {
            triggerFinaleVideo();
        }
    }

    function triggerFinaleVideo() {
        // Disable button
        button.style.pointerEvents = 'none';

        // Small delay before video starts
        setTimeout(() => {
            // Hide game screen, show video
            video.classList.add('playing');

            // Attempt fullscreen (may be blocked on some browsers)
            if (video.requestFullscreen) {
                video.requestFullscreen().catch(err => {
                    console.log('Fullscreen failed:', err);
                });
            } else if (video.webkitRequestFullscreen) {
                video.webkitRequestFullscreen();
            } else if (video.mozRequestFullScreen) {
                video.mozRequestFullScreen();
            } else if (video.msRequestFullscreen) {
                video.msRequestFullscreen();
            }

            // Play video
            video.play().catch(err => {
                console.log('Video play failed:', err);
            });
        }, 1000);
    }

    // Video end handler - reset session and reload
    video.addEventListener('ended', () => {
        // Exit fullscreen if active
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else if (document.webkitFullscreenElement) {
            document.webkitExitFullscreen();
        } else if (document.mozFullScreenElement) {
            document.mozCancelFullScreen();
        } else if (document.msFullscreenElement) {
            document.msExitFullscreen();
        }

        // Navigate to reset endpoint (resets session and reloads)
        window.location.href = RESET_URL;
    });

    // Also reload if user exits fullscreen manually
    document.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement && video.classList.contains('playing')) {
            setTimeout(() => {
                window.location.href = RESET_URL;
            }, 500);
        }
    });

    // Preload audio on page load to avoid delays
    window.addEventListener('load', () => {
        audioElements.forEach(audio => {
            if (audio) {
                audio.load();
            }
        });
        video.load();
    });

})();
