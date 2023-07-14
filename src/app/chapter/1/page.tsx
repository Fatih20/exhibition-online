"use client";

import RedBar from "@/app/components/RedBar";
import React, { useEffect, useRef, useState } from "react";

function FirstChaper() {
  const [percent, setPercent] = useState(0);
  const containerRef = useRef(null);

  return (
    <div className="flex flex-nowrap whitespace-nowrap h-screen items-start justify-start w-screen scrollbar-hide">
      <RedBar progressPercent={percent} />
      <main
        ref={containerRef}
        className="flex overflow-x-auto items-start flex-nowrap whitespace-nowrap h-full justify-start scrollbar-hide"
        onScroll={(e) => {
          const scrollRight = (containerRef.current as any).scrollLeft ?? 1;
          const windowWidth = (containerRef.current as any).scrollWidth ?? 1;
          const docWidth = Math.max(
            document.body.scrollWidth,
            document.documentElement.scrollWidth,
            document.body.offsetWidth,
            document.documentElement.offsetWidth,
            document.body.clientWidth,
            document.documentElement.clientWidth
          );

          const totalDocScrollLength = windowWidth - docWidth;
          const scrollPostion = Math.ceil(
            (scrollRight / totalDocScrollLength) * 100
          );

          setPercent(scrollPostion);
        }}
      >
        <section className="min-w-[100vw] bg-black h-full flex items-center justify-center">
          <p className="text-white">Bjgbngbnjg</p>
        </section>
        <section className="min-w-[100vw] h-full bg-slate-50">
          <p className="text-white">Bjgbngbnjg</p>
        </section>
        <section className="min-w-[100vw] h-full bg-slate-400">
          <p className="text-white">Bjgbngbnjg</p>
        </section>
        <section className="min-w-[100vw] h-full bg-slate-600">
          <p className="text-white">Bjgbngbnjg</p>
        </section>
      </main>
    </div>
  );
}

export default FirstChaper;
