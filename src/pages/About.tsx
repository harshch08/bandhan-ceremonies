import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import destinationImage from "@/assets/destination-setup.jpg";
import decorImage from "@/assets/wedding-decor.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Images */}
                <div className="relative animate-fade-in">
                  <div className="relative z-10 polaroid-frame">
                    <img
                      src={destinationImage}
                      alt="Luxury destination wedding setup"
                      className="w-full h-[400px] object-cover rounded"
                    />
                  </div>
                  <div className="absolute top-12 -right-8 polaroid-frame rotate-6 hidden md:block">
                    <img
                      src={decorImage}
                      alt="Wedding decoration details"
                      className="w-48 h-56 object-cover rounded"
                    />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
                </div>

                {/* Content */}
                <div className="animate-fade-in-up">
                  <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-8">
                    ABOUT US
                  </h1>
                  
                  <div className="space-y-6 text-foreground leading-relaxed">
                    <p>
                      Bandhan by Cardinal Revolution is a luxury destination wedding planning company 
                      born out of a passion for celebrating love, culture, and unforgettable moments. 
                      We believe every wedding is a unique story waiting to be told, and we are here 
                      to bring that story to life with creativity, elegance, and meticulous attention 
                      to detail.
                    </p>

                    <p>
                      With years of experience in curating bespoke celebrations, we specialize in 
                      destination weddings, corporate events, fashion shows, and cultural gatherings. 
                      Our expertise lies in transforming visions into reality, seamlessly blending 
                      tradition with modern aesthetics to create events that are as meaningful as 
                      they are magical.
                    </p>

                    <p>
                      At Bandhan, we understand that your wedding day is one of the most important 
                      milestones of your life. That's why we go beyond just planning—we craft 
                      experiences that resonate with your dreams, your culture, and your love story. 
                      From intimate ceremonies to grand celebrations, we handle every aspect with 
                      professionalism, passion, and a personal touch.
                    </p>

                    <p className="font-semibold text-primary">
                      Our mission is simple: to turn your special day into a cherished memory that 
                      lasts a lifetime. With a dedicated team, creative vision, and a commitment to 
                      excellence, we ensure that your celebration is nothing short of extraordinary.
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border">
                    <p className="text-xl font-heading text-accent">
                      Destination Wedding Planner
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="absolute inset-0 floral-corner" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Images Collage */}
                <div className="relative animate-fade-in order-2 md:order-1">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="polaroid-frame -rotate-3">
                      <img
                        src={decorImage}
                        alt="Table decoration"
                        className="w-full h-48 object-cover rounded"
                      />
                    </div>
                    <div className="polaroid-frame rotate-2 mt-8">
                      <img
                        src={destinationImage}
                        alt="Wedding setup"
                        className="w-full h-48 object-cover rounded"
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="animate-fade-in-up order-1 md:order-2">
                  <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-8">
                    OUR VALUES
                  </h2>
                  
                  <div className="space-y-6 text-foreground leading-relaxed">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <p>
                        <strong>Crafting one-of-a-kind experiences</strong> tailored to each couple's 
                        unique story, ensuring every celebration is as individual as the love it honors.
                      </p>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <p>
                        <strong>Delivering flawless execution</strong> with the highest standards of 
                        quality and luxury, because your special day deserves nothing less than perfection.
                      </p>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <p>
                        <strong>Building heartfelt relationships</strong> with our clients to create 
                        joyful, stress-free celebrations filled with meaning and happiness.
                      </p>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <p>
                        <strong>Honoring traditions while embracing innovation</strong>, blending 
                        cultural heritage with contemporary design to create timeless celebrations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary text-center mb-12 animate-fade-in">
                WHY CHOOSE US?
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-12 animate-fade-in-up">
                <div className="space-y-4 text-foreground">
                  <div className="flex items-start space-x-2">
                    <span className="text-accent mt-1">•</span>
                    <p>We are a <strong>customer satisfaction oriented</strong> business</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-accent mt-1">•</span>
                    <p>We provide an <strong>early-bird flat discount of 10%</strong> for all</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-accent mt-1">•</span>
                    <p><strong>Complimentary services</strong> if you book the entire wedding with us</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-accent mt-1">•</span>
                    <p><strong>Customizable premium packages</strong> with add-ons</p>
                  </div>
                </div>

                <div className="space-y-4 text-foreground">
                  <div className="flex items-start space-x-2">
                    <span className="text-accent mt-1">•</span>
                    <p>Range of <strong>Pre-Wedding shoot types and locations</strong></p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-accent mt-1">•</span>
                    <p><strong>Brand-new linens</strong> ensuring premium quality and hygiene</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-accent mt-1">•</span>
                    <p>Delivery of <strong>edited material within 30–45 days</strong></p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-accent mt-1">•</span>
                    <p><strong>Realistic costs</strong> with branded food stalls (Bikaner, Haldirams, Barista, etc.)</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-4 flex-wrap">
                <div className="polaroid-frame -rotate-2">
                  <img
                    src={decorImage}
                    alt="Food spread"
                    className="w-48 h-56 object-cover rounded"
                  />
                </div>
                <div className="polaroid-frame rotate-1">
                  <img
                    src={destinationImage}
                    alt="Photographer"
                    className="w-48 h-56 object-cover rounded"
                  />
                </div>
              </div>

              <div className="text-center mt-8">
                <p className="text-xl font-heading text-accent">Wedding Planner</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
