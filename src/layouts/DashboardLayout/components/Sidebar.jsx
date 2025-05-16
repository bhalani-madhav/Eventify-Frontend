import React, { useContext } from "react";
import UserContext from "../../../context/User/UserContext";
import { Bell, BellPlus, User, LogOut } from "lucide-react";
import NavButton from "./NavButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export default function Sidebar() {
  const { username, setIsLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/logout",
        {},
        {
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        toast.success("Logging out..", {
          hideProgressBar: false,
          autoClose: 2000,
        });
        setIsLoggedIn(false);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (err) {
      console.log("ERROR WHILE SIGNING IN", err);
      toast.error("Something went wrong!", {
        hideProgressBar: false,
        autoClose: 2000,
      });
    }
  };
  return (
    <>
      <div
        id="sidebar"
        className="bg-primary-navy text-gray h-dvh min-w-[300px]  flex flex-col justify-between pt-[38px] shadow-md"
      >
        <div id="upper" className=" gap-9 flex flex-col  px-[26px]">
          <div id="sidebar-header" className="flex flex-col gap-6 pl-2.5">
            <img src="/logo.svg" alt="" className="max-w-[154px]" />
            <p className="text-[16px]">
              Welcome,{" "}
              <span className="text-[18px] font-bold text-primary-indigo">
                {username}
              </span>
            </p>
          </div>
          <div id="navlinks" className=" flex flex-col gap-5">
            <NavButton title="Reminders" link="/dashboard">
              <Bell />
            </NavButton>
            <NavButton title="New Reminder" link="/dashboard/new-reminder">
              <BellPlus />
            </NavButton>
            <NavButton title="Your Profile" link="/">
              <User />
            </NavButton>
          </div>
        </div>
        <div id="lower" className="border-t-[1px] border-[#eaf2ff10] text-lg">
          <button
            onClick={handleLogout}
            className="flex flex-row items-center gap-[15px] pt-5 pb-[23px] px-9 hover:text-primary-indigo duration-150"
          >
            <LogOut />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </>
  );
}
