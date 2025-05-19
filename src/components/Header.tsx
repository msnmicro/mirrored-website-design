
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-construction-800">
            COMPANY NAME
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#services" className="text-construction-700 hover:text-accent font-medium">
            Leistungen
          </a>
          <a href="#projects" className="text-construction-700 hover:text-accent font-medium">
            Projekte
          </a>
          <a href="#about" className="text-construction-700 hover:text-accent font-medium">
            Über Uns
          </a>
          <a href="#contact" className="text-construction-700 hover:text-accent font-medium">
            Kontakt
          </a>
          <Button className="bg-accent hover:bg-accent-dark text-white">
            +49 000 000 0000
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-construction-800" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white w-full py-4 shadow-lg">
          <nav className="flex flex-col space-y-4 px-4">
            <a 
              href="#services" 
              className="text-construction-700 hover:text-accent font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Leistungen
            </a>
            <a 
              href="#projects" 
              className="text-construction-700 hover:text-accent font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projekte
            </a>
            <a 
              href="#about" 
              className="text-construction-700 hover:text-accent font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Über Uns
            </a>
            <a 
              href="#contact" 
              className="text-construction-700 hover:text-accent font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Kontakt
            </a>
            <Button className="bg-accent hover:bg-accent-dark text-white w-full">
              +49 000 000 0000
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
