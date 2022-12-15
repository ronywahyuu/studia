import React from "react";
import { Link } from "react-router-dom";
import Thumbnail from "../../assets/images/thumbnail.png";

const Articlecard = () => {
  return (
    <>
      {/* article card */}
      <Link to="/h/articles/1" className="">
        <div className="flex flex-col lg:flex-row-reverse rounded-lg justify-between border-t-8 border-[#77BBE2] bg-white p-5 ">
            {/* Thumbnail */}
            <div className="flex thumbnail lg:w-2/5 sm:w-full ">
                <img src={Thumbnail} className="ml-auto mr-auto h-fit mt-auto mb-auto" alt="" />
            </div>
            
            <div className="flex flex-col justify-between gap-5 lg:w-3/5 sm:wfull">
                {/* Title */}
                <h3 className="text-2xl font-medium">Interaction</h3>

                {/* desc */}
                <div className="flex flex-col gap-2 mt-2">
                    <p className="text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                    quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui explicabo temporibus non odio, soluta expedita! Doloribus, ut odit.
                    </p>
                </div>
                {/* Author and Time */}
                <div className="flex flex-row gap-10 ">
                    <p className="text-gray-400 text-xs">Author name</p>
                    <p className="text-gray-400 text-xs">Time </p>
                </div>
            </div>
        </div>
      </Link>
    </>
  );
};

export default Articlecard;
