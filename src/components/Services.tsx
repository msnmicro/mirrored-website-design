
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

const serviceItems = [
  {
    title: "Innenausbau",
    description: "Kompletter Innenausbau von Wohn- und Geschäftsräumen mit höchster Qualität und individueller Beratung.",
    image: "https://images.unsplash.com/photo-1618219944342-824e40a13285?q=80&w=500",
  },
  {
    title: "Trockenbau",
    description: "Präzise Trockenbauarbeiten für Wände, Decken und gestalterische Elemente mit modernsten Techniken.",
    image: "https://images.unsplash.com/photo-1541976844346-f18aeac57b06?q=80&w=500",
  },
  {
    title: "Maler & Lackier",
    description: "Professionelle Maler- und Lackierarbeiten für Ihr perfektes Raumambiente mit erstklassigen Materialien.",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=500",
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-construction-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-construction-800 mb-4">
            Unsere Leistungen
          </h2>
          <p className="text-lg text-construction-600 max-w-2xl mx-auto">
            Wir bieten Ihnen ein breites Spektrum an professionellen Handwerksleistungen für Ihre individuellen Bedürfnisse.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-60 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-construction-800">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-construction-600">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-accent hover:text-accent-dark hover:bg-accent/5 p-0">
                  Mehr erfahren <ChevronRight size={16} className="ml-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-accent hover:bg-accent-dark text-white font-medium px-8 py-6">
            Alle Leistungen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
