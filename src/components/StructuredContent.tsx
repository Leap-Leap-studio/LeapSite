import { useEffect, useRef } from "react";

const StructuredContent = () => {
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
    <section className="section-padding relative overflow-hidden bg-gradient-to-b from-leap-light/30 to-white">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-leap-accent/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-leap-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div ref={sectionRef} className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="inline-block highlight-chip mb-4">
            <span>Informazioni Dettagliate</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tutto su
            <span className="text-gradient"> Leap</span>
          </h2>
          <p className="text-lg text-gray-600">
            Scopri i dettagli tecnici, le caratteristiche avanzate e i benefici educativi 
            che rendono Leap una soluzione unica nel panorama dell'e-learning.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Caratteristiche Tecniche */}
          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4 text-leap-primary">
              Caratteristiche Tecniche
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Piattaforma iOS nativa (iPhone e iPad)</li>
              <li>• Architettura cloud scalabile</li>
              <li>• Algoritmi di IA per personalizzazione</li>
              <li>• Sistema di gamification avanzato</li>
              <li>• Database sicuro e crittografato</li>
              <li>• API per integrazioni future</li>
            </ul>
          </div>
          
          {/* Benefici Educativi */}
          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4 text-leap-primary">
              Benefici Educativi
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Aumento della motivazione degli studenti</li>
              <li>• Miglioramento della ritenzione delle informazioni</li>
              <li>• Sviluppo di competenze collaborative</li>
              <li>• Personalizzazione del percorso di apprendimento</li>
              <li>• Monitoraggio continuo dei progressi</li>
              <li>• Riduzione dell'abbandono scolastico</li>
            </ul>
          </div>
          
          {/* Target Audience */}
          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4 text-leap-primary">
              Pubblico Target
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Studenti scuole medie (11-14 anni)</li>
              <li>• Studenti scuole superiori (14-19 anni)</li>
              <li>• Insegnanti e educatori</li>
              <li>• Istituzioni educative</li>
              <li>• Genitori interessati all'e-learning</li>
              <li>• Centri di formazione</li>
            </ul>
          </div>
          
          {/* Materie Supportate */}
          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4 text-leap-primary">
              Materie Supportate
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Matematica e Scienze</li>
              <li>• Lingue e Letteratura</li>
              <li>• Storia e Geografia</li>
              <li>• Informatica e Tecnologia</li>
              <li>• Arte e Musica</li>
              <li>• Educazione fisica e salute</li>
            </ul>
          </div>
          
          {/* Funzionalità Avanzate */}
          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4 text-leap-primary">
              Funzionalità Avanzate
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Sistema di badge e ricompense</li>
              <li>• Leaderboard e competizioni</li>
              <li>• Gruppi di studio collaborativi</li>
              <li>• Chat e messaggistica</li>
              <li>• Calendario eventi educativi</li>
              <li>• Notifiche intelligenti</li>
            </ul>
          </div>
          
          {/* Sicurezza e Privacy */}
          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4 text-leap-primary">
              Sicurezza e Privacy
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Crittografia end-to-end</li>
              <li>• Conformità GDPR</li>
              <li>• Controllo genitori</li>
              <li>• Filtri contenuti sicuri</li>
              <li>• Backup automatici</li>
              <li>• Politiche di privacy trasparenti</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StructuredContent;
