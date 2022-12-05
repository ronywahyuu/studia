// import { Link } from "react-router-dom"
import ArticleCard from "../components/ArticleCard"
import RightSide from "../components/RightSide"

const Articles = () => {
  
  return (
    <div className=" flex  ">

      {/* main side */}
      <div className="py-10 pl-10 pr-10 bg-soft-gray w-8/12">
        {/* welcome message */}
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl font-medium ">Welcome Balqis A.</h1>
          <p className="text-gray-300">Have a good day!</p>
        </div>

        <div className="flex flex-col gap-5 mt-10">  
        <div className="flex border justify-between items-center">
              <h1 className="text-2xl font-medium text-gray-500">Articles</h1>
            </div>      
          {/* featured Article */}
          <div className="flex flex-col gap-5 w-full">
                <ArticleCard/>
          </div>

          {/* Articles card*/}
          <div className="flex flex-col gap-5">

            {/* Article card list*/}
            <div className="grid grid-cols-2 gap-5 ">
              <ArticleCard/>
              <ArticleCard/>
              <ArticleCard/>
              <ArticleCard/>
              <ArticleCard/>
              <ArticleCard/>
            </div>

          </div>
        </div>
      </div>

      {/* right side */}
      <RightSide/>
     
    </div>
  )
}

export default Articles