import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import HeroPage from '../pages/HeroPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hero" element={<HeroPage />} />
    </Routes>
  );
};

export default AppRoutes;
