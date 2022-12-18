import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { Link, useNavigate } from "react-router-dom";
// import RightSide from "../components/RightSide"

const CreateArticle = () => {
  const navigate = useNavigate()

  const [kontens, setKontens] = useState({
    name: "",
    text: "",
    synopsis: "",
  });
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const handleUpload = async (e) => {
    e.preventDefault();
    // console.log(image) ;
    // console.log(title);
    // console.log(content);
    // console.log(subtitle);
    const form = new FormData();
    // form.append("kontens", {
    //   name: "The Best Part",
    //   text: "lorem ipsum dolor sit amet",
    //   synopsis: "Ini subtitle",
    // });
    form.append("file", image);
    form.append("kontens", JSON.stringify(kontens));

    console.log(image)
    console.log(kontens)
    try {
      const response = await axios.post(
        "https://studia.deta.dev/konten/",
        form ,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": `multipart/form-data`,
            // cors
            
          },
          withCredentials: false,
        }
      );
      console.log(response.data);
      navigate("/h/articles")

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" flex animate-fade-in-right ">
      {/* main side */}
      <form onSubmit={handleUpload} encType="multipart/form-data" className=" bg-soft-gray w-full">
        <div className="flex flex-col gap-5 mt-10">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-medium text-gray-500">
              Create Homework
            </h1>
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
                  value={kontens.name}
                  onChange={(e) => setKontens({ ...kontens, name: e.target.value })}
                />
                <input
                  type="subtitle"
                  name="subtitle"
                  id="subtitle"
                  className="border py-2 px-3 rounded-md "
                  placeholder="Sub Title"
                  value={kontens.synopsis}
                  onChange={(e) => setKontens({ ...kontens, synopsis: e.target.value })}
                />

                  <input
                    type="file"
                    name="photo"
                    id="photo"
                    className="block  w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-violet-700
                    hover:file:bg-violet-100"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                <div className="border flex items-center justify-center text-center h-40">
                  <label
                    htmlFor="photo"
                    className=" text-slate-400 cursor-pointer  "
                  >
                    
                  </label>
                    <img src={image} alt="Image" className="w-full" />
                    {/* Photo <br /> Max 1000x1000 */}
                </div>
                {/* <textarea
                    type="textfield"
                    name="textfield"
                    id="textfield"
                    className="border py-5 px-3 rounded-md h-80 resize-none"
                    placeholder="Add text ..."
                  /> */}
                <div className=" rounded-md h-80 w-full  relative">
                  <ReactQuill
                    theme="snow"
                    className="absolute inset-0"
                    value={kontens.text}
                    onChange={(e) => setKontens({ ...kontens, text: e })}
                    // value={content}
                    // onChange={(e) => setContent(e)}
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 py-2 w-36 ml-auto text-white rounded-3xl mt-10 bg-[#77BBE2]"
                >
                  Submit
                </button>
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
