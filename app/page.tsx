import Cards from "@/components/Cards";
import Carousel from "@/components/Carousel";
import Navbar from "@/components/Navbar";
import React from "react";

export default function page() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Cards />
    </div>
  );
}
