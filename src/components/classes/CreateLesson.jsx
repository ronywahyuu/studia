import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import ReactQuill from "react-quill";
import { useNavigate, useParams } from "react-router-dom";
import ButtonSpin from "../loading/ButtonSpin";

const CreateLesson = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      detail: "",
    },
    onSubmit: async (values) => {
      console.log({
        name: values.title,
        description: values.description,
        detail: values.detail,
      });

      if (values.detail !== "") {
        try {
          setLoading(true);
          const res = await axios.post(
            `https://studia.deta.dev/lesson/create`,
            {
              name: values.title,
              deskripsi: values.description,
              detail: values.detail,
              kelas_id: id,
            },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          console.log(res);
          setLoading(false);
          navigate(`/h/classes/${id}`);
        } catch (error) {
          setLoading(false);
          console.log(error);
        }
      } else {
        alert("Fill the detail field");
      }
    },
  });
  return (
    <div>
      <div className=" bg-soft-gray w-full">
        <div className="flex flex-col gap-5 mt-10">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-medium text-gray-500">Add Lesson</h1>
          </div>
          {/* featured Article */}
          <div className="flex flex-col gap-5 w-full h-full">
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
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  required
                />
                <input
                  type="text"
                  name="description"
                  id="description"
                  className="border py-2 px-3 rounded-md "
                  placeholder="Description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  required
                />
                {/* <div className="border flex items-center justify-center text-center h-40">
                  <label
                    htmlFor="photo"
                    className=" text-slate-400 cursor-pointer  "
                  >
                    Photo <br /> Max 1000x1000
                    <input
                      type="file"
                      name="photo"
                      id="photo"
                      className="hidden py-2 px-3 rounded-md"
                    />
                  </label>
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
                    className="absolute inset-0 mb-10"
                    value={formik.values.detail}
                    onChange={(value) => formik.setFieldValue("detail", value)}
                  />
                </div>
                {loading ? (
                  <ButtonSpin />
                ) : (
                  <button
                    className="flex mt-10 justify-center items-center px-4 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-[#77BBE2] hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out"
                    onClick={formik.handleSubmit}
                  >
                    Submit
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateLesson;
