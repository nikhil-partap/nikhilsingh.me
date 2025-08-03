// Professional Portfolio JavaScript - Enhanced with Modern Features

document.addEventListener('DOMContentLoaded', function() {
    // Initialize loading animation
    initializePageLoader();
    
    // Initialize all features
    initializeNavigation();
    initializeThemeToggle();
    initializeAnimations();
    initializeFormHandling();
    initializeScrollEffects();
    initializePerformanceOptimizations();
});

// ===== PAGE LOADER =====
function initializePageLoader() {
    const loader = document.getElementById('pageLoader');
    
    // Hide loader after page is fully loaded
    window.addEventListener('load', function() {
        setTimeout(() => {
            loader.classList.add('hidden');
            // Remove loader from DOM after animation
            setTimeout(() => {
                loader.remove();
            }, 500);
        }, 800); // Show loader for at least 800ms for professional feel
    });
}

// ===== NAVIGATION SYSTEM =====
function initializeNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');
    const overlay = document.querySelector('.mobile-nav-overlay');
    const iconHamburger = document.querySelector('.icon-hamburger');
    const iconClose = document.querySelector('.icon-close');

    function openMenu() {
        navList.classList.add('open');
        overlay.classList.add('active');
        iconHamburger.style.display = 'none';
        iconClose.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Add animation class
        navList.style.animation = 'slideInRight 0.3s ease-out forwards';
    }

    function closeMenu() {
        navList.classList.remove('open');
        overlay.classList.remove('active');
        iconHamburger.style.display = 'block';
        iconClose.style.display = 'none';
        document.body.style.overflow = '';
        
        // Reset animation
        navList.style.animation = '';
    }

    // Event listeners
    navToggle?.addEventListener('click', function() {
        if (navList.classList.contains('open')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    overlay?.addEventListener('click', closeMenu);

    // Close menu when clicking nav links
    navList?.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            closeMenu();
            
            // Smooth scroll to section
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navList.classList.contains('open')) {
            closeMenu();
        }
    });
}

// ===== THEME TOGGLE SYSTEM =====
function initializeThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');
    const html = document.documentElement;

    // Check for saved theme preference or default to 'light'
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // Apply the saved theme
    setTheme(savedTheme);

    // Theme toggle event listener
    themeToggle?.addEventListener('click', function() {
        const currentTheme = html.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    });

    function setTheme(theme) {
        html.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        // Update icon visibility
        if (theme === 'dark') {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        } else {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        }
        
        // Update navbar background for scroll effects
        updateNavbarBackground();
    }

    function updateNavbarBackground() {
        const navbar = document.querySelector('.navbar');
        const currentTheme = html.getAttribute('data-theme') || 'light';
        const currentScrollY = window.scrollY;
        
        if (currentTheme === 'dark') {
            if (currentScrollY > 100) {
                navbar.style.background = 'rgba(30, 41, 59, 0.98)';
            } else {
                navbar.style.background = 'rgba(30, 41, 59, 0.95)';
            }
        } else {
            if (currentScrollY > 100) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            }
        }
    }

    // Expose updateNavbarBackground for use in scroll effects
    window.updateNavbarBackground = updateNavbarBackground;
}

// ===== SCROLL EFFECTS =====
function initializeScrollEffects() {
    const navbar = document.querySelector('.navbar');
    const scrollProgress = document.getElementById('scrollProgress');
    let lastScrollY = window.scrollY;

    // Navbar scroll effect
    function handleNavbarScroll() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 1px 2px 0 rgb(0 0 0 / 0.05)';
        }

        // Update navbar background based on current theme
        if (window.updateNavbarBackground) {
            window.updateNavbarBackground();
        }
        
        // Update scroll progress indicator
        if (scrollProgress) {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            scrollProgress.style.width = scrolled + '%';
        }

        lastScrollY = currentScrollY;
    }

    // Throttled scroll handler
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(function() {
                handleNavbarScroll();
                scrollTimeout = null;
            }, 10);
        }
    });

    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== ANIMATIONS SYSTEM =====
function initializeAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-on-scroll');
                
                // Add stagger effect for grid items
                if (entry.target.classList.contains('skills-grid') || 
                    entry.target.classList.contains('projects-grid') ||
                    entry.target.classList.contains('testimonials-grid')) {
                    const items = entry.target.children;
                    Array.from(items).forEach((item, index) => {
                        setTimeout(() => {
                            item.style.animation = `fadeInUp 0.6s ease-out forwards`;
                            item.style.animationDelay = `${index * 0.1}s`;
                        }, index * 100);
                    });
                }
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll(`
        .about-content,
        .skills-grid,
        .projects-grid,
        .testimonials-grid,
        .contact-content,
        .hero-section,
        section h2
    `);

    animatedElements.forEach(el => observer.observe(el));

    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes pulse {
            0%, 100% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.05);
            }
        }

        .animate-on-scroll {
            animation: fadeInUp 0.8s ease-out forwards;
        }

        .skill-tag:hover {
            animation: pulse 0.3s ease-in-out;
        }

        .project-card {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .project-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .btn-primary, .btn-secondary {
            position: relative;
            overflow: hidden;
        }

        .btn-primary::before, .btn-secondary::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.5s;
        }

        .btn-primary:hover::before, .btn-secondary:hover::before {
            left: 100%;
        }
        
        /* Professional scroll indicator */
        .scroll-progress {
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, var(--primary-500), var(--accent-purple), var(--accent-emerald));
            z-index: 9999;
            transition: width 0.1s ease-out;
        }
        
        /* Smooth reveal animations */
        .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease-out;
        }
        
        .reveal.revealed {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
}

// ===== ENHANCED FORM HANDLING =====
function initializeFormHandling() {
    const form = document.getElementById("contact_id");
    const submitButton = form?.querySelector('button[type="submit"]');

    if (!form) return;

    // Form validation
    function validateForm() {
        const name = form.querySelector('#name').value.trim();
        const email = form.querySelector('#email').value.trim();
        const message = form.querySelector('#message').value.trim();

        const errors = [];

        if (!name || name.length < 2) {
            errors.push('Please enter a valid name (at least 2 characters)');
        }

        if (!email || !isValidEmail(email)) {
            errors.push('Please enter a valid email address');
        }

        if (!message || message.length < 10) {
            errors.push('Please enter a message (at least 10 characters)');
        }

        return errors;
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Real-time validation
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });

        input.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validateField(this);
            }
        });
    });

    function validateField(field) {
        const value = field.value.trim();
        let isValid = true;

        // Clear previous states
        field.classList.remove('error', 'success');

        switch(field.type) {
            case 'text':
                if (field.id === 'name') {
                    isValid = value.length >= 2;
                }
                break;
            case 'email':
                isValid = isValidEmail(value);
                break;
            default:
                if (field.tagName === 'TEXTAREA') {
                    isValid = value.length >= 10;
                }
        }

        if (field.required && !value) {
            isValid = false;
        }

        field.classList.add(isValid ? 'success' : 'error');
        return isValid;
    }

    // Form submission
    form.addEventListener("submit", async function(e) {
        e.preventDefault();
        
        const errors = validateForm();
        if (errors.length > 0) {
            showNotification(errors.join('<br>'), 'error');
            return;
        }

        // Show loading state
        if (submitButton) {
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            submitButton.classList.add('loading');
        }

        try {
            const formData = new FormData(form);
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                showNotification('Thank you! Your message has been sent successfully. I\'ll get back to you soon!', 'success');
                form.reset();
                
                // Reset field states
                inputs.forEach(input => {
                    input.classList.remove('error', 'success');
                });
            } else {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            showNotification('Sorry, there was an error sending your message. Please try again or contact me directly.', 'error');
        } finally {
            // Reset button state
            if (submitButton) {
                submitButton.textContent = 'Send Message';
                submitButton.disabled = false;
                submitButton.classList.remove('loading');
            }
        }
    });
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = message;

    // Add notification styles if not already added
    if (!document.querySelector('#notification-styles')) {
        const notificationStyles = document.createElement('style');
        notificationStyles.id = 'notification-styles';
        notificationStyles.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                padding: 1rem 1.5rem;
                border-radius: 12px;
                box-shadow: 0 10px 25px rgba(0,0,0,0.2);
                z-index: 10000;
                transform: translateX(100%);
                transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                max-width: 400px;
                font-weight: 500;
                color: white;
                font-size: 0.9rem;
                line-height: 1.4;
            }

            .notification-success {
                background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            }

            .notification-error {
                background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
            }

            .notification-info {
                background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
            }

            .notification.show {
                transform: translateX(0);
            }

            @media (max-width: 768px) {
                .notification {
                    right: 10px;
                    left: 10px;
                    max-width: none;
                    transform: translateY(-100%);
                    top: 90px;
                }
                
                .notification.show {
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(notificationStyles);
    }

    document.body.appendChild(notification);

    // Trigger animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);

    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 5000);
}

