import { useEffect, useRef } from "react";

const CallToAction = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const ctaElement = ctaRef.current;
    if (ctaElement) {
      observer.observe(ctaElement);
    }

    return () => {
      if (ctaElement) {
        observer.unobserve(ctaElement);
      }
    };
  }, []);

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div 
          ref={ctaRef} 
          className="reveal max-w-5xl mx-auto rounded-3xl p-1 bg-gradient-to-r from-leap-primary to-leap-accent"
        >
          <div className="bg-white/95 backdrop-blur-sm rounded-[calc(1.5rem-4px)] p-8 md:p-12 text-center">
            <div className="inline-block highlight-chip mb-6">
              <span>Unisciti alla Rivoluzione</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto a Trasformare
              <span className="text-gradient block">La Tua Esperienza di Apprendimento?</span>
            </h2>
            <div className="mb-8 flex justify-center">
              <a
                href="https://app.leapstudio.it"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm px-5 py-2 rounded-full shadow hover:opacity-90 transition"
              >
                Apri Web App
              </a>
            </div>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Unisciti a migliaia di studenti che hanno già scoperto un modo più coinvolgente, personalizzato 
              ed efficace per imparare. Scarica Leap oggi!
            </p>
            
            <div className="max-w-md mx-auto mb-8">
              <a 
                href="https://apps.apple.com/it/app/leap/id6742512702" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block"
              >
                <img 
                  src="/downloadAppStore.png" 
                  alt="Scarica su App Store" 
                  className="h-12 md:h-14 w-auto hover:opacity-80 transition-opacity"
                />
              </a>
            </div>
            
            <p className="text-sm text-gray-500">
              Disponibile su iPhone e iPad
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
