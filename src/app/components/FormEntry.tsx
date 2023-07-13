import { FieldForm } from "@/utils/types";
import { errorMessageGenerator } from "@/utils/utilities";
import React, { FormEvent, useEffect, useState } from "react";
import ReactDropdown from "react-dropdown";
import Select from "react-dropdown-select";

function FormEntry({ onSubmit }: { onSubmit: () => Promise<void> }) {
  const [gender, setGender] = useState("");
  const [name, setName] = useState("");
  const [origin, setOrigin] = useState("");
  const [knowFrom, setKnowFrom] = useState("");
  const [recentFailure, setRecentFailure] = useState(
    undefined as FieldForm | undefined
  );

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (gender === "") {
      setRecentFailure("gender");
      return;
    }

    if (name === "") {
      setRecentFailure("name");
      return;
    }

    if (origin === "") {
      setRecentFailure("origin");
      return;
    }

    if (knowFrom === "") {
      setRecentFailure("knowFrom");
      return;
    }

    await onSubmit();
  }

  return (
    <form
      onSubmit={handleSubmit}
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
      <div
        className={`w-[600px] flex items-start justify-start h-fit  mb-2  border-2 ${
          recentFailure === "name" || recentFailure === "gender"
            ? "border-yellow"
            : "border-black"
        }`}
      >
        <select
          name="selectGender"
          value={gender === "" ? "Tuan/Puan" : gender}
          defaultValue={"Tuan/Puan"}
          className="w-fit h-full outline-none bg-white text-red"
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="Tuan/Puan">Tuan/Puan</option>
          <option value="Tuan">Tuan</option>
          <option value="Puan">Puan</option>
          <option value="None">Tidak Disebutkan</option>
        </select>
        <input
          type="text"
          id="name-input"
          className={`flex-grow  outline-none self-start text-black px-2 py-1`}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <label
        htmlFor="origin-input"
        className="self-start font-junicode text-base leading-none"
      >
        <strong>Asal :</strong>
      </label>
      <input
        type="text"
        id="origin-input"
        className={`w-[600px]  outline-none  self-start mb-2 text-black px-2 py-1 border-2 ${
          recentFailure === "origin" ? "border-yellow" : "border-black"
        }`}
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
        name="know-from"
        id="know-from-input"
        className={`w-[600px] self-start mb-2 text-black px-2 py-1 border-black border-2 outline-none  ${
          recentFailure === "knowFrom" ? "border-yellow" : "border-black"
        }`}
        value={knowFrom}
        onChange={(e) => setKnowFrom(e.target.value)}
      />
      <div className="flex flex-row w-full">
        {recentFailure && (
          <p className="text-yellow font-junicode">
            {errorMessageGenerator(recentFailure)}
          </p>
        )}
        <div className="flex-grow"></div>
        <button
          type="submit"
          className="self-end underline decoration-white-ivory underline-offset-1 decoration-1"
        >
          SUBMIT
        </button>
      </div>
    </form>
  );
}

export default FormEntry;
