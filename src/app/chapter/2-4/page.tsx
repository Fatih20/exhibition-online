"use client";

import "./24.css";
import RedBar from "@/app/components/RedBar";
import { useHorizontalScroll } from "@/utils/useHorizontalScroll";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const SecondChapterThird: React.FC = () => {
  const [percent, setPercent] = useState(0);
  const { elRef: containerRef, resetSavedScroll } = useHorizontalScroll({
    pageName: "Chapter 2-4",
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
        className="flex overflow-x-auto overflow-y-hidden items-start flex-nowrap whitespace-nowrap h-full justify-start scrollbar-hide"
      >
        {/* Side header */}
        <section className="text-sm min-w-[70vw] h-full whitespace-break-spaces flex justify-center items-center bg-flower">
          <div className="w-1/3">
            <p className="-rotate-90 font-ed-mentasta text-[9rem] translate-y-36 -translate-x-8">
              Memaknai
            </p>
          </div>
          <div className="flex flex-col w-1/3 h-1/2 font font-zmg pr-8">
            <p className="w-full text-center">Merupakan eksplorasi</p>
            <p className="mt-4 text-end">proses ‘tumbuh kembang’</p>
            <p className="mt-24">pemaknaan narasumber</p>
            <p className="mt-auto w-3/4 self-end">
              atas tantangan dan proses berkembang
            </p>
            <p className="mt-4">yang pernah ia lewati.</p>
          </div>
          <div className="w-1/3 self-start">
            <p className="mt-32 font-junicode text-5xl">
              MEMPUNYAI{" "}
              <span className="font-ed-mentasta text-7xl">Prinsip</span> MEMBELA
              DIRI, DAN MENGKLAIM AGENSI
            </p>
          </div>
        </section>

        {/* Section 1 */}
        <section className="text-sm min-w-[30vw] h-full bg-black whitespace-break-spaces flex flex-col text-white-ivory p-8 font-zmg">
          <p className="mt-auto mb-8 text-justify">
            Dunia bergerak dalam sistem yang opresif terhadap perempuan.
            Membangun ketangguhan seringkali datang dan bersumber dari diri
            sendiri. Pembicara dalam pameran kami percaya bahwa perempuan bukan
            hanya pantas untuk punya prinsip, tetapi juga harus menyuarakan
            dengan lantang prinsip-prinsip tersebut ke ruang sekitarnya.
          </p>
        </section>
        <section className="text-sm min-w-[25vw] h-full bg-black whitespace-break-spaces flex flex-col text-white-ivory p-8 font-zmg text-justify">
          <p className="mt-16">
            KAK IZZATI berpendapat secara kritis terkait isu ini, “Perempuan
            ngomong aja ga di denger, gimana lagi kalau diem?”. Maka dari itu,
            ia percaya bahwa perempuan sepatutnya dapat menggaungkan suaranya
            sendiri. Jalan yang dapat dilalui agar dunia dapat mendengar suara
            kita dengan baik adalah dengan belajar membingkai narasi kita,
            misalnya dengan menulis.
          </p>
        </section>
        <section className="text-sm min-w-[50vw] h-full bg-black whitespace-break-spaces flex flex-col text-white-ivory p-8 font-zmg text-justify relative">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Nr5ajtmGStc"
            title="YouTube video player"
            frameBorder="0"
            className="mt-8 self-center"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>

          <p className="mt-14 w-1/2">
            MBAK EVI yang bertahun-tahun harus mempertahankan visinya di ruang
            berita mengaku lega karena walaupun pernah ragu dengan prinsipnya
            yang percaya akan pentingnya politik kelas, ia tidak pernah goyah
            dan melepas prinsip tersebut.
          </p>
          <Image
            src={"/images/chapter/2/art-white-flower-big.svg"}
            alt="White flower 1"
            className="absolute bottom-0 right-0"
            width={355}
            height={400}
          />
        </section>
        <section className="text-sm min-w-[25vw] h-full bg-black whitespace-break-spaces flex flex-col text-white-ivory p-8 font-zmg text-justify relative">
          <p className="mt-16">
            KAK IRAWATI mengakui bahwa memang ia tidak bisa menutup mata dan
            telinga dari pendapat orang lain. Tapi, manusia punya sistem
            penyaringan informasinya sendiri. Ia percaya bahwa semua orang punya
            hak untuk melakukan apa yang mereka anggap benar. Sehingga,
            perkataan orang lain yang tidak berguna tentangnya itu “tells more
            about them than about us.”
          </p>

          <Image
            src={"/images/chapter/2/art-white-flower-small.svg"}
            alt="White flower 2"
            className="absolute bottom-32 left-8"
            width={195}
            height={220}
          />
        </section>

        {/* Section 2 */}
        <section className="text-sm min-w-[50vw] h-full bg-black whitespace-break-spaces flex flex-col items-center text-white-ivory p-8 font-zmg text-justify">
          <Image
            src={"/images/chapter/2/12.png"}
            alt="12"
            className="mt-4"
            width={570}
            height={360}
          />

          <p className="mt-16 ml-24 font-junicode text-5xl">BERCERITA,</p>
          <p className="font-ed-mentasta text-7xl -ml-24">Bermakna</p>
        </section>

        <section className="text-sm min-w-[25vw] h-full bg-black whitespace-break-spaces flex flex-col items-center text-white-ivory p-8 font-zmg text-justify">
          <p className="mt-16">
            Kemampuan bercerita mengenai pengalaman, ilmu, dan isu merupakan
            kunci untuk membangun koneksi dengan sesama.
            <br />
            <br />
            Dalam pekerjaanya, BU WIWIEN melatih dan membangun cerita bersama
            komunitas untuk menumbuhkan kepedulian terhadap corak heritage
            Indonesia.
            <br />
            <br />
            Bagi KAK WANDA, storytelling tak terbatas hanya dari bukunya, namun
            juga dalam ranah privat seperti sosial media pribadi.
          </p>

          <Image
            src={"/images/chapter/2/13.png"}
            alt="13"
            className="mt-16"
            width={166}
            height={166}
          />
        </section>

        <section className="text-sm min-w-[25vw] h-full bg-black whitespace-break-spaces flex flex-col items-center text-white-ivory p-8 font-zmg text-justify">
          <Image
            src={"/images/chapter/2/14.png"}
            alt="14"
            className="mt-16"
            width={233}
            height={265}
          />

          <p className="mt-16">
            Sebagai penulis fiksi, KAK IZZATI juga berkomentar atas kemampuan
            penulisan fiksi sebagai upaya menerjemahkan realita batin (inner
            realities), menumbuhkan kemampuan kita memposisikan diri di kaki
            orang lain.
          </p>
        </section>

        <section className="text-sm min-w-[25vw] h-full bg-black whitespace-break-spaces flex flex-col items-center text-white-ivory p-8 font-zmg text-justify">
          <p className="mt-auto mb-4">
            KAK ABIGAIL dan MBAK EVI membangun platform media mereka sendiri
            untuk mengangkat isu dan cerita. Seperti kata MBAK EVI, “Jadi
            jurnalis bukan duduk di kursi depan melihat sejarah, tapi kamu harus
            ikut bikin sejarah dan mempengaruhinya.”
          </p>

          <Image
            src={"/images/chapter/2/15.png"}
            alt="15"
            className="mt-4 mb-8"
            width={235}
            height={150}
          />
        </section>

        {/* Section 3 */}
        <section className="text-sm min-w-[25vw] h-full bg-black whitespace-break-spaces flex flex-col items-center text-white-ivory p-8 font-zmg text-justify relative">
          <p className="mt-16 ml-24 font-junicode text-4xl">
            BUKAN ENTITAS INDIVIDU, NAMUN BAGIAN DARI JALINAN MASYARAKAT
          </p>
        </section>
        <section className="text-sm min-w-[25vw] h-full bg-black whitespace-break-spaces flex flex-col items-center text-white-ivory p-8 font-zmg text-justify relative">
          <Image
            src={"/images/chapter/2/memaknai/logo2.png"}
            alt="Logo 2"
            className="absolute top-1/2 -translate-y-full translate-x-1/4 z-20"
            width={125}
            height={125}
          />
          <Image
            src={"/images/chapter/2/memaknai/garis1.png"}
            alt="garis 1"
            className="absolute top-1/4 left-1/2 translate-x-1/4 -translate-y-8 z-10"
            width={200}
            height={310}
          />

          <p className="mt-auto">
            KAK KARINA mendirikan rootd.nl sebagai wadah professional Muslim di
            Eropa. Ia senang berjejaring dan membangun solidaritas dengan
            orang-orang berlatar belakang sama dengan dirinya.
            <br />
            <br />
            KAK WANDA menemukan komunitas suportif baru dan penerimaan diri
            lewat Puzzlediri dan CeritaKubi.
          </p>
        </section>
        <section className="text-sm min-w-[25vw] h-full bg-black whitespace-break-spaces flex flex-col items-center justify-center text-white-ivory p-8 font-zmg text-justify relative">
          <Image
            src={"/images/chapter/2/memaknai/logo1.png"}
            alt="Logo 1"
            className="absolute top-1/4 -translate-y-1/2 left-0 -translate-x-1/4 z-20"
            width={125}
            height={125}
          />

          <Image
            src={"/images/chapter/2/memaknai/logo3.png"}
            alt="Logo 3"
            className="absolute top-2/3 -translate-y-1/2 left-0 translate-x-1/4 z-20"
            width={125}
            height={125}
          />

          <p className="mt-auto z-30">
            KAK ABIGAIL mendirikan What is Up Indonesia sebagai bentuk
            keresahannya akan kurangnya kanal informasi yang dapat menerjemahkan
            politik Indonesia ke kelompok diaspora Indonesia.
          </p>
        </section>
        <section className="text-sm min-w-[25vw] h-full bg-black whitespace-break-spaces flex flex-col items-center text-white-ivory p-8 font-zmg text-justify relative">
          <p className="mt-16">
            KAK IRA berkontribusi pada Sejutacita.id dan sekarang sedang membuat
            sebuah kanal beasiswa. Harapannya, membangun titian jalan yang lebih
            baik untuk orang-orang yang ingin mendapat pendidikan. Ia mempunyai
            misi agar orang lain dapat belajar tanpa harus berpeluh-peluh
            seperti dirinya dulu. Ia juga mendirikan estafet.kebaikan, dimana
            donasi diberikan dalam bingkisan personalisasi kado, agar
            memanusiakan sesama.
          </p>

          <Image
            src={"/images/chapter/2/memaknai/garis2.png"}
            alt="Logo 3"
            className="absolute top-3/4 right-0 z-10"
            width={870}
            height={200}
          />
        </section>
        <section className="text-sm min-w-[25vw] h-full bg-black whitespace-break-spaces flex flex-col items-center text-white-ivory p-8 font-zmg text-justify relative">
          <Image
            src={"/images/chapter/2/16.png"}
            alt="16"
            className="mt-auto mb-8"
            width={300}
            height={220}
          />
        </section>
        <section className="text-sm min-w-[25vw] h-full bg-black whitespace-break-spaces flex flex-col items-center text-white-ivory p-8 font-zmg text-justify relative">
          <Image
            src={"/images/chapter/2/memaknai/garis3.png"}
            alt="garis 3"
            className="absolute bottom-[40%] z-10"
            width={566}
            height={231}
          />

          <Image
            src={"/images/chapter/2/memaknai/logo4.png"}
            alt="Logo 4"
            className="absolute top-1/4 left-8 translate-y-8 translatex-8 z-20"
            width={125}
            height={125}
          />
          <Image
            src={"/images/chapter/2/memaknai/logo5.png"}
            alt="Logo 5"
            className="absolute top-1/3 right-4 translate-y-8 z-20"
            width={125}
            height={125}
          />

          <p className="mt-auto mb-8">
            MBAK NURUL mendirikan Synbio, sebuah komunitas biologi sintetis yang
            sesuai dengan keahlian dan minatnya.
            <br />
            <br />
            BU WIWIEN mendirikan Interpretasi ID sebagai bentuk kecintaannya
            dalam dunia pembangunan narasi dan kekayaan cerita di Indonesia.
          </p>
        </section>
        <section className="text-sm min-w-[25vw] h-full bg-black whitespace-break-spaces flex flex-col items-center text-white-ivory p-8 font-zmg text-justify relative">
          <Image
            src={"/images/chapter/2/17.png"}
            alt="17"
            className="mt-8"
            width={360}
            height={240}
          />

          <p className="mt-auto mb-8">
            MBAK EVI ingin melihat dan mengubah sejarah dengan lebih independen
            serta kritis, sehingga ia mendirikan kantor berita Project Multatuli
            dengan motto “melayani yang dipinggirkan dan mengawasi kekuasaan
            agar tidak ugal-ugalan”
          </p>
        </section>
        <section className="text-sm min-w-[25vw] h-full bg-black whitespace-break-spaces flex flex-col items-center text-white-ivory p-8 font-zmg text-justify relative">
          <Image
            src={"/images/chapter/2/memaknai/garis4.png"}
            alt="garis 4"
            className="absolute bottom-1/2 -left-8 translate-y-1/3 z-10"
            width={230}
            height={165}
          />

          <Image
            src={"/images/chapter/2/memaknai/logo6.png"}
            alt="Logo 6"
            className="absolute top-1/2 right-4 z-20"
            width={100}
            height={100}
          />

          <Image
            src={"/images/chapter/2/18.png"}
            alt="18"
            className="mt-auto mb-8"
            width={360}
            height={240}
          />
        </section>

        {/* End section */}
        <section className="text-sm min-w-[25vw] h-full bg-white-ivory whitespace-break-spaces flex flex-col items-center text-black p-8 font-zmg text-justify relative">
          <p className="mt-auto mb-8">
            Wanita di pameran ini sadar bahwa pencapaian dan dirinya tidak
            dibentuk oleh kerja keras dirinya seorang. Dari kesadaran ini,
            mereka mendirikan inisiatif dan komunitas untuk kembali partisipasi
            dengan dunia.
            <br />
            <br />
            Melalui tiga proses: memula, menjadi, dan memaknai, kita melihat
            bagaimana 10 wanita ini menghadapi dunia.
          </p>
        </section>

        <section className="text-sm min-w-[50vw] h-full bg-black whitespace-break-spaces flex flex-col items-center text-white-ivory p-8 font-zmg text-justify relative overflow-hidden mix-blend-hard-light">
          <p className="mt-16 text-center font-junicode text-4xl">
            KEPEKAAN TERHADAP DUNIA
          </p>
          <p className="text-center font-junicode text-4xl">
            MENGHANTARKAN MEREKA UNTUK
          </p>
          <p className="text-center font-junicode text-4xl">
            <span className="italic text-red">MEMPUNYAI KUASA MENGUBAH</span>{" "}
          </p>
          <p className="text-center font-junicode text-4xl">
            <span className="italic text-red">DUNIA</span> TERSEBUT PULA.
          </p>

          <p className="self-start mt-16 ml-16 font-junicode text-3xl">
            Bagaimana dengan Anda?
          </p>
          <p className="self-end mt-8 mr-16 font-junicode text-3xl">
            Bagaimana anda <span className="italic">memaknai dunia</span>?
          </p>

          <Link
            href={"/chapter/3"}
            onClick={resetSavedScroll}
            className="mt-auto flex justify-end w-full"
          >
            <button className="bg-black text-white-ivory border-2 border-white-ivory hover:bg-white-ivory hover:text-black transition-colors  text-xl py-2 px-4 font-junicode z-10">
              LANJUT
            </button>
          </Link>

          <Image
            src={"/images/chapter/2/flower-end-gif.gif"}
            alt="flower-end-gif"
            className="absolute -bottom-4 left-16"
            width={450}
            height={280}
          />
        </section>
      </main>
    </div>
  );
};

export default SecondChapterThird;
