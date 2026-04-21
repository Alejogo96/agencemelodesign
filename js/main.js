/* =========================================================
   Agence Mélo Design — Scripts principaux
   Menu mobile · scroll state · reveal on scroll · formulaire
   ========================================================= */

(() => {
  'use strict';

  /* ---------- Menu mobile ---------- */
  const toggle = document.getElementById('nav-toggle');
  const menu = document.querySelector('.nav__menu');
  const menuLinks = document.querySelectorAll('.nav__link');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      toggle.setAttribute('aria-label', expanded ? 'Ouvrir le menu' : 'Fermer le menu');
      menu.classList.toggle('is-open');
      document.body.style.overflow = !expanded ? 'hidden' : '';
    });

    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Ouvrir le menu');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---------- État de la barre de navigation au scroll ---------- */
  const nav = document.getElementById('nav');
  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle('is-scrolled', window.scrollY > 12);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Reveal on scroll (IntersectionObserver) ---------- */
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealItems = document.querySelectorAll('.reveal');

  if (prefersReduced) {
    revealItems.forEach(el => el.classList.add('is-visible'));
  } else if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' });

    revealItems.forEach((el, i) => {
      // Petit délai progressif pour un effet en cascade
      el.style.transitionDelay = `${Math.min(i * 40, 280)}ms`;
      io.observe(el);
    });

    // Filet de sécurité : si un élément est déjà visible au chargement
    // (au-dessus de la ligne de flottaison), on le révèle immédiatement.
    requestAnimationFrame(() => {
      revealItems.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('is-visible');
        }
      });
    });

    // Filet de sécurité ultime : après 4s, tout doit être visible.
    // Protège contre les bugs d'IntersectionObserver (iframes, print, etc).
    setTimeout(() => {
      revealItems.forEach(el => el.classList.add('is-visible'));
    }, 4000);
  } else {
    revealItems.forEach(el => el.classList.add('is-visible'));
  }

  /* ---------- Année automatique dans le footer ---------- */
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  /* ---------- Formulaire de contact (Web3Forms) ---------- */
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  if (form && status) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      status.className = 'form__status';
      status.textContent = 'Envoi en cours…';

      const formData = new FormData(form);

      // Vérifier que la clé Web3Forms est configurée
      const accessKey = formData.get('access_key');
      if (!accessKey || accessKey === 'VOTRE_ACCESS_KEY_WEB3FORMS') {
        status.className = 'form__status is-error';
        status.textContent = 'Le formulaire n\u2019est pas encore configur\u00e9. Merci d\u2019\u00e9crire directement \u00e0 oago1103@gmail.com.';
        return;
      }

      try {
        const res = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: { Accept: 'application/json' }
        });
        const data = await res.json();

        if (res.ok && data.success) {
          status.className = 'form__status is-success';
          status.textContent = 'Merci, votre message a bien été envoyé. Je reviens vers vous sous 24h.';
          form.reset();
        } else {
          throw new Error(data.message || 'Erreur inconnue');
        }
      } catch (err) {
        status.className = 'form__status is-error';
        status.textContent = 'Une erreur est survenue. Merci d\u2019écrire directement \u00e0 oago1103@gmail.com.';
        console.error(err);
      }
    });
  }

})();
