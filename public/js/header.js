/* ============================================
   HEADER & MOBILE MENU
   ============================================ */

function initHeader() {
  const header = document.getElementById('header');
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (!header) return;

  // Scroll behavior
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  });

  // Mobile menu
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const isActive = mobileMenu.classList.contains('active');
      
      if (isActive) {
        mobileMenu.classList.remove('active');
        menuBtn.classList.remove('active');
        document.body.classList.remove('no-scroll');
      } else {
        mobileMenu.classList.add('active');
        menuBtn.classList.add('active');
        document.body.classList.add('no-scroll');
      }
    });

    // Close menu on link click
    const menuLinks = mobileMenu.querySelectorAll('.mobile-menu-link');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        menuBtn.classList.remove('active');
        document.body.classList.remove('no-scroll');
      });
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerHeight = header.offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}
