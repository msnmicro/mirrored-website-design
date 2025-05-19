
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-construction-800 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800" 
                alt="Unser Team" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-accent p-6 rounded-lg shadow-xl hidden md:block">
                <p className="font-bold text-3xl">25+</p>
                <p className="text-sm">Jahre Erfahrung</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Über Unser Unternehmen</h2>
            
            <p className="text-lg text-gray-300 mb-6">
              Seit über 25 Jahren sind wir Ihr zuverlässiger Partner für hochwertige Innenausbauarbeiten. 
              Als Familienunternehmen legen wir großen Wert auf Qualität, Zuverlässigkeit und handwerkliche Präzision.
            </p>
            
            <p className="text-lg text-gray-300 mb-8">
              Unser erfahrenes Team aus Fachleuten realisiert Ihre Wünsche mit höchster handwerklicher Kompetenz 
              und einem Gespür für Ästhetik. Von der ersten Beratung bis zur finalen Umsetzung stehen wir Ihnen 
              mit unserer Expertise zur Seite.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              <div className="text-center p-4 bg-construction-700 rounded-lg">
                <p className="font-bold text-3xl text-accent mb-2">250+</p>
                <p>Zufriedene Kunden</p>
              </div>
              <div className="text-center p-4 bg-construction-700 rounded-lg">
                <p className="font-bold text-3xl text-accent mb-2">500+</p>
                <p>Abgeschlossene Projekte</p>
              </div>
              <div className="text-center p-4 bg-construction-700 rounded-lg">
                <p className="font-bold text-3xl text-accent mb-2">15+</p>
                <p>Experten im Team</p>
              </div>
            </div>
            
            <Button className="bg-accent hover:bg-accent-dark text-white font-medium px-8 py-6">
              Mehr über uns
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
