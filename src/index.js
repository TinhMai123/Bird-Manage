import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/dist/dropdown.js";
import '@fortawesome/fontawesome-free/css/all.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Pages/Home';
import BirdManagement from './Pages/BirdManagement';
import BreedingManagement from './Pages/BreedingManagement';
import CageManagement from './Pages/CageManage';

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
    path: "/BreedingManagement",
    element: <BreedingManagement />
  },
  {
    path: "/CageManagement",
    element: <CageManagement/>,
  }
  
  
]);
root.render(
  <RouterProvider router={router} />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
