import React from "react";
import HomeWorkCard from "../components/HomeWorkCard";

const HomeWork = () => {
  return (
    <div className="flex flex-col gap-5 animate-fade-in-right">
      <div className="flex mt-20 justify-between items-center">
        <h1 className="text-2xl font-medium">My Homework</h1>
      </div>

      {/* class card list*/}
      {/* <div className="grid grid-cols-2 gap-4 "> */}
      <HomeWorkCard />
      <HomeWorkCard />
      {/* </div> */}
    </div>
  );
};

export default HomeWork;
