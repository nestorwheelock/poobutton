// Poo Button Game Logic
(function() {
    'use strict';

    const MAX_PRESSES = 5;
    let pressCount = 0;
    let player;

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
    const videoContainer = document.getElementById('finale-video');
    const iframe = document.getElementById('youtube-player');

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
            videoContainer.classList.add('playing');

            // Attempt fullscreen (may be blocked on some browsers)
            if (videoContainer.requestFullscreen) {
                videoContainer.requestFullscreen().catch(err => {
                    console.log('Fullscreen failed:', err);
                });
            } else if (videoContainer.webkitRequestFullscreen) {
                videoContainer.webkitRequestFullscreen();
            } else if (videoContainer.mozRequestFullScreen) {
                videoContainer.mozRequestFullScreen();
            } else if (videoContainer.msRequestFullscreen) {
                videoContainer.msRequestFullscreen();
            }

            // Play YouTube video by updating iframe src to include autoplay
            iframe.src = iframe.src.replace('autoplay=0', 'autoplay=1');

            // Schedule automatic reset after video duration
            scheduleReset();
        }, 1000);
    }

    // YouTube video ends after ~duration - set timeout to reset
    // Since we can't easily detect YouTube video end without API,
    // we'll reset after a reasonable duration or when user exits fullscreen
    let videoResetTimeout;

    function scheduleReset() {
        // Reset after 30 seconds (adjust based on your video length)
        videoResetTimeout = setTimeout(() => {
            window.location.href = RESET_URL;
        }, 30000);
    }

    // Also reload if user exits fullscreen manually
    document.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement && videoContainer.classList.contains('playing')) {
            if (videoResetTimeout) {
                clearTimeout(videoResetTimeout);
            }
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
    });

})();
