import React, { useState, useEffect } from 'react';
import GetInfo from './service/service';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Mainlayout from './layout/Mainlayout'; 
import Home from './pages/home/Home';
import Liked from './pages/liked/Liked';
import Cart from './pages/cart/Cart'; 
import NotFound from './pages/notfound/NotFound'; 
import {Path} from './utils/path';

export default function App() {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const products = await GetInfo();
      setProductsData(products);
    };
    fetchdata();
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Mainlayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          // Make sure Path.CART matches what is in your utils/path.js
          path: Path.CART, 
          element: <Cart />
        },
        {
          path: Path.LIKED,
          element: <Liked />
        },
      ]
    },
    {
      path: '*',
      element: <NotFound />
    }
  ]);

  return <RouterProvider router={router} />;
}