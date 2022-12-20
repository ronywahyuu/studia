import ClassContentImg from "../assets/images/featured-img.png";
import IconChat from "../assets/images/svg/IconChat";
import IconStickyNotes from "../assets/images/svg/IconStickyNotes";
const ClassContentField = () => {
  return (
    <div className="flex flex-col rounded-lg justify-between border-t-8 border-blue-900 bg-white p-5 ">
      <div className="flex flex-col justify-between gap-5">
        <h3 className="text-2xl font-medium">Interaction</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius.</p>
      </div>

      <hr className="" />
      {/* picture */}
      <div className="flex flex-col gap-5 mt-5">
        <div className="w-full h-96 bg-slate-300 relative overflow-hidden rounded-3xl">
          <img
            src={ClassContentImg}
            className="object-cover w-screen h-full"
            alt=""
          />
        </div>
      </div>

      {/* posted by */}
      <div className="flex justify-between my-8">
        <div className="flex items-center gap-3">
          <img
            src="https://picsum.photos/200"
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col">
            <h3 className="text-lg font-medium text-gray-400">Wadew Ma</h3>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <IconStickyNotes />
          <h3 className="text-lg font-medium text-gray-400">B Classes</h3>
        </div>
      </div>

      <div>
        <p className="text-base text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
      </div>

      {/* feedback button */}
      <button className="border mt-10 bg-sky-800 p-2 rounded-lg hover:bg-sky-900 transition-all duration-300 w-3/12">
        <div className="flex items-center   gap-5">
          <div>
            <IconChat color="white" />
          </div>
          <p className="text-white">Give A Feedback</p>
        </div>
      </button>
    </div>
  );
};

export default ClassContentField;
