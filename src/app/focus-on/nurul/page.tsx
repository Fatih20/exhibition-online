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
    pageName: "Focus On : Nurul",
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
                Nurul
              </span>{" "}
              <span className="font-ed-mentasta text-[12rem] leading-none -translate-x-48 -translate-y-16">
                Izzati
              </span>
            </h2>
            <ul className="w-full self-stretch flex items-start justify-end gap-10 -translate-y-5 text-3xl font-junicode box-border px-5">
              <li>@izzati715</li>
            </ul>
          </div>
          <div className="col-start-1 row-start-7 row-end-[-1] col-span-full box-border pb-5 pl-5 flex items-end justify-start bg-bunga-nurul bg-center bg-no-repeat bg-cover">
            <Link href={"/chapter/4"}>
              <button className="text-xl bg-none  text-white-ivory border-white-ivory border-2 font-junicode w-fit h-fit whitespace-break-spaces p-5 text-center align-middle hover:text-black hover:bg-white-ivory uppercase">
                Kembali
              </button>
            </Link>
          </div>
          <div className="translate-x-20 col-span-4 row-start-1 col-start-8 row-span-full flex flex-col items-center justify-end">
            <Image
              className="object-scale-down object-right-top block self-stretch"
              src={"/images/focus-on/speaker/Nurul.png"}
              width={1831}
              height={2647}
              alt="Nurul Izzati"
            />
          </div>
        </section>
        <section className="bg-black space-x-4 grid-system-container p-5">
          <div className="row-start-2 col-start-1 col-span-3 flex flex-col items-start justify-start gap-5 text-justify">
            <p className="text-sm">
              Lulus S1 Kimia Murni di Malang, ia berefleksi.
              <span className="font-junicode text-base">
                “Selepas lulus dari jenjang S-1, sebetulnya saya tidak tahu mau
                ngapain saat kembali ke Sumbawa. Di Sumbawa, tidak ada banyak
                contoh figur orang-orang yang ke luar negeri. Namun, lingkungan
                baru yang memfasilitasi untuk bebas bereksplorasi membuat saya
                semakin enjoy nge-lab sebagai therapeutic and drugs analyst di
                Balepom. Ditambah dengan berburu informasi melalui Campus Expo
                dan beberapa kenalan, saya terpecut untuk mulai meluruskan niat
                menuntut pendidikan di luar negeri, bukan sekadar candaan sesama
                teman saja.”
              </span>
            </p>
            <Image
              src={"/images/focus-on/35.png"}
              alt="Nurul Izzati in Russia"
              width={137}
              height={150}
            />{" "}
          </div>
          <div className="row-start-2 col-start-5 col-span-3 flex flex-col items-start justify-start gap-5 text-justify">
            <p className="text-sm">
              Mbak Nurul tumbuh di antara alam sawah dan laut Sumbawa. Ayahnya
              bekerja sebagai guru SD dan ibunya seorang IRT, menekankan
              kepentingan agama, attitude, dan kejujuran. Mengenai peran
              perempuan yang ia lihat sejak kecil, Mbak Nurul menceritakan
              dinamika yang ia lihat dalam keluarga dan keluarga
              besarnya. Keluarga besarnya memiliki pandangan yang lebih
              konservatif mengenai potensi perempuan. Hal ini tidak pernah
              didengarkan serius oleh bapaknya.
            </p>
          </div>
          <div className="row-start-2 col-start-9 col-span-3 flex flex-col items-center justify-start gap-5 text-justify">
            <p className="text-sm">
              <strong>Komitmen Berangkat, Komitmen Kembali</strong>
              <br />
              Dengan proses mengejar skor IELTS yang berdarah-darah sembari
              merawat ibu yang sakit sampai sempat merasa putus asa, Mba Nurul
              akhirnya bisa yakin untuk tes ketiga kalinya. Ia mantap memilih
              Lund sebagai tujuan melanjutkan pendidikan tinggi. Melalui bantuan
              rekan yang pernah belajar di Lund dan founder UTS, komunikasi
              dengan LPDP berbuah manis dan bertepatan dengan Sumbawa yang
              membutuhkan SDM yang bisa membantu mengembangkan daerahnya.
            </p>
            <Image
              src={"/images/focus-on/36.png"}
              alt="Nurul Izzati in Russia"
              width={188}
              height={114}
              className="self-start"
            />{" "}
            <p className="font-junicode">
              “Saya pun sudah menuliskannya bahwa suatu saat nanti saya
              berkomitmen untuk kembali ke Sumbawa.”
            </p>
            <p className="text-sm">
              Pada intinya, Mba Nurul meyakini dan ini pun menjadi harapannya
              bagi beliau,
            </p>
            <p className="font-junicode">
              “Jangan pernah melimitasi diri. Tidak ada pilihan yang salah dari
              berkarier atau bekerja di rumah. Perempuan bisa berkontribusi
              apapun pilihan mereka.”{" "}
            </p>
          </div>
        </section>
        <section className="bg-black space-x-4 grid-system-container p-5">
          <div className="row-start-2 col-start-1 col-span-3 flex flex-col items-start justify-start gap-5 text-justify">
            <p className="text-sm">
              <strong>Transformasi melalui Kompetisi</strong>
              <br />
              Studi S2 di Lund merupakan sesuatu yang berat bagi Mba Nurul. Dari
              standar yang tinggi, barrier dalam bahasa, hingga proses akademik
              di sana, Mba Nurul merasa terdorong untuk berkembang. Terinspirasi
              untuk mengikuti iGEM karena keberadaan tim dari UTS yang ia
              ketahui sebelumnya, ia malah terpilih menjadi ketua tim
              multinasional iGEM Lund. Hal ini berbuah hasil pada saat di sana
              ia pertama kali mendapatkan pujian dan apresiasi tulus dari kolega
              yang cenderung tertutup beserta supervisornya.
              <span className="font-junicode text-base">
                “Orang Indonesia memang terkenal untuk kerja kerasnya. Di sana,
                orang Swedia tidak tergerak untuk berkompetisi --semuanya sudah
                cukup terpenuhi.”.
              </span>
            </p>
            <Image
              src={"/images/focus-on/37.png"}
              alt="Nurul Izzati having foods"
              width={194}
              height={113}
              className="self-start"
            />{" "}
            <p className="text-sm">
              Mba Nurul meningkatkan kepercayaan dirinya seiring dengan
              pencapaian tim untuk meraih emas. Sekarang, ia semakin percaya
              dengan potensi SDM Indonesia termasuk dirinya, yang ia pikir perlu
              untuk perlahan mengganti pikiran ‘minder’ saat dibandingkan dengan
              orang luar.
            </p>
          </div>
          <div className="row-start-2 col-start-5 col-span-3 flex flex-col items-start justify-start gap-5 text-justify">
            <p className="text-sm">
              <strong>Hubungan dan Keluarga</strong>
              <br />
              Soal keluarga dan hubungan, Mbak Nurul turut tertawa karena
              kisahnya yang justru lucu.
              <br />
              <br />
              <span className="font-junicode text-base">
                “Enggak mau sama orang Sumbawa, tapi ternyata jadinya malah sama
                orang Sumbawa.”
              </span>
              Mbak Nurul menyadari kalau ia tidak menyetujui patriarki dan tidak
              ingin berkeluarga dengan orang patriarkis.
            </p>
            <p className="font-junicode">
              “Waktu S-2 santai aja dan tipikal terbuka. Tiba-tiba, saat balik
              ke Sumbawa, saya dilamar, tanpa pacaran. Selama pekan-pekan
              pertama setelah dilamar itu, saya mikir gimana cara nolaknya?
              Akhirnya, saya bikin pertanyaan-pertanyaan mengenai patriarki dan
              jawaban dari beliau memuaskan. Saya lihat pros and cons-nya dan
              memenuhi kriteria semua.”
            </p>
            <p className="text-sm">
              Seiring menjalin hubungan pernikahan pun, justru ia merasakan
              peran mendidik anak, melakukan pekerjaan rumah, dan bekerja justru
              bisa bersinergi dengan baik.
            </p>
            <Image
              src={"/images/focus-on/38.png"}
              alt="Nurul Izzati and Flowers"
              width={140}
              height={108}
              className="self-start"
            />{" "}
          </div>
          <div className="row-start-2 col-start-9 col-span-3 flex flex-col items-center justify-start gap-5 text-justify">
            <p className="font-junicode">
              “Saya jadi wakil rektor menikah belum sebulan menjabat. Suami pun
              menjadi wakil atau dekan. Kita enggak punya babysitter, dan kita
              bagi jadwal parenting. Justru suami yang meyakinkan bahwa kalau
              kita sanggup melakukan ini bersama. Di rumah yang sering masak pun
              suami dan pekerjaan domestik lainnya kita biasanya gantian atau
              bagi tugas.”{" "}
            </p>
            <p className="text-sm">
              Hal ini pun pelajaran yang dapat dipetik dari negara Skandinavia
              mengenai parenting style dan life balance.
            </p>
            <p className="text-sm">
              <strong>Kontribusi Kembali</strong>
              <br />
              Saat pulang ke Indonesia, Mba Nurul juga menjadi iGEM Ambassador
              untuk Asia. Dengan kenekatan dan optimisme luar biasa, bersama Mas
              Farhan (kolaborator), akhirnya ia mendirikan Synbio.
              <span className="font-junicode text-base">
                “Ternyata bisa loh, jalan. Ada banyak yang tertarik”.
              </span>{" "}
              Dalam 2 tahun, semakin meningkat jumlah peserta dan minat. Mereka
              juga membentuk paper mengenai potensi synbio komunitas di
              Indonesia bersama.
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
