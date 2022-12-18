import React, { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";


// import logo and assets
import Logo from "../assets/images/logo.png";
import NewLogo from "../assets/images/new-logo.png";
import IconArticles from "../assets/images/svg/IconArticles";
import IconClasses from "../assets/images/svg/IconClasses";
import IconDashboard from "../assets/images/svg/IconDashboard";
import IconHomework from "../assets/images/svg/IconHomework";
import { AuthContext } from "../context/authContext";

const Sidenav = () => {

  const {logout} = useContext(AuthContext)

  // is nav active, console log to see the result
  const location = useLocation();
  // const navigate = useNavigate();

  // if nav active, change svg color to white
  const setActiveColor = (path) => {
    if (location.pathname === path) {
      return "fill-white";
    } else {
      return "fill-gray-300";
    }
  };

  // logout
  // const logout = () => {
  //   localStorage.removeItem("token");
  //   navigate("/auth/login");
  // };

  return (
    <aside className=" h-screen  sticky top-0 bottom-0 bg-soft-gray">
      {/* sidenav wrapper */}
      <div className=" py-5 px-10 relative ">
        {/* logo */}
        <div className="flex justify-center items-center">
          <img src={NewLogo} alt="" className="w-28" />
        </div>

        <ul className="flex flex-col gap-7  my-5">
          <li className="">
            <NavLink
              to="/h/dashboard"
              className={({ isActive }) =>
                `flex items-center py-2 px-4 rounded-lg hover:bg-primary  hover:text-white ${
                  isActive ? "bg-primary text-white" : "text-gray-300"
                }`
              }
            >
              <IconDashboard setActiveColor={setActiveColor} />
              <span className="ml-4">Dashboard</span>
            </NavLink>
          </li>

          <li className="">
            <NavLink
              to="/h/classes"
              className={({ isActive }) =>
                `flex items-center py-2 px-4 rounded-lg hover:bg-primary  hover:text-white ${
                  isActive ? "bg-primary text-white" : "text-gray-300"
                }`
              }
            >
              <IconClasses setActiveColor={setActiveColor} />
              <span className="ml-4">Classes</span>
            </NavLink>
          </li>

          <li className="">
            <NavLink
              to="/h/hw"
              className={({ isActive }) =>
                `flex items-center py-2 px-4 rounded-lg hover:bg-primary  hover:text-white ${
                  isActive ? "bg-primary text-white" : "text-gray-300"
                }`
              }
            >
              <IconHomework setActiveColor={setActiveColor} />
              <span className="ml-4">Homework</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/h/articles"
              className={({ isActive }) =>
                `flex items-center py-2 px-4 rounded-lg hover:bg-primary  hover:text-white ${
                  isActive ? "bg-primary text-white" : "text-gray-300"
                }`
              }
            >
              <IconArticles/>
              <span className="ml-4">Artikel</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/h/settings"
              className={({ isActive }) =>
                `flex items-center py-2 px-4 rounded-lg hover:bg-primary  hover:text-white ${
                  isActive ? "bg-primary text-white" : "text-gray-300"
                }`
              }
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${setActiveColor("/h/settings")}`}
              >
                <path d="M16.7501 7.68336C15.2417 7.68336 14.6251 6.6167 15.3751 5.30836C15.8084 4.55003 15.5501 3.58336 14.7917 3.15003L13.3501 2.32503C12.6917 1.93336 11.8417 2.1667 11.4501 2.82503L11.3584 2.98336C10.6084 4.2917 9.37508 4.2917 8.61675 2.98336L8.52508 2.82503C8.15008 2.1667 7.30008 1.93336 6.64175 2.32503L5.20008 3.15003C4.44175 3.58336 4.18341 4.55836 4.61675 5.3167C5.37508 6.6167 4.75841 7.68336 3.25008 7.68336C2.38341 7.68336 1.66675 8.3917 1.66675 9.2667V10.7334C1.66675 11.6 2.37508 12.3167 3.25008 12.3167C4.75841 12.3167 5.37508 13.3834 4.61675 14.6917C4.18341 15.45 4.44175 16.4167 5.20008 16.85L6.64175 17.675C7.30008 18.0667 8.15008 17.8334 8.54175 17.175L8.63341 17.0167C9.38341 15.7084 10.6167 15.7084 11.3751 17.0167L11.4667 17.175C11.8584 17.8334 12.7084 18.0667 13.3667 17.675L14.8084 16.85C15.5667 16.4167 15.8251 15.4417 15.3917 14.6917C14.6334 13.3834 15.2501 12.3167 16.7584 12.3167C17.6251 12.3167 18.3417 11.6084 18.3417 10.7334V9.2667C18.3334 8.40003 17.6251 7.68336 16.7501 7.68336ZM10.0001 12.7084C8.50842 12.7084 7.29175 11.4917 7.29175 10C7.29175 8.50836 8.50842 7.2917 10.0001 7.2917C11.4917 7.2917 12.7084 8.50836 12.7084 10C12.7084 11.4917 11.4917 12.7084 10.0001 12.7084Z" />
              </svg>
              <span className="ml-4">Settings</span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* logout */}
      <div
        onClick={logout}
        className="absolute bottom-0  flex justify-center w-full"
      >
        <NavLink
          to="/auth/login"
          className="flex py-2 px-4 text-gray-400 rounded-lg"
        >
          <button className="flex items-center  hover:bg-primary hover:text-white">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill=""
              className="fill-gray-400"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.8 2H14.2C11 2 9 4 9 7.2V11.25H15.25C15.66 11.25 16 11.59 16 12C16 12.41 15.66 12.75 15.25 12.75H9V16.8C9 20 11 22 14.2 22H16.79C19.99 22 21.99 20 21.99 16.8V7.2C22 4 20 2 16.8 2Z"
                fill=""
              />
              <path d="M4.55994 11.25L6.62994 9.18C6.77994 9.03 6.84994 8.84 6.84994 8.65C6.84994 8.46 6.77994 8.26 6.62994 8.12C6.33994 7.83 5.85994 7.83 5.56994 8.12L2.21994 11.47C1.92994 11.76 1.92994 12.24 2.21994 12.53L5.56994 15.88C5.85994 16.17 6.33994 16.17 6.62994 15.88C6.91994 15.59 6.91994 15.11 6.62994 14.82L4.55994 12.75H8.99994V11.25H4.55994Z" />
            </svg>
          </button>
          <span className="ml-4">Logout</span>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidenav;
