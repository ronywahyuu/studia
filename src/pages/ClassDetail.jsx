import React, { useEffect, useState } from "react";
import ClassContentField from "../components/ClassContentField";
import axios from "axios";
import { useParams } from "react-router-dom";
import IconChat from "../assets/images/svg/IconChat";
import IconStickyNotes from "../assets/images/svg/IconStickyNotes";
import ClassContentImg from "../assets/images/featured-img.png";

const ClassDetail = () => {
  const [lessons, setLessons] = useState(null);
  const [loading, setLoading] = useState(true);
  const { lessonId } = useParams();
  console.log(lessonId)
  const fetchLesson = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`/lesson/${lessonId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const { data } = res.data;
      setLessons(data);
      // console.log(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchLesson();
  }, []);


  console.log(lessons)

  return (
    <div className="animate-fade-in-right">
      <div className="flex justify-between items-center mt-10 mb-5">
        <h1 className="text-xl text-slate-500 font-medium">My Classes</h1>
      </div>

      <div className="grid  gap-4 ">
        {/* <ClassContentField /> */}
        <div className="flex flex-col rounded-lg justify-between border-t-8 border-blue-900 bg-white p-5 ">
          <div className="flex flex-col justify-between gap-5">
            <h3 className="text-2xl font-medium">{lessons?.name}</h3>
            <p>{lessons?.deskripsi}</p>
          </div>

          <hr className="" />
          {/* picture */}
          {/* <div className="flex flex-col gap-5 mt-5">
            <div className="w-full h-96 bg-slate-300 relative overflow-hidden rounded-3xl">
              <img
                src={ClassContentImg}
                className="object-cover w-screen h-full"
                alt=""
              />
            </div>
          </div> */}

          {/* posted by */}
          <div className="flex justify-between my-8">
            <div className="flex items-center gap-3">
              <img
                src="https://picsum.photos/200"
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <div className="flex flex-col">
                <h3 className="text-lg font-medium text-gray-400">Wadew Ma</h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <IconStickyNotes />
              <h3 className="text-lg font-medium text-gray-400">B Classes</h3>
            </div>
          </div>

          <div dangerouslySetInnerHTML={{ __html: lessons?.detail }}>
            {/* <p className="text-base text-gray-600">
        </p> */}
          </div>

          {/* feedback button */}
          <button className="border mt-10 bg-sky-800 p-2 rounded-lg hover:bg-sky-900 transition-all duration-300 w-3/12">
            <div className="flex items-center   gap-5">
              <div>
                <IconChat color="white" />
              </div>
              <p className="text-white">Give A Feedback</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassDetail;
