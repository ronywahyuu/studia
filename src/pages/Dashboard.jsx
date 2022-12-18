import { Link, useLocation, useNavigate } from "react-router-dom";
import BannerImg from "../assets/images/featured-img.png";
import ClassCard from "../components/cards/ClassCard";
import { useContext, useEffect, useState } from "react";
import { KelasContext } from "../context/kelasContext";
import Skeleton from "react-loading-skeleton";
import { AuthContext } from "../context/authContext";
import TeacherDashboard from "../components/dashboard/TeacherDashboard";
import axios from "axios";

const Dashboard = () => {
  const { classes, loading, fetch } = useContext(KelasContext);
  // const [classes, setClasses] = useState([]);
  const { user, isAuthenticated, roles } = useContext(AuthContext);

  console.log(user);
  console.log(roles());
  // const roles = () => {
  //   if (user?.isTeacher === true) {
  //     return "teacher";
  //   }
  //   if (user?.isStudent === true) {
  //     return "student";
  //   }
  // };
  // console.log(roles());

  // useEffect(() => {
  //   const fetchClasses = async () => {
  //     const token = localStorage.getItem("token");
  //     await axios.get(`/kelas/joined/current?populate=%2A`, {
  //       headers: {
  //           Authorization: `Bearer ${token}`,
  //       },
  //   }).then((res) => {

  //   })
  //   }
  // }, []);
  return (
    <div className="flex flex-col gap-5 mt-10  animate-fade-in-down ">
      {roles() === "Student" ? (
        <>
          <div className=" w-full h-96  relative overflow-hidden rounded-xl">
            <img
              src={BannerImg}
              className="absolute inset-0 w-full h-full object-cover opacity- transition transform hover:scale-105"
              alt=""
            />

            <div className="absolute top-7 left-10">
              <h3 className="font-medium text-3xl text-white">Interaction</h3>
              <p className="text-xl font-light text-white text-opacity-50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex  justify-between items-center">
              <h1 className="text-2xl font-medium">My Classes</h1>
              <Link to="/h/classes">
                <p className="text-blue-400">See all</p>
              </Link>
            </div>

            {/* class card list*/}
            <div className="grid grid-cols-2 gap-4 ">
              {classes.length === 0 && <h1>No Classes</h1>}
              {loading ? (
                <Skeleton height={200} />
              ) : (
                classes.map((item) => <ClassCard key={item.id} data={item} />)
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <TeacherDashboard/>
        </>
      )}
      {/* featured banner */}
    </div>
  );
};

export default Dashboard;
