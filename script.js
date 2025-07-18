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
  });
  