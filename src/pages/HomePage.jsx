// HomePage.jsx — J&J Auto Wrecking
// Sections: Tagline, Engines, Hummer, Featured Models, Wheels CTA, Team, Blog, Footer
// Exclut : HeroSection et Header (déjà faits)

import { useState } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const engines = [
  {
    id: 1,
    name: "1991 Corvette ZR-1 5.7L LT5 V8 Engine / Motor Assembly 10K OEM",
    price: "$8,415.00",
    img: "https://jandjautowrecking.com/cdn/shop/files/57_12c269d4-5209-435a-ae63-8b41f1f1c91b.jpg?v=1774641016&width=1080",
    href: "#",
  },
  {
    id: 2,
    name: "2003 Chevrolet Corvette Z06 LS6 Engine Swap BTR Stage 3 Camshaft 117142 Miles",
    price: "$7,225.00",
    img: "https://jandjautowrecking.com/cdn/shop/files/57_0fb352ec-8cdc-4668-afa9-f0eab8fce65e.jpg?v=1770974246&width=1080",
    href: "#",
  },
  {
    id: 3,
    name: "05-06 Cammed/Modded Chevy 6.0L V8 LS2 LSX Engine Swap Dropout Video Test",
    price: "$5,945.75",
    img: "https://jandjautowrecking.com/cdn/shop/files/57_75f1ab8f-2e8b-4106-9b47-4bc6c22d0f72.jpg?v=1775988712&width=1080",
    href: "#",
  },
  {
    id: 4,
    name: "2005-2006 Chevrolet 6.0L LS2 Engine Dropout W/Accessories 137199 Miles",
    price: "$5,100.00",
    img: "https://jandjautowrecking.com/cdn/shop/files/57_3d8a05a1-14bb-4bdf-944d-cff3851b8bf1.jpg?v=1770974569&width=1080",
    href: "#",
  },
  {
    id: 5,
    name: "2006 Chevrolet 6.0L LS2 Engine Dropout W/Accessories 162823 Miles",
    price: "$4,250.00",
    img: "https://jandjautowrecking.com/cdn/shop/files/57_c3ca6375-f80c-40a6-91a8-a52f3fdc43b4.jpg?v=1772962718&width=1080",
    href: "#",
  },
  {
    id: 6,
    name: "2009 Pontiac G8 GT L76 6.0L Engine & 6L80 Auto Transmission Swap",
    price: "$4,250.00",
    img: "https://jandjautowrecking.com/cdn/shop/files/57_83bb8ccd-66e3-41b6-b86c-8c4a3502f379.jpg?v=1770973914&width=1080",
    href: "#",
  },
  {
    id: 7,
    name: "1997-1998 Chevrolet 5.7L LS1 Engine Dropout W/Accessories Hot Rod Oil Pan",
    price: "$3,500.00",
    img: "https://jandjautowrecking.com/cdn/shop/files/57_346db65e-3b60-483c-bd09-2c78de44b560.jpg?v=1775557932&width=1080",
    href: "#",
  },
  {
    id: 8,
    name: "1997-1998 Chevrolet 5.7L LS1 Engine Dropout W/Accessories Hot Rod Oil Pan",
    price: "$2,975.00",
    img: "https://jandjautowrecking.com/cdn/shop/files/57_ce41a3a8-f1cd-4d92-9f6d-36289b1efa0e.jpg?v=1776419375&width=1080",
    href: "#",
  },
];

const hummerParts = [
  {
    id: 1,
    name: "2008 Hummer H2 Set of 4 Rhino Armory 18x9.5 Wheels & Tires",
    price: "$2,549.15",
    img: "https://jandjautowrecking.com/cdn/shop/files/57_eb3ef6c1-7fa7-47f6-bd65-7045122ad028.jpg?v=1776249066&width=1080",
    href: "#",
  },
  {
    id: 2,
    name: "2003-2007 Hummer H2 Full Rolling Frame *No Title*",
    price: "$2,142.00",
    img: "https://jandjautowrecking.com/cdn/shop/files/57_482a5c0d-6d41-4c97-a34a-9d64df433d44.jpg?v=1774528069&width=1080",
    href: "#",
  },
  {
    id: 3,
    name: "2007 Hummer H2 Special Edition WS2 Body Molding Kit",
    price: "$2,125.00",
    img: "https://jandjautowrecking.com/cdn/shop/files/57_a87cc233-0dbf-4255-a83e-fdd4707975a9.jpg?v=1775382278&width=1080",
    href: "#",
  },
  {
    id: 4,
    name: "2003-2007 Hummer H2 Full Rolling Frame *No Title*",
    price: "$1,912.50",
    img: "https://jandjautowrecking.com/cdn/shop/files/57_e2fce7a1-bb24-44a2-854c-d8f7ae97b71c.jpg?v=1774525100&width=1080",
    href: "#",
  },
  {
    id: 5,
    name: "2003-2009 Hummer H2 Pair - Rock Rail Sliders / Tubes EOM",
    price: "$1,699.15",
    img: "https://jandjautowrecking.com/cdn/shop/files/57_67ac1710-26e2-4b7e-ab5d-d27bd252cd72.jpg?v=1774648972&width=1080",
    href: "#",
  },
];

