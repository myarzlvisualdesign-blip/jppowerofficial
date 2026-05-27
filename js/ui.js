// ============ UI HELPERS (toast, drawer, badges) ============
(() => {
  // -------- TOAST --------
  let toastWrap;
  const ensureWrap = () => {
    if (!toastWrap) {
      toastWrap = document.createElement('div');
      toastWrap.className = 'toast-wrap';
      document.body.appendChild(toastWrap);
    }
    return toastWrap;
  };
  window.JP_toast = (msg, type = 'success') => {
    const wrap = ensureWrap();
    const el = document.createElement('div');
    el.className = `toast toast-${type}`;
    el.innerHTML = `<span>${msg}</span>`;
    wrap.appendChild(el);
    requestAnimationFrame(() => el.classList.add('in'));
    setTimeout(() => {
      el.classList.remove('in');
      setTimeout(() => el.remove(), 400);
    }, 2600);
  };

  // -------- CART DRAWER --------
  const renderCartDrawer = () => {
    const drawer = document.getElementById('cartDrawer');
    if (!drawer) return;
    const items = window.JP_Cart.items();
    const fmt = window.JP_formatRp;
    const itemsHTML = items.length === 0
      ? `<div class="cd-empty">
          <svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>
          <h4>Keranjang Kosong</h4>
          <p>Yuk belanja dulu</p>
          <a href="product.html" class="btn btn-primary"><span>LIHAT PRODUK</span></a>
        </div>`
      : items.map((it, i) => `
        <div class="cd-item">
          <div class="cd-thumb"><img src="${it.image}" alt="${it.name}" /></div>
          <div class="cd-meta">
            <h5>${it.name}</h5>
            ${it.variant && Object.keys(it.variant).length ? `<span class="cd-var">${Object.values(it.variant).join(' · ')}</span>` : ''}
            <div class="cd-row">
              <div class="cd-qty">
                <button data-act="qty-" data-i="${i}">−</button>
                <span>${it.qty}</span>
                <button data-act="qty+" data-i="${i}">+</button>
              </div>
              <strong>${fmt(it.price * it.qty)}</strong>
            </div>
          </div>
          <button class="cd-remove" data-act="remove" data-i="${i}" aria-label="Remove">×</button>
        </div>
      `).join('');

    const summary = items.length === 0 ? '' : `
      <div class="cd-summary">
        <div class="cd-line"><span>Subtotal</span><strong>${fmt(window.JP_Cart.subtotal())}</strong></div>
        <div class="cd-line"><span>Ongkir</span><strong>${window.JP_Cart.shipping() === 0 ? '<span style="color:var(--green)">GRATIS</span>' : fmt(window.JP_Cart.shipping())}</strong></div>
        <div class="cd-line total"><span>TOTAL</span><strong>${fmt(window.JP_Cart.total())}</strong></div>
        ${window.JP_Cart.shipping() === 0 ? '<p class="cd-free">✓ Selamat! Anda dapat free ongkir</p>' : `<p class="cd-free">Belanja ${fmt(window.JP_CONFIG.freeShippingMin - window.JP_Cart.subtotal())} lagi untuk free ongkir</p>`}
        <div class="cd-actions">
          <a href="cart.html" class="btn btn-outline"><span>LIHAT KERANJANG</span></a>
          <a href="checkout.html" class="btn btn-primary"><span>CHECKOUT →</span></a>
        </div>
      </div>`;

    drawer.querySelector('.cd-list').innerHTML = itemsHTML;
    drawer.querySelector('.cd-bottom').innerHTML = summary;

    // wire events
    drawer.querySelectorAll('[data-act]').forEach(btn => {
      btn.onclick = () => {
        const i = +btn.dataset.i;
        const act = btn.dataset.act;
        if (act === 'qty+') window.JP_Cart.updateQty(i, items[i].qty + 1);
        else if (act === 'qty-') window.JP_Cart.updateQty(i, items[i].qty - 1);
        else if (act === 'remove') window.JP_Cart.remove(i);
      };
    });
  };

  const openCartDrawer = () => {
    const d = document.getElementById('cartDrawer');
    if (!d) return;
    renderCartDrawer();
    d.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  const closeCartDrawer = () => {
    const d = document.getElementById('cartDrawer');
    if (!d) return;
    d.classList.remove('open');
    document.body.style.overflow = '';
  };
  window.JP_openCart = openCartDrawer;

  // -------- UPDATE BADGES --------
  const updateBadges = () => {
    const cartCount = window.JP_Cart.count();
    const wishCount = window.JP_Wishlist.count();
    document.querySelectorAll('[data-cart-count]').forEach(el => {
      el.textContent = cartCount;
      el.style.display = cartCount > 0 ? '' : 'none';
    });
    document.querySelectorAll('[data-wish-count]').forEach(el => {
      el.textContent = wishCount;
      el.style.display = wishCount > 0 ? '' : 'none';
    });
    // re-render drawer if open
    const d = document.getElementById('cartDrawer');
    if (d && d.classList.contains('open')) renderCartDrawer();
    // update wishlist heart icons
    document.querySelectorAll('[data-wish-toggle]').forEach(btn => {
      const id = btn.dataset.wishToggle;
      btn.classList.toggle('active', window.JP_Wishlist.has(id));
    });
  };

  // -------- WIRE ADD TO CART (delegated) --------
  document.addEventListener('click', (e) => {
    const addBtn = e.target.closest('[data-add-to-cart]');
    if (addBtn) {
      e.preventDefault();
      const id = addBtn.dataset.addToCart;
      const qty = +addBtn.dataset.qty || 1;
      const color = addBtn.dataset.color || null;
      const size = addBtn.dataset.size || null;
      const tension = addBtn.dataset.tension || null;
      window.JP_Cart.add(id, { qty, color, size, tension });
      return;
    }
    const wishBtn = e.target.closest('[data-wish-toggle]');
    if (wishBtn) {
      e.preventDefault();
      e.stopPropagation();
      window.JP_Wishlist.toggle(wishBtn.dataset.wishToggle);
      return;
    }
    const openBtn = e.target.closest('[data-open-cart]');
    if (openBtn) {
      e.preventDefault();
      openCartDrawer();
      return;
    }
    const closeBtn = e.target.closest('[data-close-cart]');
    if (closeBtn) {
      e.preventDefault();
      closeCartDrawer();
      return;
    }
  });

  // -------- INIT --------
  const init = () => {
    updateBadges();
    window.addEventListener('jp:cart-change', updateBadges);
    window.addEventListener('jp:wish-change', updateBadges);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
