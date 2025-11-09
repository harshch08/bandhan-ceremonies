import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Lightbox from "@/components/gallery/Lightbox";
import { Button } from "@/components/ui/button";

// Import gallery images
import wedding1 from "@/assets/gallery/wedding-1.jpg";
import wedding2 from "@/assets/gallery/wedding-2.jpg";
import wedding3 from "@/assets/gallery/wedding-3.jpg";
import corporate1 from "@/assets/gallery/corporate-1.jpg";
import corporate2 from "@/assets/gallery/corporate-2.jpg";
import corporate3 from "@/assets/gallery/corporate-3.jpg";
import fashion1 from "@/assets/gallery/fashion-1.jpg";
import fashion2 from "@/assets/gallery/fashion-2.jpg";
import fashion3 from "@/assets/gallery/fashion-3.jpg";

type Category = "all" | "wedding" | "corporate" | "fashion";

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category: Category;
  date: string;
  location: string;
  gridSize: "small" | "medium" | "large";
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: wedding1,
    title: "Royal Indian Wedding Ceremony",
    category: "wedding",
    date: "December 2024",
    location: "Jaipur Palace",
    gridSize: "large",
  },
  {
    id: 2,
    src: wedding2,
    title: "Elegant Reception Ballroom",
    category: "wedding",
    date: "November 2024",
    location: "Mumbai Grand Hotel",
    gridSize: "medium",
  },
  {
    id: 3,
    src: corporate1,
    title: "Tech Conference 2024",
    category: "corporate",
    date: "October 2024",
    location: "Bengaluru Convention Center",
    gridSize: "medium",
  },
  {
    id: 4,
    src: fashion1,
    title: "Couture Fashion Week",
    category: "fashion",
    date: "September 2024",
    location: "Delhi Fashion Arena",
    gridSize: "large",
  },
  {
    id: 5,
    src: wedding3,
    title: "Beach Destination Wedding",
    category: "wedding",
    date: "August 2024",
    location: "Goa Beach Resort",
    gridSize: "small",
  },
  {
    id: 6,
    src: corporate2,
    title: "Corporate Gala Evening",
    category: "corporate",
    date: "July 2024",
    location: "Hyatt Regency",
    gridSize: "large",
  },
  {
    id: 7,
    src: fashion2,
    title: "Designer Show Backstage",
    category: "fashion",
    date: "June 2024",
    location: "Fashion Studio",
    gridSize: "medium",
  },
  {
    id: 8,
    src: corporate3,
    title: "Product Launch Event",
    category: "corporate",
    date: "May 2024",
    location: "Tech Park Auditorium",
    gridSize: "small",
  },
  {
    id: 9,
    src: fashion3,
    title: "Haute Couture Exhibition",
    category: "fashion",
    date: "April 2024",
    location: "Art Gallery",
    gridSize: "small",
  },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = [
    { id: "all" as Category, label: "All Events" },
    { id: "wedding" as Category, label: "Weddings" },
    { id: "corporate" as Category, label: "Corporate" },
    { id: "fashion" as Category, label: "Fashion" },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const currentImageIndex = selectedImage !== null 
    ? filteredImages.findIndex(img => img.id === selectedImage)
    : -1;

  const handleNext = () => {
    if (currentImageIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentImageIndex + 1].id);
    }
  };

  const handlePrevious = () => {
    if (currentImageIndex > 0) {
      setSelectedImage(filteredImages[currentImageIndex - 1].id);
    }
  };

  const getGridClass = (size: string) => {
    switch (size) {
      case "large":
        return "md:row-span-2 md:col-span-2";
      case "medium":
        return "md:row-span-2";
      case "small":
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-6">
                Our Portfolio
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Explore our curated collection of unforgettable events. Each celebration 
                tells a unique story of elegance, emotion, and exceptional execution.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-background sticky top-20 z-40 border-b border-border shadow-soft">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  className={
                    selectedCategory === category.id
                      ? "bg-accent hover:bg-accent/90 text-primary font-semibold"
                      : "hover:bg-accent/10"
                  }
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
              {filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`group relative overflow-hidden rounded-lg cursor-pointer shadow-soft hover:shadow-elegant transition-all duration-300 animate-fade-in ${getGridClass(
                    image.gridSize
                  )}`}
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setSelectedImage(image.id)}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white font-heading text-2xl font-bold mb-2">
                      {image.title}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-white/90">
                      <span className="px-2 py-1 bg-white/20 rounded-full capitalize">
                        {image.category}
                      </span>
                      <span>{image.location}</span>
                    </div>
                    <p className="text-white/80 text-sm mt-2">{image.date}</p>
                  </div>
                </div>
              ))}
            </div>

            {filteredImages.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">
                  No events found in this category.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-heading font-bold text-primary mb-6">
                Ready to Create Your Story?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's craft an unforgettable event together. Contact us today to start planning.
              </p>
              <a
                href="/contact"
                className="inline-block bg-accent hover:bg-accent/90 text-primary font-semibold px-8 py-4 rounded-lg shadow-soft transition-smooth"
              >
                Start Planning
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Lightbox */}
      {selectedImage !== null && (
        <Lightbox
          image={filteredImages[currentImageIndex]}
          isOpen={selectedImage !== null}
          onClose={() => setSelectedImage(null)}
          onNext={handleNext}
          onPrevious={handlePrevious}
          hasNext={currentImageIndex < filteredImages.length - 1}
          hasPrevious={currentImageIndex > 0}
        />
      )}
    </div>
  );
};

export default Gallery;
