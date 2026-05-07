// Mobile nav — slide-in drawer
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Inject backdrop element
const backdrop = document.createElement('div');
backdrop.className = 'nav-backdrop';
document.body.appendChild(backdrop);

function openNav() {
  hamburger.classList.add('open');
  navLinks.classList.add('open');
  backdrop.classList.add('open');
  document.body.classList.add('nav-open');
}

function closeNav() {
  hamburger.classList.remove('open');
  navLinks.classList.remove('open');
  backdrop.classList.remove('open');
  document.body.classList.remove('nav-open');
}

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.contains('open') ? closeNav() : openNav();
  });

  // Close on backdrop click
  backdrop.addEventListener('click', closeNav);

  // Close on link click
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', closeNav);
  });

  // Close on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeNav();
  });
}

// FAQ accordion
document.querySelectorAll('.faq-item').forEach(item => {
  const q = item.querySelector('.faq-question');
  if (q) {
    q.addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  }
});

// Scroll animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.animationPlayState = 'running';
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.animate').forEach(el => {
  el.style.animationPlayState = 'paused';
  observer.observe(el);
});

// Contact form
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const btn = contactForm.querySelector('button');
    btn.textContent = 'Verstuurd! ✓';
    btn.style.background = '#2a9d60';
    setTimeout(() => {
      btn.textContent = 'Verstuur bericht';
      btn.style.background = '';
      contactForm.reset();
    }, 3000);
  });
}
