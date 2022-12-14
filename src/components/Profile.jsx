import React from "react";

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
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6.43994V9.76994"
              stroke="#ADA7A7"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M12.0199 2C8.3399 2 5.3599 4.98 5.3599 8.66V10.76C5.3599 11.44 5.0799 12.46 4.7299 13.04L3.4599 15.16C2.6799 16.47 3.2199 17.93 4.6599 18.41C9.4399 20 14.6099 20 19.3899 18.41C20.7399 17.96 21.3199 16.38 20.5899 15.16L19.3199 13.04C18.9699 12.46 18.6899 11.43 18.6899 10.76V8.66C18.6799 5 15.6799 2 12.0199 2Z"
              stroke="#ADA7A7"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M15.3299 18.8199C15.3299 20.6499 13.8299 22.1499 11.9999 22.1499C11.0899 22.1499 10.2499 21.7699 9.64992 21.1699C9.04992 20.5699 8.66992 19.7299 8.66992 18.8199"
              stroke="#ADA7A7"
              strokeWidth="1.5"
              strokeMiterlimit="10"
            />
          </svg>
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
