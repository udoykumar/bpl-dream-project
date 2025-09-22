import React from "react";
import navImg from "../../assets/logo.png";
const Header = () => {
  return (
    <div className="shadow-sm bg-base-100">
      <div className="navbar  max-w-[1200px] mx-auto">
        <div className="flex-1">
          <a className="text-xl cursor-pointer">
            <img className="w-15" src={navImg} alt="" />
          </a>
        </div>
        <div className="flex-none">
          <span className="mr-1">000</span>
          <span className="mr-1"> Coin💲</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
