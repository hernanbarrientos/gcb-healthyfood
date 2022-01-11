import React from "react";
import BlogSection from "./blog-section/BlogSection";
import Header from "./home-section/header/Header";
import JoinSection from "./join-section/JoinSection";
import RecipesSection from "./recipes-section/RecipesSection";
import HomeSection from "./home-section/HomeSection";
import ServicesSection from "./services-section/ServicesSection";

function LandingPage() {
  return (
    <>
      <Header />
      <HomeSection />
      <RecipesSection />
      <ServicesSection />
      <BlogSection />
      <JoinSection />
    </>
  );
}

export default LandingPage;
