import React from "react";
import { Link } from "react-router-dom";
import Thumbnail from "../../assets/images/thumbnail.png";
import TimeAgo from "react-timeago";

const Articlecard = ({ article, color }) => {
  // console.log(color())
  // console.log(new Date(article?.release_date));
  // console.log(article?.id)
  // console.log(article)
  return (
    <>
      {/* article card */}
      <Link to={`/h/articles/${article?.id}`} className="">
        <div
          className={`flex flex-col lg:flex-row-reverse rounded-lg justify-between border-t-8 border-[#77BBE2]   bg-white p-5 `}
        >
          {/* Thumbnail */}
          <div className="flex thumbnail lg:w-2/5 sm:w-full ">
            <img
              src={article.image?.url ? article.image?.url : Thumbnail}
              className="ml-auto mr-auto h-fit mt-auto mb-auto"
              alt=""
            />
          </div>

          <div className="flex flex-col justify-between gap-5 lg:w-3/5 sm:wfull">
            {/* Title */}
            <h3 className="text-2xl font-medium">{article?.name}</h3>

            {/* desc */}
            <div className="flex flex-col gap-2 mt-2  h-20">
              <div
                className="truncate text-gray-300 h-full overflow-scroll"
                dangerouslySetInnerHTML={{ __html: article?.text }}
              ></div>
              {/* <p className="text-gray-300 truncate">
                      {article?.text}
                    </p> */}
            </div>
            {/* Author and Time */}
            <div className="flex flex-row gap-10 ">
              <p className="text-gray-400 text-xs">Author name</p>
              <p className="text-gray-400 text-xs">
                <TimeAgo date={article?.release_date} />
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Articlecard;
