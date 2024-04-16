import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Frontlayout from './components/layouts/Frontlayout';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Team from './pages/team/Team';
import Project from './pages/project/Project';

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Frontlayout>
            <Home />
          </Frontlayout>
        }
      />
      <Route
        path="/about"
        element={
          <Frontlayout>
            <About />
          </Frontlayout>
        }
      />
      <Route
        path="/teams"
        element={
          <Frontlayout>
            <Team />
          </Frontlayout>
        }
      />
      <Route
        path="/projects"
        element={
          <Frontlayout>
            <Project />
          </Frontlayout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
