import React from 'react'
import AuthLayout from '../components/Layouts/AuthLayout';
import Logo from "../assets/images/logo.png";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";
import { useFormik } from 'formik';

const Register = () => {
  // register formik
  // const formik = useFormik({
  //   initialValues: {
  //     email: '',
  //     password: '',
      
  // })

  return (
    <AuthLayout>
    <div className=" flex justify-center items-center flex-col gap-2 md:w-9/12 w-full ">
            <div className=" md:w-8/12 w-full">
              <div className="logo flex flex-col items-center justify-center ">
                <img src={Logo} className="" alt="" />
              </div>
    
              <div className="register-form p-10">
                <div className="flex justify-between items-center mb-3">
                  <h2 className="text-gray-700 text-2xl font-bold ">Daftar</h2>
                  <a
                    href="/login"
                    className="text-blue-600 text-base font-normal justify-center"
                  >
                    Masuk
                  </a>
                </div>
    
                <ul className="flex flex-col gap-7  my-5">
          <li className="">
            <Link
              to="/register/tch"
              className={
                `flex items-center py-2 px-4 rounded-lg bg-gray-300 hover:bg-primary  hover:text-white`
              }
            >
              <span className="ml-auto mr-auto">GURU</span>
            </Link>
          </li>

          <li className="">
            <Link
              to="/register/std"
              className={
                `flex items-center py-2 px-4 rounded-lg bg-gray-300 hover:bg-primary  hover:text-white`
              }
            >
              <span className="ml-auto mr-auto">MURID</span>
            </Link>
          </li>
          </ul>
              </div>
            </div>
    
            {/* footer */}
            <div className="footer mt-5 ">
              <Footer />
            </div>
      </div>
    </AuthLayout>
  )
}

export default Register