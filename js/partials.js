(() => {
  const path = location.pathname.split('/').pop() || 'index.html';
  const isActive = (file) => path === file ? ' active' : '';

  const header = `
<div class="topbar">
  <div class="topbar-track">
    <span>FREE ONGKIR SE-INDONESIA</span><span>•</span>
    <span>JAPAN TECHNOLOGY ★★★★★</span><span>•</span>
    <span>NEW ARRIVAL: FUTURE 66 III</span><span>•</span>
    <span>OFFICIAL STORE JP-POWER</span><span>•</span>
    <span>WARRANTY 1 TAHUN</span><span>•</span>
    <span>FREE ONGKIR SE-INDONESIA</span><span>•</span>
    <span>JAPAN TECHNOLOGY ★★★★★</span><span>•</span>
    <span>NEW ARRIVAL: FUTURE 66 III</span><span>•</span>
    <span>OFFICIAL STORE JP-POWER</span><span>•</span>
    <span>WARRANTY 1 TAHUN</span>
  </div>
</div>
<header class="site-header">
  <div class="container header-inner">
    <a href="index.html" class="logo"><img src="assets/logo.png" alt="JP-POWER" /></a>
    <nav class="main-nav">
      <ul>
        <li><a class="${isActive('product.html')}" href="product.html">PRODUCT</a></li>
        <li><a class="${isActive('jp-store.html')}" href="jp-store.html">JP STORE</a></li>
        <li><a class="${isActive('online-store.html')}" href="online-store.html">ONLINE STORE</a></li>
        <li><a class="${isActive('offline.html')}" href="offline.html">TOKO OFFLINE PARTNER</a></li>
        <li><a class="${isActive('contact.html')}" href="contact.html">CONTACT US</a></li>
      </ul>
    </nav>
    <div class="header-actions">
      <button class="icon-btn" id="searchOpen" aria-label="Search"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg></button>
      <a class="icon-btn" href="wishlist.html" aria-label="Wishlist"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg><span class="badge" data-wish-count style="display:none">0</span></a>
      <button class="icon-btn" data-open-cart aria-label="Cart"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg><span class="badge" data-cart-count style="display:none">0</span></button>
      <button class="hamburger" id="hamburger" aria-label="Menu"><span></span><span></span><span></span></button>
    </div>
  </div>
</header>
<div class="search-overlay" id="searchOverlay">
  <button class="search-close" id="searchClose" aria-label="Close">×</button>
  <div class="search-box">
    <input type="text" placeholder="Cari raket, sepatu, grip..." id="searchInput" />
    <div class="search-suggest">
      <span>POPULAR SEARCH</span>
      <div class="search-tags">
        <a href="product.html?q=future">Future 66 III</a>
        <a href="product.html?q=dragon">Dragon Z Attack</a>
        <a href="product.html?q=magnum">Magnum X10</a>
        <a href="product.html?q=hybrid">Hybrid Pro</a>
        <a href="product.html?q=grip">Grip Handuk</a>
      </div>
      <div id="searchResults" class="search-results"></div>
    </div>
  </div>
</div>

<!-- CART DRAWER -->
<div class="cart-drawer" id="cartDrawer">
  <div class="cd-backdrop" data-close-cart></div>
  <aside class="cd-panel">
    <div class="cd-head">
      <h3>KERANJANG <span data-cart-count style="display:none">0</span></h3>
      <button class="cd-close" data-close-cart aria-label="Close">×</button>
    </div>
    <div class="cd-list"></div>
    <div class="cd-bottom"></div>
  </aside>
</div>`;

  const footer = `
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-col">
        <img src="assets/logo.png" class="footer-logo" alt="JP-POWER" />
        <p>Official store JP-POWER. Japan Technology badminton equipment for champions. Carbon woven frame, aero-force technology, anti-twist integration — built for performance.</p>
        <div class="socials">
          <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg></a>
          <a href="#" aria-label="TikTok"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M19.6 7.2a5.5 5.5 0 0 1-3.4-1.2v8.4a6 6 0 1 1-6-6c.3 0 .6 0 .9.1v3a3 3 0 1 0 2.1 2.9V2h2.9a5.5 5.5 0 0 0 3.5 5.2z"/></svg></a>
          <a href="https://wa.me/${window.JP_CONFIG ? window.JP_CONFIG.whatsappNumber : '6281234567890'}" aria-label="WhatsApp"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20 12a8 8 0 1 1-3.4-6.5l1.7-1.7A10 10 0 1 0 22 12h-2zm-3.6 1.8c-.3-.2-1.8-.9-2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7 0-1.2-.4-2.3-1.4c-.9-.8-1.4-1.7-1.6-2s0-.4.1-.6.3-.3.4-.5.2-.3.3-.5 0-.4 0-.5l-.7-1.8c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5 0-.7.3s-.9 1-.9 2.3.9 2.7 1 2.9 1.8 2.9 4.5 4 3 .7 3.6.7 1.7-.7 2-1.4.3-1.3.2-1.4-.2-.2-.5-.4z"/></svg></a>
          <a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M23 7.5a3 3 0 0 0-2.1-2.1C19 5 12 5 12 5s-7 0-8.9.4A3 3 0 0 0 1 7.5 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.5a3 3 0 0 0 2.1 2.1C5 19 12 19 12 19s7 0 8.9-.4A3 3 0 0 0 23 16.5 31 31 0 0 0 23.5 12 31 31 0 0 0 23 7.5zM10 15V9l5 3z"/></svg></a>
          <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9V15h-2.5v-3h2.5v-2.3c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 3h-2.3v6.9A10 10 0 0 0 22 12z"/></svg></a>
        </div>
      </div>
      <div class="footer-col">
        <h5>PRODUCT</h5>
        <ul>
          <li><a href="product.html?cat=raket">Raket</a></li>
          <li><a href="product.html?cat=shoes">Sepatu</a></li>
          <li><a href="product.html?cat=apparel">Apparel</a></li>
          <li><a href="product.html?cat=bag">Bag</a></li>
          <li><a href="product.html?cat=string">String</a></li>
          <li><a href="product.html?cat=grip">Grip</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>SHOP</h5>
        <ul>
          <li><a href="cart.html">Keranjang</a></li>
          <li><a href="wishlist.html">Wishlist</a></li>
          <li><a href="checkout.html">Checkout</a></li>
          <li><a href="offline.html">Store Locator</a></li>
          <li><a href="online-store.html">Online Marketplaces</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>CONTACT</h5>
        <ul class="contact-list">
          <li>📧 official@jp-power.com</li>
          <li>📞 +62 812-3456-7890</li>
          <li>📍 Jakarta, Indonesia</li>
          <li>⏰ Mon–Sat, 09:00–18:00</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 JP-POWER. All Rights Reserved. <span>JAPAN TECHNOLOGY ★★★★★</span></p>
      <div class="payment-icons">
        <span>VISA</span><span>MASTERCARD</span><span>BCA</span><span>MANDIRI</span><span>GOPAY</span><span>OVO</span>
      </div>
    </div>
  </div>
</footer>
<aside class="floating-side" id="floatSide">
  <button class="fs-close" id="fsClose" aria-label="Close">×</button>
  <div class="fs-slider" id="fsSlider">
    <a href="product-detail.html?id=dragon-z-attack" class="fs-slide active"><img src="assets/unggulan2.jpg" alt="Dragon Z" /></a>
    <a href="product-detail.html?id=magnum-x10" class="fs-slide"><img src="assets/unggulan3.jpg" alt="Magnum X10" /></a>
    <a href="product-detail.html?id=future-66-iii" class="fs-slide"><img src="assets/future66.png" alt="Future 66" /></a>
    <a href="product-detail.html?id=hybrid-pro-black" class="fs-slide"><img src="assets/feed1.jpg" alt="Hybrid Pro" /></a>
    <a href="product-detail.html?id=hybrid-rn-8000" class="fs-slide"><img src="assets/feed2.jpg" alt="RN-8000" /></a>
  </div>
  <div class="fs-caption">NEW ARRIVAL</div>
</aside>
<a href="https://wa.me/${window.JP_CONFIG ? window.JP_CONFIG.whatsappNumber : '6281234567890'}" class="wa-float" aria-label="WhatsApp"><svg viewBox="0 0 24 24" width="28" height="28" fill="white"><path d="M20 12a8 8 0 1 1-3.4-6.5l1.7-1.7A10 10 0 1 0 22 12h-2zm-3.6 1.8c-.3-.2-1.8-.9-2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7 0-1.2-.4-2.3-1.4c-.9-.8-1.4-1.7-1.6-2s0-.4.1-.6.3-.3.4-.5.2-.3.3-.5 0-.4 0-.5l-.7-1.8c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5 0-.7.3s-.9 1-.9 2.3.9 2.7 1 2.9 1.8 2.9 4.5 4 3 .7 3.6.7 1.7-.7 2-1.4.3-1.3.2-1.4-.2-.2-.5-.4z"/></svg></a>`;

  const headerEl = document.getElementById('siteHeader');
  const footerEl = document.getElementById('siteFooter');
  if (headerEl) headerEl.innerHTML = header;
  if (footerEl) footerEl.innerHTML = footer;

  // -------- LIVE SEARCH --------
  setTimeout(() => {
    const input = document.getElementById('searchInput');
    const results = document.getElementById('searchResults');
    if (!input || !results) return;
    input.addEventListener('input', () => {
      const q = input.value.trim().toLowerCase();
      if (!q || !window.JP_PRODUCTS) { results.innerHTML = ''; return; }
      const matches = window.JP_PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(q) || p.catLabel.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
      ).slice(0, 6);
      results.innerHTML = matches.length === 0
        ? `<p style="opacity:.6;margin-top:24px">Tidak ditemukan untuk "${q}"</p>`
        : matches.map(p => `
          <a href="product-detail.html?id=${p.id}" class="sr-item">
            <img src="${p.image}" alt="${p.name}" />
            <div><h5>${p.name}</h5><span>${p.catLabel}</span></div>
            <strong>${window.JP_formatRp(p.price)}</strong>
          </a>
        `).join('');
    });
  }, 0);
})();
