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
    pageName: "Focus On : Pritta",
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
            <h2 className="row-start-6 col-start-3 col-span-6  font-junicode h-fit w-fit flex flex-col items-start justify-start self-end">
              <span className="uppercase text-[10rem] leading-none self-center">
                Pritta
              </span>{" "}
              <span className="font-ed-mentasta text-[12rem] leading-none -translate-x-28 -translate-y-16">
                Puspitasari
              </span>
            </h2>
            <ul className="w-full self-stretch flex items-start justify-end gap-10 -translate-y-5 text-3xl font-junicode box-border px-5">
              <li>@prittapus</li>
            </ul>
          </div>
          <div className="col-start-1 row-start-7 row-end-[-1] col-span-full box-border pb-5 pl-5 flex items-end justify-start bg-bunga-pritta bg-center bg-no-repeat bg-cover">
            <Link href={"/chapter/4"}>
              <button className="text-xl bg-none  text-white-ivory border-white-ivory border-2 font-junicode w-fit h-fit whitespace-break-spaces p-5 text-center align-middle hover:text-black hover:bg-white-ivory uppercase">
                Kembali
              </button>
            </Link>
          </div>

          <div className="col-span-5 row-start-1 col-start-8 row-span-full flex flex-col items-center justify-end">
            <Image
              className="object-scale-down object-right-top block self-stretch"
              src={"/images/focus-on/speaker/Pritta.png"}
              width={2105 / 4}
              height={2530 / 4}
              alt="Pritta Puspitasari"
            />
          </div>
        </section>
        <section className="bg-black space-x-4 grid-system-container p-5">
          <div className="row-start-2 col-start-1 col-span-3 flex flex-col items-start justify-start gap-5 text-justify">
            <p className="text-sm">
              Kak Pritta lahir dan besar di Bandung, asli orang Sunda. Ia hidup
              dan tinggal sejak kecil hingga masa perkuliahan di rumahnya,
              daerah Kopo, Bandung. Besar di keluarga yang cukup, tapi tak
              berlebih membuat Kak Pritta dan keluarga paham tentang nilai
              pendidikan.
              <br />
              <br />
              Terkait pemaknaan identitas perempuan, Kak Pritta merasa saat
              bertumbuh di rumah tidak pernah ada perbedaan perlakuan antara
              dirinya dan saudara-saudaranya yang laki-laki. Saat kecil pula, ia
              menikmati hobi-hobi yang membuatnya dekat dengan banyak teman
              laki-laki, seperti trekking dan hiking. Hal ini kembali ia temui
              saat bekerja dan harus turun di site. Ia mengakui memang komposisi
              perempuan di sana lebih sedikit daripada laki-laki. Pun para
              laki-laki di sana lebih protektif terhadap pekerja perempuan.
              Namun, dalam lingkungan sosial, mereka membaur.
            </p>
            <Image
              src={"/images/focus-on/28.png"}
              alt="Pritta Running"
              width={200}
              height={140}
            />{" "}
          </div>
          <div className="row-start-2 col-start-5 col-span-3 flex flex-col items-start justify-start gap-5 text-justify">
            <p className="text-sm">
              <span className="font-junicode text-base">
                “Ada sih digodain tipis, cuma aku sih cuek aja ya. Malah di site
                dulu lebih gampang bergaul dan membaur. Kalau di kota kan mereka
                lebih banyak berkegiatan sama keluarga. Dulu kalau di site,
                weekend kadang ke Danau Toba bareng. Aku juga merasa saat di
                site aku lebih ga grogi ketemu laki-laki. Dibawa santai. Banyak
                temenan sama om-om dan bapak-bapak.”
              </span>
              <br />
              <br />
              Membicarakan tentang karir, Kak Pritta menyatakan bahwa ia tidak
              punya visi khusus yang besar, banyak dari keputusan karirnya
              didasari oleh pernyataan “Why not?”. Tapi, keberaniannya untuk
              mengambil langkah-langkah berani ini membukakan banyak alur hidup
              yang dinamis.
              <br />
              <br />
              <span className="font-junicode text-base">
                “Setelah kuliah aku belum dapat kerja, terus ada yang menawarkan
                beasiswa S2 ke Thailand. Belum ada yang mau mengambil beasiswa
                tersebut. Tapi, aku pikir why not? Lagipula, fokus studinya
                masih linear. Sehabis S2, sempat gak mau pulang. Tapi, akhirnya
                diminta pulang saat ada tawaran jadi environmental resource
                management.”
              </span>
            </p>
          </div>
          <div className="row-start-2 col-start-9 col-span-3 flex flex-col items-center justify-start gap-5 text-justify">
            <p className="text-sm">
              Sempat beberapa tahun bekerja di site dan operasi, Kak Pritta
              mengaku kalau dia tidak suka dengan rutinitas. Ia lebih suka
              pekerjaan yang dinamis dan membuka cakrawala baru. Ia sekarang
              banyak menangani proyek-proyek energi terbarukan, baik angin dan
              solar. Ia juga masih mengerjakan proyek-proyek infrastruktur.
              <br />
              <strong>Kontribusi</strong>
              <br />
              Untuk saat ini Kak Pritta masih menikmati episode hidupnya di
              Thailand. Pun jika ditawari pekerjaan lain di luar Indonesia, di
              tempat-tempat yang lebih unik, ia akan terima tawaran tersebut.
              <br />
              <br />
              <span className="font-junicode text-base">
                “Kontribusi kan bukan berarti harus bekerja dan tinggal di
                Indonesia. Kita juga bisa mulai mengenalkan Indonesia di luar
                negeri.”
              </span>
              <br />
              <br />
              <strong>Perempuan dan Hubungan</strong>
              <br />
              Pertanyaan tentang mendapatkan pasangan dan membangun keluarga
              telah dilontarkan oleh orang-orang terdekat Kak Pritta. Ia paham
              alasan dibalik pertanyaan-pertanyaan tersebut. Tapi, ia selalu
              menjawabnya dengan sentimen yang tidak serius. Membangun rumah
              tangga merupakan sebuah keinginan, namun memang belum saatnya.
            </p>
          </div>
        </section>
        <section className="bg-black space-x-4 grid-system-container p-5">
          <div className="row-start-2 col-start-1 col-span-3 flex flex-col items-start justify-start gap-5 text-justify">
            <p className="font-junicode">
              “Usaha ya usaha tapi kita nggak jangan sampai asal milih, baju aja
              milih apa lagi pasangan. Untuk sekarang, aku nikmatin hidup aja.”
            </p>
            <p className="text-sm">
              Ia menekankan bahwa membangun rumah tangga dengan seorang
              laki-laki merupakan pilihan untuknya, bukan keharusan. Kebahagiaan
              berasal dari diri sendiri. Memang kebahagiaan tersebut akan lebih
              jika ada seseorang yang dapat menjadi tempat berbagi.
            </p>
            <p className="font-junicode">
              “Ekspektasi ya ga muluk-muluk, pengen sharing hidup. Aku ingin
              hidup dengan setara, tapi masih punya ekspektasi untuk pasangan
              agar dapat menjadi imam.”
            </p>
            <p className="text-sm">
              Mengenai hubungan perempuan dan anak, Kak Pritta memang suka dan
              ingin punyak anak. Walaupun sudah berada di paruh akhir dekade
              30an, Kak Pritta masih optimis dengan prospek membesarkan anak.
            </p>
            <p className="font-junicode">
              “Ibuku dulu punya aku saat umur 40. Bukan tidak mungkin dengan
              teknologi sekarang wanita bisa punya anak di usia-usia yang tidak
              kita bayangkan sebelumnya.”
            </p>
          </div>
          <div className="row-start-2 col-start-5 col-span-3 flex flex-col items-start justify-start gap-5 text-justify">
            <p className="text-sm">
              <strong>Kepekaan Lingkungan dan Maraton Pembangunan</strong>
              Kak Pritta menganggap dirinya bukanlah seseorang yang hobi khotbah
              soal keadilan lingkungan. Ia berpendapat bahwa kepekaan terhadap
              isu lingkungan harusnya merupakan suatu yang praktis. Secara
              logika dasar, tidak ada manusia yang mau lingkungannya rusak.
            </p>
            <p className="font-junicode">
              “(Soal perubahan iklim), kita mau ga mau harus adaptasi. Kalau
              cuaca tidak bisa diprediksi, ya sekarang persoalannya bagaimana
              cara biar tidak lebih parah. Aku percaya bahwa manusia pandai
              beradaptasi.”
            </p>
            <p className="text-sm">
              Ide praktikalitas ini kemudian ia jelaskan pula dalam
              bingkai-bingkai lain, seperti dalam isu pembangunan ekonomi dan
              lingkungan berkelanjutan yang sering kali bergesekan
              kepentingannya. Idealnya, kedua dapat berjalan beriringan seperti
              dalam kerangka ekonomi hijau.
            </p>
            <Image
              src={"/images/focus-on/29.png"}
              alt="Pritta in front of wind farms"
              width={330}
              height={135}
            />{" "}
          </div>
          <div className="row-start-2 col-start-9 col-span-3 flex flex-col items-center justify-start gap-5 text-justify">
            <p className="font-junicode">
              “Aku sendiri sering mikir soal green economy, apakah benar ini
              niatnya tulus untuk lingkungan? Tapi, sepertinya tidak penting
              untuk mempertanyakan motivasi orang lain. Kalau memang hasil yang
              diinginkan adalah menjadi lebih baik, why not?”
            </p>
            <p className="text-sm">
              <strong>
                Lingkungan dan Keberlanjutan: Dilemma-Dilemma Pritta
              </strong>
              <br />
              Melihat kembali rencana-rencana energi terbarukan di Indonesia,
              Kak Pritta mengakui ada banyak paradoks yang mengiringi kerangka
              tersebut. Ia menemukan bahwa hambatan terbesar ketersediaan energi
              di Indonesia, terutama di wilayah pinggir, bukanlah sumber daya
              alam. Namun, kurangnya infrastruktur berkelanjutan yang memadai.
            </p>
            <p className="font-junicode">
              “Sumber daya alam memang ada, tapi kita masih terbentur dengan
              masalah bagaimana mengalirkan energi ini ke masyarakat secara
              langsung, tidak perlu ke PLN pusat, begitu.”
            </p>
          </div>
        </section>
        <section className="bg-black space-x-4 grid-system-container p-5">
          <div className="row-start-2 col-start-1 col-span-3 flex flex-col items-start justify-start gap-5 text-justify">
            <p className="text-sm">
              Kak Pritta juga mempertanyakan paradoks yang ia temui dalam
              pengembangan kendaraan listrik di Indonesia. Memang dalam
              praktiknya dapat dikategorikan sebagai penggunaan energi yang
              berkelanjutan, namun apakah dalam prosesnya demikian pula
              merupakan persoalan yang lain.
            </p>
            <p className="font-junicode">
              “Jadi paradoks ya Electrical Vehicle (EV) itu. Kalau sumber
              listriknya masih dari batu bara dan baterainya ditambang dari
              Halmahera yang lingkungannya dirusak, terus bagaimana?”{" "}
            </p>
            <p className="text-sm">
              Kak Pritta berpendapat hambatan ini bisa diselesaikan dengan
              impact assessment and trade-off yang akurat.
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
