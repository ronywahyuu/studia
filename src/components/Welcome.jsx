import React, { useContext } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { AuthContext } from "../context/authContext";

const Welcome = () => {
  // context
  const {user} = useContext(AuthContext)
  const name = user?.name
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
