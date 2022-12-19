import React from 'react'
import Logo from "../../assets/images/logo.png";
import NewLogo from "../../assets/images/new-logo.png";
import Footer from "../../components/Footer";
import {Link} from "react-router-dom";

const UserChoice = () => {
  return (
    <div className=" flex justify-center items-center flex-col gap-2 md:w-9/12 w-full ">
            <div className=" md:w-8/12 w-full">
              <div className="logo flex flex-col items-center justify-center ">
                <img src={NewLogo} className="" alt="" />
              </div>
    
              <div className="register-form p-10">
                <div className="flex justify-between items-center mb-3">
                  <h2 className="text-gray-700 text-2xl font-bold ">Register</h2>
                  <a
                    href="/auth/login"
                    className="text-blue-600 text-base font-normal justify-center"
                  >
                    Sign In
                  </a>
                </div>
    
                <ul className="flex flex-col gap-7  my-5">
          <li className="">
            <Link
              to="/auth/register/teacher"
              className={
                `flex items-center py-2 px-4 rounded-lg bg-gray-300 hover:bg-primary  hover:text-white`
              }
            >
              <span className="ml-auto mr-auto">Teacher</span>
            </Link>
          </li>

          <li className="">
            <Link
              to="/auth/register/student"
              className={
                `flex items-center py-2 px-4 rounded-lg bg-gray-300 hover:bg-primary  hover:text-white`
              }
            >
              <span className="ml-auto mr-auto">Student</span>
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
  )
}

export default UserChoice