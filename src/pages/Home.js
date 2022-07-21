import React from "react";
import HeroSection from "../components/UI/heroSection";
import SearchBar from "../components/UI/searchBar";
import RandomHeroesSection from "../components/UI/randomHeroesSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <SearchBar />
      <RandomHeroesSection />
    </>
  );
};

export default Home;
