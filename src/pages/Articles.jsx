// import { Link } from "react-router-dom"
import Articlecard from "../components/Articlecard"
import RightSide from "../components/RightSide"

const Articles = () => {
  
  return (
    <div className=" flex flex-col w-full ">

      {/* main side */}
      <div className="py-10 pl-10 pr-10 bg-soft-gray w-full">
        <div className="flex flex-col gap-5 mt-10">  
        <div className="flex border justify-between items-center">
              <h1 className="text-2xl font-medium text-gray-500">Articles</h1>
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