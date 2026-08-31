/* ============================================
   SCROLL ANIMATIONS (Pure JS + CSS)
   ============================================ */

function initAnimations() {
  // IntersectionObserver for scroll reveals
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all animatable elements
  document.querySelectorAll('.anim-slide-up, .anim-reveal, .anim-reveal-image').forEach(el => {
    observer.observe(el);
  });

  // Manifesto staggered animation
  const manifestoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const items = entry.target.querySelectorAll('.anim-manifesto');
        items.forEach((el, i) => {
          const delay = parseFloat(el.dataset.delay) || (i * 0.3);
          setTimeout(() => el.classList.add('active'), delay * 1000);
        });
        manifestoObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  const manifesto = document.querySelector('.manifesto');
  if (manifesto) manifestoObserver.observe(manifesto);

  // Event blocks stagger
  const eventsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const blocks = entry.target.querySelectorAll('.event-block');
        blocks.forEach((el, i) => {
          setTimeout(() => el.classList.add('active'), i * 150);
        });
        eventsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  const eventsGrid = document.querySelector('.events-preview-grid');
  if (eventsGrid) eventsObserver.observe(eventsGrid);

  // Instagram items stagger
  const instaObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const items = entry.target.querySelectorAll('.instagram-item');
        items.forEach((el, i) => {
          setTimeout(() => el.classList.add('active'), i * 80);
        });
        instaObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  const instaGrid = document.querySelector('.instagram-grid');
  if (instaGrid) instaObserver.observe(instaGrid);

  // Gallery masonry items stagger
  const galleryObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const items = entry.target.querySelectorAll('.gallery-masonry-item');
        items.forEach((el, i) => {
          setTimeout(() => el.classList.add('active'), i * 60);
        });
        galleryObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  const galleryGrid = document.querySelector('.gallery-masonry');
  if (galleryGrid) galleryObserver.observe(galleryGrid);

  // Parallax on scroll (subtle)
  initParallax();
}

function initParallax() {
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.pageYOffset;

        // Hero parallax
        const heroImage = document.querySelector('.hero-image-placeholder');
        if (heroImage) {
          const heroRect = document.querySelector('.hero').getBoundingClientRect();
          if (heroRect.bottom > 0) {
            heroImage.style.transform = `scale(1.1) translateY(${scrollY * 0.15}px)`;
          }
        }

        // About image parallax
        const aboutImage = document.querySelector('.about-image-wrapper');
        if (aboutImage) {
          const rect = aboutImage.getBoundingClientRect();
          const center = rect.top + rect.height / 2;
          const windowCenter = window.innerHeight / 2;
          const offset = (center - windowCenter) * 0.05;
          aboutImage.style.transform = `translateY(${offset}px)`;
        }

        ticking = false;
      });
      ticking = true;
    }
  });
}
