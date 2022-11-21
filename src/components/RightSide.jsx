import React from "react";
import CalendarComponent from "./calendar/CalendarComponent";
import Profile from "./Profile";
import Schedule from "./Schedule";

const RightSide = () => {
  return (
    <aside className=" w-4/12 sticky top-0 h-screen">
      <div className="flex flex-col gap-5 mt-10 flex-1 px-10">
        <Profile />
        <CalendarComponent />
        <Schedule />
      </div>
    </aside>
  );
};

export default RightSide;
