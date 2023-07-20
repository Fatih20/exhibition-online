"use client";

import "../chapter/5/5.css";
import React, { FormEvent, useState } from "react";
import RedBar from "../../components/RedBar";
import { useHorizontalScroll } from "@/utils/useHorizontalScroll";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";

interface CreditPersonProps {
  img: string;
  title: string;
  name: string;
  linkedin: string;
  ig: string;
}

const CreditPerson: React.FC<CreditPersonProps> = ({
  img,
  title,
  name,
  linkedin,
  ig,
}) => {
  return (
    <div className="flex flex-col w-1/5 px-2 py-1">
      <Image
        width={100}
        height={100}
        className="self-center"
        src={`/images/epilogue/credits/${img}.png`}
        alt={`${img}`}
      />
      <p className="text-center font-bold mt-1">{title}</p>
      <p className="text-center">{name}</p>
      <div className="flex items-center mt-1 ml-1">
        <Image
          width={16}
          height={16}
          className="mr-1"
          src={"/icons/LinkedIn.svg"}
          alt="LinkedIn"
        />
        <p className="text-[0.6rem]">{linkedin}</p>
      </div>
      <div className="flex items-center ml-1">
        <Image
          width={16}
          height={16}
          className="mr-1"
          src={"/icons/Instagram.svg"}
          alt="Instagram"
        />
        <p className="text-[0.6rem]">{ig}</p>
      </div>
    </div>
  );
};

