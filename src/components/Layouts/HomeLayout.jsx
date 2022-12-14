import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import RightSide from "../RightSide";
import Sidenav from "../Sidenav";
import Welcome from "../Welcome";

const HomeLayout = () => {
  const [user, setUser] = useState({});

  const location = useLocation();

  const title = () => {
    if (location.pathname === "/auth/login") {
      return "Login";
    } else if (location.pathname === "/h/dashboard") {
      return "Dashboard";
    } else if (location.pathname === "/h/classes") {
      return "Classes";
    } else if (location.pathname === "/h/hw") {
      return "Homework";
    } else if (location.pathname === "/h/articles") {
      return "Articles";
    } else {
      return "Studia";
    }
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/h/dashboard");
    }

    // if not login
    // navigate to login page
    if (!localStorage.getItem("token")) {
      navigate("/auth/login");
    }
  });

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      const res = await axios.get("https://studia.deta.dev/users/current", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = res.data;
      setUser(data);
      // const data = await res.json();
      // console.log(data);
    };
    fetchUser();
  }, []);

  console.log(user);
  return (
    <>
      <Helmet>
        <title>Studia - {title()}</title>
      </Helmet>
      <div className="flex">
        <Sidenav />
        <div className="flex">
          <div className="py-10 pl-10 pr-10 bg-soft-gray w-8/12">
            <Welcome name={user.name} />
            <Outlet />
          </div>
          <RightSide />
        </div>
      </div>
    </>
  );
};

export default HomeLayout;
