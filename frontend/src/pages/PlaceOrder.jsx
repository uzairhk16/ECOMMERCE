import {useContext, useState} from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal"
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod")
  const navigate = useNavigate()
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* -----Left Side----- */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"Delivery"} text2={"Information"} />
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="First Name"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
        </div>
        <input
          type="email"
          placeholder="Email Address"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
        />
        <input
          type="text"
          placeholder="Street Name"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
        />
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="City"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
          <input
            type="text"
            placeholder="State"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Country"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
          <input
            type="text"
            placeholder="Phone no"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
        </div>
      </div>
      {/* ---Right Side--- */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        {/* --Payment Method Section-- */}
        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          <div className="flex flex-col gap-3 lg:flex-row">
            <div onClick={() => setMethod("stripe")} className="flex gap-3 items-center border p-2 px-3 cursor-pointer">  
              <p className={`min-w-3.5 h-3.5 rounded-full border ${method === "stripe" ? "bg-green-400" : ""}`}></p>
              <img src={assets.stripe_logo}  />
            </div>
            <div onClick={() => setMethod("razorpay")} className="flex gap-3 items-center border p-2 px-3 cursor-pointer">  
              <p className={`min-w-3.5 h-3.5 rounded-full border ${method === "razorpay" ? "bg-green-400" : ""}`}></p>
              <img src={assets.razorpay_logo}  />
            </div>
            <div onClick={() => setMethod("cod")} className="flex gap-3 items-center border p-2 px-3 cursor-pointer">  
              <p className={`min-w-3.5 h-3.5 rounded-full border ${method === "cod" ? "bg-green-400" : ""}`}></p>
              <p className="text-gray-500 font-medium text-sm mx-4">CASH ON DELIVERY</p>
            </div>
          </div>
          <div className="w-full mt-8 text-end">
            <button onClick={() => navigate("/orders")} className="bg-black text-white text-sm px-16 py-3">PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
