import React from "react";
import { NavLink } from "react-router-dom";


      export default function NewReminder() {
  return (
    <>
      <div class="flex items-center justify-center min-h-screen p-12">
        <div class="mx-auto w-full max-w-[550px]">
          <form
            action="https://formbold.com/s/FORM_ID"
            method="POST"
            className="rounded-md shadow-md p-5 text-subheading-gray"
          >
            <h1 class="mb-5 text-center text-2xl font-bold text-gray">
              New Reminder
            </h1>
            <div class="mb-5">
              <label for="title" class="mb-3 block">
                Title
              </label>
              <input
                type="text"
                placeholder="Event title"
                class="text-sm w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 outline-none focus:border-primary-indigo focus:shadow-md"
              />
            </div>
            <div class="mb-5">
              <label for="description" class="mb-3 block">
                Description
              </label>
              <textarea
                placeholder="Event description"
                class="text-sm w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 outline-none focus:border-primary-indigo focus:shadow-md"
              ></textarea>
            </div>
            <div class="-mx-3 flex flex-wrap">
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label for="date" class="mb-3 block">
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    class="w-full text-sm rounded-md border border-[#e0e0e0] bg-white py-3 px-6 outline-none focus:border-primary-indigo focus:shadow-md"
                  />
                </div>
              </div>
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label for="time" class="mb-3 block">
                    Time
                  </label>
                  <input
                    type="time"
                    name="time"
                    id="time"
                    class="w-full text-sm rounded-md border border-[#e0e0e0] bg-white py-3 px-6 outline-none focus:border-primary-indigo focus:shadow-md"
                  />
                </div>
              </div>
            </div>
            <div>
              <button class="hover:shadow-form w-[100%] rounded-md bg-primary-indigo py-3 px-8 text-center font-semibold text-white outline-none">
                Add reminder
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
