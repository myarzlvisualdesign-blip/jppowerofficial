// ============ DYNAMIC PAGE RENDERERS ============
(() => {

  const fmt = (n) => 'Rp ' + (n || 0).toLocaleString('id-ID');

  const cardHTML = (p) => `
    <article class="yx-card" data-cat="${p.category}" data-id="${p.id}">
      <div class="yx-img">
        ${p.badge ? `<span class="yx-badge ${p.badgeType === 'red' ? 'red' : p.badgeType === 'yellow' ? 'yellow' : ''}">${p.badge}</span>` : ''}
        <button class="yx-wish" data-wish-toggle="${p.id}" aria-label="Wishlist"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg></button>
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
        <a href="product-detail.html?id=${p.id}" class="yx-quick">QUICK VIEW</a>
      </div>
      <div class="yx-info">
        <span class="yx-cat">${p.catLabel}</span>
        <h3>${p.name}</h3>
        <div class="yx-rating"><span class="stars">★★★★★</span><span class="count">(${p.reviews || 0})</span></div>
        <p class="yx-price">${p.oldPrice ? `<span class="old">${fmt(p.oldPrice)}</span>` : ''}${fmt(p.price)}</p>
        <button class="btn btn-primary btn-add" data-add-to-cart="${p.id}" style="margin-top:14px;width:100%;padding:10px;font-size:12px"><span>+ ADD TO CART</span></button>
      </div>
    </article>
  `;

  // Treat "string" filter as combined "String & Grip"
  const matchCat = (p, cat) => {
    if (cat === 'all') return true;
    if (cat === 'string') return p.category === 'string' || p.category === 'grip';
    return p.category === cat;
  };

  // -------- RENDER GRIDS (any [data-render-grid]) --------
  document.querySelectorAll('[data-render-grid]').forEach(grid => {
    const mode = grid.dataset.renderGrid; // "all" or category
    const limit = +grid.dataset.limit || 0;
    let list = window.JP_PRODUCTS.slice();
    if (mode && mode !== 'all') {
      list = list.filter(p => matchCat(p, mode));
    }
    if (grid.dataset.featured === 'true') {
      list = list.filter(p => p.badge);
    }
    if (limit) list = list.slice(0, limit);
    grid.innerHTML = list.map(cardHTML).join('');
  });

  // -------- FILTER (product.html) --------
  const filterRoot = document.querySelector('[data-product-filter]');
  if (filterRoot) {
    const params = new URLSearchParams(location.search);
    const initialCat = params.get('cat') || 'all';
    const initialQ = (params.get('q') || '').toLowerCase();

    const chipsWrap = filterRoot.querySelector('.filter-chips');
    const sortSel = filterRoot.querySelector('[data-sort]');
    const gridEl = filterRoot.querySelector('[data-render-grid]');

    const apply = () => {
      const activeChip = chipsWrap.querySelector('.filter-chip.active');
      const cat = activeChip ? activeChip.dataset.filter : 'all';
      const sort = sortSel ? sortSel.value : 'featured';
      let list = window.JP_PRODUCTS.slice();
      if (cat !== 'all') list = list.filter(p => matchCat(p, cat));
      if (initialQ) list = list.filter(p => p.name.toLowerCase().includes(initialQ));
      if (sort === 'price-asc') list.sort((a,b) => a.price - b.price);
      else if (sort === 'price-desc') list.sort((a,b) => b.price - a.price);
      else if (sort === 'newest') list.sort((a,b) => (b.badge === 'NEW' ? 1 : 0) - (a.badge === 'NEW' ? 1 : 0));
      else if (sort === 'best') list.sort((a,b) => (b.sold || 0) - (a.sold || 0));
      gridEl.innerHTML = list.length ? list.map(cardHTML).join('') : '<p style="grid-column:1/-1;text-align:center;padding:60px;color:var(--grey-500)">Tidak ada produk yang cocok.</p>';
    };

    // set initial active chip
    chipsWrap.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
    const initial = chipsWrap.querySelector(`[data-filter="${initialCat}"]`) || chipsWrap.querySelector('[data-filter="all"]');
    if (initial) initial.classList.add('active');

    chipsWrap.querySelectorAll('.filter-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        chipsWrap.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        apply();
      });
    });
    if (sortSel) sortSel.addEventListener('change', apply);

    apply();
  }

  // -------- PRODUCT DETAIL --------
  const pdRoot = document.querySelector('[data-product-detail]');
  if (pdRoot) {
    const params = new URLSearchParams(location.search);
    const id = params.get('id') || 'future-66-iii';
    const p = window.JP_findProduct(id) || window.JP_PRODUCTS[0];

    document.title = `${p.name} | JP-POWER Official`;

    // breadcrumb name
    const crumb = document.querySelector('[data-crumb-name]');
    if (crumb) crumb.textContent = p.name;

    pdRoot.innerHTML = `
      <div class="pd-gallery reveal">
        <div class="pd-main"><img src="${p.gallery[0] || p.image}" alt="${p.name}" /></div>
        <div class="pd-thumbs">
          ${(p.gallery.length ? p.gallery : [p.image]).map((src, i) => `
            <div class="pd-thumb ${i === 0 ? 'active' : ''}"><img src="${src}" alt="t${i}" /></div>
          `).join('')}
        </div>
      </div>
      <div class="pd-info reveal reveal-delay-1">
        <span class="yx-cat">${p.catLabel}</span>
        <h1>${p.name}</h1>
        <div class="pd-rating">
          <span class="stars">★★★★★</span>
          <span>${p.rating} (${p.reviews} reviews)</span>
          <span>· ${p.sold} terjual</span>
        </div>
        <p class="pd-price">${fmt(p.price)} ${p.oldPrice ? `<small>${fmt(p.oldPrice)}</small>` : ''}</p>
        ${p.oldPrice ? `<p style="display:inline-block;background:var(--red);color:#fff;padding:4px 12px;border-radius:6px;font-family:'Barlow Condensed',sans-serif;font-weight:700;letter-spacing:.14em;font-size:12px;margin-top:8px">HEMAT ${fmt(p.oldPrice - p.price)}</p>` : ''}
        <p class="pd-desc">${p.description}</p>

        ${p.colors && p.colors.length ? `
          <div class="pd-options" data-opt="color">
            <div class="pd-opt-label">PILIH WARNA: <strong data-color-name>${p.colors[0].name}</strong></div>
            <div class="pd-opts pd-colors">
              ${p.colors.map((c, i) => `<div class="pd-color ${i === 0 ? 'active' : ''}" data-color="${c.name}" style="background:${c.hex}" title="${c.name}"></div>`).join('')}
            </div>
          </div>` : ''}

        ${p.sizes && p.sizes.length ? `
          <div class="pd-options" data-opt="size">
            <div class="pd-opt-label">UKURAN</div>
            <div class="pd-opts">
              ${p.sizes.map(s => `<div class="pd-opt ${s === p.defaultSize ? 'active' : ''}" data-size="${s}">${s}</div>`).join('')}
            </div>
          </div>` : ''}

        ${p.tensions && p.tensions.length ? `
          <div class="pd-options" data-opt="tension">
            <div class="pd-opt-label">TENSION</div>
            <div class="pd-opts">
              ${p.tensions.map(t => `<div class="pd-opt ${t === p.defaultTension ? 'active' : ''}" data-tension="${t}">${t}</div>`).join('')}
            </div>
          </div>` : ''}

        <div class="pd-actions">
          <div class="pd-qty">
            <button data-qty="-">−</button>
            <input type="number" value="1" min="1" />
            <button data-qty="+">+</button>
          </div>
          <button class="btn btn-primary" id="pdAddCart" style="flex:1"><span>ADD TO CART</span></button>
          <button class="btn btn-dark" id="pdBuyNow" style="flex:1"><span>BUY NOW</span></button>
        </div>

        <p style="margin-top:14px;font-size:13px;color:var(--grey-500)">
          ${p.stock > 0 ? `<span style="color:var(--green)">● IN STOCK</span> — ${p.stock} tersedia` : '<span style="color:var(--red)">● OUT OF STOCK</span>'}
        </p>

        <div class="pd-spec">
          <h4>SPESIFIKASI</h4>
          <table>
            ${Object.entries(p.spec || {}).map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join('')}
          </table>
        </div>
      </div>
    `;

    // gallery thumb switching
    const pdThumbs = pdRoot.querySelectorAll('.pd-thumb');
    const pdMainImg = pdRoot.querySelector('.pd-main img');
    pdThumbs.forEach(t => t.addEventListener('click', () => {
      pdThumbs.forEach(x => x.classList.remove('active'));
      t.classList.add('active');
      pdMainImg.src = t.querySelector('img').src;
    }));

    // option select
    pdRoot.querySelectorAll('[data-opt]').forEach(group => {
      group.querySelectorAll('.pd-opt, .pd-color').forEach(opt => {
        opt.addEventListener('click', () => {
          group.querySelectorAll('.pd-opt, .pd-color').forEach(x => x.classList.remove('active'));
          opt.classList.add('active');
          if (group.dataset.opt === 'color') {
            const nameEl = group.querySelector('[data-color-name]');
            if (nameEl) nameEl.textContent = opt.dataset.color;
          }
        });
      });
    });

    // qty
    pdRoot.querySelectorAll('.pd-qty').forEach(q => {
      const input = q.querySelector('input');
      q.querySelector('[data-qty="-"]').addEventListener('click', () => input.value = Math.max(1, (+input.value) - 1));
      q.querySelector('[data-qty="+"]').addEventListener('click', () => input.value = (+input.value) + 1);
    });

    const getSelectedOpts = () => {
      const qty = +pdRoot.querySelector('.pd-qty input').value || 1;
      const color = pdRoot.querySelector('[data-opt="color"] .pd-color.active')?.dataset.color;
      const size  = pdRoot.querySelector('[data-opt="size"]  .pd-opt.active')?.dataset.size;
      const tension = pdRoot.querySelector('[data-opt="tension"] .pd-opt.active')?.dataset.tension;
      return { qty, color, size, tension };
    };

    document.getElementById('pdAddCart').addEventListener('click', () => {
      window.JP_Cart.add(p.id, getSelectedOpts());
    });
    document.getElementById('pdBuyNow').addEventListener('click', () => {
      window.JP_Cart.add(p.id, getSelectedOpts());
      setTimeout(() => location.href = 'checkout.html', 400);
    });

    // related section
    const relatedGrid = document.querySelector('[data-related-grid]');
    if (relatedGrid) {
      const related = window.JP_PRODUCTS.filter(x => x.id !== p.id && x.category === p.category).slice(0, 4);
      const fallback = window.JP_PRODUCTS.filter(x => x.id !== p.id).slice(0, 4);
      const list = related.length >= 4 ? related : fallback;
      relatedGrid.innerHTML = list.map(cardHTML).join('');
    }
  }

  // -------- CART PAGE --------
  const cartRoot = document.querySelector('[data-cart-page]');
  if (cartRoot) {
    const renderCart = () => {
      const items = window.JP_Cart.items();
      const listEl = cartRoot.querySelector('[data-cart-list]');
      const sumEl = cartRoot.querySelector('[data-cart-summary]');

      if (items.length === 0) {
        cartRoot.innerHTML = `
          <div class="wishlist-empty">
            <svg viewBox="0 0 24 24" width="80" height="80" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>
            <h3>Keranjang Masih Kosong</h3>
            <p>Yuk lihat-lihat produk dulu</p>
            <a href="product.html" class="btn btn-primary"><span>BELANJA SEKARANG</span></a>
          </div>`;
        return;
      }

      listEl.innerHTML = items.map((it, i) => `
        <div class="cart-item">
          <div class="cart-item-img"><img src="${it.image}" alt="${it.name}" /></div>
          <div class="cart-item-meta">
            <h4>${it.name}</h4>
            ${it.variant && Object.keys(it.variant).length ? `<span class="vrt">${Object.entries(it.variant).map(([k,v]) => `${k}: ${v}`).join(' · ')}</span>` : ''}
            <div class="price-line">
              <strong>${fmt(it.price)}</strong>
              ${it.oldPrice ? `<span style="color:var(--grey-300);text-decoration:line-through;font-size:13px">${fmt(it.oldPrice)}</span>` : ''}
            </div>
          </div>
          <div class="cart-item-actions">
            <div class="cd-qty">
              <button data-cart-act="qty-" data-i="${i}">−</button>
              <span>${it.qty}</span>
              <button data-cart-act="qty+" data-i="${i}">+</button>
            </div>
            <strong style="font-family:'Oswald',sans-serif;font-size:18px;color:var(--green)">${fmt(it.price * it.qty)}</strong>
            <button data-cart-act="remove" data-i="${i}" style="background:none;border:0;color:var(--grey-500);cursor:pointer;font-size:13px;font-family:'Barlow Condensed',sans-serif;letter-spacing:.15em;">× HAPUS</button>
          </div>
        </div>
      `).join('');

      sumEl.innerHTML = `
        <h3>RINGKASAN</h3>
        <div class="cd-line"><span>Subtotal (${window.JP_Cart.count()} item)</span><strong>${fmt(window.JP_Cart.subtotal())}</strong></div>
        <div class="cd-line"><span>Ongkir</span><strong>${window.JP_Cart.shipping() === 0 ? '<span style="color:var(--green)">GRATIS</span>' : fmt(window.JP_Cart.shipping())}</strong></div>
        <div class="cd-line total"><span>TOTAL</span><strong>${fmt(window.JP_Cart.total())}</strong></div>
        ${window.JP_Cart.shipping() === 0 ? '<p style="color:var(--green);font-size:13px;margin:14px 0">✓ Selamat! Anda dapat free ongkir</p>' : `<p style="color:var(--grey-500);font-size:13px;margin:14px 0">Belanja ${fmt(window.JP_CONFIG.freeShippingMin - window.JP_Cart.subtotal())} lagi untuk free ongkir</p>`}
        <a href="checkout.html" class="btn btn-primary" style="width:100%;margin-bottom:8px"><span>CHECKOUT →</span></a>
        <a href="product.html" class="btn btn-outline" style="width:100%"><span>LANJUT BELANJA</span></a>
      `;

      // wire actions
      listEl.querySelectorAll('[data-cart-act]').forEach(btn => {
        btn.onclick = () => {
          const i = +btn.dataset.i;
          const act = btn.dataset.cartAct;
          if (act === 'qty+') window.JP_Cart.updateQty(i, items[i].qty + 1);
          else if (act === 'qty-') window.JP_Cart.updateQty(i, items[i].qty - 1);
          else if (act === 'remove') window.JP_Cart.remove(i);
        };
      });
    };

    renderCart();
    window.addEventListener('jp:cart-change', renderCart);
  }

  // -------- WISHLIST PAGE --------
  const wishRoot = document.querySelector('[data-wishlist-page]');
  if (wishRoot) {
    const renderWish = () => {
      const ids = window.JP_Wishlist.items();
      const products = ids.map(id => window.JP_findProduct(id)).filter(Boolean);
      if (products.length === 0) {
        wishRoot.innerHTML = `
          <div class="wishlist-empty">
            <svg viewBox="0 0 24 24" width="80" height="80" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>
            <h3>Wishlist Kosong</h3>
            <p>Tap icon ♥ di produk untuk simpan ke wishlist</p>
            <a href="product.html" class="btn btn-primary"><span>LIHAT PRODUK</span></a>
          </div>`;
        return;
      }
      wishRoot.innerHTML = `<div class="yx-grid">${products.map(cardHTML).join('')}</div>`;
    };
    renderWish();
    window.addEventListener('jp:wish-change', renderWish);
  }

  // -------- CHECKOUT --------
  const checkoutRoot = document.querySelector('[data-checkout-page]');
  if (checkoutRoot) {
    const renderSummary = () => {
      const items = window.JP_Cart.items();
      const sumEl = checkoutRoot.querySelector('[data-checkout-summary]');
      if (items.length === 0) {
        sumEl.innerHTML = `
          <h3>ORDER SUMMARY</h3>
          <p style="color:var(--grey-500);padding:20px 0">Keranjang kosong. <a href="product.html" style="color:var(--green)">Mulai belanja →</a></p>`;
        return;
      }
      sumEl.innerHTML = `
        <h3>ORDER SUMMARY</h3>
        <div style="margin-bottom:18px;max-height:320px;overflow-y:auto">
          ${items.map(it => `
            <div style="display:grid;grid-template-columns:60px 1fr auto;gap:12px;padding:10px 0;border-bottom:1px solid var(--grey-100);align-items:center">
              <div style="width:60px;height:60px;border-radius:8px;overflow:hidden;background:var(--grey-50)"><img src="${it.image}" style="width:100%;height:100%;object-fit:cover"/></div>
              <div>
                <h5 style="margin:0 0 4px;font-family:'Oswald',sans-serif;font-size:13px;letter-spacing:.04em">${it.name}</h5>
                <span style="font-size:11px;color:var(--grey-500)">${it.qty} × ${fmt(it.price)}${it.variant && Object.values(it.variant).length ? ' · ' + Object.values(it.variant).join(', ') : ''}</span>
              </div>
              <strong style="font-family:'Oswald',sans-serif">${fmt(it.price * it.qty)}</strong>
            </div>
          `).join('')}
        </div>
        <div class="cd-line"><span>Subtotal</span><strong>${fmt(window.JP_Cart.subtotal())}</strong></div>
        <div class="cd-line"><span>Ongkir</span><strong>${window.JP_Cart.shipping() === 0 ? '<span style="color:var(--green)">GRATIS</span>' : fmt(window.JP_Cart.shipping())}</strong></div>
        <div class="cd-line total"><span>TOTAL</span><strong>${fmt(window.JP_Cart.total())}</strong></div>
      `;
    };
    renderSummary();
    window.addEventListener('jp:cart-change', renderSummary);

    // method cards toggle
    document.querySelectorAll('.method-grid').forEach(grid => {
      grid.querySelectorAll('.method-card').forEach(card => {
        card.addEventListener('click', () => {
          grid.querySelectorAll('.method-card').forEach(c => c.classList.remove('active'));
          card.classList.add('active');
          const radio = card.querySelector('input[type=radio]');
          if (radio) radio.checked = true;
        });
      });
    });

    // submit
    const form = document.getElementById('checkoutForm');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (window.JP_Cart.count() === 0) {
          window.JP_toast('Keranjang kosong', 'error');
          return;
        }
        const fd = new FormData(form);
        const order = {
          name: fd.get('name'),
          phone: fd.get('phone'),
          email: fd.get('email'),
          address: fd.get('address'),
          city: fd.get('city'),
          postal: fd.get('postal'),
          shipping: fd.get('shipping'),
          payment: fd.get('payment'),
          notes: fd.get('notes')
        };
        window.JP_Cart.checkoutToWhatsApp(order);
        window.JP_toast('✓ Mengarahkan ke WhatsApp...', 'success');
      });
    }
  }
})();
