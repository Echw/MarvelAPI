import React from "react";
import HeroDataSection from "../components/UI/HeroDataSection";
import SearchBar from "../components/UI/SearchBar";
import RandomHeroesSection from "../components/UI/RandomHeroesSection";

const Home = () => {
  return (
    <>
      <HeroDataSection />
      <SearchBar />
      <RandomHeroesSection />
    </>
  );
};

export default Home;
