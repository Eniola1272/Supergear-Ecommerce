import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { createBrowserRouter, Outlet, BrowserRouter as Router, RouterProvider } from 'react-router-dom';
import "./index.css";
import Layout from './ui/Layout';
import Product from './pages/Product';
import Category from './pages/Category';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import Favorite from './pages/Favorite';
import Orders from './pages/Orders';
import Success from './pages/Success';
import Cancel from './pages/Cancel';
import Notfound from './pages/Notfound';

const RouterLayout = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

const router = createBrowserRouter([{
  path: "/",
  element: <RouterLayout />,
  children: [
    {
      path: "/",
      element: <App />,
    },
    
    {
      path: "/product",
      element: <Product />,
    },
    
    {
      path: "/product/:id",
      element: <Product />,
    },
    
    {
      path: "/category",
      element: <Category />,
    },
    
    {
      path: "/category/:id",
      element: <Category />,
    },
    
    {
      path: "/profile",
      element: <Profile />,
    },
    
    {
      path: "/cart",
      element: <Cart />,
    },
    
    {
      path: "/favorite",
      element: <Favorite />,
    },
    
    {
      path: "/orders",
      element: <Orders />,
    },
    
    {
      path: "/success",
      element: <Success />,
    },
    
    {
      path: "/cancel",
      element: <Cancel />,
    },
    
    {
      path: "*",
      element: <Notfound />,
    },
  ],
}]);


createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);


