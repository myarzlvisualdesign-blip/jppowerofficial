// ============ PRODUCT DATABASE ============
window.JP_PRODUCTS = [
  {
    id: 'ziven-power',
    name: 'ZIVEN POWER',
    category: 'raket',
    catLabel: 'CARBON WOVEN',
    price: 599900,
    oldPrice: 799900,
    badge: 'NEW',
    badgeType: 'green',
    rating: 4.9,
    reviews: 128,
    sold: 540,
    image: 'assets/unggulan1.jpg',
    gallery: ['assets/unggulan1.jpg', 'assets/banner.jpg', 'assets/feed3.jpg'],
    description: 'Raket carbon woven dengan teknologi Aero-Force frame & power boost system. Limited edition untuk pemain advanced.',
    colors: [
      { name: 'Red',    hex: '#E50914' },
      { name: 'Green',  hex: '#00B140' },
      { name: 'Blue',   hex: '#0047AB' }
    ],
    tensions: ['22 LBS', '25 LBS', '28 LBS', '30 LBS', '32 LBS'],
    defaultTension: '28 LBS',
    spec: {
      'Weight': '4U · 80±3g',
      'Balance': '290 ± 3 mm',
      'Length': '675 mm',
      'Flex': 'Stiff (8.0)',
      'Max Tension': '32 LBS',
      'Frame': 'Carbon Woven · HM Graphite',
      'Grip Size': 'G5'
    },
    stock: 24
  },
  {
    id: 'future-66-iii',
    name: 'FUTURE 66 III',
    category: 'raket',
    catLabel: 'ALL-ROUND',
    price: 395000,
    oldPrice: 565000,
    badge: '-30%',
    badgeType: 'red',
    rating: 4.9,
    reviews: 94,
    sold: 1234,
    image: 'assets/future66.png',
    gallery: ['assets/future66.png', 'assets/future66b.png', 'assets/feed3.jpg', 'assets/unggulan1.jpg'],
    description: 'Future 66 III adalah raket all-round generasi terbaru dengan frame carbon woven baru, max tension 32 LBS, dan balance 295±3 mm. Cocok untuk pemain yang mencari kombinasi power dan control yang seimbang.',
    colors: [
      { name: 'Red',    hex: '#E50914' },
      { name: 'Blue',   hex: '#0047AB' },
      { name: 'Pink',   hex: '#E91E63' },
      { name: 'Purple', hex: '#9C27B0' },
      { name: 'Green',  hex: '#00B140' }
    ],
    tensions: ['22 LBS', '25 LBS', '28 LBS', '30 LBS', '32 LBS'],
    defaultTension: '25 LBS',
    spec: {
      'Weight': '4U · 80±3g',
      'Balance': '295 ± 3 mm',
      'Length': '675 mm',
      'Flex': 'Medium (8.5)',
      'Max Tension': '32 LBS',
      'Frame': 'Carbon Woven · HM Graphite',
      'Grip Size': 'G5'
    },
    stock: 56
  },
  {
    id: 'dragon-z-attack',
    name: 'DRAGON Z ATTACK',
    category: 'raket',
    catLabel: 'AGGRESSIVE',
    price: 789900,
    badge: 'HOT',
    badgeType: 'yellow',
    rating: 4.9,
    reviews: 212,
    sold: 890,
    image: 'assets/unggulan2.jpg',
    gallery: ['assets/unggulan2.jpg', 'assets/banner.jpg'],
    description: 'Aggressive attack head-heavy balance. Aero-Force frame dengan max tension 32 LBS. Senjata untuk smash mematikan.',
    colors: [
      { name: 'Teal',   hex: '#26C6DA' },
      { name: 'Orange', hex: '#FF6B35' }
    ],
    tensions: ['25 LBS', '28 LBS', '30 LBS', '32 LBS'],
    defaultTension: '30 LBS',
    spec: {
      'Weight': '3U · 86±3g',
      'Balance': '300 ± 3 mm (Head Heavy)',
      'Length': '675 mm',
      'Flex': 'Stiff (7.5)',
      'Max Tension': '32 LBS',
      'Frame': 'Carbon Graphite Tech',
      'Grip Size': 'G5'
    },
    stock: 31
  },
  {
    id: 'magnum-x10',
    name: 'MAGNUM X10',
    category: 'raket',
    catLabel: 'SMART TECH',
    price: 879000,
    rating: 4.8,
    reviews: 76,
    sold: 320,
    image: 'assets/unggulan3.jpg',
    gallery: ['assets/unggulan3.jpg'],
    description: 'Smart Tech Integration dengan Anti-Twist Technology. Air Flow System untuk swing super cepat.',
    colors: [
      { name: 'Red',  hex: '#FF3366' },
      { name: 'Blue', hex: '#0047AB' }
    ],
    tensions: ['25 LBS', '28 LBS', '30 LBS', '32 LBS'],
    defaultTension: '28 LBS',
    spec: {
      'Weight': '4U · 82±3g',
      'Balance': '292 ± 3 mm',
      'Flex': 'Medium-Stiff',
      'Max Tension': '32 LBS',
      'Frame': 'TT-Nano Carbon',
      'Grip Size': 'G5'
    },
    stock: 18
  },
  {
    id: 'future-66-iii-b',
    name: 'FUTURE 66 III B',
    category: 'raket',
    catLabel: 'ALL-ROUND',
    price: 425000,
    rating: 4.7,
    reviews: 54,
    sold: 230,
    image: 'assets/future66b.png',
    gallery: ['assets/future66b.png', 'assets/future66.png'],
    description: 'Versi B dari Future 66 III dengan colorway eksklusif. Performa setara dengan colorway terbatas.',
    colors: [ { name: 'Mixed', hex: '#222' } ],
    tensions: ['25 LBS', '28 LBS', '30 LBS'],
    defaultTension: '25 LBS',
    spec: {
      'Weight': '4U · 80±3g',
      'Balance': '295 ± 3 mm',
      'Max Tension': '30 LBS',
      'Frame': 'Carbon Woven'
    },
    stock: 12
  },
  {
    id: 'hybrid-pro-black',
    name: 'SEPATU HYBRID PRO',
    category: 'shoes',
    catLabel: 'FOOTWEAR',
    price: 559900,
    badge: 'NEW',
    badgeType: 'green',
    rating: 4.9,
    reviews: 287,
    sold: 1450,
    image: 'assets/feed1.jpg',
    gallery: ['assets/feed1.jpg', 'assets/sepatu-hybrid.png'],
    description: 'Sepatu badminton premium dengan anti-twist sole, carbon outsole, lightweight upper. Grip maksimal di lapangan vinyl.',
    colors: [
      { name: 'Black/Red',   hex: '#0A0A0A' },
      { name: 'White/Black', hex: '#fff' }
    ],
    sizes: ['39', '40', '41', '42', '43', '44'],
    defaultSize: '42',
    spec: {
      'Upper': 'Mesh + Synthetic Leather',
      'Outsole': 'Carbon Rubber Anti-Twist',
      'Midsole': 'EVA + Air Cushion',
      'Weight': '290g (size 42)',
      'Made In': 'Indonesia'
    },
    stock: 87
  },
  {
    id: 'hybrid-pro-white',
    name: 'HYBRID PRO WHITE',
    category: 'shoes',
    catLabel: 'FOOTWEAR',
    price: 579000,
    rating: 4.8,
    reviews: 143,
    sold: 620,
    image: 'assets/sepatu-hybrid.png',
    gallery: ['assets/sepatu-hybrid.png', 'assets/feed1.jpg'],
    description: 'Hybrid Pro colorway putih. Stabilitas tinggi, breathable mesh upper.',
    colors: [ { name: 'White', hex: '#fff' } ],
    sizes: ['39', '40', '41', '42', '43', '44'],
    defaultSize: '42',
    spec: {
      'Upper': 'Breathable Mesh',
      'Outsole': 'Carbon Rubber',
      'Weight': '285g'
    },
    stock: 45
  },
  {
    id: 'hybrid-rn-8000',
    name: 'HYBRID RN-8000 SET',
    category: 'apparel',
    catLabel: 'JERSEY SET',
    price: 279000,
    badge: 'SET',
    badgeType: 'yellow',
    rating: 4.9,
    reviews: 98,
    sold: 540,
    image: 'assets/feed2.jpg',
    gallery: ['assets/feed2.jpg', 'assets/feed1.jpg'],
    description: 'Set lengkap T-Shirt + Grip Handuk + Skirt. Stretchable, breathable, quick-dry. Cooler material untuk performa optimal.',
    colors: [
      { name: 'Pink',   hex: '#FF2E63' },
      { name: 'Yellow', hex: '#FFD60A' },
      { name: 'Green',  hex: '#00B140' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    defaultSize: 'M',
    spec: {
      'Material': 'Polyester + Spandex',
      'Features': 'Quick Dry · Breathable · Stretchable',
      'Include': 'T-Shirt + Skirt + Grip Handuk'
    },
    stock: 64
  },
  {
    id: 'future-bundle',
    name: 'FUTURE BUNDLE SET',
    category: 'apparel',
    catLabel: 'BUNDLE',
    price: 645000,
    rating: 4.8,
    reviews: 64,
    sold: 180,
    image: 'assets/feed3.jpg',
    gallery: ['assets/feed3.jpg'],
    description: 'Bundle Future Raket + Apparel + Grip + Tas. Hemat 25% dibanding beli terpisah.',
    sizes: ['Mixed'],
    defaultSize: 'Mixed',
    spec: { 'Include': 'Raket + Tas + 2 Grip + Apparel' },
    stock: 22
  },
  {
    id: 'grip-handuk-tg500',
    name: 'GRIP HANDUK TG-500 MF',
    category: 'grip',
    catLabel: 'TOWEL GRIP',
    price: 7000,
    rating: 4.9,
    reviews: 312,
    sold: 4500,
    image: 'assets/unggulan5.jpg',
    gallery: ['assets/unggulan5.jpg'],
    description: 'Premium towel grip Micro Fiber. Ultra soft, daya tahan lama, anti slip saat tangan berkeringat.',
    colors: [
      { name: 'Pink',   hex: '#FF2E63' },
      { name: 'Orange', hex: '#FF6B35' },
      { name: 'Blue',   hex: '#0095DA' },
      { name: 'Yellow', hex: '#FFD60A' },
      { name: 'Navy',   hex: '#0A2540' },
      { name: 'White',  hex: '#fff' }
    ],
    spec: {
      'Material': 'Premium Micro Fiber',
      'Length': '1100 mm',
      'Width': '32 mm'
    },
    stock: 320
  },
  {
    id: 'grip-jp-100-og',
    name: 'GRIP JP 100 OG',
    category: 'grip',
    catLabel: 'OVERGRIP',
    price: 13000,
    badge: 'BEST SELLER',
    badgeType: 'green',
    rating: 4.9,
    reviews: 541,
    sold: 8200,
    image: 'assets/unggulan6.jpg',
    gallery: ['assets/unggulan6.jpg'],
    description: 'Overgrip favorit professional player. Tactile feel, anti-slip, durable.',
    colors: [
      { name: 'Black',  hex: '#0A0A0A' },
      { name: 'White',  hex: '#fff' },
      { name: 'Blue',   hex: '#0095DA' },
      { name: 'Pink',   hex: '#FF2E63' },
      { name: 'Yellow', hex: '#FFD60A' }
    ],
    spec: {
      'Type': 'Overgrip',
      'Material': 'PU + Anti-Slip Coating',
      'Length': '1050 mm'
    },
    stock: 540
  },
  {
    id: 'grip-tulang-pa70',
    name: 'GRIP TULANG PA-70',
    category: 'grip',
    catLabel: 'KEEL HAND GLUE',
    price: 15000,
    badge: 'NEW',
    badgeType: 'red',
    rating: 4.8,
    reviews: 189,
    sold: 1100,
    image: 'assets/unggulan4.jpg',
    gallery: ['assets/unggulan4.jpg'],
    description: 'Keel hand glue two-tone. Texture unik untuk grip lebih kuat. Feel good di tangan.',
    colors: [
      { name: 'Red/Yellow',  hex: '#E50914' },
      { name: 'Blue/Yellow', hex: '#0047AB' },
      { name: 'Black/Red',   hex: '#0A0A0A' }
    ],
    spec: {
      'Type': 'Keel Hand Glue',
      'Pattern': 'Two-Tone Texture'
    },
    stock: 220
  },
  {
    id: 'senar-virile-66',
    name: 'SENAR VIRILE-66',
    category: 'string',
    catLabel: 'STRING',
    price: 13000,
    rating: 4.7,
    reviews: 167,
    sold: 980,
    image: 'assets/unggulan6.jpg',
    gallery: ['assets/unggulan6.jpg'],
    description: 'Senar 0.66mm high-tension. Repulsion power tinggi, durability bagus.',
    colors: [
      { name: 'White',  hex: '#fff' },
      { name: 'Yellow', hex: '#FFD60A' }
    ],
    spec: {
      'Diameter': '0.66 mm',
      'Length': '10 m',
      'Max Tension': '32 LBS'
    },
    stock: 380
  },
  {
    id: 'thermal-bag-9r',
    name: 'JP THERMAL BAG 9R',
    category: 'bag',
    catLabel: 'RACKET BAG',
    price: 389000,
    badge: 'NEW',
    badgeType: 'yellow',
    rating: 4.8,
    reviews: 82,
    sold: 240,
    image: 'assets/banner.jpg',
    gallery: ['assets/banner.jpg'],
    description: 'Thermal racket bag 9 slot. Insulated kompartemen, padded shoulder strap.',
    colors: [
      { name: 'Black', hex: '#0A0A0A' },
      { name: 'Green', hex: '#00B140' }
    ],
    spec: {
      'Capacity': '9 Rackets',
      'Material': 'Thermal Insulated',
      'Dimensions': '78 × 24 × 32 cm'
    },
    stock: 38
  },
  {
    id: 'tour-bag-12r',
    name: 'JP TOUR BAG 12R',
    category: 'bag',
    catLabel: 'TOUR BAG',
    price: 559000,
    rating: 4.9,
    reviews: 45,
    sold: 120,
    image: 'assets/banner.jpg',
    gallery: ['assets/banner.jpg'],
    description: 'Tour bag 12 slot dengan 3 kompartemen besar. Untuk traveling & touring.',
    colors: [ { name: 'Black/Green', hex: '#0A0A0A' } ],
    spec: {
      'Capacity': '12 Rackets',
      'Compartments': '3 Main + 4 Side',
      'Material': 'Polyester 1680D'
    },
    stock: 18
  },
  {
    id: 'skirt-hybrid-rn-w',
    name: 'SKIRT HYBRID RN-W',
    category: 'apparel',
    catLabel: 'WOMEN',
    price: 189000,
    rating: 4.8,
    reviews: 73,
    sold: 290,
    image: 'assets/feed2.jpg',
    gallery: ['assets/feed2.jpg'],
    description: 'Skirt badminton wanita dengan inner short. Cooler material, stretchable, ringan.',
    colors: [
      { name: 'White', hex: '#fff' },
      { name: 'Pink',  hex: '#FF2E63' },
      { name: 'Black', hex: '#0A0A0A' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    defaultSize: 'M',
    spec: {
      'Material': 'Polyester + Spandex',
      'Inner': 'Yes (inner short)',
      'Features': 'Cooler Material · Stretchable'
    },
    stock: 86
  }
];

window.JP_findProduct = (id) => window.JP_PRODUCTS.find(p => p.id === id);
window.JP_formatRp = (n) => 'Rp ' + (n || 0).toLocaleString('id-ID');

// ============ CONFIG ============
window.JP_CONFIG = {
  whatsappNumber: '6281234567890', // ganti nomor WA bisnis
  shopName: 'JP-POWER OFFICIAL',
  freeShippingMin: 500000,
  shippingFlat: 25000
};
