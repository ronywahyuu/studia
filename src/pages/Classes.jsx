import React from "react";
import ClassCard from "../components/ClassCard";

const Classes = () => {
  return (
    <div>
      <div className="flex justify-between items-center mt-10 mb-5">
        <h1 className="text-xl text-slate-500 font-medium">My Classes</h1>
      </div>

      {/* class card list */}
      <div className="grid grid-cols-2 gap-4 ">
        <ClassCard />
        <ClassCard />
        <ClassCard />
        <ClassCard />
      </div>
    </div>
  );
};

export default Classes;
