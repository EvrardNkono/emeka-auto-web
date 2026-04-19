import { Search, User, ShoppingCart, ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", dropdown: false },
    { name: "All Products", dropdown: true },
    { name: "All Brands", dropdown: true },
    { name: "About", dropdown: true },
    { name: "Shipping & Freight Guide", dropdown: false },
    { name: "Contact", dropdown: false },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-[1700px] mx-auto px-4 md:px-8 py-6 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="flex-shrink-0">
          <img 
            src="/logo.png" 
            alt="J&J Auto Wrecking" 
            className="h-14 md:h-26 w-auto object-contain" 
          />
        </div>

        {/* NAVIGATION DESKTOP */}
        <div className="hidden lg:flex items-center flex-1 ml-12">
          <ul className="flex items-center space-x-6 text-[21px] font-extrabold text-white tracking-tight">
            {navLinks.map((link) => (
              <li key={link.name} className="flex items-center space-x-1 cursor-pointer hover:opacity-80 transition-opacity whitespace-nowrap">
                <span>{link.name}</span>
                {link.dropdown && <ChevronDown size={20} strokeWidth={3.5} className="mt-1" />}
              </li>
            ))}
          </ul>
        </div>

        {/* ICONES */}
        <div className="flex items-center space-x-4 md:space-x-7 text-white">
          <button className="hover:opacity-80 transition-opacity">
            <Search size={28} strokeWidth={2.5} />
          </button>
          
          <button className="lg:hidden hover:opacity-80 transition-opacity" onClick={() => setIsMenuOpen(true)}>
            <Menu size={32} />
          </button>

          <button className="hidden sm:block hover:opacity-80 transition-opacity">
            <User size={34} strokeWidth={2.5} />
          </button>
          
          <button className="hover:opacity-80 transition-opacity">
            <ShoppingCart size={28} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* --- MENU MOBILE LATÉRAL --- */}
      <div 
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsMenuOpen(false)}
      />

      <div className={`fixed top-0 right-0 h-full w-[85%] max-w-[400px] bg-white z-[60] transform transition-transform duration-300 ease-in-out p-6 shadow-2xl ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        <div className="flex justify-end mb-8">
          <button onClick={() => setIsMenuOpen(false)} className="text-black">
            <X size={32} strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex flex-col space-y-6">
          {navLinks.map((link) => (
            <div key={link.name} className="flex justify-between items-center py-2 border-b border-gray-100 group">
              <span className="text-[22px] font-medium text-black group-hover:text-gray-600 transition-colors">{link.name}</span>
              {link.dropdown && <ChevronDown size={22} className="text-black" />}
            </div>
          ))}
          <div className="py-2 border-b border-gray-100 text-black">
            <span className="text-[22px] font-medium">Log in</span>
          </div>
        </div>

        {/* --- SECTION RÉSEAUX SOCIAUX EN SVG NATIFS --- */}
        <div className="flex space-x-7 mt-12 px-1 text-black">
          
          {/* Instagram SVG */}
          <a href="#" className="hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
          </a>
          
          {/* Facebook SVG */}
          <a href="#" className="hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>

          {/* Youtube SVG */}
          <a href="#" className="hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2 103.03 103.03 0 0 1 15 0 2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2 103.03 103.03 0 0 1-15 0 2 2 0 0 1-2-2z"/>
              <path d="m10 15 5-3-5-3z"/>
            </svg>
          </a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;