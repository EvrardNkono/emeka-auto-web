import { useState } from 'react';
import { Smartphone, X, MessageSquare, Send } from 'lucide-react';

const TextUsWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-[100] flex flex-col items-start font-sans">
      
      {/* La boîte de dialogue */}
      {isOpen && (
        <div className="mb-4 w-[400px] max-h-[90vh] bg-[#f4f5f7] rounded-xl shadow-2xl overflow-y-auto animate-in fade-in slide-in-from-bottom-4 duration-300">
          
          {/* Header Bleu */}
          <div className="bg-[#3a7bd5] p-5 text-white flex items-center space-x-3 sticky top-0 z-10">
            <MessageSquare size={22} fill="white" className="opacity-80" />
            <span className="font-bold text-xl tracking-tight">Get a quick response via text.</span>
          </div>

          <div className="p-4 space-y-4">
            {/* Bulle d'info grise */}
            <div className="bg-[#e8ebf0] p-5 rounded-2xl text-[#4a4a4a] text-[15px] leading-relaxed">
              Enter your information below and you'll receive a text back from our staff during business hours.
            </div>

            {/* Conteneur Formulaire Blanc */}
            <div className="bg-white p-6 rounded-3xl space-y-8 shadow-sm">
              
              {/* Champ Name */}
              <div className="relative border-b-2 border-[#3a7bd5] pb-1">
                <label className="text-[13px] font-bold text-[#3a7bd5] uppercase block mb-1">Name</label>
                <input 
                  type="text" 
                  className="w-full outline-none text-gray-800 text-lg bg-transparent"
                  autoFocus
                />
              </div>

              {/* Champ Mobile Phone */}
              <div className="relative border-b border-gray-200 pb-1">
                <label className="text-[13px] font-bold text-gray-400 uppercase block mb-1">Mobile Phone</label>
                <input 
                  type="tel" 
                  className="w-full outline-none text-gray-800 text-lg bg-transparent"
                />
              </div>

              {/* Champ Message */}
              <div className="relative border-b border-gray-200 pb-1">
                <label className="text-[13px] font-bold text-gray-400 uppercase block mb-1">Message</label>
                <textarea 
                  className="w-full outline-none text-gray-800 text-lg bg-transparent resize-none"
                  rows="1"
                ></textarea>
              </div>
            </div>

            {/* Texte Légal */}
            <p className="text-[11px] text-gray-500 leading-[1.4] px-2">
              By submitting, you authorize EMEKA Auto Wrecking Inc - 8558 Black Diamond Road, Marshallville to text/call the number above for informational messages, possibly using automated means and/or AI-generated calls/content. Msg/data rates apply, msg frequency varies. Consent is not a condition of purchase. <span className="underline cursor-pointer">See terms</span>. Text HELP for help and STOP to unsubscribe.
            </p>

            {/* Bouton Send (Optionnel selon l'original, mais souvent présent en bas) */}
            <button className="w-full py-4 bg-[#3a7bd5] text-white font-bold rounded-xl text-lg hover:bg-[#2e62ab] transition-colors shadow-md">
              Send
            </button>
          </div>
        </div>
      )}

      {/* Le Bouton Dynamique */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center justify-center bg-[#3a7bd5] text-white shadow-xl transition-all duration-300 ease-in-out
          ${isOpen 
            ? 'w-14 h-14 rounded-full' 
            : 'px-6 py-4 rounded-full space-x-3'
          }
        `}
      >
        {isOpen ? (
          <X size={32} className="animate-in spin-in-90 duration-300" />
        ) : (
          <>
            <Smartphone size={26} strokeWidth={2.5} />
            <span className="text-2xl font-bold tracking-tight">Text us</span>
          </>
        )}
      </button>
    </div>
  );
};

export default TextUsWidget;