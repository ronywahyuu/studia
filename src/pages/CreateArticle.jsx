import { Link } from "react-router-dom"
import Articlecard from "../components/Articlecard"
// import RightSide from "../components/RightSide"

const CreateArticle = () => {
  
  return (
<div className=" flex animate-fade-in-right ">

{/* main side */}
<div className=" bg-soft-gray w-full">
  <div className="flex flex-col gap-5 mt-10">  
      <div className="flex justify-between items-center">
          <h1 className="text-2xl font-medium text-gray-500">Write Articles</h1>
      </div>      
      {/* featured Article */}
      <div className="flex flex-col gap-5 w-full h-full">
          <div className="flex flex-col rounded-lg justify-between border-t-8 border-[#77BBE2] bg-white p-5 ">
              {/* Title */}
              <div className="flex flex-col justify-between gap-5 w-11/12">
                <div className="flex xl:w-[730px]"></div>
                  <input
                    type="title"
                    name="title"
                    id="title"
                    className="border py-2 px-3 rounded-md "
                    placeholder="Title"         
                  />
                  <input
                    type="subtitle"
                    name="subtitle"
                    id="subtitle"
                    className="border py-2 px-3 rounded-md "
                    placeholder="Sub Title"
                  />
                  <div className="border flex items-center justify-center text-center h-60">
                    <label for="photo" className=" text-slate-400 cursor-pointer  ">
                    Photo <br /> Max 1000x1000
                    <input
                        type="file"
                        name="photo"
                        id="photo"
                        className="hidden py-2 px-3 rounded-md"
                    />
                    </label>
                  </div>
                  <textarea
                    type="textfield"
                    name="textfield"
                    id="textfield"
                    className="border py-5 px-3 rounded-md h-80 resize-none"
                    placeholder="Add text ..."
                  />
                <button
                    type="submit"
                    className="px-5 py-2 w-36 ml-auto text-white rounded-3xl mt-3 bg-[#77BBE2]"
                    >
                    Submit
                </button>
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

export default CreateArticle