const featuredModels = [
  {
    name: "Chevrolet Camaro Parts (4th 5th 6th Gen)",
    img: "https://jandjautowrecking.com/cdn/shop/collections/chevrolet-camaro-parts-458725.jpg?v=1751043747&width=2400",
    href: "#",
  },
  {
    name: "Chevrolet Corvette Parts (C4 C5 C6 C7)",
    img: "https://jandjautowrecking.com/cdn/shop/collections/chevrolet-corvette-parts-720142.jpg?v=1751043768&width=2400",
    href: "#",
  },
  {
    name: "Chevrolet SSR Parts",
    img: "https://jandjautowrecking.com/cdn/shop/collections/chevrolet-ssr-parts-558244.jpg?v=1751397881&width=2400",
    href: "#",
  },
  {
    name: "Cadillac XLR Parts",
    img: "https://jandjautowrecking.com/cdn/shop/collections/cadillac-xlr-parts-733228.jpg?v=1751397874&width=2400",
    href: "#",
  },
  {
    name: "Ford Mustang Parts",
    img: "https://jandjautowrecking.com/cdn/shop/collections/ford-mustang-parts-303687.jpg?v=1751397925&width=2400",
    href: "#",
  },
  {
    name: "Dodge Challenger and Charger Parts",
    img: "https://jandjautowrecking.com/cdn/shop/collections/dodge-challenger-and-charger-parts-5032984.png?v=1752828137&width=2400",
    href: "#",
  },
  {
    name: "Plymouth Prowler Parts",
    img: "https://jandjautowrecking.com/cdn/shop/collections/plymouth-prowler-parts-265497.jpg?v=1751397968&width=2400",
    href: "#",
  },
  {
    name: "Tesla Parts",
    img: "https://jandjautowrecking.com/cdn/shop/collections/tesla-parts-928167.jpg?v=1776104921&width=2400",
    href: "#",
  },
  {
    name: "GM Truck Parts (GMT 800 & 900 Models)",
    img: "https://jandjautowrecking.com/cdn/shop/collections/gm-truck-parts-gmt-800-900-models-1123744.png?v=1752828139&width=2400",
    href: "#",
  },
  {
    name: "Mazda NB Miata Parts",
    img: "https://jandjautowrecking.com/cdn/shop/collections/mazda-nb-miata-parts-9439610.png?v=1752828146&width=2400",
    href: "#",
  },
  {
    name: "4th & 5th Gen Ram Truck Parts",
    img: "https://jandjautowrecking.com/cdn/shop/collections/4th-5th-gen-ram-truck-parts-6299248.png?v=1752828135&width=2400",
    href: "#",
  },
  {
    name: "Mitsubishi Lancer Evolution Parts",
    img: "https://jandjautowrecking.com/cdn/shop/collections/mitsubishi-lancer-evolution-parts-1623448.png?v=1752828148&width=2400",
    href: "#",
  },
  {
    name: "Lexus LX & GX / Toyota Land Cruiser Parts",
    img: "https://jandjautowrecking.com/cdn/shop/collections/lexus-lx-gx-models-toyota-land-cruiser-parts-4893996.png?v=1752828144&width=2400",
    href: "#",
  },
  {
    name: "Honda S2000 Parts",
    img: "https://jandjautowrecking.com/cdn/shop/collections/honda-s2000-parts-7700914.png?v=1752828142&width=2400",
    href: "#",
  },
];

const wheelImages = [
  {
    img: "https://jandjautowrecking.com/cdn/shop/files/57_eb3ef6c1-7fa7-47f6-bd65-7045122ad028.jpg?v=1776249066&width=560",
    size: "large",
  },
  {
    img: "https://jandjautowrecking.com/cdn/shop/files/57_6f9f66b9-0b10-45e6-86ec-497f0e2e3151.jpg?v=1760367944&width=360",
    size: "medium",
  },
  {
    img: "https://jandjautowrecking.com/cdn/shop/files/57_55b7f6dc-95a6-4aad-901a-449422ef5aae.jpg?v=1774630946&width=320",
    size: "small",
  },
  {
    img: "https://jandjautowrecking.com/cdn/shop/files/10-15-chevy-camaro-ss-american-racing-ar105-20x85-20x10-wheeltire-set-4-7517516.jpg?v=1761366468&width=400",
    size: "medium",
  },
];

