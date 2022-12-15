import { Link, useLocation, useNavigate } from "react-router-dom";
import BannerImg from "../assets/images/featured-img.png";
import ClassCard from "../components/cards/ClassCard";

const Dashboard = () => {

  return (
    <div className="flex flex-col gap-5 mt-10  animate-fade-in-down ">
      {/* featured banner */}
      <div className="flex flex-col gap-5 w-9/12">
        <img src={BannerImg} alt="" className="w-full" />
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
          <ClassCard />
          <ClassCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
