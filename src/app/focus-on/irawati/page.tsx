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
    pageName: "Focus On : Irawati",
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
            <h2 className="col-span-6 font-junicode h-fit w-fit flex flex-col items-start justify-start self-end translate-x-10">
              <span className="uppercase text-[10rem] leading-none">
                Irawati
              </span>{" "}
              <span className="font-ed-mentasta text-[12rem] leading-none -translate-x-60 -translate-y-10">
                Puteri
              </span>
            </h2>
            <ul className="w-full self-stretch flex items-start justify-end gap-10 -translate-y-5 text-3xl font-junicode box-border px-5">
              <li>@sejutacita.id</li>
              <li>@estafet_kebaikan </li>
              <li>@irawatiputri</li>
            </ul>
          </div>
          <div className="col-start-1 row-start-7 row-end-[-1] col-span-full box-border pb-5 pl-5 flex items-end justify-start bg-bunga-irawati bg-center bg-no-repeat bg-cover">
            <Link href={"/chapter/4"}>
              <button className="text-xl bg-none  text-white-ivory border-white-ivory border-2 font-junicode w-fit h-fit whitespace-break-spaces p-5 text-center align-middle hover:text-black hover:bg-white-ivory uppercase">
                Kembali
              </button>
            </Link>
          </div>
          <div className="col-span-6 row-start-1 col-start-7 row-span-full flex flex-col items-center justify-end">
            <Image
              className="object-scale-down object-right-bottom block self-stretch"
              src={"/images/focus-on/speaker/Irawati.png"}
              width={2677}
              height={2881}
              alt="Irawati Puteri"
            />
          </div>
        </section>
        <section className="bg-black space-x-4 grid-system-container p-5 ">
          <div className="row-start-2 col-start-1 col-span-3 flex flex-col items-start justify-start gap-5 text-justify">
            <p className="text-sm">
              Kak Irawati Puteri, kerap disapa Kak Ira, adalah seorang sulung
              dari tiga bersaudara yang dibesarkan dalam keluarga sederhana dari
              kedua orang tua yang kuat tekadnya dalam memperjuangkan
              pendidikan. Menjadi tulang punggung keluarga sejak umur yang muda,
              Kak Ira melakukan beragam pekerjaan untuk memenuhi kebutuhan
              keluarganya.
              <br />
              <br />
              <strong>Pendidikan, Pembuka Jalan</strong>
              <br />
              Berkat kegigihannya yang tidak hanya disalurkan pada pekerjaan,
              tetapi juga pada tiap perlombaan yang ia ikuti, Kak Ira pun
              berhasil memenangi salah satu lomba debat yang diselenggarakan
              oleh Fakultas Hukum Universitas Indonesia sebagai best speaker
              dalam perlombaan tersebut. Kemenangannya pun membawa dirinya untuk
              lanjut memilih jurusan hukum sebagai jurusan yang akan ia dalami
              pada pendidikan tingkat S1. Akan tetapi, pilihan tersebut ternyata
              tidak didasarkan atas keinginan maupun mimpi tertentu yang hendak
              ia capai pada saat itu. Apapun jurusannya, asalkan ia melanjutkan
              pendidikan di jenjang lebih tinggi tidak menjadi masalah, pikirnya
              dahulu.
            </p>
          </div>
          <div className="row-start-2 col-start-5 col-span-3 flex flex-col items-start justify-start gap-5 text-justify">
            <p className="text-sm">
              <span className="font-junicode">
                &quot;Begitu aku lihat apa yang mereka lakukan di sana (di dalam
                UI), itu aku jadikan patokan aku untuk mimpi yang lebih besar
                lagi. Jadi, menurut aku, mimpi itu bisa ikut membesar seiring
                lingkungan kita membaik,&quot;
              </span>
              ucap Kak Ira.
              <br />
              <br />
              Berbeda ketika Kak Ira memilih jurusan pada tingkat S1, Kak Ira
              telah mengetahui tujuan lebih besar yang hendak ia capai ketika
              mempertimbangkan pendidikan S2 setelah bekerja. Salah satu hal
              yang paling mendukung adalah kehadiran tantangan dalam lingkungan
              kerja yang multidisipliner. Hal tersebut kemudian mendorong Kak
              Ira untuk meningkatkan pemahamannya, terutama terkait isu-isu
              hukum dan pendidikan yang kompleks. Berkat pengalaman terdahulunya
              dalam berpartisipasi di berbagai lomba dan kegiatan sosial
              lainnya, hal tersebut menjadi modal yang mengantarkan Kak Ira
              hingga diterima dalam pendidikan S2 impiannya, yaitu jurusan Law,
              Science, and Technology di Stanford Law School.
            </p>
          </div>
          <div className="row-start-2 col-start-9 col-span-3 flex flex-col items-start justify-start gap-5 text-justify">
            <p className="text-sm">
              <strong>Nilai Terpenting</strong>
              <br />
              Saat ditanyakan tentang tujuan Kak Ira kedepannya, Kak Ira tidak
              menjawab suatu bidang spesifik, tapi justru mengenai keinginannya
              memberi dampak.
            </p>
            <p className="font-junicode">
              “Aku suka membantu orang, tapi engga aku batasain bentuknya kaya
              gimana. Gak cuma sekadar panti asuhan, atau bahkan ngobrol kaya
              gini. Itu yang jadi guiding value aku. I love the idea of
              empowerment, I love the idea bahwa menjadi diri sendiri kita bisa
              kasih pengaruh sesuai dengan apa yang ada di diri kita. Manusia
              itu ga sekadar hitam putih, manusia pasti ada cacatnya. Jadi aku
              suka berbicara tentang vulnerability dan gimana kita masih bisa
              berbagi di luar dari keterbatasan.”
            </p>
            <p className="text-sm">
              Ia tak merasa perlu memiliki hidup menjadi dan bertemu orang yang
              ‘penting’, tetapi lebih utama baginya untuk menjalani hidup yang
              sesuai nilai-nilainya.
            </p>
            <Image
              src={"/images/focus-on/4.png"}
              alt="Panti Asuhan"
              width={243}
              height={156}
              className="self-start"
            />{" "}
          </div>
        </section>
        <section className="bg-black space-x-4 grid-system-container p-5">
          <div className="row-start-2 col-start-1 col-span-3 flex flex-col items-start justify-start gap-5 text-justify">
            <p className="text-sm">
              <strong>Identitas Berlapis</strong>
              <br />
              Di dunia kerja, ada yang pernah bertanya ke Kak Ira mengapa ia
              tidak bisa mengerjakan satu hal aja. Baginya, ia suka melihat
              lebih dari identitas sebagai ‘lawyer’, identitas selain pekerjaan
              utamanya.
              <span className="font-junicode text-base">
                “Aku ngga mau didefinisikan hanya dari pekerjaanku, tapi juga
                banyak hal. Aku masih mau bantu-bantu di banyak hal lain.”
              </span>
              <br />
              <br />
              <strong>‘Pay It Forward’</strong>
              <br />
              Dari pengalamannya menjadi seorang kolaborator Beasiswa Irawati
              Puteri dan pengusul nama di @sejutacita.id, terlihat bahwa Kak Ira
              percaya dengan pentingnya berkontribusi kepada sesama. “Aku
              berpikir bagaimana orang-orang merasa layak bermimpi, enggak
              ngerasa tertinggal, berhak punya cita-cita apapun, dan berhak
              merasa untuk mampu menggapai cita-cita tadi.” Ia ingin meneruskan
              rezeki yang ia punya ke teman-teman dalam kondisi membutuhkan.
              <br />
              <br />
              Hal ini juga dilakukannya dalam insisiatif Estafet Kebaikan.
              Inisiatif yang mengemas
            </p>
          </div>
          <div className="row-start-2 col-start-5 col-span-3 flex flex-col items-start justify-start gap-5 text-justify">
            <p className="text-sm">
              bantuan donasi dengan personalisasi bingkisan kado. Hal ini jauh
              lebih menghargai penerima, sesuatu yang Kak Ira ketahui karena
              pernah berada di sisi lain tersebut. Dengan menghindari donasi
              dalam bentuk uang, ia juga menghindari berpartisipasi dalam rantai
              eksploitasi.
              <br />
              <br />
              <strong>Siapa yang ‘Pantas’?</strong>
              <br />
              Saat ditanyakan mengenai proses pemilihan ‘siapa’ yang akan
              mendapatkan bantuan (dari sisi donasi maupun beasiswa), Kak Ira
              mengingatkan,
              <span className="font-junicode text-base">
                “Jangan kita yang ukur siapa yang ‘pantas’ [secara definisi
                moral tertentu], memberi itu memberi saja. Ada hal-hal yang
                tidak bisa kita kontrol, jadi kita hanya bisa melakukan
                perbuatan baik. Bisa saja praduga yang belum tentu tepat
                menghalangi kita dari membantu orang lain. Biasanya, kalau
                ‘resource’ terbatas kita mencoba melihat dari sisi urgensi dan
                merit.”
              </span>
            </p>
          </div>
          <div className="row-start-2 col-start-9 col-span-3 flex flex-col items-center justify-start gap-5 text-justify">
            <p className="text-sm">
              <strong>Visi</strong>
              <br />
              Kami bertanya apa yang menurut Kak Ira dibutuhkan untuk mewujudkan
              kemajuan di Indonesia. Sesuai dengan jurusan pilihan studi
              lanjutnya, ia menjawab
              <br />
              <br />
              <span className="font-junicode text-base">
                “Yang menurutku paling penting adalah sumber daya manusia yang
                membentuk ekosistem teknologinya. Teknologi itu tentang orang,
                dan yang mendapat feedback orang juga. Sehingga, orang yang
                membuat teknologi itu harus berkualitas. Kenapa kita tidak bisa
                memakai ‘public service’ dari pemerintah dan sebagainya yang
                senyaman itu [pada saat dibuat dari sektor privat] juga? Semua
                harus berangkat dari kesadaran bahwa pemerintah juga perlu
                membangun ekosistem yang ideal. Agar hal itu bisa terjadi, maka
                sumber daya manusianya harus mau masuk pemerintahan juga.”
              </span>
            </p>
          </div>
        </section>

        <section className="bg-black space-x-4 grid-cols-4 min-w-[33vw]  grid-rows-8 grid  gap-x-4 h-full gap-y-4 box-border whitespace-break-spaces p-5">
          <div className="row-start-2 col-start-1 col-span-3 flex flex-col items-start justify-start gap-5 text-justify">
            <p className="text-sm">
              <strong>Perempuan dan Hubungan</strong>
              <br />
              Berbicara mengenai hubungan, Kak Ira mengungkapkan bahwa
              pernikahan bukanlah suatu hal yang dirasa perlu untuk dipaksakan
              urgensinya.
              <br />
              <br />
              Menurutnya, menerima kondisi keluarga dengan sepenuh hati menjadi
              salah satu aspek terpenting. Sebab, terkadang dapat kita temui
              ketika kondisi keluarga pasangan tidak sesuai dengan apa yang
              diharapkan dapat menimbulkan konflik karena adanya asumsi yang
              tidak sesuai. Ia juga berpendapat bahwa kesadaran individu
              mengenai peran gender yang mempengaruhi basis berkehidupan
              seseorang menjadi hal penting yang perlu dipertimbangkan dalam
              mencari pasangan. 
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
