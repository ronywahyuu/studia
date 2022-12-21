import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { Link, useNavigate, useParams } from "react-router-dom";
import ButtonSpin from "../loading/ButtonSpin";
// import RightSide from "../components/RightSide"

const CreateArticle = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  // console.log(id)
  const [kontens, setKontens] = useState({
    name: "",
    description: "",
    deadline: "null",
  });
  // const [title, setTitle] = useState("");
  // const [subtitle, setSubtitle] = useState("");
  // const [content, setContent] = useState("");
  // const [image, setImage] = useState(null);
  const handleUpload = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log(kontens);
      const response = await axios.post(`https://studia.deta.dev/tugas/${id}`, kontens, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(response);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <div className=" flex animate-fade-in-right ">
      {/* main side */}
      <form
        onSubmit={handleUpload}
        encType="multipart/form-data"
        className=" bg-soft-gray w-full"
      >
        <div className="flex flex-col gap-5 mt-10">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-medium text-gray-500">
              Create Homework
            </h1>
          </div>
          {/* featured Article */}
          <div className="flex flex-col gap-5 w-full h-full">
            <div className="flex flex-col items-center justify-center rounded-lg justify-between border-t-8 border-[#77BBE2] bg-white p-5 ">
              {/* Title */}
              <div className="flex flex-col justify-between gap-5 w-11/12">
                <div className="flex xl:w-[730px]"></div>
                <input
                  type="title"
                  name="title"
                  id="title"
                  className="border py-2 px-3 rounded-md "
                  placeholder="Title"
                  value={kontens.name}
                  onChange={(e) =>
                    setKontens({ ...kontens, name: e.target.value })
                  }
                />

                <div className=" rounded-md h-80 w-full  relative">
                  <ReactQuill
                    theme="snow"
                    className="absolute inset-0"
                    value={kontens.description}
                    onChange={(e) => setKontens({ ...kontens, description: e })}
                  />
                </div>
                <div class=" mt-10">
                  <p className=" text-slate-600 font-medium">Due Date: </p>
                  <div class="flex  left-0 items-center pl-3 pointer-events-none "></div>
                  <input
                    datepicker
                    type="datetime-local"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:focus:border-blue-500"
                    placeholder="Deadline"
                    value={kontens.deadline}
                    onChange={(e) =>
                      setKontens({ ...kontens, deadline: e.target.value })
                    }
                  />
                </div>
                {loading ? (
                  <ButtonSpin />
                ) : (
                  <button
                    type="submit"
                    className="flex mt-4 justify-center items-center px-4 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-[#77BBE2] "
                  >
                    Submit
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </form>

      {/* right side */}
      {/* <RightSide/> */}
    </div>
  );
};

export default CreateArticle;
