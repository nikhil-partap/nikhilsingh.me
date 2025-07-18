//hello js world

document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');
  const overlay = document.querySelector('.mobile-nav-overlay');
  const iconClose = document.querySelector('.icon-close');
  // No hamburger icon now, using NS logo

  function openMenu() {
    navList.classList.add('open');
    overlay.classList.add('active');
    iconClose.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    navList.classList.remove('open');
    overlay.classList.remove('active');
    iconClose.style.display = 'none';
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
  // Optional: close menu on nav link click (mobile)
  navList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
});

