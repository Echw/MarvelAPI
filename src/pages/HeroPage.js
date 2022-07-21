import React from "react";
import MainHeroSection from "../components/UI/MainHeroSection";
import ComicsHeroSection from "../components/UI/ComicsHeroSection";
import { DATA } from "../store/data.constant";

const HeroPage = (props) => {
  return (
    <div>
      <MainHeroSection hero={DATA[0]} />
      <ComicsHeroSection comics={DATA[0].comics} />
    </div>
  );
};

export default HeroPage;
