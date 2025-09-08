
import { useEffect, useRef } from "react";

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  delay = 0 
}: { 
  icon: string; 
  title: string; 
  description: string; 
  delay?: number; 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("reveal-visible");
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cardElement = cardRef.current;
    if (cardElement) {
      observer.observe(cardElement);
    }

    return () => {
      if (cardElement) {
        observer.unobserve(cardElement);
      }
    };
  }, [delay]);

  return (
    <div ref={cardRef} className="glass-card p-6 sm:p-8 reveal">
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-leap-primary to-leap-secondary flex items-center justify-center text-white text-2xl mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
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
    <section id="features" className="section-padding relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-leap-accent/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-leap-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div ref={sectionRef} className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="inline-block highlight-chip mb-4">
            <span>Perché Scegliere Leap</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Trasformiamo l'Educazione con
            <span className="text-gradient"> Funzionalità Coinvolgenti</span>
          </h2>
          <p className="text-lg text-gray-600">
            
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon="🎮"
            title="Apprendimento Gamificato"
            description="Trasforma lo studio in un'avventura con missioni, quest e ricompense che rendono l'apprendimento coinvolgente e divertente."
            delay={100}
          />
          <FeatureCard
            icon="🤖"
            title="Personalizzazione IA"
            description="La nostra IA si adatta allo stile di apprendimento di ogni studente, fornendo contenuti e sfide personalizzate al livello di difficoltà perfetto."
            delay={200}
          />
          <FeatureCard
            icon="👥"
            title="Collaborazione Sociale"
            description="Connettiti con i compagni di classe, forma gruppi di studio e competi in sfide amichevoli che rendono l'apprendimento un'esperienza sociale."
            delay={300}
          />
          <FeatureCard
            icon="🔍"
            title="Contenuti Interattivi"
            description="Coinvolgimento con materiali didattici dinamici e multimediali che danno vita alle materie e si adattano a diversi stili di apprendimento."
            delay={400}
          />
          <FeatureCard
            icon="📊"
            title="Analisi dei Progressi"
            description="Visualizza il percorso di apprendimento con analisi intuitive che aiutano gli studenti a comprendere i punti di forza e le aree di miglioramento."
            delay={500}
          />
          <FeatureCard
            icon="🏆"
            title="Sistema di Traguardi"
            description="Guadagna badge, sblocca ricompense e monitora i progressi con un sistema completo di traguardi che celebra ogni vittoria."
            delay={600}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
