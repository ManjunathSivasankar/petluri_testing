
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Written testimonials
const writtenTestimonials = [
  {
    id: 1,
    name: "Emma Johnson",
    role: "Web Developer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    text: "The Web Development Bootcamp completely transformed my career. Within a month of completing the course, I landed my dream job at a tech startup. The instructors were incredibly knowledgeable and supportive."
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Graphic Designer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    text: "I've taken many design courses, but EduHub's Graphic Design Masterclass truly stands out. The hands-on projects helped me build an impressive portfolio that's been instrumental in attracting high-quality clients."
  },
  {
    id: 3,
    name: "Sarah Williams",
    role: "Marketing Manager",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    text: "The Digital Marketing Strategy course provided practical insights that I implemented immediately. Our company saw a 40% increase in online conversions within just two months of applying the strategies I learned."
  },
  {
    id: 4,
    name: "James Rodriguez",
    role: "Small Business Owner",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    text: "As a small business owner, I needed to learn digital marketing quickly. EduHub's course was perfect—comprehensive yet accessible. The support from instructors even after course completion has been invaluable."
  }
];

// Video testimonials
const videoTestimonials = [
  {
    id: 1,
    name: "David Parker",
    role: "Data Scientist",
    videoUrl: "https://www.youtube.com/embed/EngW7tLk6R8",
    thumbnail: "https://img.youtube.com/vi/EngW7tLk6R8/hqdefault.jpg"
  },
  {
    id: 2,
    name: "Jessica Chen",
    role: "UX Designer",
    videoUrl: "https://www.youtube.com/embed/vLAOQh4d9lI",
    thumbnail: "https://img.youtube.com/vi/vLAOQh4d9lI/hqdefault.jpg"
  },
  {
    id: 3,
    name: "Robert Kim",
    role: "Software Engineer",
    videoUrl: "https://www.youtube.com/embed/0kd6SYBATrU",
    thumbnail: "https://img.youtube.com/vi/0kd6SYBATrU/hqdefault.jpg"
  }
];

const TestimonialsSection = () => {
  const [activeWrittenIndex, setActiveWrittenIndex] = useState(0);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  
  const nextWrittenTestimonial = () => {
    setActiveWrittenIndex((prevIndex) => 
      prevIndex === writtenTestimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevWrittenTestimonial = () => {
    setActiveWrittenIndex((prevIndex) => 
      prevIndex === 0 ? writtenTestimonials.length - 1 : prevIndex - 1
    );
  };

  const nextVideoTestimonial = () => {
    setActiveVideoIndex((prevIndex) => 
      prevIndex === videoTestimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevVideoTestimonial = () => {
    setActiveVideoIndex((prevIndex) => 
      prevIndex === 0 ? videoTestimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="section bg-primary/10">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Students Say
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Hear from our students who have transformed their careers with our courses.
          </p>
        </div>
        
        <Tabs defaultValue="written" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8 border border-blue-light rounded-lg">
            <TabsTrigger 
              value="written"
              className="data-[state=active]:bg-blue data-[state=active]:text-white"
            >
              Written Reviews
            </TabsTrigger>
            <TabsTrigger 
              value="video"
              className="data-[state=active]:bg-blue data-[state=active]:text-white"
            >
              Video Testimonials
            </TabsTrigger>
          </TabsList>
          
          {/* Written Testimonials */}
          <TabsContent value="written">
            <div className="relative">
              <Card className="border border-blue-light px-6 py-8 md:px-12 md:py-10 animate-fade-in">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-2 border-blue">
                    <img
                      src={writtenTestimonials[activeWrittenIndex].image}
                      alt={writtenTestimonials[activeWrittenIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-lg md:text-xl text-foreground/80 mb-6 italic">
                    "{writtenTestimonials[activeWrittenIndex].text}"
                  </p>
                  <div>
                    <h4 className="font-bold text-foreground">{writtenTestimonials[activeWrittenIndex].name}</h4>
                    <p className="text-foreground/70">{writtenTestimonials[activeWrittenIndex].role}</p>
                  </div>
                </div>
              </Card>
              
              <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 flex justify-between">
                <button 
                  onClick={prevWrittenTestimonial} 
                  className="bg-blue text-white p-2 rounded-full shadow-md hover:bg-blue-hover focus:outline-none transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft size={20} />
                </button>
                <button 
                  onClick={nextWrittenTestimonial} 
                  className="bg-blue text-white p-2 rounded-full shadow-md hover:bg-blue-hover focus:outline-none transition-colors"
                  aria-label="Next testimonial"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
              
              <div className="flex justify-center mt-8 space-x-2">
                {writtenTestimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveWrittenIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === activeWrittenIndex ? "bg-blue" : "bg-blue/30"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </TabsContent>
          
          {/* Video Testimonials */}
          <TabsContent value="video">
            <div className="relative">
              <Card className="border border-blue-light px-6 py-8 md:px-12 md:py-10 animate-fade-in">
                <div className="flex flex-col items-center text-center">
                  <div className="w-full aspect-video mb-6 rounded-lg overflow-hidden border-2 border-blue">
                    <iframe
                      src={videoTestimonials[activeVideoIndex].videoUrl}
                      title={`Testimonial from ${videoTestimonials[activeVideoIndex].name}`}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-bold text-foreground">{videoTestimonials[activeVideoIndex].name}</h4>
                    <p className="text-foreground/70">{videoTestimonials[activeVideoIndex].role}</p>
                  </div>
                </div>
              </Card>
              
              <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 flex justify-between">
                <button 
                  onClick={prevVideoTestimonial} 
                  className="bg-blue text-white p-2 rounded-full shadow-md hover:bg-blue-hover focus:outline-none transition-colors"
                  aria-label="Previous video testimonial"
                >
                  <ArrowLeft size={20} />
                </button>
                <button 
                  onClick={nextVideoTestimonial} 
                  className="bg-blue text-white p-2 rounded-full shadow-md hover:bg-blue-hover focus:outline-none transition-colors"
                  aria-label="Next video testimonial"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
              
              <div className="flex justify-center mt-8 space-x-2">
                {videoTestimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveVideoIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === activeVideoIndex ? "bg-blue" : "bg-blue/30"
                    }`}
                    aria-label={`Go to video testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TestimonialsSection;
