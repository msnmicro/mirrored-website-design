
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projectCategories = ["Alle", "Innenausbau", "Trockenbau", "Renovierung"];

const projectItems = [
  {
    title: "Luxuswohnung Berlin",
    category: "Innenausbau",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600",
  },
  {
    title: "Büroumbau Frankfurt",
    category: "Trockenbau",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=600",
  },
  {
    title: "Altbausanierung München",
    category: "Renovierung",
    image: "https://images.unsplash.com/photo-1615529162924-f8605388461d?q=80&w=600",
  },
  {
    title: "Penthouse Hamburg",
    category: "Innenausbau",
    image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=600",
  },
  {
    title: "Praxisräume Düsseldorf",
    category: "Trockenbau",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=600",
  },
  {
    title: "Hotelrenovierung Stuttgart",
    category: "Renovierung",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=600",
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("Alle");

  const filteredProjects = activeCategory === "Alle" 
    ? projectItems 
    : projectItems.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-construction-800 mb-4">
            Unsere Projekte
          </h2>
          <p className="text-lg text-construction-600 max-w-2xl mx-auto">
            Entdecken Sie eine Auswahl unserer erfolgreich abgeschlossenen Projekte und überzeugen Sie sich von unserer handwerklichen Expertise.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {projectCategories.map((category, index) => (
            <Button 
              key={index}
              variant={activeCategory === category ? "default" : "outline"}
              className={`mb-2 ${
                activeCategory === category 
                  ? "bg-accent hover:bg-accent-dark text-white" 
                  : "text-construction-700 hover:text-accent"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden group cursor-pointer border-none shadow-md hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-0 relative">
                <div className="h-80 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                  <div className="text-center px-4 py-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-accent">{project.category}</p>
                    <Button className="mt-4 bg-white text-construction-800 hover:bg-gray-100">
                      Projekt ansehen
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-accent hover:bg-accent-dark text-white font-medium px-8 py-6">
            Alle Projekte ansehen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
