import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { Link, useNavigate } from "react-router-dom";
import ButtonSpin from "../components/loading/ButtonSpin";
// import RightSide from "../components/RightSide"

const CreateArticle = () => {
  const navigate = useNavigate();

  const [kontens, setKontens] = useState({
    name: "",
    text: "",
    synopsis: "",
  });
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleUpload = async (e) => {
    setLoading(true);
    e.preventDefault();
    const form = new FormData();
    form.append("file", image);
    form.append("kontens", JSON.stringify(kontens));

    console.log(image);
    console.log(kontens);
    try {
      const response = await axios.post("/konten/", form, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": `multipart/form-data`,
          // cors
        },
        withCredentials: false,
      });
      console.log(response.data);
      setLoading(false);
      navigate("/h/articles");
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
              Write Articles
            </h1>
          </div>
          {/* featured Article */}
          <div className="flex flex-col  gap-5 w-full h-full">
            <div className="flex flex-col rounded-lg justify-center items-center border-t-8 border-[#77BBE2] bg-white p-5 ">
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
                  // value={title}
                  // onChange={(e) => setTitle(e.target.value)}
                />
                <input
                  type="subtitle"
                  name="subtitle"
                  id="subtitle"
                  className="border py-2 px-3 rounded-md "
                  placeholder="Sub Title"
                  value={kontens.synopsis}
                  onChange={(e) =>
                    setKontens({ ...kontens, synopsis: e.target.value })
                  }
                  // value={subtitle}
                  // onChange={(e) => setSubtitle(e.target.value)}
                />

                <h3 className="text-slate-400">Article Image:</h3>
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
                {/* <div className="border flex items-center justify-center text-center h-40">
                  <label
                    htmlFor="photo"
                    className=" text-slate-400 cursor-pointer  "
                  >Image</label>
                  <img src={image ? image : null} className="w-full" />
                </div> */}
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
                {loading ? (
                  <ButtonSpin />
                ) : (
                  <button
                    type="submit"
                    className="flex mt-10 justify-center items-center px-4 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-[#77BBE2] "
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
