import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import Host from './Pages/Host';
import Join from './Pages/Join';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  }, 
  {
    path: "/host", 
    element: <Host/>
  }, 
  {
    path: "/join", 
    element: <Join/>
  }
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

