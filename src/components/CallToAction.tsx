
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
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Unisciti a migliaia di studenti che hanno già scoperto un modo più coinvolgente, personalizzato 
              ed efficace per imparare. Ottieni accesso anticipato a Leap oggi!
            </p>
            
            <div className="bg-leap-primary/10 p-4 rounded-lg mb-8 inline-block">
              <p className="text-leap-primary font-medium mb-1">Disponibile in beta su TestFlight</p>
              <p className="text-sm">per iPhone e iPad</p>
            </div>
            
            <form className="max-w-md mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Inserisci la tua email" 
                  className="flex-1 rounded-full border border-gray-200 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-leap-primary/50"
                  required
                />
                <button className="btn-primary whitespace-nowrap">
                  Accedi alla Beta
                </button>
              </div>
            </form>
            
            <p className="text-sm text-gray-500">
              Iscrivendoti, sarai il primo a sapere quando Leap sarà disponibile nella tua zona.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
