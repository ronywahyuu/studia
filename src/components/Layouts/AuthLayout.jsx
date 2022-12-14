import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import DecorationImage from "../../assets/images/decoration.png";
import Illust1 from "../../assets/images/illust-1.png";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {

    const location = useLocation()

    const title = () =>{
        if(location.pathname === '/auth/login'){
            return 'Login'
        }else if(location.pathname === '/auth/register/teacher'){
            return 'Register Guru'
        }else if(location.pathname === '/auth/register/student'){
            return 'Register Murid'
        }
        else{
            return 'Studia'
        }
    }
  return (
    <>
    <Helmet>
        <title>Studia - {title()} </title>
    </Helmet>
      <div className="container h-screen flex justify-center mt-10 md:auto mx-auto animate-fade-in-down ">
        {/* Wrapper left children  */}
        <Outlet name="ronyyy"/>

        {/* wrapper right */}
        <div className="md:flex justify-center items-center flex-col  gap-2 w-6/12 border bg-gradient-to-r from-cyan-500 to-cyan-600 m-5 rounded-lg relative hidden">
          {/* decoration image */}
          <div className="decoration-image w-80 absolute left-0 bottom-0">
            <img src={DecorationImage} alt="" />
          </div>
          <div className=" w-10/12 h-5/6 bg-gray-400 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-50 absolute py-8 px-10">
            <div className="flex flex-col  h-full items-center justify-between">
              <h2 className="text-4xl text-white font-bold tracking-wide">
                We Don't Study. We Make Study Better.
              </h2>

              <img src={Illust1} alt="" className=" mb-10" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
