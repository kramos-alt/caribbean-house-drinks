(function () {
  'use strict';

  /* ---------- Language ---------- */
  var STORE_KEY = 'chd-lang';
  var supported = ['en', 'es'];

  function getInitialLang() {
    try {
      var saved = localStorage.getItem(STORE_KEY);
      if (saved && supported.indexOf(saved) !== -1) return saved;
    } catch (e) {}
    var nav = (navigator.language || 'en').slice(0, 2).toLowerCase();
    return nav === 'es' ? 'es' : 'en';
  }

  function applyLang(lang) {
    document.documentElement.lang = lang;
    var nodes = document.querySelectorAll('[data-en]');
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var val = el.getAttribute('data-' + lang);
      if (val != null) {
        // preserve line breaks encoded as \n in data attributes
        el.textContent = val;
      }
    }
    // toggle highlight
    var opts = document.querySelectorAll('.lang-opt');
    for (var j = 0; j < opts.length; j++) {
      opts[j].classList.toggle('active', opts[j].getAttribute('data-lang') === lang);
    }
    try { localStorage.setItem(STORE_KEY, lang); } catch (e) {}
  }

  var currentLang = getInitialLang();
  applyLang(currentLang);

  var toggle = document.getElementById('langToggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      currentLang = currentLang === 'en' ? 'es' : 'en';
      applyLang(currentLang);
    });
  }

  /* ---------- Mobile menu ---------- */
  var menuBtn = document.getElementById('menuBtn');
  var mobileNav = document.getElementById('mobileNav');
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', function () {
      var open = mobileNav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    mobileNav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        mobileNav.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- Sticky header shadow ---------- */
  var header = document.querySelector('.site-header');
  function onScroll() {
    if (header) header.classList.toggle('scrolled', window.scrollY > 12);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Scroll reveal ---------- */
  var revealTargets = document.querySelectorAll(
    '.section-head, .craft-text, .craft-figure, .card, .signature-figure, .signature-text, .gallery-grid figure, .contact-inner'
  );
  for (var k = 0; k < revealTargets.length; k++) {
    revealTargets[k].classList.add('reveal');
  }
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealTargets.forEach(function (t) { io.observe(t); });
  } else {
    revealTargets.forEach(function (t) { t.classList.add('in'); });
  }

  /* ---------- Year ---------- */
  var yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();
})();
