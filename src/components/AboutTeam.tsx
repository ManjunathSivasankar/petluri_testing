
import React from "react";

const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    bio: "With over 15 years in education technology, Dr. Johnson leads EduHub's vision and growth strategy."
  },
  {
    name: "Prof. Michael Chen",
    role: "Chief Academic Officer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    bio: "Former dean at Stanford University, Prof. Chen oversees curriculum development and academic partnerships."
  },
  {
    name: "Rebecca Torres",
    role: "Head of Student Experience",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    bio: "With a background in UX design, Rebecca ensures our platform delivers an engaging learning experience."
  }
];

const AboutTeam = () => {
  return (
    <section className="py-20 bg-charcoal text-offwhite">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gold">Meet Our Leadership Team</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-charcoal border border-gold/30 rounded-lg p-6 text-center smooth-transition hover:border-gold animate-smooth-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-40 h-40 mx-auto mb-6 relative overflow-hidden rounded-full border-4 border-gold">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-center hover-scale"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gold">{member.name}</h3>
              <p className="text-offwhite/70 mb-4">{member.role}</p>
              <p className="text-offwhite/90">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
