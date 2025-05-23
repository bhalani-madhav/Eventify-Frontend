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
        toast.success("Logged out successfully..", {
          hideProgressBar: false,
          autoClose: 2000,
        });
        setIsLoggedIn(false);
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
          </div>
        </div>
        <div
          id="lower"
          className="border-t-[1px] border-[#eaf2ff10] text-lg flex flex-col mb-2 px-[26px]"
        >
          <button
            onClick={handleLogout}
            className="flex flex-row items-center text-lg gap-[18px] px-4 py-3.5 rounded-[7px] cursor-pointer text-gray hover:bg-[#E0E7FF] hover:text-primary-indigo duration-150 flex-grow"
          >
            <LogOut />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </>
  );
}
