import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Camera, Utensils, Music, Sparkles, Briefcase, Users, Palette, Megaphone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Event Planning & Coordination",
      description: "Complete end-to-end planning with meticulous attention to every detail",
      features: [
        "Custom event design and concept development",
        "Vendor selection and management",
        "Timeline creation and coordination",
        "On-site event management",
      ],
    },
    {
      icon: Palette,
      title: "Destination Weddings",
      description: "Create unforgettable experiences in breathtaking locations worldwide",
      features: [
        "Venue scouting and selection",
        "Travel and accommodation arrangements",
        "Local vendor coordination",
        "Cultural integration and customs",
      ],
    },
    {
      icon: Briefcase,
      title: "Corporate Events & Conferences",
      description: "Professional event management for business gatherings",
      features: [
        "Conference planning and execution",
        "Team building activities",
        "Product launches",
        "Award ceremonies",
      ],
    },
    {
      icon: Users,
      title: "Talent Shows / Fashion Events",
      description: "Spectacular productions that leave lasting impressions",
      features: [
        "Runway and stage design",
        "Talent coordination",
        "Lighting and sound production",
        "Media and PR management",
      ],
    },
    {
      icon: Camera,
      title: "Photography & Videography",
      description: "Capture every precious moment with professional artistry",
      features: [
        "Pre-wedding photo shoots",
        "Cinematic wedding films",
        "Drone photography",
        "Same-day editing available",
      ],
    },
    {
      icon: Utensils,
      title: "Catering & Decor",
      description: "Exquisite cuisine and stunning aesthetics for your event",
      features: [
        "Branded food stalls (Bikaner, Haldirams, Barista)",
        "Custom menu design",
        "Floral arrangements and centerpieces",
        "Premium quality linens and tableware",
      ],
    },
    {
      icon: Music,
      title: "Stage Setup & Lighting / Sound",
      description: "State-of-the-art audio-visual production",
      features: [
        "Professional sound systems",
        "Ambient and dramatic lighting",
        "Custom stage design",
        "Technical support throughout event",
      ],
    },
    {
      icon: Megaphone,
      title: "Artist & Celebrity Management",
      description: "Book and manage top talent for your event",
      features: [
        "Artist booking and contracts",
        "Celebrity appearances",
        "Performance coordination",
        "Green room and hospitality management",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-6">
                Our Services
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                From intimate celebrations to grand destination weddings, we offer comprehensive 
                event planning services tailored to bring your vision to life with elegance and precision.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <Card 
                  key={service.title} 
                  className="shadow-soft hover:shadow-elegant transition-all duration-300 animate-fade-in-up border-border"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                      <service.icon className="text-accent" size={28} />
                    </div>
                    <CardTitle className="text-2xl font-heading text-primary">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start space-x-2 text-sm text-foreground">
                          <span className="text-accent mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-heading font-bold text-primary mb-6">
                Ready to Plan Your Event?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's create something extraordinary together. Contact us today for a consultation.
              </p>
              <a 
                href="/contact"
                className="inline-block bg-accent hover:bg-accent/90 text-primary font-semibold px-8 py-4 rounded-lg shadow-soft transition-smooth"
              >
                Get Started
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
