import React, { useState, useEffect } from 'react';
import GetInfo from './service/service';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Mainlayout from './layout/Mainlayout'; 
import Home from './pages/home/Home';
import Liked from './pages/liked/Liked';
import Cart from './pages/cart/Cart'; 
import NotFound from './pages/notfound/NotFound'; 
import Path from './utils/path';

export default function App() {
  const [productsData, setProductsData] = useState([]);
  const [showData, setshowData] = useState([])//so here we create showdata for like categories when we click things that we want them appear arre goonn appear if we didnt make it and just wrote with the productsdata we could have changed the productsdata and showed only some things cause with the help of showdata we are doing categories // so we made taht so taht later it is gonn help us to even after when we move to furniture button or all so taht everything is not gonn be deleted
  const [category, setcategory] = useState('all')

const categories=[...new Set(productsData.map((item)=>item.category))]


  useEffect(() => {
    const fetchdata = async () => {
      const products = await GetInfo();
      setProductsData(products);
    };
    fetchdata();
  }, []);
// SYNC FILTERED VIEW WITH MASTER DATA
// This effect runs whenever the 'category' changes OR 'productsData' is first loaded.
useEffect(() => {
  // Case 1: If 'all' is selected, reset the view to show the entire warehouse.
  if (category === 'all') {
    setshowData(productsData);
    return;
  }

  // Case 2: Filter the master list (productsData) to create a new subset.
  // We use toLowerCase() to ensure the filter isn't broken by typos in the API.
  const filteredData = productsData.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );

  // Update the storefront (showData) without touching the warehouse (productsData).
  setshowData(filteredData);

}, [category, productsData]); // Watch both: if the choice OR the data changes, update the view.which means by buttons like chossing the furiture will change to furniture so thats why we rweot productssdat and catefory
//U might be wandered how category is changing we dind write anythign here but we wrote inside of the categories
 

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Mainlayout />,
      children: [
        {
          index: true,
          element: <Home   
              categories={categories}
              showData={showData}
              category={category}
              setcategory={setcategory} />
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