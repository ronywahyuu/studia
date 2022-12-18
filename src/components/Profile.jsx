import React, { useContext } from "react";
import IconBell from "../assets/images/svg/IconBell";
import { AuthContext } from "../context/authContext";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const name = user?.name;
  const email = user?.email;
  // dropdown
  const [isOpen, setIsOpen] = React.useState(false);
  const open = () => {
    setIsOpen(!isOpen);
    // close dropdown when clicked outside
  };
  return (
    <>
      <div className="flex items-center justify-end space-x-5 ">
        {/* notification */}
        <div className="w-10 rounded-lg p-3 flex justify-center bg-soft-gray">
          <IconBell />
        </div>

        {/* profile avatar*/}
        <div className="w-10 cursor-pointer" onClick={open}>
          <img
            // src="https://placeimg.com/192/192/people"
            src={user?.image.url}
            alt="profile avatar"
            className="rounded-full"
          />
        </div>
      </div>

      {/* dropdown */}
      <div
        id="userDropdown"
        className={`${
          isOpen ? "" : "hidden"
        } absolute right-9 mt-14 z-10 w-44  rounded divide-y divide-gray-600 shadow bg-gray-700 `}
      >
        <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
          <div>{name}</div>
          <div className="font-medium truncate">{email}</div>
        </div>
        <ul
          className="py-1 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="avatarButton"
        >
          <Link
            to="/h/dashboard"
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Dashboard
          </Link>
          <Link
            to="/h/settings"
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Settings
          </Link>
        </ul>
        <div className="py-1">
          <a
            href="#"
            className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Sign out
          </a>
        </div>
      </div>
    </>
  );
};

export default Profile;
