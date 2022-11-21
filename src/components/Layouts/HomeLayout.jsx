import React from "react";
import { Outlet } from "react-router-dom";
import Sidenav from "../Sidenav";

const HomeLayout = () => {
  return (
    <div className="flex">
      <Sidenav />
      <Outlet />
      {/* <div className="py-10">
        </div> */}
    </div>
  );
};

export default HomeLayout;
