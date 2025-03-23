
import { useEffect, useRef } from "react";

const Step = ({ 
  number, 
  title, 
  description, 
  isLeft = true,
  delay = 0
}: { 
  number: number; 
  title: string; 
  description: string; 
  isLeft?: boolean;
  delay?: number;
}) => {
  const stepRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (isLeft) {
                entry.target.classList.add("reveal-right-visible");
              } else {
                entry.target.classList.add("reveal-left-visible");
              }
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    const stepElement = stepRef.current;
    if (stepElement) {
      observer.observe(stepElement);
    }

    return () => {
      if (stepElement) {
        observer.unobserve(stepElement);
      }
    };
  }, [isLeft, delay]);

  return (
    <div 
      ref={stepRef} 
      className={`flex flex-col md:flex-row items-center gap-6 ${isLeft ? "reveal-right" : "reveal-left"}`}
    >
      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r from-leap-primary to-leap-secondary flex items-center justify-center text-white text-xl font-bold">
        {number}
      </div>
      <div className="glass-card p-6 md:p-8 flex-1">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks = () => {
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

  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden bg-gradient-to-b from-white to-leap-light/30">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-leap-primary/20 to-leap-accent/20 hidden md:block" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div ref={sectionRef} className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="inline-block highlight-chip mb-4">
            <span>Il Percorso</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Come Leap
            <span className="text-gradient"> Trasforma l'Apprendimento</span>
          </h2>
          <p className="text-lg text-gray-600">
            Segui questi semplici passaggi per intraprendere un'esperienza di apprendimento rivoluzionaria che combina coinvolgimento, 
            personalizzazione e successo.
          </p>
        </div>
        
        <div className="space-y-12 md:space-y-24 max-w-5xl mx-auto">
          <Step 
            number={1} 
            title="Crea il Tuo Profilo di Apprendimento" 
            description="Iscriviti e completa una breve valutazione che aiuta la nostra IA a comprendere il tuo stile di apprendimento, i punti di forza e le aree di miglioramento."
            delay={100}
          />
          
          <Step 
            number={2} 
            title="Inizia le Missioni Personalizzate" 
            description="Ricevi percorsi di apprendimento personalizzati con missioni interattive e sfide progettate specificamente per le tue esigenze e interessi."
            isLeft={false}
            delay={200}
          />
          
          <Step 
            number={3} 
            title="Connettiti e Collabora" 
            description="Unisciti a gruppi di studio, partecipa a sfide con i compagni di classe e ingaggia competizioni amichevoli che rendono l'apprendimento sociale e divertente."
            delay={300}
          />
          
          <Step 
            number={4} 
            title="Monitora i Progressi e Guadagna Ricompense" 
            description="Osserva le tue competenze crescere con analisi intuitive mentre guadagni badge, sblocchi traguardi e raccogli ricompense per i tuoi successi."
            isLeft={false}
            delay={400}
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
