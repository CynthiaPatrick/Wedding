// Smooth scrolling and sticky navigation
document.addEventListener('DOMContentLoaded', function() {
    
    // Get all navigation items
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('section[id]');
    
    // Smooth scroll to sections
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Update active navigation item on scroll
    function updateActiveNav() {
        let currentSection = '';
        const scrollPosition = window.scrollY + 200; // Offset for better UX
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-section') === currentSection) {
                item.classList.add('active');
            }
        });
    }
    
    // Listen to scroll events
    window.addEventListener('scroll', updateActiveNav);
    
    // Initial call
    updateActiveNav();
    
    // Highlight active language
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.language-switcher a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
    
    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroContent = document.querySelector('.hero-content');
        const heroOverlay = document.querySelector('.hero-overlay');
        
        if (heroContent) {
            heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
            heroContent.style.opacity = 1 - (scrolled / 700);
        }
        
        if (heroOverlay) {
            heroOverlay.style.opacity = 0.7 + (scrolled / 1000);
        }
    });
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all content sections and items
    const animatedElements = document.querySelectorAll('.content-section, .schedule-item, .info-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        observer.observe(el);
    });
    
    // Stagger animation for schedule items
    const scheduleItems = document.querySelectorAll('.schedule-item');
    scheduleItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Scroll indicator hide on scroll
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                scrollIndicator.style.opacity = '0';
            } else {
                scrollIndicator.style.opacity = '1';
            }
        });
    }
    
    // Subtle gold particle effect on mouse move (very subtle)
    let lastParticleTime = 0;
    document.addEventListener('mousemove', function(e) {
        const now = Date.now();
        if (now - lastParticleTime > 200) { // Very throttled
            if (Math.random() < 0.1) { // Only 10% chance
                createGoldParticle(e.clientX, e.clientY);
            }
            lastParticleTime = now;
        }
    });
});

// Create subtle gold particle
function createGoldParticle(x, y) {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.width = '3px';
    particle.style.height = '3px';
    particle.style.borderRadius = '50%';
    particle.style.background = 'radial-gradient(circle, rgba(212, 175, 55, 0.6), rgba(255, 179, 71, 0.3))';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '9999';
    particle.style.transition = 'all 1.5s ease-out';
    particle.style.opacity = '1';
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.style.opacity = '0';
        particle.style.transform = 'translateY(40px) scale(0)';
    }, 50);
    
    setTimeout(() => {
        particle.remove();
    }, 1500);
}

// Add hover effect to schedule items
document.querySelectorAll('.schedule-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.animation = 'pulse 0.5s ease-in-out';
    });
    
    item.addEventListener('animationend', function() {
        this.style.animation = '';
    });
});
