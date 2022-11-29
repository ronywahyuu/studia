import React from 'react'
import ArticleImg from "../assets/images/banner.png";

const ArticleCard = () => {
  return (
    <div className="flex items-center gap-5 mt-5">
      <div className="">
        <img src={ArticleImg} alt="" className="w-40 h-36 object-cover" />
      </div>

      <div className="flex flex-col gap-2">
        <div>
        <h1 className="text-xl font-medium">Lorem ipsum dolor sit amet.</h1>
        <p className="text-sm text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quod.
        </p>
        </div>
        {/* profile */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-slate-300"></div>
          <div className="flex flex-col">
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-sm text-gray-400">2 days ago</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleCard