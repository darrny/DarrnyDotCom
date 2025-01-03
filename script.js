// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar transparency effect on scroll
const nav = document.querySelector('.glass-nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        nav.style.opacity = '1';
    }
    
    if (currentScroll > lastScroll && currentScroll > 50) {
        nav.style.opacity = '0.8';
    } else {
        nav.style.opacity = '1';
    }
    
    lastScroll = currentScroll;
});

// Initialize typing effect when document loads
document.addEventListener('DOMContentLoaded', () => {
    const typingText = "Hi, I'm Darren!";
    const typingElement = document.querySelector('.typing-text');
    let i = 0;

    function typeWriter() {
        if (i < typingText.length) {
            // Add a zero-width space after the cursor to maintain consistent width
            typingElement.innerHTML = typingText.substring(0, i + 1) + '<span class="cursor">|</span>';
            i++;
            setTimeout(typeWriter, 100);
        } else {
            // Remove the cursor when typing is complete
            typingElement.textContent = typingText;
            
            // Start blinking cursor with a separate span
            setInterval(() => {
                const cursor = typingElement.querySelector('.cursor');
                if (cursor) {
                    cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
                } else {
                    typingElement.innerHTML = typingText + '<span class="cursor">|</span>';
                }
            }, 500);
        }
    }

    // Start typing effect
    typeWriter();
});

// Intersection Observer for fade-in animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Typing effect for hero text
const heroText = "I dance and I code.";
const leadParagraph = document.querySelector('.lead');
let i = 0;

function typeWriter() {
    if (i < heroText.length) {
        leadParagraph.textContent = heroText.substring(0, i + 1);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing effect when page loads
window.addEventListener('load', () => {
    typeWriter();
});

// Scroll indicator
document.querySelector('.scroll-indicator').addEventListener('click', () => {
    const aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
});