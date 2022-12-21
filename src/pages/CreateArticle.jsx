import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import * as Yup from "yup";
import { string } from "yup";

import { Link, useNavigate } from "react-router-dom";
import ButtonSpin from "../components/loading/ButtonSpin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const [valid, setValid] = useState(false);

  const CreateValidationSchema = Yup.object().shape({
    name: Yup.string().required("Title cannot be empty"),
    text: Yup.string().required("Subtitle cannot be empty"),
    synopsis: Yup.string().required("Field cannot be empty"),
  })

  const notifyUploadError = () => toast.error("Upload Failed: Please Fill all fields");
  const notifyUploadSuccess = () => toast.success("Upload Success");

  const handleUpload = async (e) => {
    setLoading(true);
    e.preventDefault();
    const form = new FormData();
    form.append("file", image);
    form.append("kontens", JSON.stringify(kontens));

    console.log(image);
    console.log(kontens);
    try {
      const response = await axios.post("https://studia.deta.dev/konten/", form, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": `multipart/form-data`,
          // cors
        },
        withCredentials: false,
      })
      console.log(response.data);
      setLoading(false);
      notifyUploadSuccess();
      if(notifyUploadSuccess){
        navigate("/h/articles");
      }
    } catch (err) {
      notifyUploadError();
      setLoading(false);
      console.log(err);
    }
  };

  // const formik = useFormik({
  //   initialValues: {
  //     name: "",
  //     text: "",
  //     synopsis: "",
  //   },
  //   validationSchema: CreateValidationSchema,
  //   onSubmit: async (values) => {
  //     const form = new FormData();
  //     form.append("file", image);
  //     form.append("kontens", JSON.stringify(values));

  //     console.log(image);
  //     console.log(values);
  //     try {
  //       const response = await axios.post("/konten/", form, {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //           "Content-Type": `multipart/form-data`,
  //           // cors
  //         },
  //         withCredentials: false,
  //       });
  //       console.log(response.data);
  //       setLoading(false);
  //       navigate("/h/articles");
  //     } catch (err) {
  //       setLoading(false);
  //       console.log(err);
  //     }
  //   },
  // });

  return (
    <div className=" flex animate-fade-in-right ">
      {/* main side */}
      <form
        onSubmit={handleUpload}
        // encType="multipart/form-data"
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
                  type="text"
                  name="title"
                  id="title"
                  className="border py-2 px-3 rounded-md "
                  placeholder="Title"
                  // value={formik.values.name}
                  // onChange={formik.handleChange}
                  value={kontens.name}
                  onChange={(e) =>
                    setKontens({ ...kontens, name: e.target.value })
                  }
                  
                />
                <input
                  type="text"
                  name="subtitle"
                  id="subtitle"
                  className="border py-2 px-3 rounded-md "
                  placeholder="Sub Title"
                  // value={formik.values.synopsis}
                  // onChange={formik.handleChange}
                  value={kontens.synopsis}
                  onChange={(e) =>
                    setKontens({ ...kontens, synopsis: e.target.value })
                  }
                  
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
                <div className=" rounded-md h-80 w-full  relative">
                  <ReactQuill
                    theme="snow"
                    className="absolute inset-0"
                    // value={formik.values.text}
                    // onChange={formik.handleChange}
                    value={kontens.text}
                    onChange={(e) => setKontens({ ...kontens, text: e })}
                    required
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
                <ToastContainer />
      {/* right side */}
      {/* <RightSide/> */}
    </div>
  );
};

export default CreateArticle;
