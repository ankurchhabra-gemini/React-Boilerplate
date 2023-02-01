import React from "react";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { SideBarData } from "../../../helpers/SideBarData";

const SideBar = () => {
  return (
    <div className="w-1/5 pt-2 h-[90vh] overflow-x-hidden   overflow-y-hidden bg-darkWhite border-r border-slate-900/10">
      {SideBarData.map(({ label, id, path, icon }) => {
        return (
          <div
            className="w-[250px] h-12 px-4 sm:text-xxxs  md:text-lg"
            key={id}
          >
            <Link to={path} className="flex items-center">
              <p>
                <IconContext.Provider value={{ size: "20px" }}>
                  {icon}
                </IconContext.Provider>
              </p>
              <p className="pl-1">{label}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default SideBar;
