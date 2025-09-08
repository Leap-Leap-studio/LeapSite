import { useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ToolCard = ({ 
  icon, 
  title, 
  description,
  delay = 0,
  onOpen
}: { 
  icon: string; 
  title: string; 
  description: string;
  delay?: number;
  onOpen: () => void;
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
    <div 
      ref={cardRef} 
      className="tools-card reveal hover:scale-105 transition-all duration-300 cursor-pointer"
      onClick={onOpen}
    >
      <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
        <img 
          src={`/strumenti/${icon}`} 
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="text-center font-semibold text-gray-800">{title}</h3>
    </div>
  );
};

const ToolsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedTool, setSelectedTool] = useState<typeof tools[0] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
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

  const handleToolClick = (tool: typeof tools[0]) => {
    setSelectedTool(tool);
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setSelectedTool(null);
  };

  const checkScrollButtons = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth);
    }
  };

  const scrollLeft = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollButtons);
      checkScrollButtons(); // Check initial state
      return () => container.removeEventListener('scroll', checkScrollButtons);
    }
  }, []);

  const getToolColor = (color: string) => {
    const colors = {
      orange: '#F97316',
      purple: '#8B5CF6',
      green: '#10B981',
      red: '#EF4444',
      yellow: '#F59E0B',
      blue: '#3B82F6',
      none: '#6B7280'
    };
    return colors[color as keyof typeof colors] || colors.none;
  };

  const tools = [
    {
      icon: "nonna.png",
      title: "Spiega alla Nonna",
      description: "Ripeti l'argomento come se lo spiegassi alla nonna: ti alleni a semplificare e a fissare i concetti.",
      color: "orange"
    },
    {
      icon: "papera.png",
      title: "Sfida la Papera",
      description: "Spiega l'argomento e rispondi alle domande della papera: scopri quanto sei chiaro e lineare.",
      color: "yellow"
    },
    {
      icon: "Assistente.svg",
      title: "Assistente",
      description: "Un AI come ChatGPT, ma specializzato sugli argomenti scolastici.",
      color: "purple"
    },
    {
      icon: "trascrov.svg",
      title: "Trascrivi",
      description: "Trasforma lezioni o audio in materiale scritto pronto da studiare.",
      color: "green"
    },
    {
      icon: "risolutore.svg",
      title: "Risolutore Esercizi",
      description: "Ti aiuta a risolvere esercizi di matematica, chimica e molto altro.",
      color: "red"
    },
    {
      icon: "migliora.png",
      title: "Migliora",
      description: "Trasforma le tue bozze in testi più chiari e curati.",
      color: "none"
    },
    {
      icon: "schematizza.png",
      title: "Schematizza",
      description: "Crea schemi semplici ed efficaci dal tuo materiale.",
      color: "none"
    },
    {
      icon: "semplifica.png",
      title: "Semplifica",
      description: "Rende un testo complesso più facile da capire.",
      color: "none"
    },
    {
      icon: "VeroFalso.svg",
      title: "Vero o Falso",
      description: "Genera domande vero/falso dal tuo materiale.",
      color: "green"
    },
    {
      icon: "Quiz.svg",
      title: "Quiz",
      description: "Crea quiz personalizzati per allenarti.",
      color: "yellow"
    },
    {
      icon: "memorycard.svg",
      title: "Flashcards",
      description: "Genera flashcard per memorizzare meglio.",
      color: "blue"
    },
    {
      icon: "traduttore.png",
      title: "Traduttore",
      description: "Traduce i tuoi materiali di studio.",
      color: "none"
    },
    {
      icon: "riassunto.png",
      title: "Riassunto",
      description: "Sintetizza i testi lunghi nei punti chiave.",
      color: "none"
    },
    {
      icon: "mappe.svg",
      title: "Mappe",
      description: "Crea mappe visive per collegare le idee.",
      color: "orange"
    },
    {
      icon: "simulaotre.svg",
      title: "Simulatore Interrogazione",
      description: "Simula un'interrogazione con insegnanti virtuali per allenare orale e scritto.",
      color: "red"
    }
  ];

  return (
    <section id="tools" className="section-padding relative overflow-hidden bg-gray-50">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-leap-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-leap-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div ref={sectionRef} className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="inline-block highlight-chip mb-4">
            <span>Strumenti Esclusivi</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ecco gli strumenti disponibili
            <span className="text-gradient"> SOLO su Leap</span>
          </h2>
          <p className="text-lg text-gray-600">
            Scopri gli strumenti innovativi che rendono l'apprendimento più efficace e coinvolgente.
          </p>
        </div>
        
        {/* Card degli strumenti con frecce di navigazione */}
        <div className="relative">
          {/* Frecce di navigazione - nascoste su mobile */}
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center transition-all duration-200 hidden md:flex ${
              canScrollLeft 
                ? 'hover:bg-gray-50 hover:shadow-xl text-gray-700' 
                : 'opacity-50 cursor-not-allowed text-gray-400'
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center transition-all duration-200 hidden md:flex ${
              canScrollRight 
                ? 'hover:bg-gray-50 hover:shadow-xl text-gray-700' 
                : 'opacity-50 cursor-not-allowed text-gray-400'
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Container delle card */}
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide pb-4 touch-pan-x"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            <div className="flex gap-4 min-w-max px-4 md:px-16 py-2 justify-center">
              {tools.map((tool, index) => (
                <div key={tool.title} className="flex-shrink-0">
                  <div 
                    className="tools-card-enhanced w-36 cursor-pointer hover:scale-105 transition-all duration-300"
                    style={{
                      borderColor: getToolColor(tool.color),
                      borderWidth: '2px',
                      borderStyle: 'solid'
                    }}
                    onMouseEnter={(e) => {
                      const color = getToolColor(tool.color);
                      e.currentTarget.style.borderColor = tool.color === 'none' ? '#9CA3AF' : color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = getToolColor(tool.color);
                    }}
                    onClick={() => handleToolClick(tool)}
                  >
                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <img 
                        src={`/strumenti/${tool.icon}`} 
                        alt={tool.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 style={{ color: getToolColor(tool.color) }} className="text-center text-sm leading-tight">
                      {tool.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Indicatore mobile per scroll */}
        <div className="md:hidden text-center mt-4">
          <div className="inline-flex items-center gap-2 text-sm text-gray-500">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
        
      </div>

      {/* Popup Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={handleDialogClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 text-xl">
              <div className="w-8 h-8 flex items-center justify-center">
                <img 
                  src={`/strumenti/${selectedTool?.icon}`} 
                  alt={selectedTool?.title}
                  className="w-full h-full object-contain"
                />
              </div>
              {selectedTool?.title}
            </DialogTitle>
            <DialogDescription className="text-base pt-4">
              {selectedTool?.description}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ToolsSection;
