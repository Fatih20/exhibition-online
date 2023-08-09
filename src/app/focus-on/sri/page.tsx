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
    pageName: "Focus On : Sri",
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
            <h2 className="row-start-6 col-start-3 col-span-6  font-junicode h-fit w-fit flex flex-col items-start justify-start self-start translate-x-48">
              <span className="uppercase text-[10rem] leading-none self-start">
                Sri
              </span>{" "}
              <span className="font-ed-mentasta text-[12rem] leading-none -translate-x-40 -translate-y-16">
                Izzati
              </span>
            </h2>
            <div className="flex-grow w-full"></div>
            <ul className="w-full self-stretch flex items-start justify-end gap-10 -translate-y-5 text-3xl font-junicode box-border px-5">
              <li>@srizzati</li>
            </ul>
          </div>
          <div className="col-start-1 row-start-7 row-end-[-1] col-span-full box-border pb-5 pl-5 flex items-end justify-start bg-bunga-sri bg-center bg-no-repeat bg-cover">
            <Link href={"/chapter/4"}>
              <button className="text-xl bg-none  text-white-ivory border-white-ivory border-2 font-junicode w-fit h-fit whitespace-break-spaces p-5 text-center align-middle hover:text-black hover:bg-white-ivory uppercase">
                Kembali
              </button>
            </Link>
          </div>
          <div className="col-span-4 row-start-1 col-start-8 row-span-full flex flex-col items-center justify-end">
            <Image
              className="object-scale-down object-right-bottom block self-stretch"
              src={"/images/focus-on/speaker/Sri.png"}
              width={1770}
              height={2428}
              alt="Sri Izzati"
            />
          </div>
        </section>
        <section className="bg-black space-x-4 grid-system-container p-5 ">
          <div className="row-start-2 col-start-1 col-span-3 flex flex-col items-start justify-start gap-5 text-justify">
            <p className="text-sm">
              Kecintaan Kak Izzati kepada membaca sudah dipupuk oleh keluarganya
              dari kecil.{" "}
              <span className="font-junicode text-base">
                “Iya, aku dari kecil tumbuh sama buku. Dulu juga, aku bisa baca
                dari umur tiga, karena memang udah dikenalkan sama huruf dan
                buku sejak awal, yang untungnya didukung dengan adanya
                perpustakaan kecil buku-buku dari kakak-kakakku,”
              </span>
              celetuknya.
              <br />
              <br />
              Kak Sri Izzati adalah penulis yang pernah belajar sebagai
              mahasiswa Psikologi, Universitas Indonesia lalu melanjutkan
              sekolahnya ke Columbia University, New York, kali ini dengan
              konsentrasi studi yang berbeda, yaitu kepenulisan kreatif.
            </p>
            <Image
              src={"/images/focus-on/18.png"}
              alt="Sri Izzati's Books"
              width={206}
              height={193}
            />{" "}
          </div>
          <div className="row-start-2 col-start-5 col-span-3 flex flex-col items-start justify-start gap-5 text-justify">
            <p className="text-sm">
              <strong>Peran Perempuan dan Status Quo</strong>
              <br />
              Kami bertanya mengenai apa makna identitas perempuan bagi Kak
              Izzati. Awalnya, ia tertawa.{" "}
              <span className="font-junicode text-base">
                “Yang lucu dan kepkiran adalah –renungannya tidak ada jawaban,
                I’ve just been told to live.”
              </span>
              <br />
              <br />
              <span className="font-junicode text-base">
                “Kalau mungkin ibu saya yang diwawancara, mungkin dia mengatakan
                bahwa oh iya, ketika saya mau menikah, lalu berumah tangga,
                punya anak, saya harus memastikan harus sesuai dengan status quo
                sebagai perempuan. Makanya, saya melihat bahwa berumahtangga
                memang sebuah status quo. Tapi, aku gak ngerasa bahwa aku
                dibatasi, karena S2 dan S3 juga ayo aja, didukung, walaupun pas
                S1 dulu gak dibolehin sekolah jauh-jauh.”
              </span>
            </p>
          </div>
          <div className="row-start-2 col-start-9 col-span-3 flex flex-col items-start justify-start gap-5 text-justify">
            <p className="text-sm">
              <strong>Kerja dan Transformasi Kesadaran Peran Gender</strong>
              <br />
              Dahulu Kak Izzati menjalani pekerjaan sebagai seorang UX Writer di
              Gojek, dan setelah pulang dari S2 juga terlibat dalam start up
              Govtech.edu. Karena dahulu di lingkungan keluarga tak pernah
              merasa dibatasi, Kak Izzati semakin belajar dinamika peran
              gendernya saat ia mulai dewasa dan masuk lingkungan kerja.{" "}
              <span className="font-junicode text-base">
                “Yang lucu dan kepkiran adalah –renungannya tidak ada jawaban,
                I’ve just been told to live.”
              </span>
              <br />
              <br />
              <span className="font-junicode text-base">
                “Diluar sana tuh orang-orang yang berkoar-koar mengenai hal yang
                aku gak pernah rasain. Makanya, pas itu di Gojek aku sempet ikut
                forum tentang pengaruh perempuan, baru aku belajar tentang rasio
                gender, dan mengapa penting bahwa perempuan harus bekerja. Aku
                juga mungkin sadar bahwa aku menghiraukan isu ini. Baru aku
                kepikiran bahwa aku jarang liat cewek berkerudung di kantor,
                yang gaul dan keren. Makanya, aku baru sadar ini tuh
                representasi, dan aku sadar bahwa aku suka melihat kalau ada
                perempuan yang sukses juga di ranah kerja.” 
              </span>
            </p>
          </div>
        </section>
        <section className="bg-black space-x-4 grid-system-container p-5">
          <div className="row-start-2 col-start-1 col-span-3 flex flex-col items-start justify-start gap-5 text-justify">
            <p className="text-sm">
              <strong>Pengemasan Media Fiksi</strong>
              <br />
              Kak Izzati juga menceritakan opininya mengenai fiksi, konten, dan
              menjadi seorang penulis.{" "}
            </p>
            <Image
              src={"/images/focus-on/19.png"}
              alt="Sri Izzati's Books"
              width={206}
              height={193}
            />{" "}
            <p className="font-junicode text-base">
              “Kalo bisa semua tulisan dibikin apa adanya kan sulit. Fiksi jadi
              alternatif buat beberapa hal yang kalo dipaparkan dalam nonfiksi
              tuh justru gak ‘nyampe’ ke audiens. Orang gak ditampar sama
              kenyataan, tapi orang melalui banyak proses aksi reaksi yang
              membuat mereka berpikir... Apakah jangan-jangan fiksi ini
              berbicara tentang suatu hal ini? Emang kemampuan menulis dan
              mengemas ide tuh yang dibutuhkan di dunia. Mau ga mau, konten itu
              jadi hal yang sangat penting. Bayangkan kalau konten yang receh
              itu bisa dimasukkan dengan cara yang membuatnya menjadi hal yang
              serius dan berimpak. Jadi, fiksi menjadi cara untuk mengemas
              narasi.” 
            </p>
            <p className="text-sm">
              Hal ini membuat Kak Izzati menekankan bahwa perempuan harus bisa
              menuliskan narasi dirinya sendiri. Ia harus tahu cara bisa
              melindungi dirinya, mengangkat suara, dan teknis melakukannya.
            </p>
          </div>
          <div className="row-start-2 col-start-5 col-span-3 flex flex-col items-start justify-start gap-5 text-justify">
            <p className="text-sm">
              <strong>Representasi dan Dinamika Separasi Karya</strong>
              <br />
              Saat membahas lanskap karya di Indonesia, Kak Izzati membalas
              dengan hati-hati (‘take it with a grain of salt’) lantaran masih
              mengeksplorasi kembali setelah pendidikan S2-nya di luar. Ia
              berhipotesis mengenai kepentingan ‘suara’ yang istimewa dalam
              ragam karya Indonesia. Terdapat kebutuhan karya yang tak hanya
              memiliki pesan baik, tetapi juga ditulis dengan ‘tekstur’ yang
              unik pula. Suara ini dapat membantu suatu karya bagus diulang dan
              akhirnya teramplifikasi. <br />
              <br />
              Berbicara atas kemungkinan karya baru di masa depan, kita
              berdiskusi mengenai hubungan karya dan penulisnya. Kak Izzati
              bangga dengan identitasnya sebagai wanita yang memakai hijab di
              ranah penulis, namun khawatir atas akan adanya ekspektasi terhadap
              apa yang ‘pantas’ ia tulis. Saat karya ditulis, ia lepas ke
              audiens tanpa kontrol penulisnya lagi. Ada rasa keraguan atas
              reaksi audiens terhadap karya, apalagi jika pembaca tidak dapat
              memisahkan keduanya. Pembaca akan berpendapat bahwa karya penulis
              sama dengan hidup yang dimiliki penulis, tetapi hal ini tidak
              selalu benar.
            </p>
          </div>
          <div className="row-start-2 col-start-9 col-span-3 flex flex-col items-start justify-start gap-5 text-justify">
            <p className="text-sm">
              <strong>Proses Belajar</strong>
              <br />
              Saat ditanyakan saran mengenai proses belajar untuk menjadi
              seorang penulis yang lihai seperti Kak Izzati, berikut sarannya:
            </p>
            <p className="font-junicode text-base">
              “Pertama, membaca. Banyak membaca buku supaya terbiasa untuk
              sampai di inti dari suatu isu dengan cepat. Menulis dan menulis.{" "}
              <br />
              <br />
              Kedua, belajar tidak enak dan tidak nyaman. Biasakan merasa
              frustasi karena itu proses dari pembelajaran. <br />
              <br />
              Ketiga, ‘live vigorously’. Aku mengerti jika kamu ingin tulisan
              kamu berarti sesuatu, tetapi agar hal itu terjadi, kita harus
              menulis tentang sesuatu yang benar-benar berarti untuk kita.”
            </p>
            <Image
              src={"/images/focus-on/20.png"}
              alt="Sri Izzati's Graduation"
              width={195}
              height={148}
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
