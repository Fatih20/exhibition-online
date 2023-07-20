import Image from "next/image";
import React from "react";

function Loading({ progressPercentage = 0 }: { progressPercentage?: number }) {
  return (
    <div className="flex flex-col items-center justify-start gap-12">
      <Image
        src={"/images/loading/1.png"}
        alt={"Progress flower"}
        className={`${
          progressPercentage < 33 ? "opacity-100" : "opacity-0 hidden"
        } transition-opacity`}
        width={114}
        height={122}
      />
      <Image
        src={"/images/loading/2.png"}
        alt={"Progress flower"}
        className={`${
          progressPercentage < 66 && progressPercentage >= 33
            ? "opacity-100"
            : "opacity-0 hidden"
        } transition-opacity`}
        width={109}
        height={122}
      />
      <Image
        src={"/images/loading/3.png"}
        alt={"Progress flower"}
        className={`${
          progressPercentage >= 66 ? "opacity-100" : "opacity-0 hidden"
        } transition-opacity`}
        width={120}
        height={111}
      />
      <div className="w-52 h-2">
        <div
          className="bg-red h-2"
          style={{
            width: `${progressPercentage > 100 ? 100 : progressPercentage}%`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default Loading;
