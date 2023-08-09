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
    pageName: "Focus On : Karina",
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
              <span className="uppercase text-[10rem] leading-none">
                Karina
              </span>{" "}
              <span className="font-ed-mentasta text-[12rem] leading-none -translate-x-52 -translate-y-5">
                Soemarwoto
              </span>
            </h2>
            <ul className="w-full self-stretch flex items-start justify-end gap-10 -translate-y-5 text-3xl font-junicode box-border px-5">
              <li>www.rootd.nl</li>
            </ul>
          </div>
          <div className="col-start-1 row-start-7 row-end-[-1] col-span-full box-border pb-5 pl-5 flex items-end justify-start bg-bunga-karina bg-center bg-no-repeat bg-cover">
            <Link href={"/chapter/4"}>
              <button className="text-xl bg-none  text-white-ivory border-white-ivory border-2 font-junicode w-fit h-fit whitespace-break-spaces p-5 text-center align-middle hover:text-black hover:bg-white-ivory uppercase">
                Kembali
              </button>
            </Link>
          </div>
          <div className="col-span-6 row-start-1 col-start-7 row-span-full flex flex-col items-center justify-end">
            <Image
              className="object-scale-down object-right-bottom block self-stretch"
              src={"/images/focus-on/speaker/Karina.png"}
              width={2677}
              height={2881}
              alt="Karina Soemarwoto"
            />
          </div>
        </section>
        <section className="bg-black space-x-4 grid-system-container p-5">
          <div className="row-start-2 col-start-1 col-span-4 flex flex-col items-start justify-start gap-5 text-justify">
            <p className="text-sm">
              Lahir di Bandung namun tumbuh besar hampir seluruh hidupnya di
              luar negeri, hidup Kak Karina sebagai imigran generasi kedua di
              Belanda adalah contoh corak kisah diaspora Indonesia. Menurut Kak
              Karina utamanya ia tumbuh besar dengan tiga nilai: kerja keras,
              kejujuran, dan kewajiban sebagai seorang Muslim. Mengambil
              inspirasi dari kakek di sisi Ayah, Prof. Otto Soemarwoto,
            </p>
            <Image
              src={"/images/focus-on/1.png"}
              alt="Prof. Otto Soemarwoto"
              width={64}
              height={84}
              className=""
            />
            <p className="font-junicode text-base">
              “Dia sangat berpengetahuan, peduli dengan keluarganya, dan
              memiliki etika kerja keras –kalau kamu mau bekerja keras, kamu
              akan mencapai apa yang kamu mau, ia tumbuh dengan ekspektasi besar
              mengenai ambisinya.”
              <br />
              <br />
              “Dulu pada saat ditanya ingin jadi apa, aku ambisi banget, I want
              to be everything at once! Tapi sering umur, aku sadar bahwa ada
              prioritas dalam hidup, jadi tergantung dengan prioritas kita.
              Karier tidak tentu selalu jadi nomor satu. Kita bisa mengejar
              sampai tidak ada habisnya –tetapi suatu saat kita harus belajar
              juga untuk bahagia dengan apa yang kita punya. Selalu ada sesuatu
              yang lebih, jadi kita harus belajar merasa cukup.”, ujarnya saat
              merefleksikan pertanyaan mengenai perbedaan nilai yang ia pegang
              sekarang pada umur 30 tahun dan masa lalulnya.  
            </p>
          </div>
          <div className="row-start-2 col-start-5 col-span-4 flex flex-col items-start justify-start gap-5 text-justify">
            <p className="text-sm">
              Memilih jurusan Fisika Murni atas dasar menyukai eksplorasi
              filosofis dalam studinya, Kak Karina melanjutkan studi tersebut
              hingga mengambil gelar S2. Tak hanya itu, keinginannya untuk
              belajar Bahasa Arab juga mendorongnya untuk mengambil satu jurusan
              lagi, yaitu Studi Timur Tengah. Lulus dari perkuliahan di Leiden
              University dengan dua gelar master, Kak Karina merasa bahwa ia
              ingin terus eksplorasi karier lebih dari sekedar seorang
              akademisi. Hal inilah yang membawa seseorang dengan latar
              belakangnya yang unik untuk menjadi seorang konsultan bidang
              investasi berkelanjutan.
            </p>
            <p className="font-junicode text-base">
              <span className="font-zmg">
                <strong>
                  Berkontribusi dalam Pembangunan Sistem Finansial Baru
                </strong>
              </span>
              <br />
              “Ada stereotipe bahwa bekerja di bidang finansial kamu tidak dapat
              memberi dampak ke isu kemanusiaan, tetapi bagian investasi ini
              berusaha untuk melakukan sesuatu yang sedikit berbeda. Pekerjaanku
              sekarang adalah mengajak investor, kebanyakan institusi, untuk
              mengalokasikan portofolio mereka ke hal-hal yang berkelanjutan.”
            </p>
            <Image
              src={"/images/focus-on/2.png"}
              alt="Conversation with Karina"
              width={199}
              height={111}
            />
          </div>
          <div className="row-start-2 col-start-9 col-span-3 flex flex-col items-start justify-start gap-5 text-justify">
            <p className="text-sm">
              Harapannya, Kak Karina dapat berkontribusi ke sistem finansial
              yang memikirkan dampak jangka panjang.
            </p>
            <p className="font-junicode">
              “Tak hanya memaksimalkan keuntungan, tapi juga berbuat baik untuk
              masyarakat. Aku rasa ini tidak mutually exclusive –kamu bisa
              menghasilkan uang sekaligus berbuat baik. Aku rasa sekarang
              rencanaku berkontribusi lebih banyak dalam bidang ini.” 
            </p>

            <p className="text-sm">
              <strong>Keutamaan Representasi</strong>
              <br />
              Pengalamannya di bidang Fisika yang hanya memiliki 2 perempuan
              dari sekitar 100 orang menjadi salah satu observasi Kak Karina
              mengenai kepentingan representasi. Meskipun sekarang kemungkinan
              berbeda, terdapat stereotipe pada sektor yang male-dominated. Dari
              komentar ‘Untuk apa kamu disini?’ dari teman seangkatan hingga
              pengalaman tidak mengenakkan dengan fakultas, kurangnya diversitas
              dapat meningkatkan kemungkinan prejudis pada lingkungan. Setelah
              tidak menemukan tantangan yang sama di lingkungan lain, ia merasa
              jumlah wanita yang lebih banyak berhubungan dengan hal tersebut.
              Kak Karina juga menegaskan keperluan keberadaan lingkungan yang
              suportif.
            </p>
          </div>
        </section>
        <section className="bg-black space-x-4 grid-system-container p-5">
          <div className="row-start-2 col-start-1 col-span-3 flex flex-col items-start justify-start gap-5 text-justify">
            <p className="font-junicode text-base">
              “Pastikan kamu juga terekspos ke lingkungan lain. Buat teman dari
              lingkungan lain. Karena kalau kamu bertahan di suatu lingkungan
              yang tidak suportif, dan mereka mengatakan hal tentang kamu,
              seperti contohnya wanita tidak pantas di sini atau kamu tidak
              kompeten, bahayanya adalah kamu mulai percaya dengan hal tersebut.
              Jadi sangat penting kamu punya tempat untuk pergi dan mendapatkan
              sebuah tempat untuk ‘cek kewarasan’, orang-orang diluar lingkungan
              yang akan mengatakan ‘wah, itu aneh’. Biarkan ada orang yang
              mendukung kamu.”
            </p>
            <p className="text-sm">
              Untuk tempat-tempat yang sedang ingin membuat ruang lebih aman
              untuk wanita, penting untuk ia memulai dengan mengakui jika
              terjadi diskriminasi. Kedua, adalah berdialog dengan grup orang
              yang merasakan diskriminasi tersebut. Ketiga, solusi yang jangka
              panjang adalah kepentingan representasi itu sendiri, sehingga
              memperluas pandangan lingkungan kerja.
            </p>
          </div>
          <div className="row-start-2 col-start-5 col-span-3 flex flex-col items-start justify-start gap-5 text-justify">
            <p className="text-sm">
              <strong>Negosiasi Hubungan dan Ekspektasi Multikultural</strong>
              <br />
              Sebagai seorang wanita Indonesia yang menikah dengan suami
              kebangsaan Inggris, ia berkomentar,
            </p>

            <p className="font-junicode text-base">
              “Salah satu hal yang ingin aku komentari, setidaknya di masyarakat
              Eropa sekarang, topik pemberdayaan perempuan selalu diasosiasikan
              dengan definisi wanita harus ambisius dan mengejar karier. Aku
              mengerti hal itu dan mengapa mereka berpikir hal tersebut. Tapi,
              aku rasa yang kita kurang sadari pemberdayaan adalah tentang
              pilihan untuk memilih.”
            </p>

            <p className="text-sm">
              Dalam kasus Kak Karina yang dibesarkan dengan norma lebih
              tradisional, ia punya pemikiran berbeda dari [beberapa contoh]
              wanita di Belanda. Mereka berkata, ‘Oh sebagai wanita independen,
              artinya setelah menikah aku masih akan independen secara finansial
              dari pasangan’. Kak Karina sendiri merasa,
            </p>
          </div>
          <div className="row-start-2 col-start-9 col-span-3 flex flex-col items-start justify-start gap-5 text-justify">
            <p className="font-junicode">
              “Oh ya aku tahu hak dalam agamaku, jadi aku bukan sebagai pencari
              nafkah utama. Aku akan terus bekerja karena aku ingin, dan apa
              yang kuperoleh adalah uangku. Kita bisa menggunakan uangnya untuk
              hal rekreasi, tapi kepentingan penyedia utama masih ada di suami.
              Untungnya, dia setuju, dan sekarang ada pembagian kerja dimana ia
              punya privilese untuk bekerja penuh selama aku mengurus keluarga.”
            </p>
            <p className="text-sm">
              Memiliki nilai yang sama, fleksibilitas, dan komunikasi terbuka
              menjadi basis hubungan mereka.
            </p>
            <Image
              src={"/images/focus-on/3.png"}
              alt="Conversation with Karina"
              width={339}
              height={166}
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
