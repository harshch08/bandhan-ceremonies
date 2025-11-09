import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LightboxProps {
  image: {
    src: string;
    title: string;
    category: string;
    date: string;
    location: string;
  };
  isOpen: boolean;
  onClose: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
  hasNext?: boolean;
  hasPrevious?: boolean;
}

const Lightbox = ({
  image,
  isOpen,
  onClose,
  onNext,
  onPrevious,
  hasNext,
  hasPrevious,
}: LightboxProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && hasNext && onNext) onNext();
      if (e.key === "ArrowLeft" && hasPrevious && onPrevious) onPrevious();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, onNext, onPrevious, hasNext, hasPrevious]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      {/* Close Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 text-white hover:bg-white/10 z-10"
        onClick={onClose}
      >
        <X size={24} />
      </Button>

      {/* Previous Button */}
      {hasPrevious && onPrevious && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 z-10"
          onClick={(e) => {
            e.stopPropagation();
            onPrevious();
          }}
        >
          <ChevronLeft size={32} />
        </Button>
      )}

      {/* Next Button */}
      {hasNext && onNext && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 z-10"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
        >
          <ChevronRight size={32} />
        </Button>
      )}

      {/* Image Container */}
      <div
        className="max-w-6xl w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.title}
          className="max-h-[80vh] w-auto object-contain rounded-lg shadow-elegant"
        />
        
        {/* Image Info */}
        <div className="mt-6 text-center text-white">
          <h3 className="text-2xl font-heading font-bold mb-2">{image.title}</h3>
          <div className="flex items-center justify-center gap-4 text-sm text-white/80">
            <span className="px-3 py-1 bg-white/10 rounded-full">{image.category}</span>
            <span>{image.location}</span>
            <span>{image.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
