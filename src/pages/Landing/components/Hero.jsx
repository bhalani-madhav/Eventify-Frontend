import React from "react";
import FeatureItem from "./FeatureItem";
import { Check } from "lucide-react";

export default function Hero() {
  return (
    <>
      <section
        id="hero-section"
        className="flex flex-row px-[100px] justify-between py-[100px] flex-wrap gap-16 items-center"
      >
        <div id="hero-ad" className="flex flex-col gap-10 flex-grow">
          <div id="heading" className="flex flex-col flex-wrap">
            <span className="text-gray font-bold text-4xl flex-grow">
              Never Miss An
            </span>
            <span className="text-gray font-bold text-4xl flex-grow">
              Important Event Again
            </span>
            <span className="flex-grow italic text-lg text-subheading-gray pt-1.5">
              Eventify helps you manage event reminders effortlessly.
            </span>
          </div>
          <div id="features" className="flex-grow">
            <ul className="flex flex-col gap-5 text-subheading-gray">
              <FeatureItem feature="Simple dashboard interface." />
              <FeatureItem feature="Browser notifications." />
              <FeatureItem feature="Quick event creation." />
            </ul>
          </div>
          <div id="buttons" className="flex flex-col gap-4 flex-grow">
            <div className="flex flex-row text-lg items-center justify-between gap-5">
              <button className="bg-primary-indigo text-white rounded-lg border-1 border-primary-indigo px-12 py-3.5  hover:text-primary-indigo hover:bg-white duration-150 flex-wrap flex-grow">
                Register
              </button>
              <button className="bg-white text-primary-indigo rounded-lg border-1 border-primary-indigo px-12 py-3.5  hover:text-white hover:bg-primary-indigo duration-150 flex-wrap flex-grow">
                SignIn
              </button>
            </div>
            <div className="flex flex-row gap-2.5 text-subheading-gray items-center">
              <span className="bg-[#caede3] p-0.5 rounded-full"> 
              <Check size={12} color="#10B981" />
              </span>
              <span className="text-xs">
                Secure login & data protection.
              </span>
            </div>
          </div>
        </div>
        <div id="hero-image" className="shadow-md rounded-lg">
          <img src="/hero-image.svg" alt="" />
        </div>
      </section>
    </>
  );
}
