import { Link } from "react-router-dom";
import BannerImg from "../assets/images/banner.png";
import ArticleCard from "../components/ArticleCard";
import ClassCard from "../components/ClassCard";
const ClassDetail = () => {
  return (
    <div className="">

      <div className="">
        {/* banner image */}
        <div className=" w-full h-80 bg-slate-300 relative overflow-hidden rounded-xl">
          <img
            src={BannerImg}
            className="absolute inset-0 w-full h-full object-cover opacity-60 transition transform hover:scale-125"
            alt=""
          />

          <Link to="/h/classes">
            <div className="absolute top-10 left-10 ">
              <svg
                width="30"
                height="22"
                viewBox="0 0 30 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28 11H2"
                  stroke="#6D7C90"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 20L2 11L11 2"
                  stroke="#6D7C90"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Link>

          <div className="absolute bottom-7 left-10">
            <h3 className="font-medium text-6xl text-white">Interaction</h3>
            <p className="text-3xl font-light text-white">2022 RPL 5B</p>
          </div>

          <div className="absolute bottom-7 right-10 flex gap-3">
            <p className="text-base font-light text-white">2 Article</p>
            <span className="text-base font-light text-white">|</span>
            <p className="text-base font-light text-white">11 Lesson</p>
          </div>
        </div>
      </div>


      <div className="mt-5 flex gap-10">

        {/* lesson section */}
        <div className="flex flex-col gap-5 w-3/5">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-medium text-black text-opacity-50">
              Lesson
            </h1>
            <Link to="/h/classes">
              <p className="text-blue-400">See all</p>
            </Link>
          </div>

          {/* class card list*/}
          <div className="grid grid-cols-2 gap-4 ">
            <ClassCard />
            <ClassCard />
            <ClassCard />
            <ClassCard />
          </div>
        </div>

        {/* article section */}
        <div className="">
          <div className="flex  justify-between items-center">
            <h1 className="text-2xl font-medium text-black text-opacity-50">
              Articles
            </h1>
            <Link to="/h/classes">
              <p className="text-blue-400">See all</p>
            </Link>
          </div>

          <div className=" ">
            <ArticleCard />
            <ArticleCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassDetail;
