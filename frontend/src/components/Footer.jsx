import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div >
      <div className="flex flex-col sm:grid grid-cols-4 gap-14 my-10 text-sm mt-40">
        <div>
          <img className="mb-5 w-32" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            minima laboriosam, aspernatur hic, eveniet cupiditate ea ducimus
            dicta quo officia, nulla delectus harum quaerat.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">HELPFUL LINKS</p>
          <ul className="flex flex-col gap-1 text-gray-600" >
            <li>CATEGORY</li>
            <li>PRIVACY POLICY</li>
            <li>REFUND POLICY</li>
            <li>TERMS & CONDITIONS</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600" >
            <li>HOME</li>
            <li>COLLECTION</li>
            <li>CONTACT US</li>
            <li>DELIVERY</li>
          </ul>
        </div>
        <div >
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
              <li className="text-xl">+1-212-456-7890</li> 
              <li >contact@foreveryou.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <h3 className="py-5 text-md text-center">Copyright 2024© forever.com - All Rights Reserved.</h3>
      </div>
      
    </div>
  );
};

export default Footer;
