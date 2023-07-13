"use client";

import React, { useEffect, useState } from "react";
import Loading from "@/app/components/Loading/Loading";

function LoadingScreen({
  progressPercentage = 0,
}: {
  progressPercentage?: number;
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setInterval(() => {
      if (progress >= 100) {
        return;
      }

      setProgress((prev) => prev + 1);
    }, 100);
  }, []);

  return (
    <div className="fixed h-screen w-full flex flex-col items-center justify-center bg-black">
      <Loading progressPercentage={progress} />
    </div>
  );
}

export default LoadingScreen;
