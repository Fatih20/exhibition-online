import { useRef, useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";

export function useLoopAudio() {
  const [isPlaying, setIsPlaying] = useState(false);

  const loopAudioRef = useRef<HTMLMediaElement>(null);
  useEffect(() => {
    const el = loopAudioRef.current;
    if (el) {
      el.addEventListener(
        "ended",
        function () {
          this.currentTime = 0;
          this.play();
        },
        false
      );

      return () => {
        el.pause();
        el.removeEventListener("ended", function () {
          this.currentTime = 0;
          this.play();
        });
      };
    }
  }, []);

  useEffect(() => {
    const el = loopAudioRef.current;
    if (!el) {
      return;
    }

    if (isPlaying) {
      el.play();
      return;
    }

    el.pause();
  }, [isPlaying]);

  return {
    loopAudioRef,
    play: () => setIsPlaying(true),
    pause: () => setIsPlaying(false),
    isPlaying,
  };
}
