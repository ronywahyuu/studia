import React from "react";
import { Link } from "react-router-dom";

const HomeWorkCard = () => {
  return (
    <>
      {/* class card */}
      <Link to="/h/hw/1" className="">
        <div className="flex flex-col gap-5 rounded-lg justify-between border-t-8 border-blue-900 bg-white p-5 ">
          <div className="flex items-center justify-between gap-5">
            <h3 className="text-2xl font-medium">Interaction</h3>
            <p className="text-gray-300">12:00 - 13:00</p>
          </div>

          {/* desc */}
          <div className="flex flex-col gap-5 mt-5">
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quod.
            </p>

            {/* lecturer */}
            <div className="flex items-center gap-3 mt-5">
              <img
                src="https://picsum.photos/200"
                alt=""
                className="w-10 h-10 rounded-full"
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

export default HomeWorkCard;
