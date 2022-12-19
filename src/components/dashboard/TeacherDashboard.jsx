import React, { useContext, useState } from "react";
import ClassCard from "../cards/ClassCard";
import { useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../../context/authContext";
import BannerImg from "../../assets/images/featured-image.jpg";

import Skeleton from "react-loading-skeleton";
import { KelasContext } from "../../context/kelasContext";
import { Link } from "react-router-dom";

const TeacherDashboard = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user, roles, isStudent, isTeacher } = useContext(AuthContext);
  // const {ownClasses, loading} = useContext(KelasContext);

  const getOwnClasses = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/kelas/current_owner", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setClasses(res.data.msg);
      setLoading(false);
      // console.log(res.data.msg);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    if (roles() === "Teacher") {
      getOwnClasses();
    }
  }, [roles]);

  //   const renderClassCard = classes.map((item, index) => {
  //     return <ClassCard key={index} data={item} />;
  //   });
  console.log(classes.length);

  const renderClassCard = classes.map((item, index) => {
    return <ClassCard key={index} data={item} />;
  });
  return (
    <div>
      <div className=" w-full h-96  relative overflow-hidden rounded-xl">
        <img
          src={BannerImg}
          className="absolute inset-0 w-full h-full object-cover opacity- transition transform hover:scale-105"
          alt=""
        />

        <div className="absolute top-7 left-10">
          <h3 className="font-medium text-3xl text-white">Studia Teacher</h3>
          <p className="text-xl font-light text-white text-opacity-70">
            We don't make study. We make study better
          </p>
        </div>
      </div>
      <div className="flex  justify-between items-center  mt-10 mb-3">
        <h1 className="text-2xl font-medium text-slate-500 ">
          My Classes
        </h1>
        <Link to="/h/classes">
          <p className="text-blue-400 font-medium">See all</p>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4 ">
        {loading ? <Skeleton width={800} height={900} /> : renderClassCard}
      </div>
    </div>
  );
};

export default TeacherDashboard;
