import React from 'react'
import AuthLayout from '../components/Layouts/AuthLayout';
import Logo from "../assets/images/logo.png";
import Footer from "../components/Footer";

const RegisterStudent = () => {
  return (
    <AuthLayout>
<div className=" flex justify-center items-center flex-col gap-2 md:w-9/12 w-full ">
        {/* Login form */}
        <div className=" md:w-8/12 w-full">
          <div className="logo flex flex-col items-center justify-center ">
            <img src={Logo} className="" alt="" />
          </div>

          <div className="register-form  p-10">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-gray-700 text-2xl font-bold">Daftar</h2>
              <a
                href="/login"
                className="text-blue-600 text-base font-normal"
              >
                Masuk
              </a>
            </div>

            {/* input */}
            <div className="input ">
              <form
                action=""
                className="flex flex-col gap-4"
              >
                <input
                  type="username"
                  name="username"
                  id="username"
                  className="border py-2 px-3 rounded-md "
                  placeholder="Masukkan Username"
                  required
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="border py-2 px-3 rounded-md "
                  placeholder="Nomor Ponsel atau Email"
                  required
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="border py-2 px-3 rounded-md"
                  placeholder="Kata Sandi"
                  required
                />
                <input
                  type="name"
                  name="name"
                  id="name"
                  className="border py-2 px-3 rounded-md "
                  placeholder="Masukkan Nama Lengkap"
                  required
                />
            <div className="flex">
                <div className="flex items-center mr-4">
                    <input id="inline-radio" type="radio" value="1" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label for="inline-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Students</label>
                </div>
                <div className="flex items-center mr-4">
                    <input id="inline-2-radio" type="radio" value="1" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label for="inline-2-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Teacher</label>
                </div>
            </div>
                <div className="flex flex-col">
                  <button
                    type="submit"
                    className="bg-[#77BBE2] py-3 rounded-md mt-5 font-md text-white"
                  >
                    Daftar
                  </button>
                </div>
              </form>
            </div>
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

export default RegisterStudent