import RightSide from "../components/RightSide";
import DecorationImage from "../assets/images/featured-img.png";
import Back from "../assets/images/Back.png";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import ButtonSpin from "../components/loading/ButtonSpin";

const ViewArticles = () => {
  const [konten, setKonten] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const getSingleKonten = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`/konten/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const { data } = res.data;
      setKonten(data);
      console.log(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    getSingleKonten();
    return () => {
      setLoading(false);
    };
  }, []);
  return (
    <div className=" flex animate-fade-in-right ">
      {/* main side */}
      <div className=" bg-soft-gray w-full">
        <div className="flex flex-col gap-5 mt-10">
          <div className="flex  justify-between items-center">
            <h1 className="text-2xl font-medium text-gray-500">Articles</h1>
          </div>
          {/* featured Article */}
          <div className="flex flex-col gap-5 w-full h-full">
            <div className="flex flex-col rounded-lg justify-between border-t-8 border-[#77BBE2] bg-white p-5 ">
              {/* Title */}
              <div className="flex flex-col justify-between items-center gap-5 w-11/12 ml-auto mr-auto">
                <h3 className="text-2xl font-bold">
                  {loading ? <Skeleton count={1} /> : konten?.name}
                </h3>
              </div>
              <div className="flex justify-center  gap-5 my-5">
                <p className="text-base font-medium  text-gray-600">
                  {loading ? <Skeleton count={1} /> : konten?.synopsis}
                </p>
              </div>
              <div className="decoration-image w-full justify-center h-full ">
                <img
                  src={konten?.image?.url || DecorationImage}
                  className="w-8/12 ml-auto mr-auto"
                  alt=""
                />
              </div>
              {/* desc */}
              <div className="flex flex-col mt-2 justify-between items-center gap-5 w-11/12 ml-auto mr-auto">
                {loading ? (
                  <ButtonSpin />
                ) : (
                  <div
                    className="text-gray-500"
                    dangerouslySetInnerHTML={{ __html: konten?.text }}
                  ></div>
                )}
              </div>
              {/* author and time */}
              <div className="flex flex-row mt-10">
                {/* Navigate back */}
                <Link to="/h/articles/" className="">
                  <div className="w-2/4 ml-5">
                    <img src={Back} alt="" />
                  </div>
                </Link>
                <div className="flex flex-col ml-auto ">
                  <p className="text-gray-400 text-xs">
                    Published Time :{" "}
                    {new Date(konten?.release_date).toDateString()}
                  </p>
                  <p className="text-stone-800 text-xs">Author </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* right side */}
      {/* <RightSide/> */}
    </div>
  );
};

export default ViewArticles;
