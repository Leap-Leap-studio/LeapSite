import { useEffect, useRef } from "react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const heroElement = heroRef.current;
    if (heroElement) {
      observer.observe(heroElement);
    }

    return () => {
      if (heroElement) {
        observer.unobserve(heroElement);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-leap-light/30 to-white" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-leap-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-leap-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div ref={heroRef} className="opacity-0 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-block highlight-chip mb-6 animate-fade-in">
              <span>Reinventiamo l'Educazione</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              L'apprendimento che diventa
              <span className="text-gradient block">gioco, potenziato dall'IA</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 md:pr-12 max-w-2xl mx-auto lg:mx-0">
              Leap è un LMS innovativo che rende l'apprendimento più coinvolgente e collaborativo grazie alla gamification,
              all'intelligenza artificiale e alle interazioni sociali.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact" className="btn-primary">
                Scarica Leap
              </a>
              <a href="#features" className="btn-primary">
                Scopri le Funzionalità
              </a>
              <a href="#how-it-works" className="btn-secondary">
                Come Funziona
              </a>
            </div>
            
            <div className="mt-6 bg-white/80 backdrop-blur-sm p-3 rounded-lg inline-block text-sm">
              <span className="font-medium text-leap-primary">Disponibile su App Store</span>
              <p className="text-gray-600">per iPhone e iPad</p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-leap-primary/20 to-leap-accent/20 blur-2xl" />
            <div className="bg-white/30 backdrop-blur-md shadow-glass rounded-3xl p-4 md:p-6 border border-white/30 overflow-hidden relative hover-scale">
              <div className="bg-black/5 rounded-2xl overflow-hidden">
                 <img src="/screenshot/Homepage.png" alt="Homepage screenshot" className="w-full h-auto object-cover" />
             </div>
              
              {/* Floating elements to show gamification */}
              <div className="absolute -top-2 -right-2 bg-white rounded-full p-2 shadow-soft animate-float">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">+10</span>
                </div>
              </div>
              
              <div className="absolute bottom-10 -left-2 bg-white rounded-full p-2 shadow-soft animate-float" style={{ animationDelay: "1s" }}>
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">🏆</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
