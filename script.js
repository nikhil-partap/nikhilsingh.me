document.addEventListener('DOMContentLoaded', function() {
    const navToggle      = document.querySelector('.nav-toggle');
    const navList        = document.querySelector('.nav-list');
    const overlay        = document.querySelector('.mobile-nav-overlay');
    const iconHamburger  = document.querySelector('.icon-hamburger');
    const iconClose      = document.querySelector('.icon-close');
  
    function openMenu() {
      navList.classList.add('open');
      overlay.classList.add('active');
      iconHamburger.style.display = 'none';
      iconClose.style.display     = 'block';
      document.body.style.overflow = 'hidden';
    }
  
    function closeMenu() {
      navList.classList.remove('open');
      overlay.classList.remove('active');
      iconHamburger.style.display = 'block';
      iconClose.style.display     = 'none';
      document.body.style.overflow = '';
    }
  
    navToggle.addEventListener('click', function() {
      if (navList.classList.contains('open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  
    overlay.addEventListener('click', closeMenu);
  
    navList.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Enhanced Contact Form Handler
    const form = document.getElementById("contact_id");
    const submitButton = form ? form.querySelector('button[type="submit"]') : null;
  
    if (form) {
      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        // Show loading state
        if (submitButton) {
          const originalText = submitButton.textContent;
          submitButton.textContent = 'Sending...';
          submitButton.disabled = true;
          submitButton.style.opacity = '0.7';
        }
        
        const data = new FormData(form);
    
        try {
          const response = await fetch(form.action, {
            method: form.method,
            body: data,
            headers: {
              'Accept': 'application/json'
            }
          });
    
          if (response.ok) {
            // Success state
            showNotification('✅ Message sent successfully! I\'ll get back to you soon.', 'success');
            form.reset();
          } else {
            showNotification('❌ Something went wrong. Please try again.', 'error');
          }
        } catch (error) {
          showNotification('❌ Network error. Please check your connection and try again.', 'error');
        } finally {
          // Reset button state
          if (submitButton) {
            submitButton.textContent = 'Send Message';
            submitButton.disabled = false;
            submitButton.style.opacity = '1';
          }
        }
      });
    }

    // Notification system
    function showNotification(message, type = 'info') {
      // Remove existing notifications
      const existingNotifications = document.querySelectorAll('.notification');
      existingNotifications.forEach(notification => notification.remove());
      
      const notification = document.createElement('div');
      notification.className = `notification notification-${type}`;
      notification.textContent = message;
      
      // Style the notification
      notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        max-width: 300px;
        font-weight: 500;
      `;
      
      document.body.appendChild(notification);
      
      // Animate in
      setTimeout(() => {
        notification.style.transform = 'translateX(0)';
      }, 100);
      
      // Auto remove after 5 seconds
      setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
          if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
          }
        }, 300);
      }, 5000);
    }

    // Enhanced Hero Section Scroll Handler with throttling
    const hero = document.querySelector('.hero-section');
    let ticking = false;
    
    if (hero) {
      function updateHeroVisibility() {
        if (window.scrollY <= 10) {
          hero.classList.remove('is-hidden');
        } else {
          hero.classList.add('is-hidden');
        }
        ticking = false;
      }
      
      window.addEventListener('scroll', () => {
        if (!ticking) {
          requestAnimationFrame(updateHeroVisibility);
          ticking = true;
        }
      });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          const offsetTop = target.offsetTop - 100; // Account for fixed header
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.project-card, .skill-category, .stat-item');
    animateElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });

    // Form input enhancements
    const formInputs = document.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
      // Add floating label effect
      input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
      });
      
      input.addEventListener('blur', function() {
        if (!this.value) {
          this.parentElement.classList.remove('focused');
        }
      });
      
      // Auto-resize textarea
      if (input.tagName === 'TEXTAREA') {
        input.addEventListener('input', function() {
          this.style.height = 'auto';
          this.style.height = this.scrollHeight + 'px';
        });
      }
    });

    // Add loading animation to images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      img.addEventListener('load', function() {
        this.style.opacity = '1';
        this.style.transform = 'scale(1)';
      });
      
      img.addEventListener('error', function() {
        this.style.opacity = '0.5';
        this.style.filter = 'grayscale(100%)';
      });
    });

    // Keyboard navigation improvements
    document.addEventListener('keydown', function(e) {
      // Close mobile menu with Escape key
      if (e.key === 'Escape' && navList.classList.contains('open')) {
        closeMenu();
      }
    });

    // Performance optimization: Debounce scroll events
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

    // Apply debouncing to scroll events
    const debouncedScrollHandler = debounce(() => {
      // Any additional scroll-based functionality can go here
    }, 100);

    window.addEventListener('scroll', debouncedScrollHandler);
  });
  