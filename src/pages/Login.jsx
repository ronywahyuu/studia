import React from "react";
import Logo from "../assets/images/logo.png";
import FbIcon from "../assets/images/fb-icon.png";
import GoogleIcon from "../assets/images/google-icon.png";
import Footer from "../components/Footer";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import AuthLayout from "../components/Layouts/AuthLayout";
import { redirect, useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate()

  const users = [
    {
      email: "studia@mail.com",
      password : "12345678"
    },
    {
      email: "rony@mail.com",
      password : "12345678"
    },
  ]


  // login schema
  const LoginValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Format email salah")
      .required("Email tidak boleh kosong"),
    password: Yup.string()
      .min(8, "Kata sandi minimal 8 karakter")
      .required("Kata sandi tidak boleh kosong"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginValidationSchema,
    onSubmit: async (values) => {
      console.log(values);
      
      const user = users.find((user) => user.email === values.email)
      if(user){
        // check if password match
        if(user.password === values.password){
          // redirect to dashboard
          navigate('/dashboard')
        }else{
          // show error
          alert('Kata sandi salah')
        }
      }
      
  

      // try {
      //   const response = await axios.post(
      //     "http://localhost:4000/user/login",
      //     values
      //   );
      //   console.log(response);
      // } catch (err) {
      //   console.log(err);
      // }
    },
  });

  return (
    <AuthLayout>
      <div className=" flex justify-center items-center flex-col gap-2 md:w-9/12 w-full ">
        {/* Login form */}
        <div className=" md:w-8/12 w-full">
          <div className="logo flex flex-col items-center justify-center ">
            <img src={Logo} className="" alt="" />
          </div>

          <div className="login-form  p-10">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-gray-700 text-2xl font-bold">Masuk</h2>
              <a
                href="/register"
                className="text-blue-600 text-base font-normal"
              >
                Daftar
              </a>
            </div>

            {/* input */}
            <div className="input ">
              <form
                onSubmit={formik.handleSubmit}
                action=""
                className="flex flex-col gap-4"
              >
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="border py-2 px-3 rounded-md "
                  placeholder="Nomor Ponsel atau Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  required
                />
                {formik.errors.email && formik.touched.email && (
                  <div className="text-red-500 text-sm">
                    {formik.errors.email}
                  </div>
                )}
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="border py-2 px-3 rounded-md"
                  placeholder="Kata Sandi"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  required
                />
                {formik.errors.password && formik.touched.password && (
                  <div className="text-red-500 text-sm">
                    {formik.errors.password}
                  </div>
                )}
                <div className="flex flex-col">
                  <button
                    type="submit"
                    className="bg-[#77BBE2] py-3 rounded-md mt-5 font-md text-white"
                  >
                    Masuk
                  </button>
                </div>
              </form>
            </div>

            {/* forgot password */}
            <div className="forgot-password mt-5">
              <p className="">
                Lupa kata sandi?{" "}
                <a href="/forgot-password" className="text-sky-500 font-bold">
                  Klik Disini
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* divider */}
        <div className=" md:w-8/12 w-full flex justify-center items-center">
          <div className="border md:w-full w-1/2"></div>
          <div className="w-full text-gray-300 text-xs md:text-base font-bold flex justify-center">
            atau masuk dengan
          </div>
          <div className="border md:w-full w-1/2"></div>
        </div>

        {/* social media */}
        <div className="social-media w-8/12 flex flex-col gap-4 mt-5 ">
          <button className=" py-3 rounded-md font-md border text-white ">
            {/* logo */}
            <div className="flex items-center justify-center gap-2 text-slate-600 font-medium">
              <img src={FbIcon} alt="" />
              <span>Masuk dengan Facebook</span>
            </div>
          </button>

          <button className=" py-3 rounded-md font-md border text-white">
            {/* logo */}
            <div className="flex items-center justify-center gap-2 text-slate-600 font-medium">
              <img src={GoogleIcon} alt="" />
              <span>Masuk dengan Google</span>
            </div>
          </button>
        </div>
        {/* footer */}
        <div className="footer mt-5 ">
          <Footer />
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
