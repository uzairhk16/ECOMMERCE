import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  return showSearch ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div
        className="inline-flex items-centre justify-center border 
        border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2"
      >
        <input
          className="flex-1 bg-inherit outline-none text-sm"
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img className="w-4" src={assets.search_icon}  />
      </div>
      <img onClick={() => setShowSearch(false)} className="inline w-3 cursor-pointer" src={assets.cross_icon} />
    </div>
  ) : null;
};

export default SearchBar;
