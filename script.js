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

// Function to check if the device is mobile
const isMobile = window.matchMedia('(max-width: 768px)').matches;

// Desktop: Play video on hover
if (!isMobile) {
    profilePicContainer.addEventListener('mouseenter', () => {
        profileVideo.play(); // Start playing the video
    });

    profilePicContainer.addEventListener('mouseleave', () => {
        profileVideo.pause(); // Pause the video when hover ends
        profileVideo.currentTime = 0; // Optional: Reset to the start
    });
}

// Mobile: Handle click event on profile picture and video
if (isMobile) {
    // Handle click event on the profile picture
    profilePic.addEventListener("click", () => {
        profilePic.style.opacity = 0; // Fade out the profile picture
        profileVideo.style.opacity = 1; // Fade in the video
        profileVideo.play(); // Start playing the video
    });

    // Handle click event on the video
    profileVideo.addEventListener("click", () => {
        profilePic.style.opacity = 1; // Fade in the profile picture
        profileVideo.style.opacity = 0; // Fade out the video
        profileVideo.pause(); // Pause the video
        profileVideo.currentTime = 0; // Reset the video to the beginning
    });
}