const blogPosts = [
  {
    title: "24 Essential Auto Parts Every U.S. Driver Should Know in 2026",
    img: "https://jandjautowrecking.com/cdn/shop/articles/24-essential-auto-parts-every-us-driver-should-know-in-2026-2466180.jpg?v=1774891826&width=1080",
    href: "#",
  },
  {
    title: "10 Must-Have Components & Pro Tips for a 2026 LS Engine Swap",
    img: "https://jandjautowrecking.com/cdn/shop/articles/10-must-have-components-pro-tips-for-a-2026-ls-engine-swap-4155541.jpg?v=1774891824&width=1080",
    href: "#",
  },
  {
    title: "15 Essential Chevy Truck Parts to Upgrade or Restore in 2026",
    img: "https://jandjautowrecking.com/cdn/shop/articles/15-essential-chevy-truck-parts-to-upgrade-or-restore-in-2026-1931984.jpg?v=1774891822&width=1080",
    href: "#",
  },
];

const footerLinks = {
  Info: [
    { label: "Search", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Refund Policy", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
  "Main Menu": [
    { label: "Home", href: "#" },
    { label: "All Products", href: "#" },
    { label: "All Brands", href: "#" },
    { label: "About", href: "#" },
    { label: "Shipping & Freight Guide", href: "#" },
    { label: "Contact", href: "#" },
  ],
};

// ─── SUB-COMPONENTS ──────────────────────────────────────────────────────────

/** Carte produit générique */
const ProductCard = ({ img, name, price, href }) => (
  <a
    href={href}
    className="group block bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-200"
  >
    <div className="aspect-square overflow-hidden bg-gray-100">
      <img
        src={img}
        alt={name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="p-3">
      <p className="text-sm text-gray-800 leading-snug line-clamp-2 mb-1">{name}</p>
      <p className="text-sm font-semibold text-gray-900">{price}</p>
    </div>
  </a>
);

/** En-tête de section avec titre + lien View all */
const SectionHeader = ({ title, viewAllHref, viewAllLabel = "View all" }) => (
  <div className="flex items-end justify-between mb-6">
    <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-tight">{title}</h2>
    {viewAllHref && (
      <a
        href={viewAllHref}
        className="text-sm font-medium text-gray-700 underline underline-offset-2 hover:text-black"
      >
        {viewAllLabel}
      </a>
    )}
  </div>
);

// ─── SECTIONS ────────────────────────────────────────────────────────────────

/** 1. Tagline */
const TaglineSection = () => (
  <section className="bg-white py-14 px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 uppercase tracking-tight mb-4">
      We are the enthusiast's choice.
    </h2>
    <p className="max-w-2xl mx-auto text-gray-600 text-base md:text-lg leading-relaxed">
      The cars and trucks you love, we love too. We put the same passion you have
      for your car, into our work for you!
    </p>
  </section>
);



const ReviewsSection = () => (
  <div className="bg-white pb-16 px-6">
    <div className="max-w-4xl mx-auto bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
      
      {/* HEADER : Logo Zoomé + Infos */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-10 border-b border-gray-200 pb-8 gap-6">
        
        <div className="flex flex-col items-center md:items-start gap-4 flex-shrink-0">
          <img 
            src="/logo.png" 
            alt="EMEKA AUTO Logo" 
            className="w-24 h-auto md:w-32 object-contain bg-white p-3 rounded-xl shadow-md border border-gray-200"
          />
        </div>

        <div className="flex-grow md:pl-6 text-center md:text-left">
          <h3 className="font-extrabold text-2xl text-gray-900 tracking-tight">EMEKA AUTO</h3>
          <div className="flex items-center gap-3 justify-center md:justify-start mt-2">
            <span className="text-orange-500 font-bold text-lg">4.8</span>
            <div className="flex text-orange-400 text-lg">★★★★★</div>
            <a 
              href="#" 
              className="text-gray-500 text-sm underline hover:text-blue-600 transition-colors"
            >
              522 reviews on Google
            </a>
          </div>
        </div>

        <button className="flex-shrink-0 bg-white border border-gray-300 px-8 py-3 rounded-full text-sm font-bold shadow-sm hover:bg-black hover:text-white transition-all duration-300">
          Leave a Review
        </button>
      </div>

      {/* GRILLE D'AVIS AVEC PHOTOS DE PROFIL */}
      <div className="grid md:grid-cols-2 gap-8 text-left">
        
        {/* Avis 1 */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              {/* PHOTO DE PROFIL ZOOMÉE */}
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" 
                alt="Against All Odds profile" 
                className="w-12 h-12 rounded-full object-cover border-2 border-orange-100 shadow-sm"
              />
              <div>
                <span className="block font-bold text-gray-900">Against All Odds</span>
                <span className="text-[10px] text-gray-400 uppercase">Local Guide</span>
              </div>
            </div>
            <div className="bg-blue-600 text-white w-6 h-6 flex items-center justify-center rounded-full text-[11px] font-bold">G</div>
          </div>
          <p className="text-gray-700 italic leading-relaxed">
            "Talk about exceeding expectations. To be honest, I wasn't expecting this at all, but the quality of service for my vehicle was top notch."
          </p>
        </div>

        {/* Avis 2 */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              {/* PHOTO DE PROFIL ZOOMÉE */}
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" 
                alt="Marc Antoine profile" 
                className="w-12 h-12 rounded-full object-cover border-2 border-blue-100 shadow-sm"
              />
              <div>
                <span className="block font-bold text-gray-900">Marc Antoine</span>
                <span className="text-[10px] text-gray-400 uppercase">Verified Customer</span>
              </div>
            </div>
            <div className="bg-blue-600 text-white w-6 h-6 flex items-center justify-center rounded-full text-[11px] font-bold">G</div>
          </div>
          <p className="text-gray-700 italic leading-relaxed">
            "Best auto service in town. They helped me find a rare engine part for my truck in less than 24 hours. Highly recommended!"
          </p>
        </div>

      </div>
    </div>
  </div>
);

/** 2. Engine & Swap Inventory */
const EngineSection = () => (
  <section className="bg-gray-50 py-12 px-6">
    <div className="max-w-7xl mx-auto">
      <SectionHeader title="Engine & Swap Inventory" viewAllHref="#" />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {engines.map((e) => (
          <ProductCard key={e.id} {...e} />
        ))}
      </div>
      <div className="mt-8 text-center">
        <a
          href="#"
          className="inline-block border border-gray-900 text-gray-900 px-8 py-3 text-sm font-semibold uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-colors duration-200"
        >
          View all — 43 products
        </a>
      </div>
    </div>
  </section>
);

/** 3. Hummer H2 Parts Inventory */
const HummerSection = () => (
  <section className="bg-white py-12 px-6">
    <div className="max-w-7xl mx-auto">
      <SectionHeader title="Hummer H2 Parts Inventory" viewAllHref="#" />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {hummerParts.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
      <div className="mt-8 text-center">
        <a
          href="#"
          className="inline-block border border-gray-900 text-gray-900 px-8 py-3 text-sm font-semibold uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-colors duration-200"
        >
          View all — 1238 products
        </a>
      </div>
    </div>
  </section>
);

/** 4. Other Featured Models */
const FeaturedModelsSection = () => (
  <section className="bg-white py-12 px-6">
    <div className="max-w-7xl mx-auto">
      <SectionHeader title="Other Featured Models" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1"> {/* Gap-1 pour coller les images */}
        {featuredModels.map((m, i) => (
          <a key={i} href={m.href} className="group relative block overflow-hidden h-64 bg-black">
            <img
              src={m.img}
              alt={m.name}
              className="w-full h-full object-cover opacity-90 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700"
            />
            <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/60 to-transparent">
              <span className="text-white text-2xl font-black uppercase tracking-tighter italic border-b-2 border-transparent group-hover:border-white transition-all">
                {m.name}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

/** 5. Wheels CTA Banner */
const WheelsBannerSection = () => (
  <section className="bg-white py-16 lg:py-24 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Collage d'images déstructuré (Côté gauche) */}
        <div className="relative w-full lg:w-1/2 h-[400px] md:h-[500px] flex items-center justify-center">
          {/* Image principale au centre */}
          <div className="relative z-20 shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
            <img 
              src={wheelImages[0].img} 
              alt="Main Wheel" 
              className="w-64 md:w-80 h-auto rounded-sm border-[6px] border-white shadow-xl"
            />
          </div>
          
          {/* Image en haut à gauche */}
          <img 
            src={wheelImages[1].img} 
            className="absolute top-0 left-4 md:left-10 w-32 md:w-44 opacity-40 grayscale z-10" 
            alt="" 
          />
          
          {/* Image en bas à gauche */}
          <img 
            src={wheelImages[2].img} 
            className="absolute bottom-4 left-0 md:left-8 w-40 md:w-52 z-30 border-4 border-white shadow-lg" 
            alt="" 
          />
          
          {/* Image à droite (floue/transparente) */}
          <img 
            src={wheelImages[3].img} 
            className="absolute top-1/2 -right-4 w-36 md:w-48 opacity-20 z-0" 
            alt="" 
          />
        </div>

        {/* Texte et Boutons (Côté droit) */}
        <div className="w-full lg:w-1/2">
          <p className="text-gray-500 text-sm uppercase tracking-[0.3em] font-bold mb-4">
            Upgrade your ride
          </p>
          <h2 className="text-gray-900 text-4xl md:text-6xl font-black uppercase italic leading-[0.9] mb-8">
            With a New Set <br /> of Wheels
          </h2>
          <p className="text-gray-600 mb-10 text-lg leading-relaxed max-w-md">
            Check out our unique collection of wheel and wheel & tire sets.
          </p>
          
          <div className="flex flex-col gap-4 sm:w-80">
            <a
              href="#"
              className="px-8 py-4 bg-black text-white text-sm font-bold uppercase tracking-widest text-center hover:bg-zinc-800 transition-all"
            >
              Browse Wheel Sets
            </a>
            <a
              href="#"
              className="px-8 py-4 bg-black text-white text-sm font-bold uppercase tracking-widest text-center hover:bg-zinc-800 transition-all"
            >
              Browse All Parts
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
);

/** 6. Our Team is Passionate */
const TeamSection = () => (
  <>
    <section className="relative w-full h-[600px] md:h-[500px] flex items-center">
      {/* L'IMAGE EN ARRIÈRE-PLAN : Pleine largeur et hauteur fixe */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/emeka.jfif"
          alt="EMEKA AUTO Team"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay léger pour faire ressortir le texte */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* LE TEXTE : Positionné par-dessus l'image */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="bg-white p-8 md:p-12 shadow-2xl max-w-lg lg:ml-12">
          <p className="text-gray-500 text-xs md:text-sm uppercase tracking-[0.3em] mb-4">
            Our Team
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase italic leading-none mb-6">
            Is Passionate
          </h2>
          <div className="space-y-4">
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Every employee at <span className="font-bold text-gray-900">EMEKA AUTO</span> cares about the customers parts as if it was for their own car.
            </p>
            <p className="text-gray-800 font-medium text-sm md:text-base leading-relaxed border-l-4 border-orange-600 pl-4">
              We set the standard over a decade ago. You can watch your part being put
              to the test in one of our thousands of test videos.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* SECTION VIDÉO : Centrée juste après le texte */}
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Texte d'introduction vidéo */}
        <h3 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-10 max-w-3xl leading-tight">
          We set the standard over a decade ago. You can watch your part being put to the test in one of our thousands of test videos.
        </h3>

        {/* Lecteur Vidéo YouTube */}
        <div className="w-full aspect-video shadow-2xl rounded-sm overflow-hidden border-8 border-white bg-gray-100">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/F8BV9UZx_nk?start=10"
            title="EMEKA AUTO Test Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        
        {/* Légende facultative (Stock # RJCE240 de la vidéo) */}
        <p className="mt-6 text-gray-500 italic text-sm">
          2018 Chevrolet Camaro SS Part Out: EMEKA AUTO Test Video
        </p>
      </div>
    </section>
  </>
);



/** 7. Blog Articles */
const BlogSection = () => (
  <section className="bg-gray-50 py-12 px-6">
    <div className="max-w-7xl mx-auto">
      <SectionHeader title='"Rest In Parts" Articles' viewAllHref="#" />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {blogPosts.map((post, i) => (
          <a key={i} href={post.href} className="group block">
            <div className="aspect-video overflow-hidden mb-3 bg-gray-200">
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-sm font-semibold text-gray-900 leading-snug group-hover:underline">
              {post.title}
            </p>
          </a>
        ))}
      </div>
    </div>
  </section>
);

/** 8. Footer */


// ─── PAGE PRINCIPALE ──────────────────────────────────────────────────────────

const HomePage = () => (
  <main className="font-sans">
    <TaglineSection />
    <ReviewsSection /> {/* Ajouté ici pour la visibilité */}
    <EngineSection />
    <HummerSection />
    <FeaturedModelsSection />
    <WheelsBannerSection />
    <TeamSection />
    <BlogSection />
  </main>
);

export default HomePage;