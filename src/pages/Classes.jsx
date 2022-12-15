import React from "react";
import { Link } from "react-router-dom";
import IconPlus from "../assets/images/svg/IconPlus";
import ClassCard from "../components/cards/ClassCard";
import PopUp from "../components/classes/PopUp";

const Classes = () => {
  return (
    <>
      <div className="">
        <div className="flex justify-between items-center mt-10 mb-5">
          <h1 className="text-xl text-slate-500 font-medium">My Classes</h1>
          <Link to="/h/classes/join">
            <button className="cursor-pointer">
              <IconPlus />
            </button>
          </Link>
        </div>

        {/* class card list */}
        <div className="grid grid-cols-2 gap-4  ">
          {/* <ClassCard />
          <ClassCard />
          <ClassCard /> */}
          <div className=" ">
            <p className="3xl text-slate-600">Belum Join Kelas...</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Classes;
