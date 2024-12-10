import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Project from './Pages/Project.jsx';
import { Contact } from './Pages/Contact.jsx';

// Optionally, you can import Devicons from a CDN instead if this doesn't work
// import 'devicons/devicon.min.css'; // Ensure this is installed and the path is correct

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/project',
    element: <Project />
  },
  {
    path: "/contact",
    element: <Contact />
  }
]);

createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>
);
