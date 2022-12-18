import React, { useContext, useEffect, useState } from "react";
import HomeWorkCard from "../components/cards/HomeWorkCard";
import axios from "axios";
import { AuthContext } from "../context/authContext";
import { Link } from "react-router-dom";
import IconPlus from "../assets/images/svg/IconPlus";
import { KelasContext } from "../context/kelasContext";

const HomeWork = () => {
  const [homework, setHomework] = useState([]);
  const [loading, setLoading] = useState(true);

  const { roles } = useContext(AuthContext);
  const {classes} = useContext(KelasContext)

  useEffect(() => {
    // const getHomework = async () => {
    //   try {
    //     const res = await axios.get("http://localhost:5000/api/v1/homework");
    //     setHomework(res.data.data);
    //     setLoading(false);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // getHomework();
  }, []);

  console.log(classes)

  const renderClasses = classes.map((item) => {
    return <HomeWorkCard key={item.id} data={item} />;
  });
  return (
    <div className="flex flex-col gap-5 animate-fade-in-right">
      <div className="flex mt-10 justify-between items-center">
        {roles() === "Teacher" && (
          <h3 className="text-2xl font-medium">HomeWork List</h3>
        )}
        {roles() === "Teacher" ? (
          <Link to="/h/hw/create">
            <button className="cursor-pointer flex gap-2 items-center">
              <IconPlus />
              <span className="text-base font-medium text-slate-600">
                Create Homework
              </span>
            </button>
          </Link>
        ) : (
          <h1 className="text-2xl font-medium">My Homework</h1>
        )}
      </div>

      {/* class card list*/}
      {/* <div className="grid grid-cols-2 gap-4 "> */}
      {/* <HomeWorkCard /> */}
      {renderClasses}
      {/* </div> */}
    </div>
  );
};

export default HomeWork;
