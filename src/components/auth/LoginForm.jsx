import React, { useContext, useState } from "react";
import Logo from "../../assets/images/logo.png";
import NewLogo from "../../assets/images/new-logo.png";
import FbIcon from "../../assets/images/fb-icon.png";
import GoogleIcon from "../../assets/images/google-icon.png";
import Footer from "../../components/Footer";
import { useFormik } from "formik";
// import axios from "axios";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ButtonSpin from "../loading/ButtonSpin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../context/authContext";

const LoginForm = ({name}) => {
  console.log(name)

  const {setIsAuthenticated, login, fetching, notifyError} = useContext(AuthContext)

  // const [fetching, setFetching] = useState(false);
  const navigate = useNavigate();

  // const notifyError = () => toast.error("Username atau password salah");

  // context
  // const { login } = useContext(AuthContext);
  // login schema
  const LoginValidationSchema = Yup.object().shape({
    username: Yup.string().required("username tidak boleh kosong"),
    password: Yup.string().required("Kata sandi tidak boleh kosong"),
  });

  console.log(`isfetching: ${fetching}`)

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: LoginValidationSchema,
    onSubmit: async (values) => {
      login(values)

      // navigate("/h/dashboard");
      // console.log(values);
      // setFetching(true);
      // setFetching(true);
      // try {
      //   await axios
      //     .post("/users/login", values)
      //     .then((res) => {
      //       const token = res.data.access_token;
      //       localStorage.setItem("token", token);
      //       // navigate to 
      //       navigate("/h/dashboard");
      //       // window.location.reload();
      //       setIsAuthenticated(true)
      //       setFetching(false);
      //     });
      // } catch (err) {
      //   console.log(err);
      //   notifyError();
      //   setFetching(false);
      // }
    },
  });

  return (
    <>
      <div className=" flex justify-center items-center flex-col gap-2 md:w-9/12 w-full ">
        {/* Login form */}
        <div className=" md:w-8/12 w-full">
          <div className="logo flex flex-col items-center justify-center ">
            <img src={NewLogo} className="" alt="" />
          </div>

          <div className="login-form  p-10">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-gray-700 text-2xl font-bold">Sign In</h2>
              <a
                href="/auth/register"
                className="text-blue-600 text-base font-normal"
              >
                Register
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
                  type="username"
                  name="username"
                  id="username"
                  className="border py-2 px-3 rounded-md "
                  placeholder="Username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  required
                />
                {formik.errors.username && formik.touched.username && (
                  <div className="text-red-500 text-sm">
                    {formik.errors.username}
                  </div>
                )}
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="border py-2 px-3 rounded-md"
                  placeholder="Password"
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
                  {fetching ? (
                    <ButtonSpin />
                  ) : (
                    <button
                      type="submit"
                      className="bg-[#77BBE2] py-3 rounded-md mt-5 font-md text-white"
                    >
                      Sign In
                    </button>
                  )}
                </div>
              </form>
            </div>

            {/* forgot password */}
            {/* <div className="forgot-password mt-5">
              <p className="">
                Lupa kata sandi?{" "}
                <a href="/forgot-password" className="text-sky-500 font-bold">
                  Klik Disini
                </a>
              </p>
            </div> */}
          </div>
        </div>

        {/* <div className=" md:w-8/12 w-full flex justify-center items-center">
          <div className="border md:w-full w-1/2"></div>
          <div className="w-full text-gray-300 text-xs md:text-base font-bold flex justify-center">
            atau masuk dengan
          </div>
          <div className="border md:w-full w-1/2"></div>
        </div>

        <div className="social-media w-8/12 flex flex-col gap-4 mt-5 ">
          <button className=" py-3 rounded-md font-md border text-white ">
            <div className="flex items-center justify-center gap-2 text-slate-600 font-medium">
              <img src={FbIcon} alt="" />
              <span>Masuk dengan Facebook</span>
            </div>
          </button>

          <button className=" py-3 rounded-md font-md border text-white">
            <div className="flex items-center justify-center gap-2 text-slate-600 font-medium">
              <img src={GoogleIcon} alt="" />
              <span>Masuk dengan Google</span>
            </div>
          </button>
        </div> */}
        {/* footer */}
        <div className="footer mt-5 ">
          <Footer />
        </div>
      </div>
      <ToastContainer position="bottom-right" theme="light"/>
    </>
  );
};

export default LoginForm;
