import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import Logo from "../../assets/images/logo.png";
import NewLogo from "../../assets/images/new-logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import axios from "axios";
import ButtonSpin from "../loading/ButtonSpin";

const RegisterForm = () => {
  // state
  const [label, setLabel] = useState("");
  const [fetching, setFetching] = useState(false);

  // react router dom
  const location = useLocation();
  const navigate = useNavigate();

  // label condition
  useEffect(() => {
    if (location.pathname === "/auth/register/teacher") {
      setLabel("Teacher");
    } else if (location.pathname === "/auth/register/student") {
      setLabel("Student");
    } else {
      setLabel("Teacher");
    }
  }, [location.pathname]);

  //   toast
  const notifyError = () => toast.error("Account has been registered");

  // login schema
  const LoginValidationSchema = Yup.object().shape({
    username: Yup.string().required("Username cannot empty"),
    password: Yup.string().required("password cannot empty"),
    email: Yup.string().required("Email cannot empty"),
    name: Yup.string().required("Name cannot empty"),
    address: Yup.string().required("Address cannot empty"),
    gender: Yup.string().required("Please select your gender"),
    password_confirmation: Yup.string()
      .required("Password Confirmation cannot empty")
      .oneOf([Yup.ref("password"), null], "Password not match"),
  });

  return (
    <div className=" flex justify-center items-center flex-col gap-2 md:w-9/12 w-full ">
      <Formik
        validateOnChange={false}
        validateOnBlur={false}
        initialValues={{
          name: "",
          email: "",
          address: "",
          gender: "",
          username: "",
          password: "",
          password_confirmation: "",
        }}
        validationSchema={LoginValidationSchema}
        onSubmit={async (values) => {
          console.log(values);
          try {
            console.log(values);
            setFetching(true);
            if (location.pathname === "/auth/register/teacher") {
              await axios
                .post("https://studia.deta.dev/users/register", {
                  ...values,
                  isTeacher: true,
                  isStudent: false,
                })
                .then((res) => {
                  console.log(res);
                  navigate("/auth/login");
                  setFetching(false);
                });
            }

            if (location.pathname === "/auth/register/student") {
              await axios
                .post("https://studia.deta.dev/users/register", {
                  ...values,
                  isTeacher: false,
                  isStudent: true,
                })
                .then((res) => {
                  console.log(res);
                  navigate("/auth/login");
                  setFetching(false);
                });
            }
          } catch (err) {
            console.log(err);
            notifyError();
            setFetching(false);
          }
        }}
      >
        {({ errors, touched }) => (
          <div className=" md:w-8/12 w-full">
            <div className="logo flex flex-col items-center justify-center ">
              <img src={NewLogo} className="" alt="" />
            </div>

            <div className="register-form  p-10">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-gray-700 text-2xl font-bold">{label}</h2>
                <a
                  href="/auth/login"
                  className="text-blue-600 text-base font-normal"
                >
                  Sign In
                </a>
              </div>

              {/* Field */}
              <div className="Field ">
                <Form action="" className="flex flex-col gap-4">
                  <Field
                    type="name"
                    name="name"
                    id="name"
                    className="border py-2 px-3 rounded-md "
                    placeholder="Full Name"
                    // value={values.name}
                    // onChange={values.handleChange}
                  />
                  {errors.name ? (
                    <div className="text-red-500">{errors.name}</div>
                  ) : null}
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    className="border py-2 px-3 rounded-md "
                    placeholder="Email"
                    // value={values.email}
                    // onChange={values.handleChange}
                  />
                  {errors.email ? (
                    <div className="text-red-500">{errors.email}</div>
                  ) : null}
                  <Field
                    type="text"
                    name="address"
                    id="address"
                    className="border py-2 px-3 rounded-md "
                    placeholder="Address"
                    // value={values.address}
                    // onChange={values.handleChange}
                  />
                  {errors.address ? (
                    <div className="text-red-500">{errors.address}</div>
                  ) : null}
                  <Field
                    type="text"
                    name="username"
                    id="username"
                    className="border py-2 px-3 rounded-md "
                    placeholder="Username"
                    // value={values.username}
                    // onChange={values.handleChange}
                  />
                  {errors.username ? (
                    <div className="text-red-500">{errors.username}</div>
                  ) : null}
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    className="border py-2 px-3 rounded-md"
                    placeholder="Password"
                    // value={values.password}
                    // onChange={values.handleChange}
                  />
                  {errors.password ? (
                    <div className="text-red-500">{errors.password}</div>
                  ) : null}
                  <Field
                    type="password"
                    name="password_confirmation"
                    id="password_confirmation"
                    className="border py-2 px-3 rounded-md"
                    placeholder="Password Confirmation"
                  />
                  {errors.password_confirmation ? (
                    <div className="text-red-500">
                      {errors.password_confirmation}
                    </div>
                  ) : null}
                  {/* radio button */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="gender"
                      className="text-gray-700 text-sm font-medium"
                    >
                      Gender
                    </label>
                    <div className="flex gap-2">
                      <div className="flex items-center gap-2">
                        <Field
                          type="radio"
                          name="gender"
                          id="gender"
                          value="true"
                          
                        />
                        <label
                          htmlFor="gender"
                          className="text-gray-700 text-sm font-medium"
                        >
                          Male
                        </label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Field
                          type="radio"
                          name="gender"
                          id="gender2"
                          value="false"
                        />
                        <label
                          htmlFor="gender2"
                          className="text-gray-700 text-sm font-medium"
                        >
                          Female
                        </label>
                      </div>
                      {errors.gender ? (
                        <div className="text-red-500">{errors.gender}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    {fetching ? (
                      <ButtonSpin />
                    ) : (
                      <button
                        type="submit"
                        className="bg-[#77BBE2] py-3 rounded-md mt-5 font-md text-white"
                      >
                        Daftar
                      </button>
                    )}
                  </div>
                </Form>
              </div>
            </div>
          </div>
        )}
      </Formik>

      {/* footer */}
      <div className="footer mt-5 ">
        <Footer />
      </div>
      <ToastContainer />
    </div>
  );
};

export default RegisterForm;
