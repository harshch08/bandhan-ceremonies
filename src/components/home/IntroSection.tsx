import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Calendar, Heart } from "lucide-react";

const IntroSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            Your Dream Wedding Begins Here
          </h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            At Bandhan by Cardinal Revolution, we transform your vision into reality. 
            From intimate ceremonies to grand destination celebrations, we craft every 
            moment with meticulous attention to detail and heartfelt passion.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 bg-card rounded-lg shadow-soft hover:shadow-elegant transition-all">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="text-accent" size={24} />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">Luxury Planning</h3>
              <p className="text-sm text-muted-foreground">
                Premium services tailored to your unique story
              </p>
            </div>

            <div className="p-6 bg-card rounded-lg shadow-soft hover:shadow-elegant transition-all">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-accent" size={24} />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">Full Coordination</h3>
              <p className="text-sm text-muted-foreground">
                Stress-free planning from start to finish
              </p>
            </div>

            <div className="p-6 bg-card rounded-lg shadow-soft hover:shadow-elegant transition-all">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-accent" size={24} />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">Personal Touch</h3>
              <p className="text-sm text-muted-foreground">
                Every detail reflects your love story
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Explore Services
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
