import axios from "axios";
import { Field, Form, Formik } from "formik";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ButtonSpin from "../components/loading/ButtonSpin";
import { AuthContext } from "../context/authContext";

const JoinClass = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);
  const user_id = user?.id;
  // console.log(user);
  // console.log(`id : ${user_id}`);
  const notifyNotFound = () => toast.error("Kelas tidak ditemukan");
  const notifySuccess = () => toast.success("Berhasil bergabung ke kelas");

  return (
    <div className="flex  justify-center items-center h-80">
      <Formik
        initialValues={{
          code: "",
        }}
        onSubmit={async (values) => {
          console.log(values );
          console.log(user_id);
          setLoading(true);
          try {
            const res = await axios.post("https://studia.deta.dev/kelas/join", {
              ...values,
              user_id,
            },{
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              }
            });
            console.log(res);
            notifySuccess();
            navigate("/h/classes");
            setLoading(false);
          } catch (err) {
            notifyNotFound();
            console.log(err);
            setLoading(false);
          }
        }}
      >
        <div className="flex flex-col  w-full px-32">
          <h3 className="text-2xl mx-auto text-slate-500 font-medium mb-5 ">
            Enter Class Code
          </h3>
          <Form action="" className="flex flex-col">
            <Field
              type="text"
              name="code"
              id="code"
              className="border py-2 px-3 rounded-md w-full"
              placeholder="Code"
              required
            />
            {loading ? (
              <ButtonSpin />
            ) : (
              <button
                type="submit"
                className="bg-[#77BBE2] py-3 rounded-md mt-5 font-md text-white"
              >
                Join
              </button>
            )}
          </Form>
        </div>
      </Formik>
      <ToastContainer />
    </div>
  );
};

export default JoinClass;
