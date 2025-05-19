
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // Show success toast
    toast({
      title: "Nachricht gesendet",
      description: "Vielen Dank für Ihre Nachricht. Wir werden uns in Kürze bei Ihnen melden.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-20 bg-construction-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-construction-800 mb-4">
            Kontaktieren Sie uns
          </h2>
          <p className="text-lg text-construction-600 max-w-2xl mx-auto">
            Haben Sie Fragen oder möchten Sie ein unverbindliches Angebot erhalten? Nehmen Sie Kontakt mit uns auf.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h3 className="text-2xl font-bold text-construction-800 mb-6">Senden Sie uns eine Nachricht</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-construction-600 mb-1">
                  Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border-construction-200 focus:border-accent focus:ring-accent"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-construction-600 mb-1">
                    E-Mail *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-construction-200 focus:border-accent focus:ring-accent"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-construction-600 mb-1">
                    Telefon
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border-construction-200 focus:border-accent focus:ring-accent"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-construction-600 mb-1">
                  Ihre Nachricht *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full border-construction-200 focus:border-accent focus:ring-accent"
                />
              </div>
              
              <div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent-dark text-white font-medium py-6">
                  Nachricht senden
                </Button>
              </div>
            </form>
          </div>
          
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-construction-800 mb-6">Kontaktinformationen</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="font-medium text-accent mb-1">Adresse</p>
                  <p className="text-construction-600">
                    Musterstraße 123<br />
                    12345 Berlin
                  </p>
                </div>
                
                <div>
                  <p className="font-medium text-accent mb-1">Telefon</p>
                  <p className="text-construction-600">+49 000 000 0000</p>
                </div>
                
                <div>
                  <p className="font-medium text-accent mb-1">E-Mail</p>
                  <p className="text-construction-600">info@example.com</p>
                </div>
                
                <div>
                  <p className="font-medium text-accent mb-1">Öffnungszeiten</p>
                  <p className="text-construction-600">
                    Montag - Freitag: 8:00 - 18:00 Uhr<br />
                    Samstag: Nach Vereinbarung<br />
                    Sonntag: Geschlossen
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 lg:mt-0">
              <div className="h-64 lg:h-80 rounded-lg overflow-hidden">
                {/* Google Maps or any map embed would go here */}
                <div className="w-full h-full bg-construction-200 flex items-center justify-center">
                  <p className="text-construction-500">Karte wird geladen...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
