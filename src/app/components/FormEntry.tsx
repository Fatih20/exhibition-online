import React, { useState } from "react";

function FormEntry({ onSubmit }: { onSubmit: () => void }) {
  const [name, setName] = useState("");
  const [origin, setOrigin] = useState("");
  const [knowFrom, setKnowFrom] = useState("");

  return (
    <form
      onSubmit={onSubmit}
      className="pointer-events-auto flex flex-col items-center justify-start"
    >
      <p className="font-junicode text-2xl text-center mb-6">
        <strong>
          Selamat <em>datang!</em>
        </strong>
        <br />
        silakan isi buku tamu terlebih dahulu.
      </p>
      <label
        htmlFor="name-input"
        className="self-start font-junicode text-base leading-none"
      >
        <strong>Nama :</strong>
      </label>
      <input
        type="text"
        id="name-input"
        className="w-[600px] self-start mb-2 text-black px-2 py-1"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label
        htmlFor="origin-input"
        className="self-start font-junicode text-base leading-none"
      >
        <strong>Asal :</strong>
      </label>
      <input
        type="text"
        id="origin-input"
        className="w-[600px] self-start mb-2 text-black px-2 py-1"
        value={origin}
        onChange={(e) => setOrigin(e.target.value)}
      />
      <label
        htmlFor="know-from-input"
        className="self-start font-junicode text-base leading-none"
      >
        <strong>Tahu pameran ini dari mana?</strong>
      </label>
      <input
        type="text"
        id="know-from-input"
        className="w-[600px] self-start mb-2 text-black px-2 py-1"
        value={knowFrom}
        onChange={(e) => setKnowFrom(e.target.value)}
      />
      <button
        type="submit"
        className="self-end underline decoration-white-ivory underline-offset-1 decoration-1"
      >
        SUBMIT
      </button>
    </form>
  );
}

export default FormEntry;
