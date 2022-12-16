import { Link, useLocation, useNavigate } from "react-router-dom";
import BannerImg from "../assets/images/featured-img.png";
import ClassCard from "../components/cards/ClassCard";
import { useContext } from "react";
import { KelasContext } from "../context/kelasContext";
import Skeleton from "react-loading-skeleton";

const Dashboard = () => {
  const { classes, loading } = useContext(KelasContext);

  // console.log(loading)
  return (
    <div className="flex flex-col gap-5 mt-10  animate-fade-in-down ">
      {/* featured banner */}
      {/* <div className="flex flex-col gap-5 w-9/12">
        <img src={BannerImg} alt="" className="w-full" />
      </div> */}
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
      {/* classes card*/}
      <div className="flex flex-col gap-5">
        <div className="flex border justify-between items-center">
          <h1 className="text-2xl font-medium">My Classes</h1>
          <Link to="/h/classes">
            <p className="text-blue-400">See all</p>
          </Link>
        </div>

        {/* class card list*/}
        <div className="grid grid-cols-2 gap-4 ">
          {/* <ClassCard />
          <ClassCard /> */}
          {loading ? (
            <Skeleton height={200} />
          ) : (
            classes.map((item) => <ClassCard key={item.id} data={item} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
