"use client";

import Image from "next/image";
import { useState } from "react";
import FormEntry from "./components/FormEntry";

export default function Home() {
  const [isWelcome, setIsWelcome] = useState(false);
  const [fillingForm, setFillingForm] = useState(false);
  return (
    <main className="relative flex h-screen bg-white-ivory flex-col items-end justify-start pr-24 pt-32">
      <div className="absolute flex flex-col inset-0 justify-center items-center z-50 pointer-events-none">
        <div
          className={`bg-red w-[768px] p-4 box-border backdrop-blur-[100px] bg-opacity-[0.45] flex flex-col items-center justify-start pointer-events-auto ${
            fillingForm ? "scale-100 opacity-100" : "scale-0 opacity-0"
          } transition-all`}
        >
          <button className="self-end" onClick={() => setFillingForm(false)}>
            <Image
              width={21}
              height={21}
              src={"/images/home/x.png"}
              alt="Close the form"
            />
          </button>
          <FormEntry />
        </div>
      </div>
      {/* Text in the screen */}
      <div className="relative z-20 flex flex-col items-end justify-start text-red">
        <h1 className=" font-junicode text-9xl text-right">
          asa, <br /> cerita,
          <br /> <em className="font-ed-mentasta">W </em>anita
        </h1>
        <p className="w-80 font-zmg text-lg text-justify leading-5">
          sebuah usaha mengenal bagaimana wanita Indonesia dapat memaknai
          pilihan hidup mereka masing-masing melalui pameran.
        </p>
        <p className="text-lg font-zmg leading-5 text-right">
          - Astrid N.H. dan Tim
        </p>
        <div className="mt-11">
          <button
            className="px-11 pt-2 pb-1 text-3xl bg-white-ivory text-red border-red border-2 font-junicode hover:bg-red hover:text-white-ivory"
            onClick={() => {
              setIsWelcome(true);
              setFillingForm(true);
            }}
          >
            <strong>
              <em>{isWelcome ? "WELCOME" : "START"}</em>
            </strong>
          </button>
        </div>
      </div>
    </main>
  );
}
