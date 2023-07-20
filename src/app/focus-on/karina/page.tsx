"use client";

import RedBar from "@/components/RedBar";
import { useHorizontalScroll } from "@/utils/useHorizontalScroll";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Page() {
  const [percent, setPercent] = useState(0);
  const { elRef: containerRef, resetSavedScroll } = useHorizontalScroll({
    pageName: "Focus On : Karina",
    callOnScroll: (scrollLeft) => {
      const windowWidth = containerRef.current?.scrollWidth ?? 1;
      const docWidth = Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.body.clientWidth,
        document.documentElement.clientWidth
      );

      const totalDocScrollLength = windowWidth - docWidth;
      const scrollPercent = Math.ceil(
        (scrollLeft / totalDocScrollLength) * 100
      );

      setPercent(scrollPercent);
    },
  });

  return (
    <div className="flex flex-nowrap whitespace-nowrap h-screen items-start justify-start w-screen scrollbar-hide">
      <RedBar progressPercent={percent} />
      <main
        ref={containerRef}
        className="flex overflow-x-auto overflow-y-hidden items-start flex-nowrap whitespace-nowrap h-full justify-start scrollbar-hide"
      >
        <section className="bg-black grid-system-container">
          <div className="pl-10 row-start-2 col-span-7 col-start-1 flex flex-col items-start justify-start">
            <p className="font-junicode text-5xl w-fit h-fit flex translate-y-1/2">
              <em>
                focus
                <br />
                on
              </em>
            </p>
            <h2 className="row-start-6 col-start-3 col-span-6  font-junicode h-fit w-fit flex flex-col items-start justify-start self-end">
              <span className="uppercase text-[10rem] leading-none">
                Karina
              </span>{" "}
              <span className="font-ed-mentasta text-[12rem] leading-none -translate-x-52 -translate-y-5">
                Soemarwoto
              </span>
            </h2>
            <ul className="w-full self-stretch flex items-start justify-end gap-10 -translate-y-5 bg-red text-3xl font-junicode box-border px-5">
              <li>Bruhhh</li>
              <li>Bruhhh</li>
              <li>Bruhhh</li>
              <li>Bruhhh</li>
            </ul>
          </div>
          <div className="col-start-1 row-start-7 row-end-[-1] col-span-full bg-slate-600 box-border pb-5 pl-5 flex items-end justify-start">
            <button className="text-xl bg-none  text-white-ivory border-white-ivory border-2 font-junicode w-fit h-fit whitespace-break-spaces p-5 text-center align-middle hover:text-black hover:bg-white-ivory uppercase">
              Kembali
            </button>
          </div>
          <div className="col-span-5 col-start-8 row-span-full bg-zinc-600">
            <Image className="object-scale-down object-right-bottom" />
          </div>
        </section>
        <div className="h-full w-[33vw] min-w-[20vw] box-border px-5 pb-5 bg-black flex flex-col justify-end">
          <button
            onClick={() => {
              resetSavedScroll();
              containerRef.current?.scrollTo({ left: 0 });
            }}
            className="text-3xl bg-none  text-white-ivory border-white-ivory border-2 font-junicode w-fit h-fit whitespace-break-spaces px-2 py-2 text-center align-middle hover:text-black hover:bg-white-ivory uppercase"
          >
            Kembali ke Awal
          </button>
        </div>
      </main>
    </div>
  );
}

export default Page;
