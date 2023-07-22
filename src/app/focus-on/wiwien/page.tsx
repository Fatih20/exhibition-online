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
    pageName: "Focus On : Wiwien",
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
            <h2 className="col-span-6 font-junicode h-fit w-fit flex flex-col items-start justify-start self-end translate-x-20">
              <span className="uppercase text-[10rem] leading-none self-center">
                Wiwien
              </span>{" "}
              <span className="font-ed-mentasta text-[12rem] leading-none -translate-x-52 -translate-y-20">
                Wiyonoputri
              </span>
            </h2>
            <ul className="w-full self-stretch flex items-start justify-end gap-10 -translate-y-5 text-3xl font-junicode box-border px-5">
              <li>@interpretasi.indonesia</li>
              <li>@wiwienjo</li>
            </ul>
          </div>
          <div className="col-start-1 row-start-7 row-end-[-1] col-span-full box-border pb-5 pl-5 flex items-end justify-start bg-bunga-wiwien bg-center bg-no-repeat bg-cover">
            <Link href={"/chapter/4"}>
              <button className="text-xl bg-none  text-white-ivory border-white-ivory border-2 font-junicode w-fit h-fit whitespace-break-spaces p-5 text-center align-middle hover:text-black hover:bg-white-ivory uppercase">
                Kembali
              </button>
            </Link>
          </div>
          <div className="col-span-6 row-start-1 col-start-8 row-span-full flex flex-col items-center justify-end">
            <Image
              className="max-h-full object-scale-down object-right-bottom block self-stretch"
              src={"/images/focus-on/speaker/Wiwien.png"}
              width={2207}
              height={2237}
              alt="Wiwien Wiyonoputri"
            />
          </div>
        </section>
        <section className="bg-black space-x-4 grid-system-container p-5">
          <div className="row-start-2 col-start-1 col-span-3 flex flex-col items-start justify-start gap-5 text-justify">
            <p className="text-sm">
              Masa kecil Bu Wiwien dijalani di Sukabumi, lalu pindah dari daerah
              Tebet ke Condet, Jakarta Timur untuk menjalani sekolah dasarnya.
              Ketika ditanyakan mengenai hidupnya di Jakarta, ia bercerita
              dengan tertawa getir mengenai masa lalunya.
              <br />
              <br />
              <span className="font-junicode text-base">
                “Dulu tuh emang pulang sekolah, main-main kerjanya. Kita
                betul-betul waktu SD jalan kaki, sebagian besar teman saya pada
                gak pake sepatu, dan kita cukup syok sih. Kita gak tahu dulu Ibu
                saya berhutang untuk sekolah saya. Pindah ke Condet tuh gaada
                listrik gaada apa-apa, jadi diminta harus main bekel dan belajar
                pas siang supaya kelihatan.”
              </span>
              <br />
              <br />
              Tapi dahulu Bu Wiwien tidak pernah merasa kekurangan. Ia merasa
              hal ini juga berhubungan dengan kemampuan Ibunya mengolah uang,
              perasaan ‘sama’ tanpa pembeda dengan sekitarnya, dan kemampuan
              untuk ‘membawa fun’ dengan keadaan.
              <br />
              <br />
            </p>
          </div>
          <div className="row-start-2 col-start-5 col-span-3 flex flex-col items-start justify-start gap-5 text-justify">
            <p className="text-sm">
              <strong>Peningkatan Kapasitas</strong>
              <br />
              Setelah ia melewati pendidikan S1 Perencanaan Wilayah dan Kota ITB
              di subspesialisasi pariwisata dan menjadi peneliti di lembaga,
              salah satu titik besar di hidupnya adalah pada saat ia terpilih
              dalam program leadership Lead. Program ini berfokus tentang
              sustainable development dan mengundang para ‘leadership-to-be’
              dari seluruh dunia. Ia juga pernah mengikuti pelatihan di London
              dan Belgia.
            </p>
            <p className="text-sm">
              <strong>Interpretasi</strong>
              <br />
              Interpretasi adalah proses “experience storytelling” yang dapat
              menghubungkan tamu dengan suatu tempat. Proses ini tidak hanya
              diceritakan, tetapi juga dirasakan sebagai aktivitas. Contohnya,
              jika kita membuat event ‘canoeing’ di antara pengunjung yang
              mengunjungi Suku Bajo, maka pengunjung juga sudah menjadi bagian
              dan merasakan secuil dari kehidupan mereka. Pertama kali
              terinspirasi saat mengunjungi aktivitas interpretasi di tahun
              1992, kunjungannya di Williamsburg, Amerika Serikat itu akan
              mengubah hidupnya. “Saya jadi berpikir, kenapa ya tidak pernah
              melihat di Indonesia? Setelah itu saya ingin belajar hal
              tersebut.” Untuk publik, tidak ada interpretasi yang bisa
              ‘nation-building’.
            </p>
          </div>
          <div className="row-start-2 col-start-9 col-span-3 flex flex-col items-center justify-start gap-5 text-justify">
            <p className="text-sm">
              <strong>Implementasi bersama Komunitas dan Lapangan</strong>
              <br />
              Pekerjaan Bu Wiwien menggunakan konsep ‘parcipatory planning’.
              Masyarakat lokal diajari menjadi fasilitator, bukan hanya
              mengundang konsultan luar untuk menganalisis keadaan dan pergi
              tanpa dampak. Prosesnya panjang, dengan upaya pelatihan yang dapat
              meningkatkan kapasitas masyarakat pelatih. Contoh pelatihan
              terlama Bu Wiwien berlangsung hingga 63 hari dalam 3 babak, dari
              Bali, Labuan Bajo hingga Pulau Komodo. Orang-orang yang pernah
              dibimbing Bu Wiwien sekarang sudah menjadi ketua taman nasional,
              dan tokoh-tokoh lainnya. Dengan partisipasi mereka, masyarakat
              diberdayakan untuk dapat menilai dan menganalisis proses mereka
              sendiri. Mereka merasa didengar dan dihargai pendapatnya, sehingga
              mereka juga merasa tergerak untuk mempertahankan sistem setelah
              pelatihan selesai.
              <span className="font-junicode text-base">
                “Penelitian tidak hanya bisa terdiam di buku, tapi harus yang
                membekas di masyarakat, komunikasi dengan orang-orangnya,
                paguyuban yang terjadi.”
              </span>
            </p>
            <div className="self-start flex flex-row items-center justify-start gap-5">
              <Image
                src={"/images/focus-on/10.png"}
                alt="Joget is an essential skill"
                width={118}
                height={105}
              />
              <Image
                src={"/images/focus-on/11.png"}
                alt="Wajahlega"
                width={118}
                height={105}
              />
            </div>
          </div>
        </section>
        <section className="bg-black space-x-4 grid-system-container p-5">
          <div className="row-start-2 col-start-1 col-span-3 flex flex-col items-start justify-start gap-5 text-justify">
            <p className="text-sm">
              <strong>Kepemimpinan dan ‘Trust-building’</strong>
              <br />
              <span className="font-junicode text-base">
                “Kita enggak boleh melakukan hal yang membuat masyarakat
                kehilangan kepercayaan kepada kita. Sebagai pihak luar, kalau
                sudah hilang kepercayaan, nanti susah.”
              </span>
              ujar Bu Wiwien. Untuk membaur di lapangan bersama komunitas,
              membutuhkan kemampuan membaca situasi dan sensitivitas yang baik.
              Apalagi dalam pariwisata, kita harus memiliki orang lokal yang
              dapat membantu menyesuaikan konteks budaya masyarakat yang sangat
              beragam.
            </p>
            <Image
              src={"/images/focus-on/12.png"}
              alt="Wiwien"
              width={149}
              height={99}
            />
            <p className="text-sm">
              Dari menghadiri kawinan lokal, ‘joget bersama’ dengan masyarakat,
              ada suatu sistem pengujian ‘trust’. Hal ini besar untuk
              masyarakat, yang suka melihat kita berbaur. Bu Wiwien bercerita
              contoh kisahnya di Pulau Penyengat di dekat Singapura. Di sana, ia
              sempat harus ‘menegur’ dan mengingatkan halus tokoh masyarakat
              saat seseorang dari pihak eksternal tidak memenuhi tatanan budaya
              di pulau tersebut.
            </p>
          </div>
          <div className="row-start-2 col-start-5 col-span-3 flex flex-col items-start justify-start gap-5 text-justify">
            <p className="font-junicode">
              “Hal-hal itu yang tidak semua orang yang mengaku sebagai suatu
              fasilitator memahami. Kita [sebagai orang lokal] yang harus
              mempertahankan budaya.”.
            </p>
            <p className="text-sm">
              Contoh lain saat ia sulit membangun ‘trust’ terjadi pada saat
              membuat pelatihan di taman nasional, akibat pengalaman masyarakat
              yang sering dikecewakan oleh suatu lembaga.
            </p>
            <Image
              src={"/images/focus-on/13.png"}
              alt="Wiwien"
              width={201}
              height={132}
            />
            <p className="text-sm">
              <span className="font-junicode text-base">
                “Solusinya kita harus bikin nangis bersama”,
              </span>
              cetusnya. Setelah proses seremoni yang mengungkit emosi dan
              berbagi perasaan inilah masyarakat bisa melihat ketulusan Bu
              Wiwien dan tim. Hal ini menumbuhkan lagi kepercayaan masyarakat,
              memungkinkan pelatihan utnuk berlangsung.
            </p>
          </div>
          <div className="row-start-2 col-start-9 col-span-3 flex flex-col items-center justify-start gap-5 text-justify">
            <p className="text-sm">
              <strong>Bekerja Lapangan</strong>
              <br />
              Memang tidak banyak fasilitator yang perempuan. Bu Wiwien sendiri
              berasumsi memang hal ini karena pekerjaanya berdasar di lapangan
              yang cukup ‘demanding’ secara fisik dan waktu, berkelana ke banyak
              daerah dengan perjalanan yang berat, hingga jauh dari keluarga.
              <span className="font-junicode text-base">
                “Repot banget, kadang. Atau ada kegiatan malam juga yang menyita
                waktu, jadi tidak bisa istirahat.”.
              </span>
              Bukan berarti wanita tidak mampu, lebih ke kondisi yang cenderung
              melelahkan.
            </p>
            <Image
              src={"/images/focus-on/14.png"}
              alt="Wiwien"
              width={190}
              height={135}
            />
            <p className="text-sm">
              <strong>Potensi Heritage Indonesia</strong>
              <br />
              Salah satu yang disayangkan oleh Bu Wiwien adalah kurangnya
              Indonesia dapat menghargai dan menggunakan kekayaan heritage
              milikinya. Hal ini terlihat dari perbedaan alokasi resource yang
              diberikan lembaga lokal versus lembaga asing hingga kurangnya
              pelatihan kapasitas guide.
            </p>
          </div>
        </section>
        <section className="bg-black space-x-4 grid-system-container p-5">
          <div className="row-start-2 col-start-1 col-span-3 flex flex-col items-start justify-start gap-5 text-justify">
            <p className="text-sm">
              Bu Wiwien sempat menegur keras terhadap seorang guide karena
              menganggap enteng Komodo, subjek heritage-nya yang harusnya ia
              hormati. Keesokannya, guide tersebut berubah.
            </p>
            <Image
              src={"/images/focus-on/15.png"}
              alt="Buaya UNESCO"
              width={114}
              height={123}
            />
            <p className="text-sm">
              <span className="font-junicode text-base">
                “They just don’t understand. Nggak ada yang pernah mengajari apa
                artinya menjadi seorang ‘naturalist guide’.”
              </span>{" "}
              Peningkatan kapasitas dan pemahaman ini menjadi kunci untuk
              menggunakan potensi pariwisata Indonesia yang lebih mendalam.
            </p>
            <Image
              src={"/images/focus-on/16.png"}
              alt="Wiwien"
              width={210}
              height={120}
            />
          </div>
          <div className="row-start-2 col-start-5 col-span-3 flex flex-col items-center justify-start gap-5 text-justify">
            <p className="text-sm">
              <strong>Hubungan dan Keluarga</strong>
              <br />
              Bu Wiwien sendiri merasa bahwa memiliki pasangan yang suportif
              adalah kunci. Teman selama 8 tahun sebelum hubungan mereka berubah
              menjadi romantis, ia merasa tidak mungkin bisa nyaman dengan
              seseorang yang baru saja dikenalnya. Pekerjaanya yang membutuhkan
              komitmen waktu untuk bepergian ke seluruh pelosok Indonesia tidak
              akan mungkin tanpa pengertian dari pasangan.
            </p>
            <p className="font-junicode">
              “Kita berdua kan punya kesempatan dapet beasiswa kemana mana.
              Pernah tuh, suatu saat temen-temen kantornya nanya dia kan, gimana
              ditinggal istri? Suamiku ngejawab, istri saya bisa dengan usaha
              sendiri tanpa ongkos saya kemana mana, masa saya ngelarang?”
            </p>
            <p className="text-sm">
              <span className="font-junicode text-base">
                “Dia selalu nyuruh saya nyoba dulu daftar segala hal, lagian
                belum tentu diterima!”
              </span>
              Bu Wiwien tertawa.
            </p>
            <Image
              src={"/images/focus-on/17.png"}
              alt="Wiwien"
              width={330}
              height={105}
            />
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
