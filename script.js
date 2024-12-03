/* Toggle mobile menu */
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.querySelector('.scroll-indicator').addEventListener('click', function() {
    const aboutSection = document.getElementById('about-me');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
});

// Get the video element and profile picture container
const profilePic = document.querySelector('.profile-pic');
const profileVideo = document.querySelector('.profile-video');
const profilePicContainer = document.querySelector('.profile-pic-container');

// Function to handle the mobile auto-fading cycle
function startMobileCycle() {
    // Wait 7 seconds, then fade out the profile picture and play the video
    setTimeout(() => {
        profilePicContainer.classList.add('clicked'); // Fade in the video
        profileVideo.play(); // Start playing the video

        // When the video ends, fade back to the profile picture and restart the cycle
        profileVideo.addEventListener('ended', () => {
            profilePicContainer.classList.remove('clicked'); // Fade in the profile picture
            profileVideo.currentTime = 0; // Reset video to the start
            startMobileCycle(); // Restart the cycle
        }, { once: true }); // Ensure this event only triggers once per cycle
    }, 7000); // Wait for 7 seconds before switching to the video
}

// Function to initialize desktop hover functionality
function initDesktopHover() {
    profilePicContainer.addEventListener('mouseenter', () => {
        profileVideo.play(); // Start playing the video
    });

    profilePicContainer.addEventListener('mouseleave', () => {
        profileVideo.pause(); // Pause the video when hover ends
        profileVideo.currentTime = 0; // Optional: Reset to the start
    });
}

// Check if the device is mobile or desktop
const isMobile = window.matchMedia('(max-width: 768px)').matches;

// Apply the appropriate functionality
if (isMobile) {
    // Mobile: Start the auto-fading cycle
} else {
    // Desktop: Enable hover functionality
    document.addEventListener('DOMContentLoaded', initDesktopHover);
}