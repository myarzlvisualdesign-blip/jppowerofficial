// ============ CART + WISHLIST MODULE ============
(() => {
  const CART_KEY = 'jp_cart_v1';
  const WISH_KEY = 'jp_wishlist_v1';

  // -------- STORAGE --------
  const load = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) || d; } catch { return d; } };
  const save = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} };

  let cart = load(CART_KEY, []);
  let wish = load(WISH_KEY, []);

  // -------- EVENTS --------
  const emit = (name, detail = {}) => window.dispatchEvent(new CustomEvent(name, { detail }));

  // -------- CART API --------
  const Cart = {
    items: () => cart,
    count: () => cart.reduce((s, i) => s + i.qty, 0),
    subtotal: () => cart.reduce((s, i) => s + i.price * i.qty, 0),
    shipping: () => {
      if (cart.length === 0) return 0;
      return Cart.subtotal() >= window.JP_CONFIG.freeShippingMin ? 0 : window.JP_CONFIG.shippingFlat;
    },
    total: () => Cart.subtotal() + Cart.shipping(),
    find: (id, variant) => cart.find(i => i.id === id && JSON.stringify(i.variant || {}) === JSON.stringify(variant || {})),

    add(productId, opts = {}) {
      const product = window.JP_findProduct(productId);
      if (!product) return false;
      const variant = {
        color: opts.color || (product.colors && product.colors[0] && product.colors[0].name) || null,
        size: opts.size || product.defaultSize || null,
        tension: opts.tension || product.defaultTension || null
      };
      // strip nulls
      Object.keys(variant).forEach(k => variant[k] == null && delete variant[k]);
      const qty = Math.max(1, opts.qty || 1);
      const existing = Cart.find(productId, variant);
      if (existing) {
        existing.qty += qty;
      } else {
        cart.push({
          id: product.id,
          name: product.name,
          price: product.price,
          oldPrice: product.oldPrice || null,
          image: product.image,
          variant,
          qty
        });
      }
      save(CART_KEY, cart);
      emit('jp:cart-change');
      window.JP_toast && window.JP_toast(`✓ ${product.name} ditambahkan`, 'success');
      return true;
    },

    updateQty(idx, qty) {
      if (!cart[idx]) return;
      qty = Math.max(1, qty | 0);
      cart[idx].qty = qty;
      save(CART_KEY, cart);
      emit('jp:cart-change');
    },

    remove(idx) {
      if (!cart[idx]) return;
      const name = cart[idx].name;
      cart.splice(idx, 1);
      save(CART_KEY, cart);
      emit('jp:cart-change');
      window.JP_toast && window.JP_toast(`✗ ${name} dihapus`, 'info');
    },

    clear() {
      cart = [];
      save(CART_KEY, cart);
      emit('jp:cart-change');
    },

    formatWhatsApp(order = {}) {
      const cfg = window.JP_CONFIG;
      const fmt = (n) => 'Rp ' + (n || 0).toLocaleString('id-ID');
      let msg = `*=== ORDER ${cfg.shopName} ===*\n\n`;
      if (order.name) msg += `*Nama:* ${order.name}\n`;
      if (order.phone) msg += `*HP:* ${order.phone}\n`;
      if (order.email) msg += `*Email:* ${order.email}\n`;
      if (order.address) msg += `*Alamat:*\n${order.address}\n`;
      if (order.city) msg += `*Kota:* ${order.city}\n`;
      if (order.postal) msg += `*Kode Pos:* ${order.postal}\n`;
      if (order.shipping) msg += `*Pengiriman:* ${order.shipping}\n`;
      if (order.payment) msg += `*Pembayaran:* ${order.payment}\n`;
      msg += `\n*--- DETAIL PESANAN ---*\n\n`;
      cart.forEach((i, idx) => {
        msg += `${idx + 1}. *${i.name}*\n`;
        if (i.variant && Object.keys(i.variant).length) {
          msg += `   Varian: ${Object.entries(i.variant).map(([k,v]) => `${k}=${v}`).join(', ')}\n`;
        }
        msg += `   ${i.qty} x ${fmt(i.price)} = ${fmt(i.price * i.qty)}\n\n`;
      });
      msg += `*--- RINGKASAN ---*\n`;
      msg += `Subtotal: ${fmt(Cart.subtotal())}\n`;
      msg += `Ongkir: ${Cart.shipping() === 0 ? 'GRATIS' : fmt(Cart.shipping())}\n`;
      msg += `*TOTAL: ${fmt(Cart.total())}*\n\n`;
      if (order.notes) msg += `*Catatan:* ${order.notes}\n\n`;
      msg += `_Order via jppowerofficial.pages.dev_`;
      return msg;
    },

    checkoutToWhatsApp(order = {}) {
      const text = encodeURIComponent(Cart.formatWhatsApp(order));
      const url = `https://wa.me/${window.JP_CONFIG.whatsappNumber}?text=${text}`;
      window.open(url, '_blank');
    }
  };

  // -------- WISHLIST API --------
  const Wishlist = {
    items: () => wish,
    count: () => wish.length,
    has: (id) => wish.includes(id),
    toggle(id) {
      const product = window.JP_findProduct(id);
      const idx = wish.indexOf(id);
      if (idx > -1) {
        wish.splice(idx, 1);
        save(WISH_KEY, wish);
        emit('jp:wish-change');
        window.JP_toast && window.JP_toast(`Removed from wishlist`, 'info');
        return false;
      } else {
        wish.push(id);
        save(WISH_KEY, wish);
        emit('jp:wish-change');
        window.JP_toast && window.JP_toast(`♥ ${product ? product.name : 'Item'} ditambahkan ke wishlist`, 'success');
        return true;
      }
    },
    remove(id) {
      const idx = wish.indexOf(id);
      if (idx > -1) {
        wish.splice(idx, 1);
        save(WISH_KEY, wish);
        emit('jp:wish-change');
      }
    }
  };

  // -------- EXPORT --------
  window.JP_Cart = Cart;
  window.JP_Wishlist = Wishlist;
})();
