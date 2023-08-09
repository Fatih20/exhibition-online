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
    pageName: "Focus On : Evi",
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
      <RedBar progressPercent={percent} audioFileName="Speaker.mp3" />
      <main
        ref={containerRef}
        className="flex overflow-x-auto overflow-y-hidden items-start flex-nowrap whitespace-nowrap h-full justify-start scrollbar-hide font-zmg text-white"
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
            <h2 className="row-start-6 col-start-3 col-span-6  font-junicode h-fit w-fit flex flex-col items-start justify-start self-center">
              <span className="uppercase text-[10rem] leading-none">Ayu</span>{" "}
              <span className="font-ed-mentasta text-[12rem] leading-none -translate-x-40 -translate-y-20">
                Utami
              </span>
            </h2>
            <ul className="w-full self-stretch flex items-start justify-end gap-10 -translate-y-5 text-3xl font-junicode box-border px-5">
              <li>@utamianandya</li>
            </ul>
          </div>
          <div className="col-start-1 row-start-7 row-end-[-1] col-span-full box-border pb-5 pl-5 flex items-end justify-start bg-bunga-ayu bg-center bg-no-repeat bg-cover">
            <Link href={"/chapter/4"}>
              <button className="text-xl bg-none  text-white-ivory border-white-ivory border-2 font-junicode w-fit h-fit whitespace-break-spaces p-5 text-center align-middle hover:text-black hover:bg-white-ivory uppercase">
                Kembali
              </button>
            </Link>
          </div>
          <div className="col-span-4 row-start-1 col-start-8 row-span-full flex flex-col items-center justify-end">
            <Image
              className="object-scale-down object-right-bottom block self-stretch"
              src={"/images/focus-on/speaker/Ayu.png"}
              width={2024}
              height={2881}
              alt="Ayu Utami"
            />
          </div>
        </section>
        <section className="bg-black space-x-4 grid-system-container p-5 ">
          <div className="row-start-2 col-start-1 col-span-3 flex flex-col items-start justify-start gap-5 text-justify">
            <p className="text-sm">
              Kak Ayu lahir di Jakarta namun sempat belajar untuk studi sarjana
              Teknik Kimia di UGM. Terkait masa kecilnya, ia menggarisbawahi
              peran ibunya sebagai suri taulaudan di hidupnya. Kedua orangtuanya
              sama-sama bekerja sebagai insinyur. 
            </p>
            <p className="font-junicode">
              “Ibu aku dulu sampai SMA di Salatiga dan kuliah di IPB. Kerjanya
              di Sumatra pedalaman sebagai ahli geologis, satu-satunya perempuan
              di lapangan sampai pindah dan resign buat pendidikanku di Padang.
              Ayah juga kerja di company sama dengan site beda. Karena aku
              pernah ngeliat Ibu kerja disitu, aku mendapat impresi bahwa gak
              masalah cewek kerja apapun. Tipikal Ayah aku juga terserah aja,
              kalau dia udah yakin bisa, makanya kasih kepercayaan aja. Jadi
              pacuan buat aku, bahwa aku bisa belajar dari kepercayaan itu.”
            </p>
          </div>
          <div className="row-start-2 col-start-5 col-span-3 flex flex-col items-start justify-start gap-5 text-justify">
            <p className="text-sm">
              <strong>Wanita Pertama di Lapangan</strong>
              <br />
              Awalnya, Kak Ayu magang perusahaan minyak dan gas, yaitu Pertamina
              Hulu Mahakam di Balikpapan. Pada tahun 2012, Kak Ayu mengerjakan
              proyek dosen untuk desain geothermal powerplant. Hingga 2013, ia
              lalu melamar pekerjaan ke perusahaan migas.
            </p>
            <p className="font-junicode">
              “Waktu kerja coba apply di perusahaan, saat interview panel
              ditawarin buat ke bidang geothermal. Kalau cewek, kerjanya di
              lapangan. Yaudah mumpung masih muda, nggak ada yang menghalangi,
              gak apa-apa. Aku masuk di geothermal. Total tim di Salak ada 20
              orang, belum pernah ada cewek. Karena khawatir di lapangan dan ada
              job yang harus dilakukan sampai malam-pagi, jadi bosnya takut pada
              gakbisa survive. Dan aku ngerasa sih, pas panel beneran nanya
              muter-muter memastikan kamu bisa survive gak di lapangan.”
            </p>
          </div>
          <div className="row-start-2 col-start-9 col-span-3 flex flex-col items-start justify-start gap-5 text-justify">
            <p className="text-sm">
              <strong>Adaptasi, Baca Situasi</strong>
              <br />
              Menjadi perempuan yang bekerja di lapangan, ada beberapa perbedaan
              dinamika sosial antara perempuan dan laki-laki yang Kak Ayu
              rasakan.
            </p>
            <p className="font-junicode">
              “Waktu penugasan di daerah Sunda pedalaman, pada meeting pertama,
              bosnya bilang kamu engga usah komentar tentang technical, kamu
              mending dipangku-pangku saja. Aku merasa tersinggung awalnya, tapi
              harus dibercandain karena kalau baper malah lebih berat. Dalam
              kondisi lapangan harus tau caranya adaptasi.”
            </p>
            <p className="font-junicode">
              “Namanya di lapangan, biasanya sama engineer baru, terkadang
              digodain karena mereka jarang melihat perempuan ngelead. Bales aja
              balik godain. Kadang-kadang juga ada WA kalau hal-hal diluar
              kerjaan, kita punya hak untuk gak respon atau respon seadanya
              aja.”
            </p>
            <Image
              src={"/images/focus-on/21.png"}
              alt="Ayu Utami Working"
              width={327}
              height={124}
            />{" "}
          </div>
        </section>
        <section className="bg-black space-x-4 grid-system-container p-5">
          <div className="row-start-2 col-start-1 col-span-3 flex flex-col items-start justify-start gap-5 text-justify">
            <p className="text-sm">
              <strong>Leadership dan Glass Ceiling</strong>
              <br />
              Kak Ayu mengakui bahwa ranah teknis di Indonesia masih tergolong
              ‘klub pria’. Perempuan-perempuan disana sulit untuk masuk ke
              lingkaran yang memiliki kuasa untuk mengambil keputusan berarti
              banyak. Tak sepenuhnya menyalahkan gender, Kak Ayu juga
              berkomentar mengenai kepribadian ekstrovert yang kemungkinan lebih
              mudah berbaur dengan pihak lain.{" "}
            </p>
            <p className="font-junicode text-base">
              “Mungkin agak susah untuk berurusan dengan eksternal. Contohnya
              meeting dengan pemerintah, lenders dari bank karena mayoritas
              banyak cowok. Memang, kita dituntut lebih untuk mengejar, catch
              up.”
            </p>
          </div>
          <div className="row-start-2 col-start-5 col-span-3 flex flex-col items-start justify-start gap-5 text-justify">
            <p className="text-sm">
              <strong>Lingkaran Pertemanan dan Dukungan</strong>
              <br />
              Cerita Kak Ayu sebelumnya tak bermaksud menakuti, lebih suatu
              observasi mengenai hal-hal yang pernah ia lihat. Ia belajar untuk
              melakukan apa yang ia mau dan bekerja sebaiknya. Salah satu hal
              yang berkesan dalam karier Kak Ayu, figur yang meyakinkan ia
              kompeten, adalah bos pertamanya. Ia membentuk Kak Ayu dengan
              memberikan kesempatan dan kepercayaan. Tak hanya itu, Kak Ayu juga
              membuat pertemanan dengan engineer sebayanya, yang membantu
              mendukung keputusannya.
            </p>
            <Image
              src={"/images/focus-on/22.png"}
              alt="Ayu Utami Working"
              width={224}
              height={185}
            />{" "}
            <p className="font-junicode">
              “Dulu aku sempat ragu jika harus tegas. Tetapi aku belajar bahwa
              itu dibutuhkan. Itu kepentingan mencari mentor dan orang yang
              peduli dengan growth kita.”
            </p>
          </div>
          <div className="row-start-2 col-start-9 col-span-3 flex flex-col items-start justify-start gap-5 text-justify">
            <Image
              src={"/images/focus-on/23.png"}
              alt="Ayu Utami Working"
              width={179}
              height={126}
            />{" "}
            <p className="text-sm">
              <strong>Strategi ‘Survive’</strong>
              <br />
              Untuk wanita lain yang sedang mengalami hal yang mirip dengan Kak
              Ayu, ia menitipkan pesan berikut:
            </p>
            <p className="font-junicode">
              “’Take your own pride’ aja. Kamu diberi kesempatan untuk bekerja
              sebaik-baiknya. Nggak usah ikut gosip macam-macam di korporat,
              ambil kerjaan yang cukup. Urusi hidup sendiri jadi saat orang lain
              komen macam-macam kamu enggak perlu ambil pusing.
              <br />
              <br />
              Cari jalanmu sendiri, waktumu sendiri.”
            </p>
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
