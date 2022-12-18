import React, { useContext, useState } from "react";
import ClassCard from "../cards/ClassCard";
import { useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../../context/authContext";
import Skeleton from "react-loading-skeleton";
import { KelasContext } from "../../context/kelasContext";

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
    if (roles() === "Teacher"){
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
    <div className="grid grid-cols-2 gap-4 ">
      {loading ? (
        <Skeleton width={500} height={500}   />
      ) : (
        renderClassCard
      )}
    </div>
  );
};

export default TeacherDashboard;