const Epilogue: React.FC = () => {
  const [percent, setPercent] = useState(0);
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");

  const containerRef = useHorizontalScroll({
    pageName: "Epilogue",
    callOnScroll: (scrollLeft) => {
      const windowWidth = containerRef.current?.scrollWidth ?? 1;
      const docWidth = Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.body.clientWidth,
        document.documentElement.clientWidth
      );

      const totalDocScrollLength = windowWidth - docWidth;
      const scrollPercent = Math.ceil(
        (scrollLeft / totalDocScrollLength) * 100
      );

      setPercent(scrollPercent);
    },
  });

  async function handleLanjut() {
    const el = containerRef.current;
    if (el) {
      const maxScrollPosition = el.scrollWidth - el.clientWidth;
      el.scrollTo({
        left: maxScrollPosition,
        behavior: "smooth",
      });
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (name === "" || feedback === "") {
      toast.error("Please fill all the field before submitting.", {
        position: "top-center",
      });
      return;
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_FORM_ENDPOINT as string}/feedback`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          feedback: feedback,
        }),
      }
    );

    if (res.status == 200) {
      toast.success(
        "Feedback submitted! Thank you for coming to Asa, Cerita, Wanita.",
        {
          position: "top-center",
        }
      );
    } else {
      toast.error("Failed to submit feedback. Please try again later.", {
        position: "top-center",
      });
    }
  }

  return (
    <>
      <div className="flex flex-nowrap whitespace-nowrap h-screen items-start justify-start w-screen scrollbar-hide">
        <RedBar progressPercent={percent} />
        <main
          ref={containerRef}
          className="flex overflow-x-auto overflow-y-hidden items-start flex-nowrap whitespace-nowrap h-full justify-start scrollbar-hide"
        >
          <section className="min-w-[30vw] h-screen bg-black text-white-ivory whitespace-break-spaces flex flex-col gap-4 font-junicode py-8 pt-20 pl-8 pr-0">
            <p className="mt-auto">
              Hormat besar kami berikan kepada para{" "}
              <span className="font-bold">Narasumber</span> yang telah
              mempercayakan kami dengan narasi dan waktu mereka. Kami harap
              narasi yang Narasumber berikan dapat membuka jalan untuk narasi
              lainnya.
              <br />
              <br />
              Keberhasilan dari pameran ini tidak akan lepas dari{" "}
              <span className="font-bold">Tim Pameran</span> yang telah
              berkontribusi dengan memberikan waktu, energi, dan kepedulian
              mereka.
              <br />
              <br />
              Apresiasi juga diberikan kepada{" "}
              <span className="font-bold">Media Partner</span>, dalam upaya
              pameran bisa dinikmati khalayak yang lebih luas.
            </p>

            <p className="text-xl">
              Terima kasih banyak terakhir kami kepada Anda, sang pengunjung,
              yang harapnya hari ini keluar dari zona nyaman untuk
              mengeksplorasi dunia dari pandangan mata orang lain.
            </p>
            <p className="text-2xl font-bold">
              Narasi di masa depan, <span className="italic">Anda</span> yang
              akan menulisnya.
            </p>

            <div className="flex flex-col items-center w-full">
              <p className="font-ed-mentasta text-red text text-7xl mr-32 -mb-8">
                Kilas
              </p>
              <p className="text-6xl">BALIK</p>
            </div>
          </section>

          <section className="min-w-[70vw] h-screen bg-black text-white-ivory whitespace-break-spaces flex flex-col gap-4 font-zmg p-8 pt-16">
            <p className="text-5xl">
              <span className="font-ed-mentasta">Team </span>
              <span className="text-red">PAMERAN</span>
            </p>
            {/* Grid */}
            <div className="h-full w-full flex flex-wrap overflow-auto use-scrollbar">
              <CreditPerson
                img="astrid"
                title="PROJECT DIRECTOR"
                name="Astrid N. Hasanah"
                linkedin="Astrid Novianti Hasanah"
                ig="astridastra"
              />
              <CreditPerson
                img="refina"
                title="OUTREACH DIRECTOR"
                name="Refina Anjani Puspita"
                linkedin="Refina A. Puspita"
                ig="refina.ap"
              />
              <CreditPerson
                img="ines"
                title="NARRATIVE DIRECTOR"
                name="Ines Siti Sarah"
                linkedin="Ines Siti Sarah"
                ig="ines.st.sarah"
              />
              <CreditPerson
                img="bintan"
                title="EXHIBITION DIRECTOR"
                name="Bintan Haya"
                linkedin="Bintan Haya"
                ig="bintanhaya"
              />
              <CreditPerson
                img="faizin"
                title="EXHIBITION DIRECTOR"
                name="Muhammad Faizin F.M."
                linkedin="Muhammad Faizin FM"
                ig="faizin_fm"
              />
              <CreditPerson
                img="ashley"
                title="RESEARCH DIRECTOR"
                name="Ashley F. Santoso"
                linkedin="Ashley Fatih Santoso"
                ig="ashleythegorge"
              />
              <CreditPerson
                img="calista"
                title="PROPAGANDA DIRECTOR"
                name="Calista Marchia Henly"
                linkedin="Calista Marchia Henly"
                ig="calistahenly"
              />
              <CreditPerson
                img="nella"
                title="PROPAGANDA DIRECTOR"
                name="Nella Mellinia Budiman"
                linkedin="Nella Mellinia Budiman"
                ig="nhellaaa"
              />
              <CreditPerson
                img="cattleya"
                title="VISUAL DIRECTOR"
                name="Andrea Cattleya"
                linkedin="Andrea Cattleya"
                ig="cxttleya"
              />
              <CreditPerson
                img="bita"
                title="VISUAL DIRECTOR"
                name="Imaniyah Sabita"
                linkedin="Imaniyah Sabita"
                ig="bitaeh"
              />
              <CreditPerson
                img="rafi"
                title="TECHNICAL DIRECTOR"
                name="Rafi Raihansyah"
                linkedin="Rafi Raihansyah"
                ig="rafirm29"
              />
              <CreditPerson
                img="fatih"
                title="TECHNICAL STAFF"
                name="Fatih Nararya R. I."
                linkedin="Fatih Nararya R. I."
                ig="fatih_nararya"
              />
              <CreditPerson
                img="amdey"
                title="NARRATIVE STAFF"
                name="Amadea Rashida"
                linkedin="Amadea Rashida"
                ig="amdeyr"
              />
              <CreditPerson
                img="kirana"
                title="NARRATIVE STAFF"
                name="Kirana T. Tanadihardja"
                linkedin="Kirana Tanadihardja"
                ig="kiranaatt"
              />
            </div>
            <div className="mt-auto flex w-full cursor-pointer">
              <button
                onClick={() => handleLanjut()}
                className="ml-auto bg-black text-white-ivory border-2 border-white-ivory hover:bg-white-ivory hover:text-black transition-colors  text-xl py-2 px-4 font-junicode z-10"
              >
                LANJUT
              </button>
            </div>
          </section>

          <section className="min-w-[25vw] h-screen bg-red text-white-ivory whitespace-break-spaces flex flex-col gap-4 font-junicode p-8 pt-16">
            <p className="font-ed-mentasta text text-7xl mr-32 -mb-8">Media</p>
            <p className="text-6xl ml-16">PARTNER</p>
            <Image
              width={185}
              height={80}
              className="mt-4 self-center"
              src={"/images/epilogue/lfm.png"}
              alt="LFM"
            />
          </section>
          <section className="min-w-[75vw] h-screen bg-white-ivory text-black whitespace-break-spaces flex flex-col gap-4 font-junicode p-8 pt-16">
            <p className="text-6xl mt-8">
              <span className="font-ed-mentasta text-7xl">Umpan </span>
              <span>BALIK</span>
            </p>
            <div className="flex flex-col px-4 py-2 h-1/2 w-2/5">
              <form
                onSubmit={handleSubmit}
                autoComplete="off"
                className="flex flex-col gap-1"
              >
                <label>Nama</label>
                <input
                  type="text"
                  className="text-black p-2"
                  onChange={(e) => setName(e.target.value)}
                />
                <label className="mt-4">
                  Tulis harapan kamu untuk perempuan Indonesia di sini
                </label>
                <textarea
                  rows={4}
                  className="text-black p-2"
                  onChange={(e) => setFeedback(e.target.value)}
                />

                <button
                  type="submit"
                  className="bg-white-ivory mb-2 text-black border-2 border-black hover:bg-black hover:text-white-ivory transition-colors py-2 px-8 italic font-junicode z-10 w-fit self-end mt-4"
                >
                  Submit
                </button>
              </form>
            </div>
          </section>
        </main>
      </div>

      <ToastContainer />
    </>
  );
};

export default Epilogue;
