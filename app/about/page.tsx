import Intro from "@/components/Intro";
import WorkFlow from "@/components/WorkFlow";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen pt-12 rounded-lg max-w-13xl sm:pt-20 md:pt-32">
      <Intro />
      <WorkFlow />
    </div>
  );
};

export default page;
