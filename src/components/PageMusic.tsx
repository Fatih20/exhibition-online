import React from "react";

export default function PageMusic({ src }: { src: string }) {
  return (
    <audio loop autoPlay>
      <source src={`/audio/${src}`} type="audio/mp3" />
    </audio>
  );
}
