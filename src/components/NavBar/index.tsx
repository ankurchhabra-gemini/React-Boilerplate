/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import image from "../../../src/assets/images.png"
import { MenuListComposition } from "../../utils/Utility";
const NavBar = () => {
  return (
    <nav className="relative top-0 flex justify-between items-center h-[10vh] border-b border-slate-900/10">
      <img className="h-10  w-53.5 px-4 flex items-center" src={image} />
      <div className="absolute right-[35px]">
      <MenuListComposition/>

      </div>
    </nav>
  );
};

export default NavBar;
