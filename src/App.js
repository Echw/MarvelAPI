import React from "react";
import HeroSection from "./components/UI/heroSection";
import RandomHeroesSection from "./components/UI/randomHeroesSection";
import SearchBar from "./components/UI/searchBar";

function App() {
  return (
    <div className="bg">
      <HeroSection />
      <SearchBar />
      <RandomHeroesSection />
    </div>
  );
}

export default App;
