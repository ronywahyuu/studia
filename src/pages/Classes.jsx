import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

import IconPlus from "../assets/images/svg/IconPlus";
import ClassCard from "../components/cards/ClassCard";
import PopUp from "../components/classes/PopUp";
import { KelasContext } from "../context/kelasContext";

const Classes = () => {
  // fetch joined classes
  const {classes, loading} = useContext(KelasContext)

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
          {loading ? (
            <Skeleton height={200} />
          ) : (
            classes.map((item, index) => {
              return <ClassCard key={index} data={item} />;
            })
          )}
          {classes.length === 0 && !loading && (
            <div className=" ">
              <p className="3xl text-slate-600">Belum Join Kelas...</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Classes;
