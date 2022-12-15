import React from "react";
import { Link } from "react-router-dom";

const LessonCard = () => {
  return (
    <>
      {/* class card */}
      <Link to="/h/classes/1" className="">
        <div className="flex flex-col gap-5 rounded-lg justify-between border-t-8 border-blue-900 bg-white p-3">
          <div className="flex ml-5 items-center justify-between gap-2">
            <h3 className="text-2xl font-medium mt-5">Interaction (Lessons 1)</h3>
          </div>

          {/* desc */}
          <div className="flex flex-col gap-2  ml-5">
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quod.
            </p>

            {/* lecturer */}
            <div className="flex items-center gap-3 mt-5">
              <img
                src="https://picsum.photos/200"
                alt=""
                className="w-8 h-8 rounded-full"
              />
              <div className="flex flex-col">
                <h3 className="text-lg font-medium text-gray-400">Yilong Ma</h3>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default LessonCard;
