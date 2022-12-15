import React from "react";
import IconBell from "../assets/images/svg/IconBell";

const Profile = () => {
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
          <IconBell/>
        </div>

        {/* profile avatar*/}
        <div className="w-10 cursor-pointer" onClick={open}>
          <img
            src="https://placeimg.com/192/192/people"
            alt="profile avatar"
            className="rounded-full"
          />
        </div>
      </div>

      {/* dropdown */}
      <div
        id="userDropdown"
        className={`${isOpen ? '' : 'hidden'} absolute right-9 mt-14 z-10 w-44  rounded divide-y divide-gray-600 shadow bg-gray-700 `}
      >
        <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
          <div>Bonnie Green</div>
          <div className="font-medium truncate">name@flowbite.com</div>
        </div>
        <ul
          className="py-1 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="avatarButton"
        >
          <li>
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Settings
            </a>
          </li>
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
