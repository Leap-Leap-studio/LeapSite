import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: "Che cos'è Leap e come funziona?",
      answer: "Leap è un LMS (Learning Management System) innovativo che trasforma l'educazione tradizionale attraverso gamification, intelligenza artificiale e collaborazione sociale. L'app è progettata per studenti di scuole medie e superiori e funziona combinando missioni educative, ricompense, community dinamiche e personalizzazione IA per rendere l'apprendimento più coinvolgente e efficace.",
      category: "Informazioni Generali"
    },
    {
      question: "Per quali fasce d'età è adatto Leap?",
      answer: "Leap è specificamente progettato per studenti di scuole medie e superiori, quindi per ragazzi dai 11 ai 19 anni. L'app si adatta ai diversi livelli di apprendimento e stili cognitivi tipici di queste fasce d'età.",
      category: "Target Audience"
    },
    {
      question: "Come funziona la gamification in Leap?",
      answer: "La gamification in Leap include missioni educative, quest, ricompense, badge, sistemi di punti e traguardi. Gli studenti possono competere in sfide amichevoli, collaborare in gruppi di studio e guadagnare ricompense per i loro progressi accademici.",
      category: "Funzionalità"
    },
    {
      question: "Come viene utilizzata l'intelligenza artificiale?",
      answer: "L'IA in Leap si adatta allo stile di apprendimento di ogni studente, fornendo contenuti personalizzati e sfide al livello di difficoltà ottimale. Analizza i progressi, identifica le aree di miglioramento e suggerisce percorsi di apprendimento personalizzati.",
      category: "Tecnologia"
    },
    {
      question: "Leap è gratuito?",
      answer: "Sì, Leap è completamente gratuito e disponibile su App Store per iPhone e iPad. Non ci sono costi nascosti o abbonamenti richiesti per utilizzare le funzionalità principali dell'app.",
      category: "Costi"
    },
    {
      question: "Come funziona la collaborazione tra studenti?",
      answer: "Gli studenti possono connettersi con i compagni di classe, formare gruppi di studio, partecipare a discussioni e competere in sfide collaborative. La piattaforma facilita l'apprendimento sociale e la condivisione di conoscenze.",
      category: "Collaborazione"
    },
    {
      question: "Che tipo di contenuti educativi offre Leap?",
      answer: "Leap offre contenuti interattivi e multimediali per tutte le materie scolastiche principali. I materiali sono dinamici, si adattano a diversi stili di apprendimento e includono elementi gamificati per mantenere alta la motivazione.",
      category: "Contenuti"
    },
    {
      question: "Come vengono monitorati i progressi degli studenti?",
      answer: "Leap fornisce dashboard personalizzate con analisi intuitive dei progressi. Gli studenti possono visualizzare il loro percorso di apprendimento, identificare punti di forza e aree di miglioramento attraverso grafici e statistiche dettagliate.",
      category: "Monitoraggio"
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-leap-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-leap-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block highlight-chip mb-4">
            <span>Domande Frequenti</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tutto quello che devi sapere su
            <span className="text-gradient"> Leap</span>
          </h2>
          <p className="text-lg text-gray-600">
            Risposte alle domande più comuni su Leap
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="glass-card overflow-hidden">
                <button
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-white/50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {item.question}
                  </h3>
                  <span className="text-leap-primary text-2xl transition-transform duration-200">
                    {activeIndex === index ? '−' : '+'}
                  </span>
                </button>
                {activeIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                    <div className="mt-3">
                      <span className="inline-block bg-leap-primary/10 text-leap-primary text-sm px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
