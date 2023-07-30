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
    pageName: "Focus On : Abigail",
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
            <h2 className="row-start-6 col-start-3 col-span-6  font-junicode h-fit w-fit flex flex-col items-start justify-start self-end">
              <span className="uppercase text-[10rem] leading-none">
                Abigail
              </span>{" "}
              <span className="font-ed-mentasta text-[12rem] leading-none -translate-x-44 -translate-y-20">
                Limuria
              </span>
            </h2>
            <ul className="w-full self-stretch flex items-start justify-end gap-10 -translate-y-5 text-3xl font-junicode box-border px-5">
              <li>@whatisupindonesia</li>
              <li>@bijakmemilih.id</li>
              <li>@abigailimuria</li>
            </ul>
          </div>
          <div className="col-start-1 row-start-7 row-end-[-1] col-span-full box-border pb-5 pl-5 flex items-end justify-start bg-bunga-abigail bg-center bg-no-repeat bg-cover">
            <Link href={"/chapter/4"}>
              <button className="text-xl bg-none  text-white-ivory border-white-ivory border-2 font-junicode w-fit h-fit whitespace-break-spaces p-5 text-center align-middle hover:text-black hover:bg-white-ivory uppercase">
                Kembali
              </button>
            </Link>
          </div>
          <div className="col-span-4 row-start-2 col-start-8 row-[span_7_/_span_7]">
            <Image
              className="object-scale-down object-right-top block"
              src={"/images/focus-on/speaker/Abigail.png"}
              width={1650 / 2}
              height={2519 / 2}
              alt="Abigail Limuria"
            />
          </div>
        </section>
        <section className="bg-black space-x-4 grid-system-container p-5 ">
          <div className="row-start-2 col-start-1 col-span-3 flex flex-col items-start justify-start gap-5 text-justify">
            <p className="text-sm">
              Besar di lingkungan ibukota yang modern, Kak Abigail Limuria
              merupakan anak pertama dari dua bersaudara. Ia besar dengan
              nilai-nilai egalitarian.
              <br />
              <br />
              Terkait pemaknaan identitas perempuan, Kak Abigail sempat
              berbicara tentang kesenjangan gaji perempuan pekerja. Ia melihat
              secara umum bahwa perempuan lebih ragu untuk menegosiasi besaran
              gaji mereka. Kak Abigail merasa memang sebagai perempuan perasaan
              gaenakan itu natural, tapi bukan berarti fungsional. Akal dapat
              menjadi remedi dari kebimbangan tersebut.
            </p>
            <p className="font-junicode">
              “Ada roadblock di pemikiran perempuan. Padahal tidak ada yang
              melarang, tapi mereka malah meragukan diri sendiri. Misalnya, ada
              lowongan pekerjaan, perempuan punya kecenderungan untuk memastikan
              bahwa mereka harus penuhi semua persyaratan pekerjaan terlebih
              dahulu, baru berani daftar. Benang merah dari perempuan-perempuan
              yang pernah aku wawancarai adalah mereka tidak hanya mencoba untuk
              menghapus roadblock struktural, tapi roadblock di pikiran juga.
              They never stop themselves, they wait for someone else to stop
              them.”
            </p>
            <Image
              src={"/images/focus-on/24.png"}
              alt="Ideafest"
              width={217}
              height={147}
            />{" "}
          </div>
          <div className="row-start-2 col-start-5 col-span-3 flex flex-col items-start justify-start gap-5 text-justify">
            <p className="text-sm">
              <strong>Pendidikan dan Transformasi Kesadaran</strong>
              <br />
              Perjalanan akademis Kak Abigail ia lalui sebagian besar di
              lingkungan kosmopolitan. Ia menjalani hari-hari SMP hingga SMA di
              Sekolah Pelita Harapan, kemudian terbang ke Amerika Serikat untuk
              belajar Manajemen Media di bawah Fakultas Seni dan Media, Biola
              University di Los Angeles, Amerika Serikat.
              <br />
              <br />
              Kak Abigail mengakui bahwa secara khusus dan serius ia tertarik ke
              isu sosial dan politik malah setelah menyelesaikan kuliah, saat ia
              merintis What is Up Indonesia (WIUI). Ia menyadari bahwa ia
              tertarik untuk melihat lebih jauh tentang pola-pola politik dan
              sosial di sekitarnya. Pengalaman melihat langsung bergulirnya isu
              #MeTooMovement di Amerika Serikat membuatnya tergerak untuk
              menggali lebih dalam tentang politik gender di Indonesia.
            </p>
          </div>
          <div className="row-start-2 col-start-9 col-span-3 flex flex-col items-start justify-start gap-5 text-justify">
            <p className="text-sm">
              <strong> Proyek Lalita</strong>
              <br />
              “Aku bertanya-tanya, siapa ya role model perempuan di Indonesia.
              Aku ga pernah tau. Lalu, aku menemukan fakta bahwa salah satu
              astronot pertama Asia adalah Bu Pratiwi Sudarmono. Dia sampai
              sekarang masih ngajar di UI! Aku kemudian tergerak untuk buat buku
              tentang perempuan Indonesia. Aku wawancara dari Bu Retno Marsudi
              sampai Grace Natalie. Hasil dari wawancaranya diterbitkan menjadi
              buku berjudul Lalita: 51 Cerita Perempuan Hebat Indonesia. Dari
              pengalaman itu aku belajar kalau politik itu tidak abstrak dan
              jauh, politik itu mempengaruhi semua aspek kehidupan kita.” 
            </p>
            <Image
              src={"/images/focus-on/25.png"}
              alt="Lalita Project"
              width={277}
              height={180}
            />{" "}
          </div>
        </section>
        <section className="bg-black space-x-4 grid-system-container p-5">
          <div className="row-start-2 col-start-1 col-span-3 flex flex-col items-start justify-start gap-5 text-justify">
            <p className="text-sm">
              <strong>Awal mula WIUI</strong>
              <br />
              Mengenai WIUI, Kak Abigail mengaku kalau awalnya ia dan sesama
              perintisnya, Faye Simanjuntak, hanya iseng membagikan informasi
              tentang situasi isu politik dan sosial di Indonesia. Mereka sempat
              panik ketika pengguna instagram antusias berinteraksi dengan
              unggahan tersebut.
              <br />
              <br />
              “Kalau tidak salah, unggahan pertama WIUI itu soal RUU Ketahanan
              Keluarga. Aku merasa khawatir terhadap isinya yang ngawur banget.
              Masa negara mau masuk mengatur keluarga. Implementasinya juga
              belum jelas. Setelah post itu diunggah, malah di-repost sama Dian
              Sastro dan Ernest Prakasa. Faye dan aku sempat panik. Tapi,
              akhirnya platformnya tambah besar. Memang passion-ku rupanya
              disitu.”
            </p>
          </div>
          <div className="row-start-2 col-start-5 col-span-4 flex flex-col items-start justify-start gap-5 text-justify">
            <p className="text-sm">
              <strong>
                Pemuda Urban Kelas Menengah: Kenapa Mereka Penting?
              </strong>
              <br />
              Merespon Pemilu 2024 yang berada di pelupuk mata, Kak Abigail
              bersama Kak Afu dari Think Policy meluncurkan sebuah kanal
              informasi dan diskusi politik, Bijak Memilih. Terkait
              keterlibatannya dengan politik yang lebih “formal” daripada WIUI,
              Kak Abigail kembali menekankan pentingnya partikularitas pesan dan
              target audiens dari kanalnya.
            </p>
            <Image
              src={"/images/focus-on/26.png"}
              alt="WIUI Community Meetup 4"
              width={246}
              height={149}
            />{" "}
            <p className="font-junicode">
              “Afu dan aku sadar kalau kita tidak bisa meraup semua konstituen
              politik di Indonesia. Kita memilih target urban middle class youth
              sebagai target audience karena mereka sendiri sudah masuk 29% dari
              total pemilih aktif di 2024 nanti. Terkait isu dan gerakan akar
              rumput, kami memilih untuk berkolaborasi dan mengamplifikasi pesan
              mereka saja. Selain tidak bijak, tidak efisien juga kalau kami
              mencoba untuk mencaplok semua target audience.”
            </p>
          </div>
          <div className="row-start-2 col-start-9 col-span-3 flex flex-col items-center justify-start gap-5 text-justify">
            <Image
              src={"/images/focus-on/27.png"}
              alt="WIUI with Andovi"
              width={147}
              height={138}
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
