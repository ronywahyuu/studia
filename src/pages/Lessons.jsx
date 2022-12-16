import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LessonCard from "../components/cards/LessonCard";
import IconStickyNotes from "../assets/images/svg/IconStickyNotes";
import Skeleton from "react-loading-skeleton";

const Lessons = () => {
  const [lessons, setLessons] = useState();
  const [loading, setLoading] = useState(true);
  // get params react router dom
  const { id } = useParams();
  console.log(id);
  // get class by id
  useEffect(() => {
    const fetchClass = async () => {
      setLoading(true);
      const res = await axios.get(`/kelas/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const { data } = res.data;
      setLessons(data);
      console.log(data);
      setLoading(false);
    };
    fetchClass();
  }, []);

  console.log(lessons);
  return (
    <div className=" flex flex-col w-full animate-fade-in-right mt-5 mr-44">
      {/* main side */}
      <div className=" bg-soft-gray w-full">
        <div className="flex flex-col gap-5 mt-10">
          <div className="flex justify-between items-center">
            {loading ? (
              <Skeleton width={200} />
            ) : (
              <h1 className="text-2xl font-medium text-gray-500">
                {lessons?.name}
              </h1>
            )}
          </div>

          <div className="flex justify-between my-5">
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

            <div className="flex items-center gap-2">
              <IconStickyNotes />
              <h3 className="text-lg font-medium text-gray-400">B Classes</h3>
            </div>
          </div>

          <div className="flex -mt-5">
            {loading ? (
              <Skeleton width={200} />
            ) : (
              <p className="text-base text-gray-600">{lessons?.section}</p>
            )}
          </div>

          {/* Lessons card*/}
          <div className="flex flex-col gap-5">
            {/*Lessons card list*/}
            <div className="grid grid-cols-1 gap-5 ">
              <LessonCard />
              <LessonCard />
            </div>
          </div>
        </div>
      </div>

      {/* right side */}
      {/* <RightSide/> */}
    </div>
  );
};

export default Lessons;
