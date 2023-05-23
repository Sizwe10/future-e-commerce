import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";

import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

const router = createBrowserRouter([
  {
    path: "home",
    element: <HomePage/>,
  },
  {
    path: "aboutUs",
    element: <AboutUsPage/>,
  },
  {
    path: "contactUs",
    element: <ContactPage/>,
  },
  {
    path: "blog",
    element: <BlogPage/>,
  }
])
ReactDOM.createRoot(document.getElementById("root")).render(

  
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

