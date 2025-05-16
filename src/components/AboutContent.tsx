
import React from "react";

const AboutContent = () => {
  return (
    <section className="py-20 bg-offwhite">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-smooth-fade-in">
            <h2 className="section-heading text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-lg mb-6 text-charcoal/80">
              Founded in 2015, EduHub began with a simple mission: to make quality education accessible to everyone, everywhere. What started as a small team of dedicated educators has grown into a global learning community.
            </p>
            <p className="text-lg mb-6 text-charcoal/80">
              We believe that education is the most powerful tool for personal and professional growth. Our courses are designed to equip learners with practical skills and knowledge that can be applied in real-world scenarios.
            </p>
            <p className="text-lg text-charcoal/80">
              Today, EduHub serves students from over 50 countries, offering courses in various disciplines taught by industry experts and renowned academicians.
            </p>
          </div>
          
          <div className="relative animate-smooth-slide-in" style={{ animationDelay: "0.2s" }}>
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
              alt="EduHub Campus" 
              className="rounded-lg shadow-xl hover-scale"
            />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gold rounded-full -z-10 hidden md:block"></div>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="section-heading text-3xl md:text-4xl font-bold mb-10 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description: "We strive for excellence in everything we do, from course content to student support.",
                delay: "0s"
              },
              {
                title: "Innovation",
                description: "We embrace new technologies and teaching methodologies to enhance the learning experience.",
                delay: "0.2s"
              },
              {
                title: "Inclusivity",
                description: "We believe education should be accessible to all, regardless of background or circumstance.",
                delay: "0.4s"
              }
            ].map((value, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow-md hover-scale animate-smooth-fade-in smooth-transition" 
                style={{ animationDelay: value.delay }}
              >
                <h3 className="text-2xl font-bold mb-4 text-gold-dark">{value.title}</h3>
                <p className="text-charcoal/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
