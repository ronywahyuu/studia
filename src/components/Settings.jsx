import React, { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ButtonSpin from "../components/loading/ButtonSpin";

const Settings = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.name);
  const [address, setAddress] = useState(user?.address || "");
  const [gender, setGender] = useState(user?.gender || "");
  const [loading, setLoading] = useState(false);
  // console.log(user?.id)
  const navigate = useNavigate();

  const handleUpdate = async () => {
    setLoading(true);
    try {
      const res = await axios.put(
        `/users/update/${user?.id}`,
        {
          name,
          address,
          gender,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log(res);
      // navigate("/h/dashboard")
      setLoading(false);
      window.location.href = "/h/dashboard";
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <div className="flex  flex-col  mt-10 mb-5">
      <h1 className="text-xl text-slate-500 font-medium">Settings Profile</h1>

      <div className="flex flex-col rounded-lg justify-between border-t-8 border-[#77BBE2] bg-white p-5">
        {/* image profile */}
        {/* <div className="flex items-center space-x-6 pb-5">
          <div className="shrink-0">
            <img
              className="h-16 w-16 object-cover rounded-full"
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
              alt="Current profile photo"
            />
          </div>
          <div className="flex flex-col ">
            <label className="block">
              <span className="sr-only">Choose profile photo</span>
              <input
                type="file"
                className="block w-full text-sm text-slate-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-violet-50 file:text-violet-700
                  hover:file:bg-violet-100
                "
              />
            </label>
          </div>
        </div> */}
        <div>
          <h1 className="text-xl text-slate-500 font-medium mb-5">Update your profile</h1>
        </div>
        <div className="flex flex-col justify-between gap-5 w-11/12">
          <input
            type="text"
            name="name"
            id="name"
            className="border py-2 px-3 rounded-md "
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            name="address"
            id="address"
            className="border py-2 px-3 rounded-md "
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="text"
            name="gender"
            id="gender"
            className="border py-2 px-3 rounded-md "
            placeholder="Gender"
            value={gender === true ? "Male" : "Female"}
            onChange={(e) => setGender(e.target.value)}
          />

          {loading && <ButtonSpin />}
          {!loading && (
            <button
              type="button"
              className="flex justify-center items-center px-4 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-[#77BBE2] "
              // className="px-5 py-2 w-36 ml-auto text-white rounded-3xl mt-10 bg-[#77BBE2]"
              onClick={handleUpdate}
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
