import React from "react";

export default function BackToStart({ onBack }: { onBack: () => void }) {
  return (
    <div className="h-full w-[33vw] min-w-[20vw] box-border px-5 pb-5 bg-black flex flex-col justify-end">
      <button
        onClick={onBack}
        className="text-3xl bg-none  text-white-ivory border-white-ivory border-2 font-junicode w-fit h-fit whitespace-break-spaces px-2 py-2 text-center align-middle hover:text-black hover:bg-white-ivory uppercase"
      >
        Kembali ke Awal
      </button>
    </div>
  );
}
