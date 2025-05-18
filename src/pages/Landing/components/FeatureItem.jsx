import React from "react";
import { Check } from "lucide-react";

export default function ({feature}) {
  return (
    <>
      <li className="flex flex-row items-center gap-2.5">
        <span className="bg-list-bg rounded-full p-1">
          <Check size={16} color="#4F46E5" />
        </span>
        <span>{feature}</span>
      </li>
    </>
  );
}
