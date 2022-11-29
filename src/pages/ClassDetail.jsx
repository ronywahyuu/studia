import React from "react";
import ClassContentField from "../components/ClassContentField";

const ClassDetail = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center mt-10 mb-5">
        <h1 className="text-xl text-slate-500 font-medium">My Classes</h1>
      </div>

      <div className="grid  gap-4 ">
        <ClassContentField/>
      </div>
    </div>
  );
};

export default ClassDetail;
