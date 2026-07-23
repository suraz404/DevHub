import Categories from "@/features/categories/Categories";
import Hero from "@/features/hero/Hero";
import Tools from "@/features/Tools/Tools";
import React from "react";

const page = () => {
  return (
    <div
      className="h-full
    "
    >
      <Hero />
      <Categories />
      <Tools />
    </div>
  );
};

export default page;
