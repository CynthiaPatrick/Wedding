// Smooth scrolling for anchor links
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

// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });
    
    // Highlight active language
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.language-switcher a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
});

// Add lemon emoji cursor trail (optional fun feature)
let lemonTrail = false;

function createLemon(x, y) {
    if (!lemonTrail) return;
    
    const lemon = document.createElement('div');
    lemon.innerHTML = '🍋';
    lemon.style.position = 'fixed';
    lemon.style.left = x + 'px';
    lemon.style.top = y + 'px';
    lemon.style.fontSize = '20px';
    lemon.style.pointerEvents = 'none';
    lemon.style.zIndex = '9999';
    lemon.style.transition = 'all 1s ease-out';
    lemon.style.opacity = '1';
    
    document.body.appendChild(lemon);
    
    setTimeout(() => {
        lemon.style.opacity = '0';
        lemon.style.transform = 'translateY(50px) rotate(180deg)';
    }, 50);
    
    setTimeout(() => {
        lemon.remove();
    }, 1000);
}

// Enable lemon trail on special key combination (Ctrl + L)
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 'l') {
        lemonTrail = !lemonTrail;
        console.log('Lemon trail:', lemonTrail ? 'enabled' : 'disabled');
    }
});

document.addEventListener('mousemove', function(e) {
    if (Math.random() < 0.05) {
        createLemon(e.clientX, e.clientY);
    }
});
