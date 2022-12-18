import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

import IconPlus from "../assets/images/svg/IconPlus";
import ClassCard from "../components/cards/ClassCard";
import PopUp from "../components/classes/PopUp";
import { KelasContext } from "../context/kelasContext";
import { AuthContext } from "../context/authContext";

const Classes = () => {
  // fetch joined classes
  // const [classes, setClasses] = useState([]);
  const [ownClasses, setOwnClasses] = useState([]);
  // const [loading, setLoading] = useState(true);
  const { classes, loading, setLoading } = useContext(KelasContext);
  const { roles, isStudent, isTeacher } = useContext(AuthContext);

  const location = useLocation()

  console.log(roles());
  useEffect(() => {
    const getOwnClasses = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/kelas/current_owner", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setOwnClasses(res.data.msg);
        setLoading(false);
        // console.log(res.data.msg);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    if (roles() === "Teacher") getOwnClasses();
  }, [roles, location.pathname]);

  // console.log(ownClasses);
  const renderStudentClassCard = classes?.map((item, index) => {
    return <ClassCard key={index} data={item} />;
  });

  const renderTeacherClassCard = ownClasses?.map((item, index) => {
    return <ClassCard key={index} data={item} />;
  });

  return (
    <>
      <div className="">
        <div className="flex justify-between items-center mt-10 mb-5">
          <h1 className="text-xl text-slate-500 font-medium">My Classes</h1>
          {roles() === "Student" ? (
            <Link to="/h/classes/join">
              <button className="cursor-pointer flex gap-2 items-center">
                <IconPlus />
                <span className="text-base font-medium text-slate-600">
                  Join Class
                </span>
              </button>
            </Link>
          ) : (
            <Link to="/h/classes/create">
              <button className="cursor-pointer flex gap-2 items-center">
                <IconPlus />
                <span className="text-base font-medium text-slate-600">
                  Create Class
                </span>
              </button>
            </Link>
          )}
        </div>

        {/* class card list */}
        <div className="grid grid-cols-2 gap-4  ">
          {loading && <Skeleton height={900} width={800} />}
          {classes.length === 0 && <h1>No Classes</h1>}
          {roles() === "Student" && renderStudentClassCard}
          {roles() === "Teacher" && renderTeacherClassCard}
          {/* <div className=" ">
            {roles() === "Student" ? (
              <p className="3xl text-slate-600">Belum Join Kelas...</p>
            ) : (
              <p className="3xl text-slate-600">Belum membuat Kelas...</p>
            )}
            </div> */}
          {/* {loading ? (
            <Skeleton height={200} />
          ) : (
            classes.map((item, index) => {
              return <ClassCard key={index} data={item} />;
            })
          )}

          {classes.length === 0 && !loading && (
          )} */}
        </div>
      </div>
    </>
  );
};

export default Classes;
