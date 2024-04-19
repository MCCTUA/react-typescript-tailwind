import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Frontlayout from './components/layouts/Frontlayout';
import AdminLayout from './components/layouts/AdminLayout';
import AuthLayout from './components/layouts/AdminLayout';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Team from './pages/team/Team';
import Project from './pages/project/Project';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Dashboard from './pages/dashboard/Dashboard';
import Product from './pages/product/Product';
import PageNotFound from './pages/pagenofound/PageNotFound';

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

      {/* // Authentication section */}
      <Route
        path="/login"
        element={
          <AuthLayout>
            <Login />
          </AuthLayout>
        }
      />
      <Route
        path="/register"
        element={
          <AuthLayout>
            <Register />
          </AuthLayout>
        }
      />

      {/* // Admin section */}
      <Route
        path="/dashboard"
        element={
          <AdminLayout>
            <Dashboard />
          </AdminLayout>
        }
      />
      <Route
        path="/products"
        element={
          <AdminLayout>
            <Product />
          </AdminLayout>
        }
      />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;
