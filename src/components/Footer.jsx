import { FaInstagram, FaFacebookF, FaYoutube, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#f2f1e8] pt-16 pb-8 px-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Grille principale : 1 col sur mobile, 2 sur tablette, 4 sur desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
          
          {/* Colonne INFO */}
          <div>
            <h3 className="font-bold text-sm tracking-widest uppercase mb-6">Info</h3>
            <ul className="space-y-4">
              {["Search", "Contact", "Refund Policy", "Privacy Policy", "Terms of Service"].map((label) => (
                <li key={label}>
                  <a href="#" className="text-gray-700 hover:text-black text-sm transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne MAIN MENU */}
          <div>
            <h3 className="font-bold text-sm tracking-widest uppercase mb-6">Main Menu</h3>
            <ul className="space-y-4">
              {["Home", "All Products", "All Brands", "About", "Shipping & Freight Guide", "Contact"].map((label) => (
                <li key={label}>
                  <a href="#" className="text-gray-700 hover:text-black text-sm transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne Newsletter & Socials - Prend 2 colonnes sur desktop */}
          <div className="md:col-span-2">
            <h3 className="font-bold text-sm tracking-widest uppercase mb-6">Become a fan!</h3>
            <p className="text-gray-700 text-sm mb-6 max-w-sm leading-relaxed">
              Subscribe to get special coupons and alerts to fun and new things going on at EMEKA Auto Wrecking!
            </p>
            
            <div className="relative max-w-md group">
              <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                <FaEnvelope className="text-gray-400" />
              </div>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent border-b border-gray-400 py-3 pl-8 pr-4 focus:outline-none focus:border-black text-sm transition-colors"
              />
            </div>

            <div className="flex gap-6 mt-8">
              <a href="#" className="text-gray-900 hover:opacity-70"><FaInstagram size={20} /></a>
              <a href="#" className="text-gray-900 hover:opacity-70"><FaFacebookF size={18} /></a>
              <a href="#" className="text-gray-900 hover:opacity-70"><FaYoutube size={20} /></a>
            </div>
          </div>
        </div>

        {/* Section Bas de page */}
        <div className="mt-20 pt-8 border-t border-gray-300 flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center gap-2 opacity-60">
             {/* Simulé pour la performance, tu peux mettre tes images ici */}
            {['AMZN', 'PPAL', 'APAY', 'VISA', 'MAST', 'GPAY'].map(pay => (
              <div key={pay} className="h-6 w-10 bg-white border border-gray-300 rounded text-[8px] flex items-center justify-center font-bold">{pay}</div>
            ))}
          </div>
          <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em]">
            © 2026 EMEKA Auto Wrecking
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;