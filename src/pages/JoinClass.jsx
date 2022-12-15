import React from "react";

const JoinClass = () => {
  return (
    <div className="flex  justify-center items-center h-80">
      <div className="flex flex-col  w-full px-32">
        <h3 className="text-3xl mx-auto text-slate-500 font-medium mb-5 ">Kode Kelas</h3>
        <form action="" className="flex flex-col">
          <input
            type="username"
            name="username"
            id="username"
            className="border py-2 px-3 rounded-md w-full"
            placeholder="Nomor Ponsel atau username"
            required
          />{" "}
          <button
            type="submit"
            className="bg-[#77BBE2] py-3 rounded-md mt-5 font-md text-white"
          >
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinClass;
