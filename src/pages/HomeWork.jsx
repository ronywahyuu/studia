import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";
import IconPlus from "../assets/images/svg/IconPlus";
import { Link } from "react-router-dom";

const HomeWork = () => {
  const { roles } = useContext(AuthContext);
  return (
    <div>
      <div className="flex justify-between items-center mt-10 mb-5">
        <h1 className="text-xl text-slate-500 font-medium">My Classes</h1>
        {/* {roles() === "Teacher" && (
          <Link to="/h/classes/join">
            <button className="cursor-pointer flex gap-2 items-center">
              <IconPlus />
              <span className="text-base font-medium text-slate-600">
                Create Homework
              </span>
            </button>
          </Link>
        )} */}
      </div>
    </div>
  );
};

export default HomeWork;
