import React, { useState } from "react";
import HeroDataSection from "../components/UI/HeroDataSection";
import SearchBar from "../components/UI/SearchBar";
import RandomHeroesSection from "../components/UI/RandomHeroesSection";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [enteredSearch, setEnteredSearch] = useState("");
  const navigation = useNavigate();

  const searchChangeHandler = (event) => {
    setEnteredSearch(event.target.value);
  };

  const onSearchSubmit = (event) => {
    event.preventDefault();
    navigation("../hero", { state: { enteredSearch } });
  };

  return (
    <>
      <HeroDataSection />
      <SearchBar
        onSubmit={onSearchSubmit}
        value={enteredSearch}
        onChange={searchChangeHandler}
      />
      <RandomHeroesSection />
    </>
  );
};

export default Home;
