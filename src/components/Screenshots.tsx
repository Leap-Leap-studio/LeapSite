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

  // Screenshots data based on actual app content
  const screenshots = [
    {
      id: 1,
      title: "Focus e Concentrazione",
      description: "Gestisci le tue sessioni di studio con il timer Pomodoro, blocca le distrazioni e mantieni la concentrazione.",
      deviceType: "iPhone"
    },
    {
      id: 2,
      title: "Homepage e Materiali",
      description: "Dashboard principale con caricamento materiali, gestione compiti e accesso rapido allo studio con AI.",
      deviceType: "iPhone"
    },
    {
      id: 3,
      title: "Gestione Materie",
      description: "Organizza le tue materie di studio con icone e colori distintivi per ogni corso.",
      deviceType: "iPhone"
    },
    {
      id: 4,
      title: "Strumenti e Ripetizione",
      description: "Suite completa di strumenti: quiz, flashcard, simulazioni, sfide e funzionalità AI per l'apprendimento.",
      deviceType: "iPhone"
    },
    {
      id: 5,
      title: "Community e Social",
      description: "Connettiti con altri studenti, partecipa a gruppi di studio e condividi le tue esperienze di apprendimento.",
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
            Ora disponibile sull'App Store.
          </p>
          <div className="inline-block bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <span className="text-leap-primary font-medium">Disponibile su App Store per iOS</span>
          </div>
          <div className="mb-8">
            <a
              href="https://app.leapstudio.it"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm px-5 py-2 rounded-full shadow hover:opacity-90 transition"
            >
              Apri Web App
            </a>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {screenshots.map((item) => (
                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3 px-3 py-8">
                  <div className="glass-card p-2 h-full">
                    <div className="relative bg-gradient-to-tr from-leap-primary/10 to-leap-accent/10 rounded-xl mb-4 overflow-hidden h-96 flex justify-center">
                      <img src={`/Screenshot/screenshot-${item.id === 1 ? 4 : item.id === 4 ? 1 : item.id === 2 ? 5 : item.id === 5 ? 2 : item.id}.png`} alt={item.title} className="h-full object-contain" />
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
            Scarica Leap
          </a>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
