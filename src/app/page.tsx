"use client";

import Image from "next/image";
import { useState } from "react";
import { createPortal } from "react-dom";
import FormEntry from "./components/FormEntry";
import { useRouter } from "next/navigation";
import LoadingScreen from "./components/Loading/LoadingScreen";

export default function Home() {
  const [isWelcome, setIsWelcome] = useState(true);
  const [fillingForm, setFillingForm] = useState(false);
  const router = useRouter();

  return (
    <main className="relative flex h-screen bg-white-ivory items-end justify-start pr-24 pt-32">
      <div className="relative w-8/12 flex flex-grow flex-col items-start justify-end">
        <div
          className={`absolute inset-0 bg-red z-10 mix-blend-lighten ${
            fillingForm ? "bg-opacity-60" : "bg-opacity-0"
          } transition-all`}
        ></div>
        <Image
          loading="eager"
          width={1920}
          height={1543}
          src={"/images/home/speakers_compressed.png"}
          alt="Speakers of the event"
          className="aspect-auto max-h-screen w-auto"
        />
      </div>
      <div className="absolute flex flex-col inset-0 justify-center items-center z-50 pointer-events-none">
        <div
          className={`bg-red w-[768px] p-4 box-border backdrop-blur-[100px] bg-opacity-[0.45] flex flex-col items-center justify-start pointer-events-auto ${
            fillingForm ? "scale-100 opacity-100" : "scale-0 opacity-0"
          } transition-all`}
        >
          <button
            className="self-end"
            type="button"
            onClick={() => {
              setFillingForm(false);
            }}
          >
            <Image
              width={21}
              height={21}
              src={"/images/home/x.png"}
              alt="Close the form"
            />
          </button>
          <FormEntry
            onSubmit={async () => {
              setFillingForm(false);
              router.push("/chapter/1");
            }}
          />
        </div>
      </div>
      {/* Text in the screen */}
      <div className="relative z-20 flex flex-col items-end justify-start text-red self-start">
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
              <em>{isWelcome ? "WELCOME" : "COMING SOON!"}</em>
            </strong>
          </button>
        </div>
      </div>
    </main>
  );
}
