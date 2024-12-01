/* Toggle mobile menu */
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.querySelector('.scroll-indicator').addEventListener('click', function() {
    const skillsSection = document.getElementById('skills');
    skillsSection.scrollIntoView({ behavior: 'smooth' });
});

// Get the video element
const profileVideo = document.querySelector('.profile-video');
const profilePicContainer = document.querySelector('.profile-pic-container');

// Play video on hover
profilePicContainer.addEventListener('mouseenter', () => {
    profileVideo.play();
});

// Pause video when hover ends
profilePicContainer.addEventListener('mouseleave', () => {
    profileVideo.pause();
    profileVideo.currentTime = 0; // Optional: Reset to the start
});