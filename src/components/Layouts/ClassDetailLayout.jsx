import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "../Profile";
import Sidenav from "../Sidenav";
import Welcome from "../Welcome";

const ClassDetailLayout = () => {
  return (
    <div className="flex ">
      <Sidenav />
      <div className="flex flex-1">
        <div className="py-10 pl-10 pr-10 bg-soft-gray w-full">
          <div className="flex justify-between">
            <Welcome />
            <Profile />
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ClassDetailLayout;
