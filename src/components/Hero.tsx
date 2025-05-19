
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center" 
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1516216628859-9bccecaecba4?q=80&w=1920')`,
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            Qualität und Handwerk aus einer Hand
          </h1>
          <p className="text-xl text-white mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Wir schaffen langlebige und ästhetische Innenausbau-Lösungen für anspruchsvolle Kunden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" className="bg-accent hover:bg-accent-dark text-white font-medium px-8 py-6">
              Projekte entdecken
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 font-medium px-8 py-6">
              Kontakt aufnehmen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
