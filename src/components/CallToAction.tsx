
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="section bg-gold/90 text-charcoal">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-smooth-fade-in">
            Ready to Transform Your Future?
          </h2>
          <p className="text-charcoal/80 mb-8 animate-smooth-fade-in" style={{ animationDelay: "0.2s" }}>
            Join thousands of students who have already taken the first step toward advancing their careers. Our expert-led courses are designed to give you the skills you need to succeed.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-smooth-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button
              size="lg"
              className="bg-charcoal text-offwhite hover:bg-charcoal/80 smooth-transition"
              asChild
            >
              <Link to="/courses">Browse Courses</Link>
            </Button>
            <Button
              size="lg"
              className="bg-offwhite text-charcoal hover:bg-offwhite/80 smooth-transition"
              asChild
            >
              <Link to="/contact">Enroll now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
