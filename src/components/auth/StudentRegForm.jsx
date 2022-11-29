import React from 'react'
import Logo from "../../assets/images/logo.png";
import Footer from "../../components/Footer";

const StudentRegForm = () => {
  return (
<div className=" flex justify-center items-center flex-col gap-2 md:w-9/12 w-full ">
        <div className=" md:w-8/12 w-full">
          <div className="logo flex flex-col items-center justify-center ">
            <img src={Logo} className="" alt="" />
          </div>

          <div className="register-form  p-10">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-gray-700 text-2xl font-bold">Murid</h2>
              <a
                href="/auth/login"
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
                  type="name"
                  name="name"
                  id="name"
                  className="border py-2 px-3 rounded-md "
                  placeholder="Nama"
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
                  type="password"
                  name="passwordverif"
                  id="passwordverif"
                  className="border py-2 px-3 rounded-md"
                  placeholder="Konfirmasi Kata Sandi"
                  required
                />
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
  )
}

export default StudentRegForm