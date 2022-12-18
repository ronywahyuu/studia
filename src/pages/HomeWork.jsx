import React, { useContext, useEffect, useState } from "react";
import HomeWorkCard from "../components/cards/HomeWorkCard";
import axios from "axios";
import { AuthContext } from "../context/authContext";
import { Link, useLocation } from "react-router-dom";
import IconPlus from "../assets/images/svg/IconPlus";
import { KelasContext } from "../context/kelasContext";
import Skeleton from "react-loading-skeleton";

const HomeWork = () => {
  const [homework, setHomework] = useState([]);
  const [ownClasses, setOwnClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  const { roles } = useContext(AuthContext);
  const { classes } = useContext(KelasContext);

  const location = useLocation();

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

  console.log(classes);

  const renderClasses = classes.map((item) => {
    return <HomeWorkCard key={item.id} data={item} />;
  });
  const renderStudentClassCard = classes?.map((item, index) => {
    return <HomeWorkCard key={index} data={item} />;
  });

  const renderTeacherClassCard = ownClasses?.map((item, index) => {
    return <HomeWorkCard key={index} data={item} />;
  });
  return (
    <div className="">
      <div className="flex justify-between items-center mt-10 mb-5">
        <h1 className="text-xl text-slate-500 font-medium">Homeworks</h1>
        {roles() === "Teacher" && (
           <Link to="/h/hw/create">
            <button className="cursor-pointer flex gap-2 items-center">
              <IconPlus />
              <span className="text-base font-medium text-slate-600">
                Create Homework
              </span>
            </button>
          </Link>
        )}
        {/* {roles() === "Student" ? (
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
        )} */}
      </div>

      {/* class card list */}
      <div className="grid grid-cols-2 gap-4  ">
        {/* {loading && <Skeleton height={900} width={800} />} */}
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
    // <div className="flex flex-col gap-5 animate-fade-in-right">
    //   <div className="flex mt-10 justify-between items-center">
    //     {roles() === "Teacher" && (
    //       <h3 className="text-2xl font-medium">HomeWork List</h3>
    //     )}
    //     {roles() === "Teacher" ? (
    //       <Link to="/h/hw/create">
    //         <button className="cursor-pointer flex gap-2 items-center">
    //           <IconPlus />
    //           <span className="text-base font-medium text-slate-600">
    //             Create Homework
    //           </span>
    //         </button>
    //       </Link>
    //     ) : (
    //       <h1 className="text-2xl font-medium">My Homework</h1>
    //     )}
    //   </div>
    //   {renderClasses}
    // </div>
  );
};

export default HomeWork;
