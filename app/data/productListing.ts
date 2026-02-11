// /data/productListing.ts

export type Category =
  | "smartphone"
  | "laptop"
  | "headphone"
  | "smartwatch"
  | "camera"
  | "gaming"
  | "accessory";

export type Product = {
  id: number;
  name: string;
  slug: string;
  price: number;
  category: Category;
  image: string;
  description: string;
};

export const products: Product[] = [
  /* ================= SMARTPHONES ================= */
  {
    id: 1,
    name: "iPhone 15 Pro",
    slug: "iphone-15-pro",
    price: 999,
    category: "smartphone",
    image:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&q=80&auto=format",
    description:
      "iPhone 15 Pro with A17 chip, titanium body, and advanced camera system. \n\nQualities: Fast performance, premium build, excellent camera quality, iOS ecosystem. \nDisadvantages: Expensive, no headphone jack, limited storage upgrade options.",
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    slug: "samsung-galaxy-s24-ultra",
    price: 899,
    category: "smartphone",
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&q=80&auto=format",
    description:
      "Galaxy S24 Ultra with Snapdragon processor and professional camera. \n\nQualities: Large AMOLED display, versatile camera, stylus support, long battery life. \nDisadvantages: Large and heavy, expensive, software bloat.",
  },
  {
    id: 3,
    name: "Google Pixel 8 Pro",
    slug: "google-pixel-8-pro",
    price: 799,
    category: "smartphone",
    image: "/Google-Pixel-8-Pro-Qmart-1.jpg",
    description:
      "Pixel 8 Pro with AI-powered photography and pure Android experience. \n\nQualities: Stock Android, excellent AI camera features, timely updates. \nDisadvantages: Average battery life, limited hardware options, no headphone jack.",
  },
  {
    id: 16,
    name: "Iphone17 pro",
    slug: "Iphone17-pro",
    price: 799,
    category: "smartphone",
    image: "/Apple-iPhone-17-Pro-camera-close-up-250909_big.jpg.large_2x.jpg",
    description:
      "iPhone 17 Pro with AI-powered photography and smooth iOS experience. \n\nQualities: Fast processor, premium design, excellent app ecosystem. \nDisadvantages: High price, limited customization, no headphone jack.",
  },

  /* ================= LAPTOPS ================= */
  {
    id: 4,
    name: "MacBook Pro M3",
    slug: "macbook-pro-m3",
    price: 1999,
    category: "laptop",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80&auto=format",
    description:
      "MacBook Pro powered by Apple M3 chip for extreme performance. \n\nQualities: High performance, excellent display, long battery life, macOS ecosystem. \nDisadvantages: Expensive, limited ports, non-upgradable RAM.",
  },
  {
    id: 5,
    name: "Dell XPS 15",
    slug: "dell-xps-15",
    price: 1599,
    category: "laptop",
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80&auto=format",
    description:
      "Dell XPS 15 with InfinityEdge display and premium build quality. \n\nQualities: Sleek design, high resolution display, powerful specs. \nDisadvantages: Expensive, average battery life, heavy for portability.",
  },

  /* ================= HEADPHONES ================= */
  {
    id: 6,
    name: "Sony WH-1000XM5",
    slug: "sony-wh-1000xm5",
    price: 349,
    category: "headphone",
    image: "/ea6c6fb43e0354cdc9d9cc5cfb2a4080.jpg",
    description:
      "Industry-leading noise cancellation with crystal-clear sound. \n\nQualities: Best-in-class noise canceling, comfortable, long battery life. \nDisadvantages: Expensive, bulky, wired audio support limited.",
  },
  {
    id: 7,
    name: "AirPods Pro (2nd Gen)",
    slug: "airpods-pro-2nd-gen",
    price: 249,
    category: "headphone",
    image:
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800&q=80&auto=format",
    description:
      "Active noise cancellation with spatial audio and adaptive EQ. \n\nQualities: Compact, great integration with Apple devices, ANC. \nDisadvantages: Expensive, battery life moderate, easy to lose.",
  },

  /* ================= SMARTWATCHES ================= */
  {
    id: 8,
    name: "Apple Watch Series 9",
    slug: "apple-watch-series-9",
    price: 399,
    category: "smartwatch",
    image:
      "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=800&q=80&auto=format",
    description:
      "Advanced health tracking with sleek and premium Apple design. \n\nQualities: Fitness tracking, ECG, elegant design. \nDisadvantages: Expensive, requires iPhone, limited battery life.",
  },
  {
    id: 9,
    name: "Samsung Galaxy Watch 6",
    slug: "samsung-galaxy-watch-6",
    price: 349,
    category: "smartwatch",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80&auto=format",
    description:
      "Fitness-focused smartwatch with AMOLED display and Wear OS. \n\nQualities: Stylish, long battery, Android compatibility. \nDisadvantages: Some apps missing, charging time, slightly bulky.",
  },

  /* ================= CAMERAS ================= */
  {
    id: 10,
    name: "Sony Alpha A7 IV",
    slug: "sony-alpha-a7-iv",
    price: 2499,
    category: "camera",
    image: "/Sony_A7_IV_in-hand-PA180998-acr.webp",
    description:
      "Full-frame mirrorless camera for professional photography. \n\nQualities: Excellent image quality, versatile lens support, 4K video. \nDisadvantages: Expensive, heavy, learning curve for beginners.",
  },
  {
    id: 11,
    name: "Canon EOS R6",
    slug: "canon-eos-r6",
    price: 2299,
    category: "camera",
    image: "/Canon-EOS-R6-lead-01.jpeg",
    description:
      "High-speed mirrorless camera with superb low-light performance. \n\nQualities: Fast autofocus, excellent ISO handling, lightweight. \nDisadvantages: Pricey, limited lens options in some regions.",
  },

  /* ================= GAMING CONSOLES ================= */
  {
    id: 12,
    name: "PlayStation 5",
    slug: "playstation-5",
    price: 499,
    category: "gaming",
    image:
      "/ps5-pro-digital-edition-playstation-5-pro-2tb-price-in-pakistan-gameforcepk-3-1.webp",
    description:
      "Next-gen gaming console with ultra-fast SSD and ray tracing. \n\nQualities: High FPS gaming, fast loading, exclusive titles. \nDisadvantages: Big size, expensive, limited stock.",
  },
  {
    id: 13,
    name: "Xbox Series X",
    slug: "xbox-series-x",
    price: 499,
    category: "gaming",
    image: "/Microsoft-Xbox-Series-X-EEZEPC-1.webp",
    description:
      "Powerful gaming console delivering true 4K gaming performance. \n\nQualities: 4K gaming, fast load, Game Pass subscription. \nDisadvantages: Big and heavy, noisy fan, price.",
  },

  /* ================= ACCESSORIES ================= */
  {
    id: 14,
    name: "Logitech MX Master 3S",
    slug: "logitech-mx-master-3s",
    price: 99,
    category: "accessory",
    image:
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&q=80&auto=format",
    description:
      "Ergonomic wireless mouse designed for productivity and comfort. \n\nQualities: Comfortable, precise, long battery life. \nDisadvantages: Expensive, not ideal for gaming.",
  },
  {
    id: 15,
    name: "Anker USB-C Hub",
    slug: "anker-usb-c-hub",
    price: 59,
    category: "accessory",
    image: "/1668256359_Capture.png",
    description:
      "Multiport USB-C hub with HDMI, USB, and fast charging support. \n\nQualities: Compact, versatile, fast charging. \nDisadvantages: Can get hot, build quality average.",
  },
];

