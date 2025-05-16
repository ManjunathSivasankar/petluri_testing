
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutContent from "@/components/AboutContent";
import AboutTeam from "@/components/AboutTeam";
import CallToAction from "@/components/CallToAction";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <AboutContent />
        <AboutTeam />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
