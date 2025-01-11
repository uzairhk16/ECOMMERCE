import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/Home.jsx";
import Collection from "./pages/Collection.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Cart from "./pages/Cart.jsx";
import Orders from "./pages/Orders.jsx";
import Product from "./pages/Product.jsx";
import PlaceOrder from "./pages/PlaceOrder.jsx";
import Layout from "./Layout.jsx";
import "./App.css";
import { ShopContextProvider } from "./context/ShopContext.jsx";
import { ToastContainer, toast } from 'react-toastify';

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import SearchIcon from "./pages/SearchIcon.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Layout />}
      className="sm:px-[5vw] md:px-[7vw] lg:px-[9vw]"
    >
      <Route path="" element={<Home />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/collection" element={<SearchIcon />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/placeOrder" element={<PlaceOrder />} />
      <Route path="/product/:productId" element={<Product />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <ShopContextProvider>
    <RouterProvider router={router} />
  </ShopContextProvider>
);
