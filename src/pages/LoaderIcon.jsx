import React from "react";
import { Loader } from "lucide-react";

export default function LoaderIcon() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Loader className="animate-spin w-12 h-12 text-primary-indigo" />
    </div>
  );
}
