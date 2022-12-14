// import { Link } from "react-router-dom"
import Articlecard from "../components/Articlecard"
import { Link } from "react-router-dom";
// import RightSide from "../components/RightSide"

const Articles = () => {
  
  return (
    <div className=" flex flex-col w-full animate-fade-in-right ">

      {/* main side */}
      <div className=" bg-soft-gray w-full">
        <div className="flex flex-col gap-5 mt-10">  
        <div className="flex  justify-between items-center">
              <h1 className="text-2xl font-medium text-gray-500">Articles</h1>
              <Link Link to="/h/articles/create" className="">
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.24 6.74H6.2V10.88H4.08V6.74H0.0400001V4.82H4.08V0.679999H6.2V4.82H10.24V6.74Z" fill="black"/>
              </svg>
              </Link>
        </div>      
          {/* featured Article */}
          <div className="flex flex-col gap-5 w-full">
                <Articlecard/>
          </div>

          {/* Articles card*/}
          <div className="flex flex-col gap-5">

            {/* Article card list*/}
            <div className="grid grid-cols-2 gap-5 ">
              <Articlecard/>
              <Articlecard/>
              <Articlecard/>
              <Articlecard/>
              <Articlecard/>
              <Articlecard/>
            </div>

          </div>
        </div>
      </div>

      {/* right side */}
      {/* <RightSide/> */}
     
    </div>
  )
}

export default Articles