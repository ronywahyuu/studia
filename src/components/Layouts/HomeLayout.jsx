import React from "react";
import { Outlet } from "react-router-dom";
import RightSide from "../RightSide";
import Sidenav from "../Sidenav";
import Welcome from "../Welcome";

const HomeLayout = () => {
  return (
    <div className="flex">
      <Sidenav />
      <div className="flex">
        <div className="py-10 pl-10 pr-10 bg-soft-gray w-8/12">
          <Welcome />
          <Outlet />
        </div>
        <RightSide />
      </div>
    </div>
  );
};

export default HomeLayout;
