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
        <li class="has-dropdown">
          <a class="${isActive('product.html')}" href="product.html">PRODUK <span class="caret">▾</span></a>
          <div class="mega-dropdown">
            <a href="product.html" class="mega-item">Semua</a>
            <div class="mega-item has-sub">
              <a href="product.html" class="mega-item-link">Koleksi <span class="arrow">›</span></a>
              <div class="mega-sub">
                <a href="product.html?cat=raket">Raket Badminton</a>
                <a href="product.html?cat=shoes">Shoes Badminton</a>
                <a href="product.html?cat=apparel">Apparel</a>
                <a href="product.html?cat=short">Short</a>
                <a href="product.html?cat=string">String &amp; Grip</a>
                <a href="product.html?cat=bag">Bag</a>
                <a href="product.html?cat=court">Court Accessories</a>
                <a href="product.html?cat=stringing">Stringing Machine</a>
              </div>
            </div>
          </div>
        </li>
        <li><a class="${isActive('jp-store.html')}" href="jp-store.html">JP STORE</a></li>
        <li><a class="${isActive('online-store.html')}" href="online-store.html">ONLINE STORE</a></li>
        <li><a class="${isActive('offline.html')}" href="offline.html">TOKO OFFLINE PARTNER</a></li>
        <li><a class="${isActive('catalog.html')}" href="catalog.html">KATALOG</a></li>
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
          <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
          <a href="#" aria-label="TikTok"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.74a8.16 8.16 0 0 0 4.77 1.52V6.85a4.85 4.85 0 0 1-1.84-.16z"/></svg></a>
          <a href="https://wa.me/${window.JP_CONFIG ? window.JP_CONFIG.whatsappNumber : '6281234567890'}" aria-label="WhatsApp"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.075-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.002-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413"/></svg></a>
          <a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
          <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M24 12.073C24 5.404 18.627.031 11.958.031 5.288.031-.085 5.404-.085 12.073c0 6.014 4.388 10.998 10.125 11.927V15.56H7.078v-3.487h2.962V9.488c0-2.927 1.742-4.546 4.41-4.546 1.276 0 2.612.228 2.612.228v2.873h-1.47c-1.45 0-1.902.9-1.902 1.824v2.207h3.236l-.517 3.487H13.69v8.44C19.612 23.071 24 18.087 24 12.073z"/></svg></a>
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
<a href="https://wa.me/${window.JP_CONFIG ? window.JP_CONFIG.whatsappNumber : '6281234567890'}" class="wa-float" aria-label="Chat WhatsApp"><svg viewBox="0 0 32 32" width="32" height="32" fill="#fff" aria-hidden="true"><path d="M16.003 0C7.171 0 .002 7.169.002 16c0 2.823.737 5.572 2.137 7.989L0 32l8.225-2.155A15.94 15.94 0 0 0 16.003 32C24.831 32 32 24.831 32 16S24.831 0 16.003 0Zm0 29.227a13.21 13.21 0 0 1-6.72-1.838l-.482-.286-4.886 1.281 1.305-4.762-.314-.493A13.205 13.205 0 0 1 2.78 16c0-7.293 5.93-13.223 13.223-13.223 3.531 0 6.85 1.376 9.348 3.873a13.135 13.135 0 0 1 3.875 9.355c0 7.293-5.931 13.222-13.223 13.222Zm7.244-9.9c-.397-.198-2.348-1.158-2.712-1.291-.364-.132-.629-.198-.893.199-.265.397-1.025 1.291-1.257 1.555-.231.265-.463.298-.86.099-.397-.198-1.677-.617-3.193-1.969-1.18-1.052-1.976-2.351-2.208-2.748-.231-.397-.025-.611.174-.809.179-.179.397-.463.595-.695.198-.231.265-.397.397-.661.132-.265.066-.496-.033-.694-.099-.198-.893-2.152-1.223-2.946-.322-.773-.65-.668-.893-.68-.231-.012-.496-.014-.76-.014-.265 0-.694.099-1.058.496-.364.397-1.39 1.358-1.39 3.312s1.423 3.842 1.621 4.106c.199.265 2.799 4.273 6.78 5.992.948.409 1.687.653 2.264.836.951.302 1.817.26 2.502.157.764-.114 2.348-.96 2.679-1.887.33-.926.33-1.72.231-1.886-.099-.165-.363-.264-.76-.462Z"/></svg></a>`;

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
