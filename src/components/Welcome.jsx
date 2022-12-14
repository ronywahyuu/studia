import React from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Welcome = ({name}) => {
  return (
    <div className="flex flex-col gap-5">
      
      <h1 className="text-2xl font-medium ">Welcome {
        name ? name : <Skeleton width={200} />
      }</h1>
      <p className="text-gray-300">Have a good day!</p>
    </div>
  );
};

export default Welcome;
