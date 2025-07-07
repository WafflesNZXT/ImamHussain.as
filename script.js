// Initialize Lucide icons when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
    initializeNavbar();
});

// Navigation functionality
function initializeNavbar() {
    const navbar = document.getElementById('navbar');
    
    // Handle scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const element = document.querySelector(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
    
    // Close mobile menu if open
    closeMobileMenu();
}

// Mobile menu functionality
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    
    mobileMenu.classList.toggle('show');
    
    if (mobileMenu.classList.contains('show')) {
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    } else {
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    
    mobileMenu.classList.remove('show');
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
}

// Toast notification functionality
function showToast(title, description) {
    const toast = document.getElementById('toast');
    const toastTitle = document.getElementById('toast-title');
    const toastDescription = document.getElementById('toast-description');
    
    toastTitle.textContent = title;
    toastDescription.textContent = description;
    
    toast.classList.add('show');
    
    // Auto hide after 3 seconds
    setTimeout(() => {
        hideToast();
    }, 3000);
}

function hideToast() {
    const toast = document.getElementById('toast');
    toast.classList.remove('show');
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    
    if (mobileMenu.classList.contains('show') && 
        !mobileMenu.contains(event.target) && 
        !mobileMenuBtn.contains(event.target)) {
        closeMobileMenu();
    }
});

// Close mobile menu on window resize
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        closeMobileMenu();
    }
});

// Intersection Observer for animations (optional enhancement)
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

// Add fade-in animation to sections
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section:not(.hero)');
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// Add smooth hover effects to cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.quote-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Preload images for better performance
function preloadImages() {
    const imageUrls = [
        './shrine-image.jpeg'
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Initialize preload on page load
document.addEventListener('DOMContentLoaded', preloadImages);

// Add keyboard navigation support
document.addEventListener('keydown', function(event) {
    // ESC key closes mobile menu
    if (event.key === 'Escape') {
        closeMobileMenu();
        hideToast();
    }
    
    // Enter key on buttons
    if (event.key === 'Enter' && event.target.classList.contains('nav-link')) {
        event.target.click();
    }
});

// Add focus management for accessibility
document.addEventListener('DOMContentLoaded', function() {
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const modal = document.getElementById('mobile-menu');
    
    function trapFocus(element) {
        const focusableContent = element.querySelectorAll(focusableElements);
        const firstFocusableElement = focusableContent[0];
        const lastFocusableElement = focusableContent[focusableContent.length - 1];
        
        document.addEventListener('keydown', function(e) {
            const isTabPressed = e.key === 'Tab';
            
            if (!isTabPressed) return;
            
            if (e.shiftKey) {
                if (document.activeElement === firstFocusableElement) {
                    lastFocusableElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusableElement) {
                    firstFocusableElement.focus();
                    e.preventDefault();
                }
            }
        });
    }
});

// Performance optimization: throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll handler
const throttledScrollHandler = throttle(function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}, 16); // ~60fps

window.addEventListener('scroll', throttledScrollHandler);

// Add loading state management
document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('loaded');
    
    // Add CSS for loading state
    const style = document.createElement('style');
    style.textContent = `
        body:not(.loaded) {
            overflow: hidden;
        }
        
        body:not(.loaded) .hero {
            opacity: 0;
        }
        
        body.loaded .hero {
            opacity: 1;
            transition: opacity 0.5s ease;
        }
    `;
    document.head.appendChild(style);
});

// Error handling for images
document.addEventListener('DOMContentLoaded', function() {
    const heroImage = document.querySelector('.hero-image');
    
    // Fallback gradient if image fails to load
    heroImage.addEventListener('error', function() {
        this.style.backgroundImage = 'linear-gradient(135deg, var(--muharram-charcoal) 0%, var(--muharram-gray) 50%, var(--muharram-charcoal) 100%)';
    });
});

// Add smooth transitions for better UX
document.addEventListener('DOMContentLoaded', function() {
    // Add transition to all interactive elements
    const interactiveElements = document.querySelectorAll('button, .nav-link, .btn, .social-btn');
    
    interactiveElements.forEach(element => {
        element.style.transition = 'all 0.3s ease';
    });
});

// Analytics and performance tracking (placeholder)
function trackEvent(eventName, properties = {}) {
    // This is where you would integrate with analytics services
    console.log('Event:', eventName, properties);
}

// Track important user interactions
document.addEventListener('DOMContentLoaded', function() {
    // Track section views
    const sections = document.querySelectorAll('section[id]');
    
    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                trackEvent('section_view', { section: entry.target.id });
            }
        });
    }, { threshold: 0.5 });
    
    sections.forEach(section => sectionObserver.observe(section));
    
    // Track button clicks
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('btn') || 
            event.target.classList.contains('nav-link')) {
            trackEvent('button_click', { 
                text: event.target.textContent.trim(),
                type: event.target.className 
            });
        }
    });
});

// Progressive Web App features (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('SW registered: ', registration);
            })
            .catch(function(registrationError) {
                console.log('SW registration failed: ', registrationError);
            });
    });
}