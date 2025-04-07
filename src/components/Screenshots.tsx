import { useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Screenshots = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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

    const sectionElement = sectionRef.current;
    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);

  // Placeholder screenshots data - in a real app, these would be replaced with actual screenshots
  const screenshots = [
    {
      id: 1,
      title: "Dashboard Personalizzata",
      description: "Visualizza il tuo progresso e le prossime missioni con una dashboard intuitiva.",
      deviceType: "iPhone"
    },
    {
      id: 2,
      title: "Missioni Interattive",
      description: "Completa sfide emozionanti che rendono l'apprendimento un gioco.",
      deviceType: "iPad"
    },
    {
      id: 3,
      title: "Profilo e Traguardi",
      description: "Tieni traccia dei tuoi successi e sblocca nuove ricompense.",
      deviceType: "iPhone"
    },
    {
      id: 4,
      title: "Studio Collaborativo",
      description: "Connettiti con compagni e forma gruppi di studio interattivi.",
      deviceType: "iPad"
    },
    {
      id: 5,
      title: "Analisi dell'Apprendimento",
      description: "Visualizza statistiche dettagliate sui tuoi progressi e aree di miglioramento.",
      deviceType: "iPhone"
    }
  ];

  return (
    <section id="screenshots" className="section-padding relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-leap-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-leap-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div ref={sectionRef} className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="inline-block highlight-chip mb-4">
            <span>Uno Sguardo all'App</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Scopri
            <span className="text-gradient"> l'Esperienza Leap</span>
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Visualizza alcuni screenshot dell'app Leap in azione su iPhone e iPad.
            Attualmente disponibile in beta su TestFlight.
          </p>
          <div className="inline-block bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
            <span className="text-leap-primary font-medium">Disponibile in beta su TestFlight per iOS</span>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {screenshots.map((item) => (
                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3 px-3 py-8">
                  <div className="glass-card p-2 h-full">
                    <div className="relative aspect-[9/16] md:aspect-[9/19] bg-gradient-to-tr from-leap-primary/10 to-leap-accent/10 rounded-xl mb-4 overflow-hidden">
                      <img src={`/screenshot/screenshot-${item.id}.jpg`} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-3">
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden sm:block">
              <CarouselPrevious className="bg-white border-0 shadow-md" />
              <CarouselNext className="bg-white border-0 shadow-md" />
            </div>
          </Carousel>
        </div>
        
        <div className="text-center mt-12">
          <a href="#contact" className="btn-secondary">
            Partecipa alla Beta
          </a>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
