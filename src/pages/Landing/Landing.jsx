import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Landing() {
  return (
    <>
      <div className="flex flex-col gap-0">
        <Header className="px-0" />
        <Hero/>
      </div>
    </>
  );
}
