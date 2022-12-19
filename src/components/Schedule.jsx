import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { TugasContext } from "../context/tugasContext";


const Schedule = ({ classes }) => {
  const [loading, setLoading] = useState(false);
  const [tugas, setTugas] = useState(null);
  const location = useLocation();


  const {tugasCtx, setTugasCtx} = useContext(TugasContext)

  // log the endpoint parameter with location
  const lessonParams = location.pathname.split("/")[5];

  const fetchTugas = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`/tugas/${lessonParams}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const { tugas } = res.data;
      setTugas(tugas);
      // setTugasCtx(tugas)
      console.log(tugas);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTugas();
  }, [lessonParams]);

  const renderClass = classes.map((item, index) => {
    // const randomColor = Math.floor(Math.random()*16777215).toString(16);
    console.log();
    return (
      <Link 
        params={{ id: item?.id }}
        to={`/h/classes/${item?.id}`}>
        {/* schedule list */}
        <div className="mt-5">
          {/* single schedule */}
          <div
            key={index}
            className="flex items-center justify-between p-5 rounded-xl bg-soft-gray mt-5"
          >
            <div className="">🔵</div>
            <div className=" items-center">
              <h1 className="text-base font-medium">{item?.name}</h1>
              <p className="text-gray-300 text-xs">{item.owner?.name}</p>
            </div>
            <div>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.3">
                  <path
                    d="M5.19727 11.62L9.0006 7.81667C9.44977 7.3675 9.44977 6.6325 9.0006 6.18334L5.19727 2.38"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </Link>
    );
  });

  const renderTugas = tugas?.map((item, index) => {
    return (
      <Link to={`/h/hw/${item?.id}/${lessonParams}`}>
        <div key={index} className="flex flex-col gap-5 mt-5">
          {/* single schedule */}
          <div className="flex items-center justify-between p-5 rounded-xl bg-soft-gray mt-5">
            <div className="">📕</div>
            <div className=" items-center">
              <h1 className="text-base font-medium">{item?.name}</h1>
              <p className="text-gray-300 text-xs">{item.owner?.name}</p>
            </div>
            <div>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.3">
                  <path
                    d="M5.19727 11.62L9.0006 7.81667C9.44977 7.3675 9.44977 6.6325 9.0006 6.18334L5.19727 2.38"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </Link>
    );
  });

  const renderWhichFetch = () => {
    if (location.pathname.split("/")[4] !== "lessons") {
      return renderClass;
    }
    if (location.pathname.split("/")[4] === "lessons") {
      if(lessonParams) {
        return renderTugas;
      }
    }
  };
  return (
    <div className="">
      <h2 className="font-bold text-xl">Schedule / Task</h2>

      {renderWhichFetch()}
    </div>
  );
};

export default Schedule;
