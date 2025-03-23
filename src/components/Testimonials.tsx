
import { useEffect, useRef } from "react";

const TestimonialCard = ({ 
  quote, 
  author, 
  role, 
  delay = 0 
}: { 
  quote: string; 
  author: string; 
  role: string; 
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
    <div ref={cardRef} className="glass-card p-6 md:p-8 reveal hover-scale">
      <div className="mb-6">
        <svg className="w-8 h-8 text-leap-primary opacity-50" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.737 21.48c1.237 0 2.237-0.403 3-1.208s1.143-1.891 1.143-3.259c0-1.249-0.395-2.357-1.186-3.324s-1.868-1.452-3.231-1.452c-1.32 0-2.411 0.451-3.272 1.353-0.861 0.903-1.292 2.063-1.292 3.481 0 0.928 0.169 1.855 0.506 2.783-0.169 0.654-0.506 1.249-1.011 1.785 0.844 0.56 1.742 0.841 2.694 0.841h2.649zM25.473 21.48c1.237 0 2.237-0.403 3-1.208s1.143-1.891 1.143-3.259c0-1.249-0.395-2.357-1.186-3.324s-1.868-1.452-3.231-1.452c-1.32 0-2.411 0.451-3.272 1.353-0.861 0.903-1.292 2.063-1.292 3.481 0 0.928 0.169 1.855 0.506 2.783-0.169 0.654-0.506 1.249-1.011 1.785 0.844 0.56 1.742 0.841 2.694 0.841h2.649z"></path>
        </svg>
      </div>
      <p className="text-gray-600 mb-6">{quote}</p>
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500 font-medium">{author.charAt(0)}</span>
        </div>
        <div className="ml-3">
          <h4 className="font-medium">{author}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
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
    <section id="testimonials" className="section-padding relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-leap-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-leap-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div ref={sectionRef} className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="inline-block highlight-chip mb-4">
            <span>Storie di Successo</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Cosa Dicono i Nostri
            <span className="text-gradient"> Studenti</span>
          </h2>
          <p className="text-lg text-gray-600">
            Ascolta direttamente dagli studenti che hanno trasformato la loro esperienza di apprendimento con l'approccio 
            innovativo di Leap all'educazione.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            quote="Leap ha trasformato lo studio da qualcosa che temevo a qualcosa che attendo con piacere! Le missioni e le ricompense mi spingono a voler imparare sempre di più."
            author="Sofia R."
            role="Studentessa di Liceo"
            delay={100}
          />
          <TestimonialCard
            quote="La personalizzazione dell'IA è incredibile. È come avere un tutor che sa sempre esattamente su cosa devo lavorare e come renderlo interessante per me."
            author="Marco T."
            role="Studente di Scuola Media"
            delay={200}
          />
          <TestimonialCard
            quote="Ho sempre avuto difficoltà a rimanere motivata, ma il sistema di traguardi in Leap mi fa sentire realizzata. Posso letteralmente vedere i miei progressi!"
            author="Emma L."
            role="Studentessa di Liceo"
            delay={300}
          />
          <TestimonialCard
            quote="Le funzionalità collaborative mi hanno aiutato a connettermi con compagni di classe con cui non avevo mai parlato prima. Ora abbiamo gruppi di studio che rendono l'apprendimento molto più divertente."
            author="Davide K."
            role="Studente di Scuola Media"
            delay={400}
          />
          <TestimonialCard
            quote="Come persona che si annoia facilmente, i contenuti interattivi mi tengono coinvolto. Sto comprendendo concetti con cui prima avevo difficoltà perché posso visualizzarli."
            author="Luca P."
            role="Studente di Liceo"
            delay={500}
          />
          <TestimonialCard
            quote="Le analisi mi mostrano esattamente dove sto migliorando e su cosa devo concentrarmi. È come avere una roadmap per la mia istruzione che posso effettivamente seguire."
            author="Mia J."
            role="Studentessa di Scuola Media"
            delay={600}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
