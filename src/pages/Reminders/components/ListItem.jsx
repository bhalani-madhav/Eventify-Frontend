import React from "react";
import { SquarePen } from "lucide-react";
import { Trash } from "lucide-react";
import { CalendarDays } from "lucide-react";
import { Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function ListItem() {
  return (
    <>
      <div className="flex flex-row px-3 py-6 rounded-lg shadow-md justify-between">
        <div className="flex flex-col flex-wrap gap-2.5 flex-grow ">
          <div>
            <span className="font-bold text-lg">Team Meeting</span>
          </div>
          <div>
            <p className="m-0 text-subheading-gray text-xs italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quod
              nobis iste voluptatum, ut quibusdam qui, ab in aspernatur neque
              animi nam accusantium. Quaerat nihil, ipsa, sint neque beatae
              asperiores tenetur cupiditate delectus saepe aliquid iste quas
              dolorum quam voluptates consectetur et cum ut! Eveniet, fugit
              obcaecati? Adipisci in, accusantium nostrum odit autem labore
              perferendis quia.
            </p>
          </div>
          <div className="text-primary-indigo flex flex-row gap-2 items-center">
            <div className="flex flex-row items-center gap-1.5">
              <CalendarDays size={16} strokeWidth={3} />
              <span className="italic text-sm">20-04-2025</span>
            </div>
            <div className="flex flex-row items-center gap-1.5">
              <Clock size={16} strokeWidth={3} />
              <span className="italic text-sm">10:00 AM</span>
            </div>
          </div>
          <div className="text-subheading-gray flex flex-row gap-2 items-center text-xs">
            <div className="flex flex-row items-center gap-1.5">
              <span className="italic">Created at: 18-04-2025</span>
            </div>
            <div className="flex flex-row items-center gap-1.5">
              <span className="italic">Last updated: 20minutes ago</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center">
          <Link to="/dashboard/edit-reminder" className="flex flex-row gap-1.5 items-center hover:border-primary-indigo max-w-[100px] text-sm hover:bg-primary-indigo hover:text-white  border-1 duration-150  text-primary-indigo bg-[#E0E7FF] border-[#E0E7FF] rounded-lg  px-2.5">
            <span>
              <SquarePen size={14} />
            </span>
            <span>Edit</span>
          </Link>
          <button className="flex flex-row gap-1.5 items-center hover:border-red-600 max-w-[100px] text-sm hover:bg-red-600 hover:text-red-100  border-1 duration-150  text-red-600 bg-red-100 border-red-100 rounded-lg px-2.5">
            <span>
              <Trash size={14} />
            </span>
            <span>Delete</span>
          </button>
        </div>
      </div>
    </>
  );
}
