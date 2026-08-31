/* ============================================
   MAIN — INITIALIZATION
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Prevent scroll during preloader
  document.body.classList.add('no-scroll');

  initPreloader();

  // Wrap each init in try-catch so one failure doesn't break others
  try { initCursor(); } catch(e) { console.warn('Cursor:', e); }
  try { initHeader(); } catch(e) { console.warn('Header:', e); }
  try { initAnimations(); } catch(e) { console.warn('Animations:', e); }
  try { initLightbox(); } catch(e) { console.warn('Lightbox:', e); }
  try { initFormHandler(); } catch(e) { console.warn('Form:', e); }
  try { initSmoothAnchors(); } catch(e) { console.warn('Anchors:', e); }
});

/* ============================================
   LIGHTBOX
   ============================================ */

function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  const lightboxContent = lightbox.querySelector('.lightbox-content');
  const lightboxClose = lightbox.querySelector('.lightbox-close');
  const lightboxPrev = lightbox.querySelector('.lightbox-prev');
  const lightboxNext = lightbox.querySelector('.lightbox-next');
  const lightboxCounter = lightbox.querySelector('.lightbox-counter');

  let galleryItems = [];
  let currentIndex = 0;

  // Collect all gallery items
  document.querySelectorAll('.gallery-masonry-item, .editorial-item').forEach((item, index) => {
    galleryItems.push(item);
    item.addEventListener('click', () => {
      currentIndex = index;
      openLightbox(item);
    });
  });

  function openLightbox(item) {
    const placeholder = item.querySelector('[class*="placeholder"]');
    if (!placeholder) return;

    // Create an image element from the placeholder
    const color = placeholder.dataset.color || '#3a3a3a';
    lightboxContent.innerHTML = `
      <div style="width: 70vw; height: 70vh; background: linear-gradient(135deg, ${color} 0%, ${adjustColor(color, -30)} 100%); display: flex; align-items: center; justify-content: center;">
        <span style="color: rgba(255,255,255,0.3); font-family: var(--font-sans); font-size: var(--text-xs); letter-spacing: 0.2em;">FOTO ${currentIndex + 1}</span>
      </div>
      <button class="lightbox-close">FECHAR</button>
      <button class="lightbox-nav lightbox-prev">&larr; ANTERIOR</button>
      <button class="lightbox-nav lightbox-next">PRÓXIMO &rarr;</button>
      <div class="lightbox-counter">${currentIndex + 1} / ${galleryItems.length}</div>
    `;

    lightbox.classList.add('active');
    document.body.classList.add('no-scroll');

    // Re-bind events
    lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    lightbox.querySelector('.lightbox-prev').addEventListener('click', showPrev);
    lightbox.querySelector('.lightbox-next').addEventListener('click', showNext);
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.classList.remove('no-scroll');
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    openLightbox(galleryItems[currentIndex]);
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    openLightbox(galleryItems[currentIndex]);
  }

  // Close on escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
  });

  // Close on background click
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
}

function adjustColor(hex, amount) {
  hex = hex.replace('#', '');
  const num = parseInt(hex, 16);
  let r = Math.min(255, Math.max(0, (num >> 16) + amount));
  let g = Math.min(255, Math.max(0, ((num >> 8) & 0x00FF) + amount));
  let b = Math.min(255, Math.max(0, (num & 0x0000FF) + amount));
  return '#' + (0x1000000 + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

/* ============================================
   FORM HANDLER
   ============================================ */

function initFormHandler() {
  const form = document.getElementById('quoteForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Build WhatsApp message
    let message = `Olá! Gostaria de solicitar um orçamento.\n\n`;
    message += `*Nome:* ${data.name || 'Não informado'}\n`;
    message += `*WhatsApp:* ${data.whatsapp || 'Não informado'}\n`;
    message += `*Tipo de Evento:* ${data.eventType || 'Não informado'}\n`;
    message += `*Data:* ${data.eventDate || 'Não informado'}\n`;
    message += `*Local:* ${data.eventLocation || 'Não informado'}\n`;
    message += `*Sobre o Projeto:* ${data.projectDetails || 'Não informado'}\n`;

    // Show success state
    const formEl = form;
    const successEl = document.querySelector('.form-success');
    
    if (successEl) {
      formEl.style.display = 'none';
      successEl.classList.add('active');
    }

    // Optionally open WhatsApp
    setTimeout(() => {
      const encoded = encodeURIComponent(message);
      window.open(`https://wa.me/5500000000000?text=${encoded}`, '_blank');
    }, 1500);
  });
}

/* ============================================
   SMOOTH ANCHOR SCROLL
   ============================================ */

function initSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const header = document.getElementById('header');
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}
