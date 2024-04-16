import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Frontlayout from './components/layouts/Frontlayout';
import Home from './pages/home/Home';

const MyRoutes = () => {
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
    </Routes>
  );
};

export default MyRoutes;