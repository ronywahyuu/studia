import React from "react";
import { Link } from "react-router-dom";
import IconChat from "../../assets/images/svg/IconChat";
import IconClock from "../../assets/images/svg/IconClock";
import IconStickyNotes from "../../assets/images/svg/IconStickyNotes";

const ClassCard = ({data}) => {

  // console.log(data.image.url)
  
  return (
    <>
      {/* class card */}
      <Link to={`/h/classes/${data?.id}`} className="">
        <div className="flex flex-col rounded-lg justify-between border-t-8 border-blue-900 bg-white p-5 ">
          <div className="flex items-center justify-between gap-5">
            <h3 className="text-2xl font-medium">{data?.name}</h3>
            <p className="text-gray-300">12:00 - 13:00</p>
          </div>

          {/* desc */}
          <div className="flex flex-col gap-5 mt-5">
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quod.
            </p>

            {/* lecturer */}
            <div className="flex items-center gap-3">
              <img
                src="https://picsum.photos/200"
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <div className="flex flex-col">
                <h3 className="text-lg font-medium text-gray-400">{data?.owner ? data.owner?.name : 'none' }</h3>
              </div>
            </div>

            {/* class info */}
            <div className="flex items-center justify-between ">
              <div className="flex items-center gap-2">
                <IconStickyNotes />
                <div className="class-card__title">
                  <h3>B Classes</h3>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <IconClock/>

                <div className="class-card__title">
                  <h3>3 Hours</h3>
                </div>
              </div>
            </div>

            {/* class participant and interactions */}
            <div className="flex items-center justify-between gap-5">
              {/* avatar group */}
              <div className="flex items-center -space-x-4">
                <div className="w-10">
                  <img
                    className="rounded-full w-full"
                    src="https://placeimg.com/192/192/people"
                    alt="participant"
                  />
                </div>
                <div className="w-10">
                  <img
                    className="rounded-full w-full"
                    src="https://placeimg.com/192/192/people"
                    alt="participant"
                  />
                </div>
                {/* counter */}
                <div className="w-10">
                  <div className="flex items-center justify-center w-full h-full rounded-full p-2 bg-sky-600">
                    <p className="text-white">+20</p>
                  </div>
                </div>
              </div>

              {/* interactions */}
              <div className="flex items-center gap-1">
                <p>30</p>
                <IconChat/>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ClassCard;
