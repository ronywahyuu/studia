import React from "react";
import { Link } from "react-router-dom";

const Schedule = () => {
  return (
    <Link>
      <div className="">
        <h2 className="font-bold text-xl">Schedule</h2>

        {/* schedule list */}
        <div className="mt-5">
          {/* single schedule */}
          <div className="flex items-center justify-between p-5 rounded-xl bg-soft-gray">
            <div className="">🔵</div>
            <div className=" items-center">
              <h1 className="text-base font-medium">English Classes</h1>
              <p className="text-gray-300 text-xs">Tika Sarak</p>
            </div>
            <div>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.3">
                  <path
                    d="M5.19727 11.62L9.0006 7.81667C9.44977 7.3675 9.44977 6.6325 9.0006 6.18334L5.19727 2.38"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Schedule;
