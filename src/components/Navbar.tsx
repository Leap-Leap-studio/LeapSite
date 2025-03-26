import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 py-4',
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-soft' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Leap Logo" className="h-8 w-auto" />
          <span className="text-2xl font-bold text-leap-dark">Leap</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium text-leap-dark hover:text-leap-primary transition-colors">
            Funzionalità
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-leap-dark hover:text-leap-primary transition-colors">
            Come Funziona
          </a>
          <a href="#screenshots" className="text-sm font-medium text-leap-dark hover:text-leap-primary transition-colors">
            Screenshot
          </a>
          <a href="#testimonials" className="text-sm font-medium text-leap-dark hover:text-leap-primary transition-colors">
            Testimonianze
          </a>
          <a href="#contact" className="btn-primary">
            Inizia Ora
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col space-y-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={cn(
            "block w-6 h-0.5 bg-leap-dark transition-transform duration-300 ease-in-out",
            mobileMenuOpen && "rotate-45 translate-y-2"
          )} />
          <span className={cn(
            "block w-6 h-0.5 bg-leap-dark transition-opacity duration-300 ease-in-out", 
            mobileMenuOpen && "opacity-0"
          )} />
          <span className={cn(
            "block w-6 h-0.5 bg-leap-dark transition-transform duration-300 ease-in-out",
            mobileMenuOpen && "-rotate-45 -translate-y-2"
          )} />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 z-40 bg-white flex flex-col pt-20 px-6 transition-transform duration-300 ease-in-out md:hidden",
        mobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <nav className="flex flex-col space-y-6 items-center">
          <a 
            href="#features" 
            className="text-lg font-medium text-leap-dark hover:text-leap-primary transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Funzionalità
          </a>
          <a 
            href="#how-it-works" 
            className="text-lg font-medium text-leap-dark hover:text-leap-primary transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Come Funziona
          </a>
          <a 
            href="#screenshots" 
            className="text-lg font-medium text-leap-dark hover:text-leap-primary transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Screenshot
          </a>
          <a 
            href="#testimonials" 
            className="text-lg font-medium text-leap-dark hover:text-leap-primary transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Testimonianze
          </a>
          <a 
            href="#contact" 
            className="btn-primary w-full text-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            Inizia Ora
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
