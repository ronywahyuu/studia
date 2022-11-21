import { Link } from "react-router-dom"
import BannerImg from "../assets/images/featured-img.png"
import ClassCard from "../components/ClassCard"
import RightSide from "../components/RightSide"

const Dashboard = () => {
  
  return (
    <div className=" flex  ">

      {/* main side */}
      <div className="py-10 pl-10 pr-10 bg-soft-gray w-8/12">
        {/* welcome message */}
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl font-medium ">Welcome Balqis A.</h1>
          <p className="text-gray-300">Have a good day!</p>
        </div>

        {/* featured class */}
        <div className="flex flex-col gap-5 mt-10">        
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
              <ClassCard/>
              <ClassCard/>
            </div>

          </div>
        </div>
      </div>

      {/* right side */}
      <RightSide/>
     
    </div>
  )
}

export default Dashboard