import React, { useContext } from "react";
import CalendarComponent from "./calendar/CalendarComponent";
import Profile from "./Profile";
import Schedule from "./Schedule";
import { KelasContext } from "../context/kelasContext";
import { useLocation, useParams } from "react-router-dom";

const RightSide = () => {
  const { classes } = useContext(KelasContext);


  return (
    <aside className=" sticky top-0  h-screen ">
      <div className="flex flex-col gap-5 mt-10 flex-1 px-10  ">
        <Profile />
        <div className="md:px-5 px-0">
          <CalendarComponent />
        </div>
        <Schedule classes={classes} />
        {/* {location.pathname === `/h/classes/41dd093e-b8e8-4cce-bae6-e9133b26576c/lessons/${id}` && (
          <h1>Task</h1>
        )} */}
      </div>
    </aside>
  );
};

export default RightSide;
