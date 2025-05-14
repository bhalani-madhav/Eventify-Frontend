import React from "react";

export default function Hero() {
  return (
    <>
      <section
        id="hero-section"
        className="flex flex-row px-[100px] justify-between pt-11"
      >
        <div id="hero-ad" className="flex flex-col gap-10">
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
          <div id="features"></div>
          <div id="buttons"></div>
        </div>
        <div id="hero-image" className="shadow-md rounded-lg">
          <img src="/hero-image.svg" alt="" />
        </div>
      </section>
    </>
  );
}
