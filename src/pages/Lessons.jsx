import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import LessonCard from "../components/cards/LessonCard";
import IconStickyNotes from "../assets/images/svg/IconStickyNotes";
import Skeleton from "react-loading-skeleton";
import IconPlus from "../assets/images/svg/IconPlus";
import { AuthContext } from "../context/authContext";

const Lessons = () => {
  const [classData, setClassData] = useState();
  const [lessons, setLessons] = useState();
  const [loading, setLoading] = useState(true);

  const { roles } = useContext(AuthContext);
  // get params react router dom
  const { id } = useParams();
  console.log(id);
  // get class by id

  const fetchClass = async () => {
    setLoading(true);
    const res = await axios.get(`/kelas/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const { data } = res.data;
    setClassData(data);
    console.log(data);
    setLoading(false);
  };

  const fetchLesson = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`/lesson/k/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const { data } = res.data;
      setLessons(data);
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClass();
  }, []);

  useEffect(() => {
    fetchLesson();
  }, []);

  const renderLesson = lessons?.map((lesson, index) => {
    return loading ? (
      <Skeleton />
    ) : (
      <LessonCard key={index} num={index + 1} lesson={lesson} />
    );
  });
  return (
    <div className=" flex flex-col w-full animate-fade-in-right mt-5 mr-44">
      {/* main side */}
      <div className=" bg-soft-gray w-full">
        <div className="flex flex-col gap-5 mt-10">
          <div className="flex justify-between items-center">
            {loading ? (
              <Skeleton width={200} />
            ) : (
              <>
                <h1 className="text-2xl font-medium text-gray-500">
                  {classData?.name}
                </h1>
                <p className="text-gray-500">Class Code: {classData?.code}</p>
              </>
            )}
          </div>

          {/* <div className="flex justify-between my-5">
            <div className="flex items-center gap-3">
              <img
                src="https://picsum.photos/200"
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <div className="flex flex-col">
                <h3 className="text-lg font-medium text-gray-400">
                  {lessons?.name}
                </h3>
              </div>
            </div>
          </div> */}

          <div className="flex  justify-between">
            {loading ? (
              <Skeleton width={200} />
            ) : (
              <p className="text-base text-gray-600">{classData?.section}</p>
            )}
            <Link to={`/h/classes/${id}/create`}>
              <div className="flex items-center gap-2">
                {/* <IconStickyNotes />
              <h3 className="text-lg font-medium text-gray-400">B Classes</h3> */}
                {roles() === "Teacher" && (
                  <>
                    <IconPlus />
                    <h3 className="text-base font-medium text-gray-500">
                      Add Lesson
                    </h3>
                  </>
                )}
              </div>
            </Link>
          </div>

          {/* Lessons card*/}
          <div className="flex flex-col gap-5">
            {/*Lessons card list*/}
            <div className="grid grid-cols-1 gap-5 ">
              {loading ? (
                <Skeleton height={200} count={lessons?.length} />
              ) : (
                renderLesson
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lessons;
