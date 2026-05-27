(() => {
  // ===== HERO SLIDER =====
  const slides = document.querySelectorAll('.hero-slide');
  const dotsWrap = document.getElementById('heroDots');
  let heroIndex = 0;

  if (slides.length && dotsWrap) {
    slides.forEach((_, i) => {
      const btn = document.createElement('button');
      btn.setAttribute('aria-label', `Slide ${i + 1}`);
      if (i === 0) btn.classList.add('active');
      btn.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(btn);
    });

    const goTo = (i) => {
      slides[heroIndex].classList.remove('active');
      dotsWrap.children[heroIndex].classList.remove('active');
      heroIndex = (i + slides.length) % slides.length;
      slides[heroIndex].classList.add('active');
      dotsWrap.children[heroIndex].classList.add('active');
    };

    setInterval(() => goTo(heroIndex + 1), 5500);
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
      });
    }, { threshold: 0.05 });
    io.observe(footer);
  }

  // ===== MOBILE NAV =====
  const hamburger = document.getElementById('hamburger');
  const nav = document.querySelector('.main-nav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => nav.classList.toggle('open'));
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
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
})();
