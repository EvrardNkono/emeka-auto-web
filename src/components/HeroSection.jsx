const HeroSection = () => {
  return (
    <section className="relative h-[60vh] md:h-[90vh] w-full overflow-hidden bg-black">
      
      {/* 1. Conteneur Vidéo avec ajustement responsive */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <iframe
          // Sur mobile (h-[115vh]), on force une hauteur très grande pour garantir le remplissage vertical
          // Sur desktop (md:), on revient à un ratio plus standard
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                     w-[300vw] h-[100%] md:w-[115vw] md:h-[115vh] 
                     object-cover scale-[1.5] md:scale-[1.35]"
          src="https://www.youtube.com/embed/tmyhUdSoo08?autoplay=1&mute=1&loop=1&playlist=tmyhUdSoo08&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1"
          allow="autoplay; encrypted-media"
          frameBorder="0"
        ></iframe>
      </div>
      
      {/* 2. Overlay dégradé (Comme sur l'image, plus sombre en haut pour la lisibilité) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent z-10"></div>

      {/* 3. Contenu textuel (Simule le logo "Excellence" au centre si nécessaire) */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
        {/* On peut ajouter ici un composant Image pour le logo central "Excellence" visible sur mobile */}
        {/* <img src="/excellence-logo.png" className="w-full max-w-[300px] md:max-w-none" alt="Excellence Start to Finish" /> */}
      </div>

    </section>
  );
};

export default HeroSection;