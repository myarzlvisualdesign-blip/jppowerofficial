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

// ============ ARTICLES ============
window.JP_ARTICLES = [
  {
    id: 'future-66-iii-launch',
    tag: 'PRODUCT LAUNCH',
    date: { d: '15', m: 'MAY', full: '15 Mei 2026' },
    image: 'assets/feed3.jpg',
    title: 'Future 66 III Resmi Dirilis: Generasi Terbaru Raket All-Round',
    excerpt: 'Setelah dua tahun riset, JP-POWER memperkenalkan Future 66 III dengan teknologi frame baru.',
    author: 'Tim Editorial JP-POWER',
    readTime: '5 menit baca',
    content: `
<p class="lead">Setelah lebih dari dua tahun riset dan pengujian intensif di laboratorium R&amp;D Jepang, JP-POWER resmi memperkenalkan generasi ketiga dari seri legendaris <strong>Future 66 III</strong>. Raket all-round ini hadir membawa pembaruan signifikan pada frame, balance, dan teknologi tensioning untuk menjawab kebutuhan pemain modern.</p>

<h2>Highlight Teknologi Baru</h2>
<p>Future 66 III mengintegrasikan tiga inovasi utama yang membedakannya dari generasi sebelumnya:</p>
<ul>
  <li><strong>Carbon Woven Frame</strong> — Anyaman karbon high-modulus graphite memberikan power eksplosif tanpa mengorbankan durability. Bobot raket tetap di kisaran 4U (80±3g) untuk swing yang ringan.</li>
  <li><strong>Aero-Force Frame</strong> — Profil aerodinamis 6.6mm di area atas frame memotong hambatan udara hingga 14%, sehingga smash terasa lebih cepat dan akurat.</li>
  <li><strong>Anti-Twist Integration</strong> — Smart tech integration mengurangi getaran torsional pada saat mishit, sehingga shot tetap stabil meski tidak tepat di sweet spot.</li>
</ul>

<h2>Spesifikasi Lengkap</h2>
<ul>
  <li>Weight: 4U · 80 ± 3g</li>
  <li>Balance: 295 ± 3 mm (medium)</li>
  <li>Length: 675 mm</li>
  <li>Flex: Medium (8.5)</li>
  <li>Max Tension: <strong>32 LBS</strong></li>
  <li>Frame: Carbon Woven · HM Graphite</li>
  <li>Grip Size: G5</li>
</ul>

<h2>Cocok untuk Siapa?</h2>
<p>Dengan kombinasi power dan control yang seimbang, Future 66 III sangat ideal untuk pemain intermediate hingga advanced yang masih mencari gaya bermain ideal. Atlet PBSI nasional yang sudah mencoba prototipe menggambarkannya sebagai "all-round sejati — bisa diandalkan untuk smash, drive, sekaligus net play."</p>

<h2>Harga &amp; Ketersediaan</h2>
<p>Future 66 III tersedia mulai 15 Mei 2026 di seluruh toko offline partner JP-POWER se-Indonesia dan via online store. Banderol resmi <strong>Rp 565.000</strong>, dengan promo launching <strong>30% off</strong> menjadi Rp 395.000 hingga akhir Mei. Setiap pembelian mendapat garansi resmi 1 tahun dan free ongkir se-Indonesia.</p>

<blockquote>"Kami ingin Future 66 III jadi raket yang bisa tumbuh bersama pemain — cocok dari level club sampai turnamen regional." — Head of R&amp;D JP-POWER Indonesia.</blockquote>
`
  },
  {
    id: 'tips-memilih-raket',
    tag: 'TUTORIAL',
    date: { d: '08', m: 'MAY', full: '8 Mei 2026' },
    image: 'assets/unggulan2.jpg',
    title: '5 Tips Memilih Raket Sesuai Gaya Bermain Anda',
    excerpt: 'Bingung pilih raket head-heavy atau head-light? Berikut panduan lengkapnya.',
    author: 'Coach Bayu W.',
    readTime: '7 menit baca',
    content: `
<p class="lead">Memilih raket badminton yang tepat itu seperti memilih sepatu — harus pas dengan kaki, gaya jalan, dan medan yang dilewati. Salah pilih raket bukan cuma bikin performa turun, tapi juga rentan cedera. Berikut 5 tips praktis dari coach kami.</p>

<h2>1. Kenali Gaya Bermain Anda</h2>
<p>Sebelum belanja, jujur dulu sama diri sendiri: anda tipe penyerang yang doyan smash? Atau lebih nyaman main rally panjang dengan placement akurat? Tiga arketipe umum:</p>
<ul>
  <li><strong>Attacker</strong> — andalan smash → cari raket head-heavy + stiff shaft</li>
  <li><strong>All-rounder</strong> — bisa attack &amp; defense → raket even-balance + medium flex</li>
  <li><strong>Defender</strong> — fokus rally &amp; control → head-light + flexible shaft</li>
</ul>

<h2>2. Berat Raket (U Rating)</h2>
<p>Semakin kecil angka U, semakin berat raket:</p>
<ul>
  <li><strong>2U</strong> (90–94g) — power maksimal, butuh tenaga ekstra</li>
  <li><strong>3U</strong> (85–89g) — balance power &amp; speed</li>
  <li><strong>4U</strong> (80–84g) — paling populer, ringan &amp; cepat</li>
  <li><strong>5U</strong> (75–79g) — super ringan, ideal pemula &amp; junior</li>
</ul>

<h2>3. Titik Keseimbangan (Balance Point)</h2>
<p>Letak titik balance dari grip menentukan karakter raket:</p>
<ul>
  <li><strong>≤ 285mm</strong> — Head Light (defense, drive cepat)</li>
  <li><strong>285–295mm</strong> — Even Balance (all-round)</li>
  <li><strong>≥ 295mm</strong> — Head Heavy (smash, attacking)</li>
</ul>

<h2>4. Fleksibilitas Shaft</h2>
<p>Shaft yang lebih flex membantu pemain dengan power kurang. Shaft stiff memberi kontrol lebih untuk pemain yang sudah punya teknik solid. Kalau ragu, mulai dari medium dulu.</p>

<h2>5. String Tension</h2>
<p>Tension bukan soal "semakin tinggi semakin bagus." Tension tinggi = kontrol tajam tapi butuh teknik. Tension rendah = power lebih besar tapi kurang akurat. Rekomendasi:</p>
<ul>
  <li>Pemula: 22–24 LBS</li>
  <li>Intermediate: 25–27 LBS</li>
  <li>Advanced: 28–30 LBS</li>
  <li>Pro level: 30 LBS+</li>
</ul>

<p><strong>Tip bonus:</strong> jangan beli raket cuma karena dipakai pemain pro favorit. Anatomi tangan, gaya pukul, dan power tiap orang beda. Test feel-nya dulu kalau ada display unit di toko.</p>
`
  },
  {
    id: 'hybrid-pro-vs-kompetitor',
    tag: 'REVIEW',
    date: { d: '02', m: 'MAY', full: '2 Mei 2026' },
    image: 'assets/feed1.jpg',
    title: 'Hybrid Pro vs Kompetitor: Mana yang Terbaik untuk Lapangan Vinyl?',
    excerpt: 'Tes mendalam grip, stabilitas, dan kenyamanan sepatu Hybrid Pro.',
    author: 'Adi Pratama',
    readTime: '6 menit baca',
    content: `
<p class="lead">Lapangan vinyl punya karakter unik — permukaannya cukup grip tapi licin kalau basah, dan padatnya menuntut sepatu dengan cushion yang responsif. Kami melakukan side-by-side test selama 3 minggu untuk membandingkan JP-POWER <strong>Hybrid Pro</strong> dengan tiga sepatu kompetitor populer.</p>

<h2>Metode Pengujian</h2>
<p>4 tester dengan playing style berbeda (attacker, all-rounder, defender, doubles specialist) memakai keempat sepatu secara bergantian selama latihan 2 jam/sesi, 5 sesi per sepatu. Penilaian: grip (1-10), stability (1-10), comfort (1-10), durability setelah 10 sesi.</p>

<h2>Hasil per Kategori</h2>

<h3>Grip di Lapangan Vinyl</h3>
<p>Hybrid Pro skor <strong>9.2/10</strong> — outsole dengan carbon herringbone pattern memberi cengkraman maksimal saat lunge dan stop sudden. Kompetitor A: 8.5, B: 8.8, C: 7.9.</p>

<h3>Stability &amp; Anti-Twist</h3>
<p>Dengan TPU shank di midfoot, Hybrid Pro skor <strong>9.0/10</strong> untuk stability lateral. Tester defender melaporkan zero ankle roll selama trial. Kompetitor: 8.0–8.5.</p>

<h3>Cushion &amp; Comfort</h3>
<p>EVA foam dengan power-cushion gel di tumit dan forefoot — skor <strong>8.7/10</strong>. Salah satu kompetitor masih unggul tipis (8.9) tapi terasa berat (+45g). Untuk multi-game, Hybrid Pro lebih hemat energi.</p>

<h3>Durability</h3>
<p>Setelah 10 sesi (≈20 jam main), sole Hybrid Pro hanya menunjukkan wear minimal di area pivot. Stitching upper masih utuh. <strong>Solid build quality.</strong></p>

<h2>Skor Akhir</h2>
<table style="width:100%;border-collapse:collapse;margin:18px 0">
  <thead><tr style="background:#f5f5f7"><th style="padding:10px;text-align:left">Sepatu</th><th style="padding:10px">Grip</th><th style="padding:10px">Stability</th><th style="padding:10px">Comfort</th><th style="padding:10px">Overall</th></tr></thead>
  <tbody>
    <tr><td style="padding:10px"><strong>JP Hybrid Pro</strong></td><td style="text-align:center">9.2</td><td style="text-align:center">9.0</td><td style="text-align:center">8.7</td><td style="text-align:center"><strong>8.97</strong></td></tr>
    <tr><td style="padding:10px">Kompetitor A</td><td style="text-align:center">8.5</td><td style="text-align:center">8.3</td><td style="text-align:center">8.6</td><td style="text-align:center">8.47</td></tr>
    <tr><td style="padding:10px">Kompetitor B</td><td style="text-align:center">8.8</td><td style="text-align:center">8.5</td><td style="text-align:center">8.9</td><td style="text-align:center">8.73</td></tr>
    <tr><td style="padding:10px">Kompetitor C</td><td style="text-align:center">7.9</td><td style="text-align:center">8.0</td><td style="text-align:center">8.4</td><td style="text-align:center">8.10</td></tr>
  </tbody>
</table>

<h2>Vonis</h2>
<p>Untuk lapangan vinyl, <strong>JP-POWER Hybrid Pro</strong> jadi rekomendasi utama kami berkat kombinasi grip carbon herringbone yang dominan dan stability TPU shank yang stabil. Apalagi dengan harga yang ~25% lebih murah dari Kompetitor B, value-nya susah dikalahkan.</p>
`
  }
];

window.JP_findArticle = (id) => window.JP_ARTICLES.find(a => a.id === id);

// ============ CONFIG ============
window.JP_CONFIG = {
  whatsappNumber: '6281234567890', // ganti nomor WA bisnis
  shopName: 'JP-POWER OFFICIAL',
  freeShippingMin: 500000,
  shippingFlat: 25000
};
