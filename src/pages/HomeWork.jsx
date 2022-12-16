import React, { useEffect, useState } from "react";
import HomeWorkCard from "../components/cards/HomeWorkCard";
import axios from "axios";

const HomeWork = () => {
  const [homework, setHomework] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const getHomework = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/v1/homework')
        setHomework(res.data.data)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    getHomework()
  },[])

  return (
    <div className="flex flex-col gap-5 animate-fade-in-right">
      <div className="flex mt-10 justify-between items-center">
        <h1 className="text-2xl font-medium">My Homework</h1>
      </div>

      {/* class card list*/}
      {/* <div className="grid grid-cols-2 gap-4 "> */}
      <HomeWorkCard/>
      {/* </div> */}
    </div>
  );
};

export default HomeWork;
