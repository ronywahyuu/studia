import RightSide from "../components/RightSide"
import DecorationImage from "../assets/images/featured-img.png";
import Back from "../assets/images/Back.png";
import { Link } from "react-router-dom"

const ViewArticles = () => {
  
  return (
    <div className=" flex  ">

      {/* main side */}
      <div className="py-10 pl-10 pr-10 bg-soft-gray w-full">
        <div className="flex flex-col gap-5 mt-10">  
            <div className="flex border justify-between items-center">
                <h1 className="text-2xl font-medium text-gray-500">Articles</h1>
            </div>      
            {/* featured Article */}
            <div className="flex flex-col gap-5 w-full h-full">
                <div className="flex flex-col rounded-lg justify-between border-t-8 border-[#77BBE2] bg-white p-5 ">
                    {/* Title */}
                    <div className="flex flex-col justify-between items-center gap-5 w-11/12 ml-auto mr-auto">
                        <h3 className="text-2xl font-bold">Leak: Samsung to announce the Z Fold 3 and Galaxy Watch 4 in August</h3>
                    </div>
                    <div className="flex flex-col justify-between gap-5 mt-5 mb-5">
                        <p className="text-base font-medium ml-10 text-gray-600">Samsung's next Unpacked event reportedly lands August 11</p>
                    </div>
                    <div className="decoration-image w-full justify-center h-full ">
                        <img src={DecorationImage} className="w-8/12 ml-auto mr-auto" alt="" />
                    </div>
                        {/* desc */}
                        <div className="flex flex-col mt-2 justify-between items-center gap-5 w-11/12 ml-auto mr-auto">
                            <p className="text-gray-500">
                            Samsung had a pretty quiet Mobile World Congress event, but it did tell us we’d learn more about its upcoming Google-approved smartwatch at its next Unpacked event. Unfortunately, the company didn’t tell us when exactly that would be, but a new report from Korean publication DigitalDaily News (via 9to5Google) claims the next Unpacked will take place on August 11, at 10 AM ET.
                            <br />
                            According to the report, Samsung will be launching five devices at the event:
                            <ul class="list-disc">
                                <li>Galaxy Z Fold 3</li>
                                <li>Galaxy Z Fold 3</li>
                                <li>Galaxy Z Fold 3</li>
                                <li>Galaxy Z Fold 3</li>
                                <li>Galaxy Z Fold 3</li>
                            </ul>
                            <br />
                            Notably, the new Galaxy Watches will be Samsung’s first to not use Tizen OS. Google collaborated with Samsung to revamp Wear OS from the ground up, making it smoother and more efficient.
                            <br />
                            Hopefully, the devices are able to maintain the long battery life Samsung’s smartwatches have been known for, while having much greater compatibility with smartwatch apps via Wear OS. That said, the watch will use a custom One UI Watch skin — because it wouldn’t be Samsung if it didn’t put its own twist on the software.
                            <br />
                            As for the Z Fold 3, it’s expected to be a refinement of the original Fold’s concept without major changes to the form factor. The biggest change aside from the expected spec bump is that the Z Fold 3 will support the S-Pen.
                            <br />
                            The event will reportedly be broadcast via YouTube, as per usual, and there is no indication the company plans to hold a concurrent physical event. With the rumored date a little over a month away, I’d expect an official announcement from Samsung within the next week or two.
                            </p>
                        </div>
                        {/* author and time */}
                        <div className="flex flex-row mt-10">
                            {/* Navigate back */}
                            <Link to="/h/articles/" className="">
                                  <div className="w-2/4 ml-5">
                                      <img src={Back}  alt="" />
                                  </div>
                            </Link>
                              <div className="flex flex-col ml-auto mr-auto gap-3">
                                  <p className="text-gray-400 text-xs">Published Time</p>
                                  <p className="text-stone-800 text-xs">Author </p>
                              </div>
                        </div>
                </div>
            </div>
        </div>
      </div>

      {/* right side */}
      {/* <RightSide/> */}
     
    </div>
  )
}

export default ViewArticles