// ===== PERFORMANCE OPTIMIZATIONS =====
function initializePerformanceOptimizations() {
    // Lazy load images
    const images = document.querySelectorAll('img[src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        img.classList.add('loading');
        imageObserver.observe(img);
        
        // Add load event listener
        img.addEventListener('load', function() {
            this.classList.remove('loading');
            this.classList.add('loaded');
        });
    });

    // Preload critical resources
    const criticalResources = [
        '/assets/project1.png',
        '/assets/project2.png'
    ];

    criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = resource;
        document.head.appendChild(link);
    });
}

// ===== UTILITY FUNCTIONS =====

// Debounce function for performance
function debounce(func, wait) {
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

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// ===== ACCESSIBILITY ENHANCEMENTS =====
document.addEventListener('keydown', function(e) {
    // Skip to main content on Tab key
    if (e.key === 'Tab' && !e.shiftKey) {
        const firstFocusable = document.querySelector('a, button, input, textarea, select');
        if (document.activeElement === firstFocusable) {
            const skipLink = document.createElement('a');
            skipLink.href = '#main';
            skipLink.textContent = 'Skip to main content';
            skipLink.className = 'skip-link';
            skipLink.style.cssText = `
                position: absolute;
                top: -40px;
                left: 6px;
                background: var(--primary-600);
                color: white;
                padding: 8px;
                text-decoration: none;
                border-radius: 4px;
                z-index: 10000;
                transition: top 0.3s;
            `;
            skipLink.addEventListener('focus', function() {
                this.style.top = '6px';
            });
            skipLink.addEventListener('blur', function() {
                this.style.top = '-40px';
            });
            document.body.insertBefore(skipLink, document.body.firstChild);
        }
    }
});

// ===== ERROR HANDLING =====
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // Optionally show user-friendly error message
});

window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
    e.preventDefault();
});

// ===== ANALYTICS & TRACKING (Optional) =====
function trackEvent(eventName, eventData = {}) {
    // Placeholder for analytics tracking
    console.log(`Event: ${eventName}`, eventData);
    
    // Example: Google Analytics 4
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', eventName, eventData);
    // }
}

// Track form submissions
document.addEventListener('submit', function(e) {
    if (e.target.id === 'contact_id') {
        trackEvent('form_submit', {
            form_id: 'contact_form'
        });
    }
});

// Track project link clicks
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('project-link')) {
        trackEvent('project_link_click', {
            project_name: e.target.closest('.project-card').querySelector('h3').textContent,
            link_type: e.target.textContent
        });
    }
});

console.log('🚀 Professional Portfolio JavaScript loaded successfully!');
  