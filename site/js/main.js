// ================================================
// THE FIVE OF WALL STREET - Main JavaScript
// High-End Interactions & Animations
// ================================================

document.addEventListener('DOMContentLoaded', function() {

  // ================================
  // YEAR IN FOOTER
  // ================================
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // ================================
  // MOBILE MENU TOGGLE
  // ================================
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function() {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      nav.setAttribute('data-open', String(!expanded));
      this.setAttribute('aria-label', expanded ? 'Abrir menu' : 'Fechar menu');
      this.classList.toggle('open');

      // Prevent body scroll when menu is open
      document.body.style.overflow = expanded ? '' : 'hidden';
    });

    // Close menu on link click
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 769) {
          toggle.setAttribute('aria-expanded', 'false');
          nav.setAttribute('data-open', 'false');
          toggle.classList.remove('open');
          document.body.style.overflow = '';
        }
      });
    });
  }

  // ================================
  // SMOOTH SCROLL
  // ================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#' || href.length <= 1) return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ================================
  // PARTICLES BACKGROUND EFFECT
  // ================================
  const particlesContainer = document.getElementById('particles');

  if (particlesContainer) {
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.style.position = 'absolute';
      particle.style.width = Math.random() * 3 + 1 + 'px';
      particle.style.height = particle.style.width;
      particle.style.background = Math.random() > 0.5 ? 'rgba(0, 240, 255, 0.3)' : 'rgba(212, 175, 55, 0.3)';
      particle.style.borderRadius = '50%';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animation = `float ${Math.random() * 10 + 10}s ease-in-out infinite`;
      particle.style.animationDelay = Math.random() * 5 + 's';
      particle.style.boxShadow = '0 0 20px currentColor';

      particlesContainer.appendChild(particle);
    }
  }

  // ================================
  // MOUSE PARALLAX EFFECT ON HERO
  // ================================
  const hero = document.querySelector('.hero');

  if (hero) {
    document.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX / window.innerWidth - 0.5;
      const mouseY = e.clientY / window.innerHeight - 0.5;

      const heroCard = hero.querySelector('.hero-card');
      if (heroCard) {
        heroCard.style.transform = `perspective(1000px) rotateY(${mouseX * 5}deg) rotateX(${-mouseY * 5}deg)`;
      }
    });
  }

  // ================================
  // SCROLL REVEAL ANIMATIONS
  // ================================
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all sections and cards
  document.querySelectorAll('.section, .bento-card, .member-card, .origem-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
  });

  // ================================
  // CARD HOVER GLOW EFFECT
  // ================================
  document.querySelectorAll('.glass-card, .bento-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const glow = card.querySelector('.card-glow');
      if (glow) {
        glow.style.left = x + 'px';
        glow.style.top = y + 'px';
        glow.style.transform = 'translate(-50%, -50%)';
      }
    });
  });

  // ================================
  // HEADER SCROLL EFFECT
  // ================================
  const header = document.querySelector('.site-header');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      header.style.background = 'rgba(10, 14, 26, 0.95)';
      header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.3)';
    } else {
      header.style.background = 'rgba(10, 14, 26, 0.8)';
      header.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
  });

  // ================================
  // TYPING EFFECT (Optional Enhancement)
  // ================================
  function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';

    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }

    type();
  }

  // You can enable typing effect for hero title if desired
  // const heroTitle = document.querySelector('.hero-title');
  // if (heroTitle) {
  //   const originalText = heroTitle.textContent;
  //   typeWriter(heroTitle, originalText, 30);
  // }

  // ================================
  // PERFORMANCE: Reduce animations on low-end devices
  // ================================
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('*').forEach(el => {
      el.style.animation = 'none';
      el.style.transition = 'none';
    });
  }

  // ================================
  // CONSOLE EASTER EGG
  // ================================
  console.log('%c🏛️ THE FIVE OF WALL STREET', 'font-size: 20px; font-weight: bold; color: #D4AF37;');
  console.log('%cDa faculdade para as ruas. O código que muda rotas.', 'font-size: 14px; color: #00F0FF;');
  console.log('%cInteressado em trabalhar conosco? contact@thefive.com', 'font-size: 12px; color: #CBD5E1;');
});

// ================================
// LOADING OPTIMIZATION
// ================================
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});
