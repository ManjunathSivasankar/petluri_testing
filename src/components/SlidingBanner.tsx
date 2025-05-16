
import React, { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    title: "Unlock Your Potential With Expert-Led Courses",
    subtitle: "Learn from industry experts and gain practical skills that will help you excel in today's competitive market."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Transform Your Career Path",
    subtitle: "Our courses are designed to give you the competitive edge in your professional journey."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Join Our Community of Learners",
    subtitle: "Connect with thousands of students and professionals from around the world."
  }
];

const SlidingBanner = () => {
  const [api, setApi] = useState<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide functionality
  const autoPlay = useCallback(() => {
    if (api) {
      api.scrollNext();
    }
  }, [api]);

  useEffect(() => {
    const autoPlayInterval = setInterval(autoPlay, 5000); // Auto slide every 5 seconds
    
    return () => {
      clearInterval(autoPlayInterval);
    };
  }, [api, autoPlay]);

  // Track current slide
  const onSelect = useCallback(() => {
    if (api) {
      setCurrentSlide(api.selectedScrollSnap());
    }
  }, [api]);

  useEffect(() => {
    if (!api) return;
    
    onSelect();
    api.on('select', onSelect);
    
    return () => {
      api.off('select', onSelect);
    };
  }, [api, onSelect]);

  return (
    <section className="relative w-full">
      <Carousel className="w-full" setApi={setApi}>
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div 
                className="hero-slide smooth-transition"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="hero-slide-content">
                  <div className="container max-w-7xl mx-auto text-offwhite">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-smooth-fade-in">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl mb-8 max-w-2xl animate-smooth-fade-in" style={{animationDelay: "0.3s"}}>
                      {slide.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 animate-smooth-fade-in" style={{animationDelay: "0.6s"}}>
                      <Button
                        size="lg"
                        className="bg-gold text-charcoal hover:bg-blue hover:text-white smooth-transition px-8 py-6"
                        asChild
                      >
                        <Link to="/courses">Explore Courses</Link>
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-offwhite text-offwhite hover:bg-blue hover:text-white hover:border-blue smooth-transition px-8 py-6"
                        asChild
                      >
                        <Link to="/contact">Contact Us</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
          <CarouselPrevious className="bg-gold/70 hover:bg-blue text-white smooth-transition" />
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
          <CarouselNext className="bg-gold/70 hover:bg-blue text-white smooth-transition" />
        </div>
        
        {/* Slide indicators */}
        <div className="absolute bottom-5 left-0 right-0">
          <div className="flex justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? "bg-blue" : "bg-white/50 hover:bg-white"
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default SlidingBanner;
