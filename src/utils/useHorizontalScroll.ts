import { useRef, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

export function useHorizontalScroll({
  callOnScroll = (scrollPosition: number) => {},
}: {
  callOnScroll?: (scrollPosition: number) => void;
}) {
  const [scrollPosition, setScrollPosition] = useLocalStorage<number>(
    "scrollPosition",
    0
  );
  const elRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = (e: WheelEvent) => {
        // Convert vertical scrolling to horizontal scrolling
        if (e.deltaY == 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
        });

        // Update the saved scroll position to local storage
        setScrollPosition(el.scrollLeft);

        // Call callOnScroll
        callOnScroll(el.scrollLeft);
      };
      el.addEventListener("wheel", onWheel);

      // Update the scroll position from the saved scroll position in localStorage
      el.scrollTo({
        left: el.scrollLeft + scrollPosition,
        behavior: "smooth",
      });
      callOnScroll(scrollPosition);

      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
  return elRef;
}
