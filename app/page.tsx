"use client";
import React from "react";
import Image from "next/image";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div>
        <p className="text-blue-600 md:text-[10rem] text-[5rem] text-center mt-44">
          Mood Fusion
        </p>
        <p className="text-center md:text-[3rem] text-[1.5rem]">
          - Playlist on the go -
        </p>
        <button className="bg-blue-600 md:rounded-xl md:px-5 md:py-3 md:mt-16 md:mx-[55rem] rounded-lg px-3 py-2 mt-10 mx-[8rem]">
          <a href="/create">Get Started</a>
        </button>
      </div>
    </div>
  );
}
