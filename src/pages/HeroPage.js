import React from "react";
import MainHeroSection from "../components/UI/MainHeroSection";
import ComicsHeroSection from "../components/UI/ComicsHeroSection";
import { DATA } from "../store/data.constant";
import { useLocation } from "react-router-dom";
import SearchError from "../components/UI/SearchError";

const HeroPage = (props) => {
  const location = useLocation();
  if (
    location.state === null ||
    location.state.enteredSearch === undefined ||
    location.state.enteredSearch === ""
  ) {
    return <SearchError />;
  }

  return (
    <div>
      <MainHeroSection hero={DATA[0]} />
      <ComicsHeroSection comics={DATA[0].comics} />
    </div>
  );
};

export default HeroPage;
