import React from "react";
import { Link, useParams } from "react-router-dom";

const LessonCard = ({lesson, num}) => {
  const {id} = useParams()
  // console.log(lesson?.id)
  return (
    <>
      {/* class card */}
      <Link to={`/h/classes/${id}/lessons/${lesson?.id}`} className="">
        <div className="flex flex-col gap-5 rounded-lg justify-between border-t-8 border-blue-900 bg-white p-3">
          <div className="flex ml-5 items-center justify-between gap-2">
            <h3 className="text-2xl font-medium mt-5">{lesson.name} (Lessons {num})</h3>
          </div>

          {/* desc */}
          <div className="flex flex-col gap-2  ml-5">
            <p className="text-gray-300">
              {lesson.deskripsi}
            </p>

            {/* lecturer */}
            <div className="flex items-center gap-3 mt-5">
              <img
                src="https://picsum.photos/200"
                alt=""
                className="w-8 h-8 rounded-full"
              />
              <div className="flex flex-col">
                <h3 className="text-lg font-medium text-gray-400">Yilong Ma</h3>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default LessonCard;
