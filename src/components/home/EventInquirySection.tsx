import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { Calendar, Building2, GraduationCap, School } from "lucide-react";

const eventCategories = [
  {
    id: "school",
    title: "School Event Planning",
    description: "Create memorable experiences for students with our specialized school event coordination.",
    icon: School,
  },
  {
    id: "college",
    title: "College Event Planning",
    description: "From fests to formals, we bring energy and elegance to your college celebrations.",
    icon: GraduationCap,
  },
  {
    id: "wedding",
    title: "Destination Wedding Planning",
    description: "Transform your dream wedding into reality with our luxury destination planning services.",
    icon: Calendar,
  },
  {
    id: "corporate",
    title: "Corporate Event Planning",
    description: "Professional events that leave lasting impressions on clients and teams alike.",
    icon: Building2,
  },
];

const inquirySchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(10, "Phone must be at least 10 digits").max(20),
  eventDate: z.string().trim().min(1, "Event date is required"),
  location: z.string().trim().min(2, "Location is required").max(200),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().trim().max(1000).optional(),
});

type InquiryFormData = z.infer<typeof inquirySchema>;

const EventInquirySection = () => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState<{ id: string; title: string } | null>(null);
  const [forms, setForms] = useState<Record<string, Partial<InquiryFormData>>>({
    school: {},
    college: {},
    wedding: {},
    corporate: {},
  });

  const updateForm = (categoryId: string, field: string, value: string) => {
    setForms((prev) => ({
      ...prev,
      [categoryId]: {
        ...prev[categoryId],
        [field]: value,
      },
    }));
  };

  const handleSubmit = (categoryId: string, categoryTitle: string) => {
    const formData = forms[categoryId];

    try {
      const validatedData = inquirySchema.parse(formData);

      const message = `*Event Inquiry - ${categoryTitle}*

*Name:* ${validatedData.name}
*Email:* ${validatedData.email}
*Phone:* ${validatedData.phone}
*Event Date:* ${validatedData.eventDate}
*Location:* ${validatedData.location}
*Budget Range:* ${validatedData.budget}
${validatedData.message ? `*Message:* ${validatedData.message}` : ""}`;

      const whatsappNumber = "919999999999"; // Replace with actual WhatsApp number
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      window.open(whatsappUrl, "_blank");

      toast({
        title: "Opening WhatsApp",
        description: "Your inquiry details are ready to send.",
      });

      // Clear form and close dialog
      setForms((prev) => ({
        ...prev,
        [categoryId]: {},
      }));
      setSelectedCategory(null);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const firstError = error.errors[0];
        toast({
          title: "Validation Error",
          description: firstError.message,
          variant: "destructive",
        });
      }
    }
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading text-foreground mb-4">
            Plan Your Special Event With Us
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto"></div>
        </div>

        {/* Inquiry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <Card
                key={category.id}
                className="border-accent/20 bg-card/80 backdrop-blur-sm shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedCategory({ id: category.id, title: category.title })}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl font-heading text-foreground">
                    {category.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {category.description}
                  </CardDescription>
                  <p className="text-xs text-accent mt-2 font-medium">Click to inquire</p>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        {/* Dialog Modal for Form */}
        <Dialog open={selectedCategory !== null} onOpenChange={(open) => !open && setSelectedCategory(null)}>
          <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
            {selectedCategory && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-heading text-center">
                    {selectedCategory.title}
                  </DialogTitle>
                  <DialogDescription className="text-center">
                    Fill in your details and we'll contact you via WhatsApp
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-4 mt-4">
                  {(() => {
                    const formData = forms[selectedCategory.id] || {};
                    return (
                      <>
                  <div className="space-y-2">
                        <Label htmlFor={`${selectedCategory.id}-name`} className="text-sm font-medium">
                          Name
                        </Label>
                        <Input
                          id={`${selectedCategory.id}-name`}
                          placeholder="Your name"
                          value={formData.name || ""}
                          onChange={(e) => updateForm(selectedCategory.id, "name", e.target.value)}
                          className="bg-background"
                        />
                  </div>

                      <div className="space-y-2">
                        <Label htmlFor={`${selectedCategory.id}-email`} className="text-sm font-medium">
                          Email
                        </Label>
                        <Input
                          id={`${selectedCategory.id}-email`}
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email || ""}
                          onChange={(e) => updateForm(selectedCategory.id, "email", e.target.value)}
                          className="bg-background"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor={`${selectedCategory.id}-phone`} className="text-sm font-medium">
                          Phone
                        </Label>
                        <Input
                          id={`${selectedCategory.id}-phone`}
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={formData.phone || ""}
                          onChange={(e) => updateForm(selectedCategory.id, "phone", e.target.value)}
                          className="bg-background"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor={`${selectedCategory.id}-date`} className="text-sm font-medium">
                          Event Date
                        </Label>
                        <Input
                          id={`${selectedCategory.id}-date`}
                          type="date"
                          value={formData.eventDate || ""}
                          onChange={(e) => updateForm(selectedCategory.id, "eventDate", e.target.value)}
                          className="bg-background"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor={`${selectedCategory.id}-location`} className="text-sm font-medium">
                          Location
                        </Label>
                        <Input
                          id={`${selectedCategory.id}-location`}
                          placeholder="Event location"
                          value={formData.location || ""}
                          onChange={(e) => updateForm(selectedCategory.id, "location", e.target.value)}
                          className="bg-background"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor={`${selectedCategory.id}-budget`} className="text-sm font-medium">
                          Budget Range
                        </Label>
                        <Select
                          value={formData.budget || ""}
                          onValueChange={(value) => updateForm(selectedCategory.id, "budget", value)}
                        >
                          <SelectTrigger id={`${selectedCategory.id}-budget`} className="bg-background">
                            <SelectValue placeholder="Select budget" />
                          </SelectTrigger>
                          <SelectContent className="bg-popover z-50">
                            <SelectItem value="below-5">Below ₹5 Lakhs</SelectItem>
                            <SelectItem value="5-10">₹5-10 Lakhs</SelectItem>
                            <SelectItem value="10-20">₹10-20 Lakhs</SelectItem>
                            <SelectItem value="20-50">₹20-50 Lakhs</SelectItem>
                            <SelectItem value="above-50">Above ₹50 Lakhs</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor={`${selectedCategory.id}-message`} className="text-sm font-medium">
                          Message (Optional)
                        </Label>
                        <Textarea
                          id={`${selectedCategory.id}-message`}
                          placeholder="Any special requirements..."
                          value={formData.message || ""}
                          onChange={(e) => updateForm(selectedCategory.id, "message", e.target.value)}
                          className="bg-background min-h-[80px]"
                        />
                      </div>

                      <Button
                        onClick={() => handleSubmit(selectedCategory.id, selectedCategory.title)}
                        className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-medium"
                      >
                        Submit Inquiry
                      </Button>
                    </>
                  );
                })()}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default EventInquirySection;
