/* ============================================
   PRELOADER
   ============================================ */

function initPreloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;

  let hidden = false;

  function hidePreloader() {
    if (hidden) return;
    hidden = true;
    preloader.classList.add('hidden');
    document.body.classList.remove('no-scroll');
    initHeroAnimation();
  }

  // Hide immediately when DOM is ready (max 3s wait)
  setTimeout(hidePreloader, 3000);

  // Also try on window load
  if (document.readyState === 'complete') {
    setTimeout(hidePreloader, 500);
  } else {
    window.addEventListener('load', () => setTimeout(hidePreloader, 800));
  }
}

function initHeroAnimation() {
  const heroImage = document.querySelector('.hero-image');
  if (heroImage) {
    heroImage.classList.add('loaded');
  }

  const reveals = document.querySelectorAll('.hero-content .anim-reveal');
  reveals.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('active');
    }, 300 + (i * 200));
  });
}
