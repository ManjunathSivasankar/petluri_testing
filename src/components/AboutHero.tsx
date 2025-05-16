
import React from "react";

const AboutHero = () => {
  return (
    <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-charcoal bg-opacity-70"></div>
      </div>
      <div className="container max-w-7xl mx-auto px-4 relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-offwhite mb-6 animate-smooth-fade-in">
          About EduHub
        </h1>
        <p className="text-xl md:text-2xl text-offwhite/90 max-w-3xl mx-auto animate-smooth-fade-in" style={{ animationDelay: "0.3s" }}>
          Empowering Minds, Transforming Lives Through Quality Education
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
