"use client";

import BackToStart from "@/components/BackToStart";
import RedBar from "@/components/RedBar";
import { useHorizontalScroll } from "@/utils/useHorizontalScroll";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Page() {
  const [percent, setPercent] = useState(0);
  const { elRef: containerRef, resetSavedScroll } = useHorizontalScroll({
    pageName: "Focus On : Wanda",
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

  return (
    <div className="flex flex-nowrap whitespace-nowrap h-screen items-start justify-start w-screen scrollbar-hide">
      <RedBar progressPercent={percent} />
      <main
        ref={containerRef}
        className="flex overflow-x-auto overflow-y-hidden items-start flex-nowrap whitespace-nowrap h-full justify-start scrollbar-hide font-zmg"
      >
        <section className="bg-black grid-system-container">
          <div className="pl-10 row-start-2 col-span-7 col-start-1 flex flex-col items-start justify-start">
            <p className="font-junicode text-5xl w-fit h-fit flex translate-y-1/2">
              <em>
                focus
                <br />
                on
              </em>
            </p>
            <h2 className="row-start-6 col-start-3 col-span-6  font-junicode h-fit w-fit flex flex-col items-start justify-start self-end">
              <span className="uppercase text-[10rem] leading-none self-center">
                Wanda
              </span>{" "}
              <span className="font-ed-mentasta text-[12rem] leading-none -translate-x-48 -translate-y-16">
                Roxanne
              </span>
            </h2>
            <ul className="w-full self-stretch flex items-start justify-end gap-10 -translate-y-5 text-3xl font-junicode box-border px-5">
              <li>@ceritakubi</li>
              <li>@puzzlediri</li>
              <li>@wandaroxanne</li>
            </ul>
          </div>
          <div className="col-start-1 row-start-7 row-end-[-1] col-span-full box-border pb-5 pl-5 flex items-end justify-start bg-bunga-wanda bg-center bg-no-repeat bg-cover">
            <Link href={"/chapter/4"}>
              <button className="text-xl bg-none  text-white-ivory border-white-ivory border-2 font-junicode w-fit h-fit whitespace-break-spaces p-5 text-center align-middle hover:text-black hover:bg-white-ivory uppercase">
                Kembali
              </button>
            </Link>
          </div>
          <div className="translate-x-20 col-span-4 row-start-1 col-start-8 row-span-full flex flex-col items-center justify-end">
            <Image
              className="object-scale-down object-right-top block self-stretch"
              src={"/images/focus-on/speaker/Wanda.png"}
              width={1822}
              height={2410}
              alt="Wanda Roxanne"
            />
          </div>
        </section>
        <section className="bg-black space-x-4 grid-system-container p-5">
          <div className="row-start-2 col-start-1 col-span-3 flex flex-col items-start justify-start gap-5 text-justify">
            <p className="text-sm">
              Lahir di desa di Jember, Jawa Timur dan dibesarkan bersama adik
              perempuannya oleh ibunya seorang diri, Kak Wanda memulai cerita
              dengan merefleksikan peran privelese dalam hidupnya.
              <br />
              <br />
              <span className="font-junicode text-base">
                “Aku rasa keluargaku lebih beruntung daripada keadaan orang
                sekitar di Jember, namun saat dibandingkan dengan keadaan dengan
                orang yang aku temui di S1 dan S2, aku bilang memang keluargaku
                tidak privelese. Lapisan privelese memang berbeda ya, tergantung
                pembandingnya.”
              </span>
              , ujarnya.
              <br />
              <br />
            </p>
            <Image
              src={"/images/focus-on/31.png"}
              alt="Wanda"
              width={113}
              height={101}
            />{" "}
            <p className="text-sm">
              <span className="font-junicode text-base">
                “Aku selalu diajarkan pastinya, seperti keluarga gender
                tradisional lainnya, bahwa perempuan harus begini, harus begitu,
                tidak boleh melakukan itu. Kalau perempuan harus bisa berbersih.
                Nanti aku akan menikah, aku akan jadi istri, nantinya aku akan
                merawat anak dan sebagainya.”
              </span>
              , kutip Kak Wanda.
            </p>
          </div>
          <div className="row-start-2 col-start-5 col-span-3 flex flex-col items-start justify-start gap-5 text-justify">
            <p className="text-sm">
              <strong>Proses Pembentukan Identitas</strong>
              <br />
              Tumbuh di lingkungan tradisional dengan pembagian peran gender
              yang cukup eksplisit, Kak Wanda mengingat pengalaman
              mempertanyakan hal tersebut. Bermain dengan saudara laki-laki,
              mengemban label ‘tomboy’, hingga menjadi koordinator futsal tiap
              hari di SMA, ia tetap melakukan hal yang ia mau. Pemahaman Kak
              Wanda semakin ketara saat ia mengemban studi lebih lanjut di
              Kajian Gender dan memperoleh perspektif baru dari lingkungannya.
              Pembentukan identitas baginya adalah proses menciptakan, tak hanya
              menerima. 
            </p>
            <p className="font-junicode">
              “Aku tumbuh dengan nilai-nilai yang sangat berbeda dengan apa yang
              aku percaya sekarang. Dulu ada nilai-nilai yang kita percaya
              karena kita diajarkan dengan demikian. Jadinya pasti kita percaya
              bahwa itu hal yang baik, benar, lalu diikuti. Tetapi saat kita
              punya pengetahuan baru, pengalaman yang berbeda, kedewasaan dan
              kebijaksanaan yang berbeda, itu membuat norma-norma sebelumnya
              tidak relevan. Jadi ada perubahan pemahaman dan norma yang kita
              percaya.  Terbentuk suatu nilai baru dari hasil yang kita dapat,
              alami, baca, dan pelajari. Dulu ini mungkin relevan buat mereka,
              tapi enggak relevan buat aku.”  
            </p>
          </div>
          <div className="row-start-2 col-start-9 col-span-3 flex flex-col items-center justify-start gap-5 text-justify">
            <p className="text-sm">
              <strong>Memupuk Ilmu dan Kepercayaan Diri</strong>
              <br />
              Studi S1 Kak Wanda membutuhkan waktu 7 tahun akibat beberapa
              alasan. Mencari jalannya sendiri dengan pekerjaan freelance, ia
              menjadi kontributor penulis regular di Mubadalah, menulis banyak
              artikel dengan perspektif gender. Mimpinya berbelok. Pada umur 28
              tahun, ia memilih untuk melanjutkan S2 di UI dengan jurusan Kajian
              Gender.
            </p>
            <p className="font-junicode">
              “Di Kajian Gender, aku merasa: ternyata aku enggak bodoh. Itu
              kesimpulan yang mungkin bagi orang lain shallow. Saat itu, self
              esteem aku sempat hancur. Aku sudah punya pemahaman bahwa diriku
              ‘bego’. Jadi, pemahaman sesederhana bahwa aku enggak bego itu
              sesuatu yang besar sekali.”{" "}
              <span className="font-zmg text-sm">
                Kak Wanda membuktikan prestasinya dengan meraih IP 4 di semester
                pertama, lulus dengan gelar summa cum laude, dan menjadi
                representasi mahasiswa untuk memberikan pidato pada upacara
                kelulusan. Tak hanya itu, ia melakukan hal tersebut sambil
                mendirikan dua inisiatif, Puzzle Diri beserta Cerita Kubi.
              </span>{" "}
              “Belajar itu menyenangkan. Belajar itu menggairahkan.”
            </p>
          </div>
        </section>
        <section className="bg-black space-x-4 grid-system-container p-5">
          <div className="row-start-2 col-start-1 col-span-3 flex flex-col items-start justify-start gap-5 text-justify">
            <p className="text-sm">
              Kak Wanda menunjukkan sendiri dengan usaha bagaimana pencarian
              ilmu tak terbatas suatu timeline tertentu. Dalam prosesnya, ia
              menemukan kembali rasa percaya dirinya.
            </p>
            <Image
              src={"/images/focus-on/32.png"}
              alt="Wanda"
              width={212}
              height={123}
            />{" "}
            <p className="text-sm">
              <strong>Childfree, Hak Asasi</strong>
              <br />
              Diantara pekerjaan lainnya, Kak Wanda juga sedang berusaha untuk
              membuat proyek thesis-nya menjadi tulisan populer. Karya keduanya
              berhubungan dengan topik childfree, khususnya voluntary childfree,
              yaitu keputusan untuk tidak memiliki anak berdasar pilihan bukan
              karena tidakmampuan (involuntary). Harapannya, buku tersebut dapat
              menjadi riset groundbreaking dan referensi studi gender pada
              konteks Indonesia yang masih jarang terlihat.
            </p>
          </div>
          <div className="row-start-2 col-start-5 col-span-3 flex flex-col items-start justify-start gap-5 text-justify">
            <p className="font-junicode">
              “Aku ingin childfree ini bisa jadi pemahaman umum, bahwa childfree
              itu hak, loh. Itu adalah hak asasi. Perempuan punya dan boleh
              memiliki hak kesehatan seksual dan reproduksi bagi perempuan. Jadi
              kita bisa saling memahami, saling berempati, tak hanya mengecap
              bahwa ‘perempuan tidak punya anak itu atau sebagainya’. Dicap
              stigma dan mitos, padahal cerira perempuan itu berbeda-beda.”
            </p>
            <p className="text-sm">
              Berbasis di Jakarta, Kak Wanda bersemangat dengan visi ia
              kedepannya.
            </p>
            <Image
              src={"/images/focus-on/33.png"}
              alt="Wanda Speaking"
              width={223}
              height={143}
            />{" "}
            <p className="text-sm">
              <strong>Resolusi Diri</strong>
              <br />
              <span className="font-junicode">
                “Makin kesini, makin jauh berjalan, makin menemukan puzzle diri
                aku sebagai manusia. Sekarang aku umur 30, aku engga sabar untuk
                umur 35, dan seterunya. Karena aku yakin kehidupan aku akan jauh
                lebih seru.”
              </span>
            </p>
          </div>

          <div className="row-start-2 col-start-9 col-span-3 flex flex-col items-center justify-start gap-5 text-justify">
            <p className="text-sm">
              Perbedaan tingkat pendidikan dan nilai baru sempat membentuk ‘gap’
              pemahaman antara Kak Wanda dan keluarga. Kak Wanda menemukan
              bukunya yang mengeksplorasi peran perempuan tradisional malah
              menjadi suatu titik resolusi bersama orang tuanya. 
            </p>
            <p className="font-junicode">
              “Awalnya aku juga mikir pada saat mau menerbitkan buku mengenai
              reaksi keluargaku. Surprisingly, saat aku menerbitkan buku ini,
              karya ini jadi jawaban bagi mereka. Awalnya mereka mempersalahkan
              status lajang aku. Pemahaman lajang juga mungkin terbatas,
              dipahaminya sebagai tidak ingin menikah sama sekali atau jomblo
              terus. Kasarnya ya tidak laku. Padahal aku pernah punya pasangan,
              dan untuk lajang terserah kamu mendefinisikan seperti apa. Jadi
              justru ini jawaban buat orang tua aku, dan mereka bangga aku punya
              karya. Bahwa lajang itu pilihan.”  
            </p>
            <Image
              src={"/images/focus-on/34.png"}
              alt="Wanda Demo"
              width={223}
              height={143}
              className="self-start"
            />{" "}
          </div>
        </section>

        <BackToStart
          onBack={() => {
            resetSavedScroll();
            containerRef.current?.scrollTo({ left: 0, behavior: "smooth" });
          }}
        />
      </main>
    </div>
  );
}

export default Page;
