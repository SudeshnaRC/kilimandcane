import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Shop from './pages/Shop';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "home",
        element:<Home />
      },
      {
        path: "about",
        element:<About />
      },
      {
        path: "blog",
        element:<Blog />, 
        children: []
      },
      {
        path: "shop",
        element:<Shop />
      },
      {
        path: "contact",
        element:<Contact />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
