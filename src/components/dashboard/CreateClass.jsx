import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { ToastContainer, toast } from "react-toastify";
// import toastify styles
import "react-toastify/dist/ReactToastify.css";
import ButtonSpin from "../loading/ButtonSpin";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const CreateClass = () => {
  const [loading, setLoading] = useState(false);

  const notifySuccess = () => toast.success("Kelas berhasil dibuat");


  const navigate = useNavigate(); 
  // yup validation
  const CreateValidationSchema = Yup.object().shape({
    subject: Yup.string().required("Subject tidak boleh kosong"),
    description: Yup.string().required("Deskripsi tidak boleh kosong"),
  });

  const formik = useFormik({
    initialValues: {
      subject: "",
      description: "",
    },
    validationSchema: CreateValidationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      console.log(values);
      try {
        const res = await axios.post(
          "/kelas",
          {
            name: values.subject,
            section: values.description,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log(res);
        navigate("/h/classes");
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    },
  });

  return (
    <div className=" flex animate-fade-in-right ">
      {/* main side */}
      <div className=" bg-soft-gray w-full">
        <div className="flex flex-col gap-5 mt-10">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-medium text-gray-500">Create Class</h1>
          </div>
          {/* featured Article */}
          <div className="flex flex-col gap-5 w-full h-full">
            <div className="flex flex-col rounded-lg justify-between border-t-8 border-[#77BBE2] bg-white p-5 ">
              {/* Title */}
              <div className="flex flex-col justify-between gap-5 ">
                <div className="flex xl:w-[730px]"></div>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="border py-2 px-3 rounded-md "
                  placeholder="Subject"
                  value={formik.values.subject}
                  onChange={formik.handleChange}
                />
                {formik.errors.subject && formik.touched.subject && (
                  <div className="text-red-500 text-sm">
                    {formik.errors.subject}
                  </div>
                )}
                <input
                  type="text"
                  name="description"
                  id="description"
                  className="border py-2 px-3 rounded-md "
                  placeholder="Description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                />
                {formik.errors.description && formik.touched.description && (
                  <div className="text-red-500 text-sm">
                    {formik.errors.description}
                  </div>
                )}
                {loading ? (
                  <ButtonSpin />
                ) : (
                  <button
                    type="button"
                    className="flex justify-center items-center px-4 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-[#77BBE2]  "
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

      {/* right side */}
      {/* <RightSide/> */}
      <ToastContainer />
    </div>
  );
};

export default CreateClass;
