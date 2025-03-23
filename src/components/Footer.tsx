
const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <a href="#" className="inline-block">
              <span className="text-2xl font-bold text-leap-dark">Leap</span>
            </a>
            <p className="mt-4 text-gray-600 max-w-md">
              Leap è un LMS innovativo che rende l'apprendimento più coinvolgente e collaborativo grazie alla gamification,
              all'intelligenza artificiale e alle interazioni sociali.
            </p>
            <div className="mt-6">
              <p className="text-sm text-gray-500">
                Contattaci a <a href="mailto:info@leapstudio.it" className="text-leap-primary hover:underline">info@leapstudio.it</a>
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Link Rapidi</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-gray-600 hover:text-leap-primary transition-colors">Funzionalità</a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-600 hover:text-leap-primary transition-colors">Come Funziona</a>
              </li>
              <li>
                <a href="#screenshots" className="text-gray-600 hover:text-leap-primary transition-colors">Screenshot</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-600 hover:text-leap-primary transition-colors">Testimonianze</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-leap-primary transition-colors">Contattaci</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legale</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-leap-primary transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-leap-primary transition-colors">Termini di Servizio</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-leap-primary transition-colors">Cookie Policy</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Leap Learning. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
