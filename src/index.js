import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/dist/dropdown.js";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Pages/Home';
import BirdManagement from './Pages/BirdManagement';
import BreedingManagement from './Pages/BreedingManagement';
import MealManagement from './Pages/MealManagement';
import CageProfile from './Pages/CageProfile';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/BirdManagement",
    element: <BirdManagement />,
  },
  {
    path: "/MealManagement",
    element: <MealManagement />,
  },
  {
    path: "/BreedingManagement",
    element: <BreedingManagement />
  },
  {
    path: "/CageProfile",
    element: <CageProfile />
  }
]);
root.render(
  <RouterProvider router={router} />


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
