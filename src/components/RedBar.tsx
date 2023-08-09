import { useLoopAudio } from "@/utils/useLoopAudio";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import useSound from "use-sound";

function RedBar({
  linkToGoBack = "/",
  progressPercent = 0,
  audioFileName,
}: // onPlay = () => {},
// onPause = () => {},
// isPlaying = false,
{
  progressPercent?: number;
  linkToGoBack?: string;
  audioFileName?: string;
  // onPlay?: () => void;
  // onPause?: () => void;
  // isPlaying?: boolean;
}) {
  const { loopAudioRef, pause, play, isPlaying } = useLoopAudio();
  return (
    <header className="bg-red text-white-ivory p-3 w-full flex items-center justify-between fixed top-0 right-0 left-0 z-50">
      {audioFileName && (
        <audio
          src={`/audio/${audioFileName}`}
          ref={loopAudioRef}
          className="invisible"
        />
      )}
      <Link
        href={linkToGoBack}
        className="flex flex-row items-center justify-center gap-3"
      >
        <Image
          src={"/icons/ArrowBack.svg"}
          alt="ArrowToGoBack"
          width={18}
          height={19}
        />
        <p className="text-xl font-junicode capitalize font-bold">
          <em>BACK</em>
        </p>
      </Link>
      <Image
        src={"/icons/Logo.svg"}
        alt={"Asa, Cerita, Wanita"}
        width={114}
        height={19}
      />
      <div className="flex flex-row justify-end items-center gap-4 h-full">
        <button onClick={isPlaying ? pause : play} className="h-full">
          {isPlaying ? (
            <Image
              className="h-full w-auto"
              src={"/icons/Pause.svg"}
              alt={"Pause"}
              width={32}
              height={32}
            />
          ) : (
            <Image
              className="h-full w-auto"
              src={"/icons/Play.svg"}
              alt={"Play"}
              width={32}
              height={32}
            />
          )}
        </button>
        <div className="w-20 h-4 border-white-ivory border-2 relative">
          <div
            className="h-full bg-white-ivory absolute top-0 bottom-0 left-0"
            style={{
              width: `${progressPercent >= 100 ? 100 : progressPercent}%`,
            }}
          ></div>
        </div>
      </div>
    </header>
  );
}

export default RedBar;
