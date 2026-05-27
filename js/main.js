(() => {
  // ===== HERO SLIDER =====
  const slides = document.querySelectorAll('.hero-slide');
  const dotsWrap = document.getElementById('heroDots');
  let heroIndex = 0;
  let heroTimer = null;

  if (slides.length && dotsWrap) {
    slides.forEach((_, i) => {
      const btn = document.createElement('button');
      btn.setAttribute('aria-label', `Slide ${i + 1}`);
      if (i === 0) btn.classList.add('active');
      btn.addEventListener('click', () => { goTo(i); resetTimer(); });
      dotsWrap.appendChild(btn);
    });

    const goTo = (i) => {
      slides[heroIndex].classList.remove('active');
      dotsWrap.children[heroIndex].classList.remove('active');
      heroIndex = (i + slides.length) % slides.length;
      slides[heroIndex].classList.add('active');
      dotsWrap.children[heroIndex].classList.add('active');
    };
    const resetTimer = () => {
      if (heroTimer) clearInterval(heroTimer);
      heroTimer = setInterval(() => goTo(heroIndex + 1), 5500);
    };
    resetTimer();
  }

  // ===== SIDEBAR AUTO-SWAP =====
  const fsSlides = document.querySelectorAll('.fs-slide');
  if (fsSlides.length) {
    let fsIdx = 0;
    setInterval(() => {
      fsSlides[fsIdx].classList.remove('active');
      fsIdx = (fsIdx + 1) % fsSlides.length;
      fsSlides[fsIdx].classList.add('active');
    }, 3000);
  }

  // ===== SIDEBAR CLOSE =====
  const floatSide = document.getElementById('floatSide');
  const fsClose = document.getElementById('fsClose');
  if (fsClose && floatSide) {
    fsClose.addEventListener('click', () => floatSide.classList.add('hidden'));
  }

  // ===== HIDE SIDEBAR NEAR FOOTER =====
  const footer = document.querySelector('.site-footer');
  if (floatSide && footer) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) floatSide.classList.add('hidden');
        else if (!floatSide.dataset.closed) floatSide.classList.remove('hidden');
      });
    }, { threshold: 0.05 });
    io.observe(footer);
    fsClose && fsClose.addEventListener('click', () => floatSide.dataset.closed = '1');
  }

  // ===== MOBILE NAV =====
  const hamburger = document.getElementById('hamburger');
  const nav = document.querySelector('.main-nav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('open');
      hamburger.classList.toggle('open');
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');
      hamburger.classList.remove('open');
    }));
  }

  // ===== HEADER SCROLL ELEVATION =====
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // ===== SMOOTH SCROLL =====
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // ===== SEARCH OVERLAY =====
  const searchOverlay = document.getElementById('searchOverlay');
  const searchOpen = document.getElementById('searchOpen');
  const searchClose = document.getElementById('searchClose');
  if (searchOverlay && searchOpen) {
    const open = () => {
      searchOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
      const input = searchOverlay.querySelector('input');
      input && setTimeout(() => input.focus(), 200);
    };
    const close = () => {
      searchOverlay.classList.remove('open');
      document.body.style.overflow = '';
    };
    searchOpen.addEventListener('click', open);
    searchClose && searchClose.addEventListener('click', close);
    searchOverlay.addEventListener('click', (e) => { if (e.target === searchOverlay) close(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  }

  // ===== SCROLL REVEAL =====
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const ro = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          ro.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    revealEls.forEach(el => ro.observe(el));
  }

  // ===== STAT COUNTER =====
  const stats = document.querySelectorAll('.stat-num');
  if (stats.length) {
    const animate = (el) => {
      const target = parseInt(el.dataset.count || '0', 10);
      const suffix = el.dataset.suffix || '';
      const dur = 1800;
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / dur, 1);
        const val = Math.floor(target * (1 - Math.pow(1 - p, 3)));
        el.textContent = val.toLocaleString('id-ID') + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const so = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { animate(e.target); so.unobserve(e.target); } });
    }, { threshold: 0.4 });
    stats.forEach(s => so.observe(s));
  }

  // ===== FAQ ACCORDION =====
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const answer = item.querySelector('.faq-a');
      const isOpen = item.classList.contains('open');
      item.classList.toggle('open');
      if (!isOpen) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
      } else {
        answer.style.maxHeight = '0';
      }
    });
  });

  // ===== FILTER CHIPS (product) =====
  document.querySelectorAll('.filter-chips').forEach(group => {
    const chips = group.querySelectorAll('.filter-chip');
    const grid = document.querySelector('[data-filter-grid]');
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const cat = chip.dataset.filter;
        if (grid) {
          grid.querySelectorAll('[data-cat]').forEach(card => {
            const show = cat === 'all' || card.dataset.cat === cat;
            card.style.display = show ? '' : 'none';
          });
        }
      });
    });
  });

  // ===== STORE TABS (offline) =====
  document.querySelectorAll('.store-tabs').forEach(group => {
    const tabs = group.querySelectorAll('.store-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const region = tab.dataset.region;
        document.querySelectorAll('[data-region]').forEach(card => {
          card.style.display = region === 'all' || card.dataset.region === region ? '' : 'none';
        });
      });
    });
  });

  // ===== PRODUCT DETAIL GALLERY =====
  const pdThumbs = document.querySelectorAll('.pd-thumb');
  const pdMain = document.querySelector('.pd-main img');
  if (pdThumbs.length && pdMain) {
    pdThumbs.forEach(t => {
      t.addEventListener('click', () => {
        pdThumbs.forEach(x => x.classList.remove('active'));
        t.classList.add('active');
        pdMain.src = t.querySelector('img').src;
      });
    });
  }

  // ===== PD OPTIONS =====
  document.querySelectorAll('.pd-opts').forEach(group => {
    group.querySelectorAll('.pd-opt, .pd-color').forEach(opt => {
      opt.addEventListener('click', () => {
        group.querySelectorAll('.pd-opt, .pd-color').forEach(x => x.classList.remove('active'));
        opt.classList.add('active');
      });
    });
  });

  // ===== QTY BUTTONS =====
  document.querySelectorAll('.pd-qty').forEach(q => {
    const input = q.querySelector('input');
    const minus = q.querySelector('[data-qty="-"]');
    const plus = q.querySelector('[data-qty="+"]');
    minus && minus.addEventListener('click', () => { input.value = Math.max(1, (+input.value) - 1); });
    plus && plus.addEventListener('click', () => { input.value = (+input.value) + 1; });
  });

  // ===== CONTACT FORM =====
  const cf = document.getElementById('contactForm');
  if (cf) {
    cf.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = cf.querySelector('button[type="submit"]');
      const orig = btn.textContent;
      btn.textContent = 'TERKIRIM ✓';
      btn.style.background = 'var(--green-dark)';
      cf.reset();
      setTimeout(() => { btn.textContent = orig; btn.style.background = ''; }, 2200);
    });
  }
  // ===== NEWSLETTER =====
  document.querySelectorAll('.news-form').forEach(f => {
    f.addEventListener('submit', (e) => {
      e.preventDefault();
      const b = f.querySelector('button');
      const o = b.textContent;
      b.textContent = '✓ SUBSCRIBED';
      f.querySelector('input').value = '';
      setTimeout(() => b.textContent = o, 2200);
    });
  });
})();
