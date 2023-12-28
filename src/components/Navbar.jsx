import React from "react";
import navLogo from "../assets/icons/Storefront.svg";
import logoText from "../assets/icons/logo-text.svg";
import Menu from "../assets/icons/BurgerMenu.svg";
import User from "../assets/icons/User.svg";


const Navbar = () => {
  const detail = ["Marketplace", "Rankings", "Connect a wallet"];
  return (
    <div className="py-4 px-8">
      <div className="flex text-white font-normal  items-center justify-between">
        <span className="flex  gap-2">
          {" "}
          <img src={navLogo} alt="logo" />
          <img src={logoText} alt="logo" />
        </span>


      <span className="hidden lg:flex items-center gap-14 ">
        {
          detail.map((item) => (
            <p className="text-sm ">{item}</p>
          ))
        }
      <span>
      <span className="flex text-sm  font-semibold justify-center items-center gap-2 text-white bg-[#A259FF] rounded-2xl px-4 py-3 ">
              <img src={User} alt="" />

              <p> Sign Up</p>
            </span>
      </span>
      </span>
        <span className="lg:hidden">
          <img src={Menu} alt="menu" />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
