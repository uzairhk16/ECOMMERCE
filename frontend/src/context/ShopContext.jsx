import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

export const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [count, setCount] = useState(0);

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    } else {
      setCount(count + 1); // Increment total item count
    }

    // Clone the existing cartItems
    let cartData = structuredClone(cartItems);

    // Check if the product ID exists in the cart
    if (cartData[itemId]) {
      // Check if the specific size exists for the product
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1; // Increment quantity for the size
      } else {
        cartData[itemId][size] = 1; // Add the size with a quantity of 1
      }
    } else {
      // If the product ID doesn't exist, initialize it
      cartData[itemId] = {};
      cartData[itemId][size] = 1; // Add the size with a quantity of 1
    }

    // Update the cart state
    setCartItems(cartData);
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    addToCart,
    cartItems,
    count,
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};
