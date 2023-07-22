"use client";

import "./4.css";
import RedBar from "@/components/RedBar";
import { useHorizontalScroll } from "@/utils/useHorizontalScroll";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function BacaButton({ className, href }: { className: string; href: string }) {
  return (
    <Link href={href} className={className}>
      <button className="bg-white-ivory mb-2 text-red border-2 border-red hover:bg-red hover:text-white-ivory transition-colors py-1 px-2 font-junicode z-10">
        <p>BACA</p>
        <p>SELENGKAPNYA</p>
      </button>
    </Link>
  );
}

function Underlined({ children }: { children: React.ReactNode }) {
  return (
    <span className="underline underline-offset-2 decoration-red">
      {children}
    </span>
  );
}

export default function FourthChapter() {
  const [percent, setPercent] = useState(0);
  const { elRef: containerRef, resetSavedScroll } = useHorizontalScroll({
    pageName: "Chapter 4",
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
        className="flex overflow-x-auto overflow-y-hidden items-start flex-nowrap whitespace-nowrap h-full justify-start scrollbar-hide relative"
      >
        {/* Jumbotron */}
        <section className="min-w-[100vw] h-full flex flex-col whitespace-break-spaces bg-red text-white-ivory">
          <p className="mt-24 w-1/6 ml-64 text-justify">
            Setelah kita bersama menelusuri perjalanan dari tiap wanita, kita
            mengakhiri wawancara dengan pertanyaan berikut,
          </p>

          <div className="mt-8 flex self-center w-2/3 justify-center">
            <p className="font-junicode text-4xl">(4)</p>
            <div>
              <p className="font-ed-mentasta text-[10rem]">The</p>
            </div>
            <div className="font-junicode text-[5rem] leading-tight">
              <p className="-ml-4">What has been</p>
              <p className="ml-4">GREATEST</p>
              <p className="">SATISFACTION</p>
              <p className="text-end italic -mr-16">in your life</p>
            </div>
          </div>

          <Image
            src={"/images/chapter/4/jumbo-question.svg"}
            alt="Question mark"
            className="absolute bottom-0 right-0"
            width={260}
            height={490}
          />
        </section>

        {/* Section KARINA */}
        <section className="text-sm min-w-[80vw] h-full bg-white-ivory whitespace-break-spaces relative overflow-hidden flex text-red p-20 px-24 font-zmg text-justify gap-5">
          <div>
            <Image
              src={"/images/chapter/4/1.png"}
              alt="1"
              className=""
              width={350}
              height={230}
            />
          </div>

          <div className="flex flex-col w-full">
            <p className="w-3/4">
              Dalam kariernya,{" "}
              <span className="font-junicode text-3xl">Kak Karina</span> senang
              jika bisa berpartisipasi membangun sistem ekonomi finansial yang
              berkelanjutan. Utamanya, Ia mementingkan{" "}
              <span className="font-bold">
                kemampuan kita berkontribusi kembali ke sesama.
              </span>
            </p>

            <p className="font-junicode text-4xl mt-8 flex">
              <span>“</span>
              <span>
                Dalam lini apa pun pekerjaan, memberikan pengaruh baik itu
                penting.{" "}
                <span className="italic">
                  It’s about <span className="font-bold">impact</span> and{" "}
                  <span className="font-bold">giving back</span> to your
                  community.
                </span>
                ”
              </span>
            </p>

            <div className="mt-8 w-1/3 self-end">
              <p className="text-end font-junicode text-5xl">KARINA</p>
              <p className="font-ed-mentasta text-6xl">Soemarwoto</p>

              <Link href={"/focus-on/karina"} className="flex mt-4">
                <button className="ml-auto bg-white-ivory text-red border-2 border-red hover:bg-red hover:text-white-ivory transition-colors py-1 px-2 font-junicode z-10">
                  <p>BACA</p>
                  <p>SELENGKAPNYA</p>
                </button>
              </Link>
            </div>
          </div>

          <Image
            src={"/images/chapter/4/line-1.svg"}
            alt="Line 1"
            className="absolute bottom-0 left-0"
            width={955}
            height={350}
          />
        </section>

        <section className="min-w-[20vw] h-full bg-banner-1" />

        {/* Section WIWIEN */}
        <section className="text-sm min-w-[100vw] h-full bg-white-ivory whitespace-break-spaces relative overflow-hidden flex text-red p-20 px-24 pb-10 font-zmg text-justify gap-5">
          <div className="w-3/4 flex flex-col gap-4 h-full">
            {/* Left */}

            <p className="w-1/2 mb-4">
              <span className="font-junicode text-3xl">Bu Wiwien</span>{" "}
              merefleksikan bagaimana interpretasi telah membukanya ke berbagai
              penghujung daerah dan budaya di seluruh Indonesia.
            </p>

            {/* Main */}
            <div className="w-full flex gap-4 h-full">
              <div className="flex flex-col w-[20%] h-full">
                <p className="text-justify">
                  <span className="font-junicode text-3xl">“PERTAMA,</span>{" "}
                  adalah pada saat <span className="underline">suatu plan</span>{" "}
                  [dalam konteks pelatihan pariwisata]{" "}
                  <span className="underline">berubah</span>{" "}
                  <span className="font-bold">menjadi suatu experience.</span>{" "}
                  Contohnya, melihat nelayan yang dulu bergetar saat menulis di
                  depan saya pada saat pelatihan, dapat{" "}
                  <span className="font-junicode italic text-lg">
                    berbicara dengan lantang
                  </span>{" "}
                  di depan{" "}
                  <span className="font-junicode italic text-lg">
                    bupati, direktur bank,
                  </span>{" "}
                  hingga{" "}
                  <span className="font-junicode italic text-lg">
                    artis-artis.
                  </span>{" "}
                  Dalam perubahan tersebut, saya{" "}
                  <span className="underline">berkontribusi</span> untuk memberi{" "}
                  <span className="font-junicode">bekal hidup</span> mereka ke
                  depannya.
                </p>

                <Link href={"/focus-on/wiwien"} className="flex mt-auto">
                  <button className="ml-auto bg-white-ivory text-red border-2 border-red hover:bg-red hover:text-white-ivory transition-colors py-1 px-2 font-junicode z-10">
                    <p>BACA</p>
                    <p>SELENGKAPNYA</p>
                  </button>
                </Link>
              </div>

              <div className="flex flex-col w-[40%] h-full gap-4">
                <div className="flex gap-4">
                  <p className="text-justify w-1/2">
                    <span className="font-junicode text-3xl">KEDUA,</span> pada
                    saat saya bisa mengajak orang{" "}
                    <span className="font-bold">
                      yang awalnya{" "}
                      <span className="font-junicode italic text-lg">abai</span>
                    </span>{" "}
                    dengan sekitar <span className="underline">menjadi</span>{" "}
                    <span className="font-bold">
                      tersadarkan atas signifikansi{" "}
                      <span className="font-junicode italic text-lg">
                        sejarah.{" "}
                      </span>
                    </span>
                    Mereka jadi ingin{" "}
                    <span className="underline">
                      melakukan sesuatu untuk{" "}
                      <span className="tracking-[0.25em]">
                        tempat tinggalnya.
                      </span>
                    </span>
                  </p>
                  <Image
                    src={"/images/chapter/4/3.png"}
                    alt="3"
                    className=""
                    width={215}
                    height={165}
                  />
                </div>

                <Image
                  src={"/images/chapter/4/2.png"}
                  alt="2"
                  className="mt-auto self-center"
                  width={355}
                  height={175}
                />
              </div>

              <div className="flex flex-col w-[40%] h-full gap-4">
                <Image
                  src={"/images/chapter/4/4.png"}
                  alt="4"
                  className="mt-auto self-center"
                  width={350}
                  height={185}
                />

                <p className="text-justify">
                  <span className="font-junicode text-3xl">
                    KETIGA, saya belajar banyak.
                  </span>{" "}
                  Dengan mendampingi orang-orang membuat cerita, kita banyak
                  belajar sejarah Indonesia dari Pulau Flores hingga Pulau
                  Penyengat. Banyak yang saya ketahui karena mengobrol dengan
                  komunitas dan orang sekitar. Melalui{" "}
                  <span className="underline">cerita dan wisata</span>, terdapat
                  kesempatan untuk kita belajar dari budaya beragam.
                  <span className="font-bold">
                    {" "}
                    Proses ini yang saya rasakan.”
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="w-1/4 flex flex-col">
            <p className="font-junicode text-justify text-4xl">
              “Saya bertambah kaya{" "}
              <span className="font-bold">bukan dalam arti rupiah,</span> tapi
              kaya akan
              <span className="font-bold">
                {" "}
                pemahaman batin dan sejarah Indonesia
              </span>{" "}
              melalui <span className="font-bold italic">interpretasi.</span>”
            </p>

            <p className="font-junicode mt-auto text-5xl text-end">WIWIEN</p>
            <p className="-mt-4 mb-8 font-ed-mentasta text-6xl">Wiyonoputri</p>
          </div>
        </section>

        {/* Section SRI IZZATI */}
        <section className="text-sm min-w-[100vw] h-full bg-white-ivory whitespace-break-spaces relative overflow-hidden flex text-red p-20 px-24 pb-10 font-zmg text-justify gap-4">
          <div className="flex flex-col w-[20%] h-[507px] mt-8">
            <Image
              src={"/images/chapter/4/5.png"}
              alt="5"
              className="mt-auto self-center"
              width={180}
              height={240}
            />
          </div>
          <div className="flex flex-col w-[20%] h-[507px] mt-8">
            <Image
              src={"/images/chapter/4/6.png"}
              alt="6"
              className="self-center"
              width={180}
              height={480}
            />
          </div>
          <div className="flex flex-col w-[20%] h-[507px] mt-8">
            <Image
              src={"/images/chapter/4/7.png"}
              alt="7"
              className="self-center"
              width={180}
              height={360}
            />

            <p className="mt-auto font-junicode text-end text-5xl mr-10">SRI</p>
            <p className="-mt-4 font-ed-mentasta text-end text-6xl mr-10">
              Izzati
            </p>
          </div>

          <div className="flex flex-col w-[40%] gap-4 text-justify h-[507px] mt-8">
            <p>
              <span className="font-junicode text-3xl">Kak Izzati</span>{" "}
              berbicara mengenai dorongan untuk terus belajar dan efek inspirasi
              yang kita berikan ke sesama saat kita berbuat baik.
              <br />
              <br />
              “Paling senang ketika aku{" "}
              <span className="font-junicode">membantu orang.</span> Pada saat
              aku ngobrol sama orang-orang pinter gitu,{" "}
              <span className="underline">aku ingin kayak dia</span>, dan itu{" "}
              <span className="underline">selalu mendorong</span> aku untuk{" "}
              <span className="font-bold">belajar dan mencari ilmu.</span>
            </p>
            <p className="font-junicode text-justify text-5xl">
              ‘You make me want to do{" "}
              <span className="italic">good things.</span>’
            </p>
            <p>
              Karena aku ngerasain efek dari bantuan orang lain ke aku, jadi aku
              pengen juga bisa bikin orang lain ingin berbuat baik. Maka bisa
              membuat{" "}
              <span className="font-junicode italic">‘domino effect’</span> itu
              ke orang lain.”
            </p>

            <Link href={"/focus-on/sri"} className="flex mt-auto">
              <button className="bg-white-ivory mb-2 text-red border-2 border-red hover:bg-red hover:text-white-ivory transition-colors py-1 px-2 font-junicode z-10">
                <p>BACA</p>
                <p>SELENGKAPNYA</p>
              </button>
            </Link>

            <Image
              src={"/images/chapter/4/line-2.svg"}
              alt="Line 2"
              className="absolute bottom-0 right-8"
              width={460}
              height={250}
            />
          </div>
        </section>
        <section className="bg-white-ivory grid-system-container gap-x-2 gap-y-2 text-red">
          <Image
            width={293 * 2}
            height={167 * 2}
            className="row-start-3 col-start-3 col-span-3"
            src={"/images/chapter/4/8.png"}
            alt="Foto"
          />
          <Image
            width={422}
            height={230}
            className="row-start-3 col-start-6 col-span-2"
            src={"/images/chapter/4/10.png"}
            alt="Foto"
          />
          <Image
            width={176 * 2}
            height={128 * 2}
            className="row-start-6 col-end-6 row-span-4"
            src={"/images/chapter/4/9.png"}
            alt="Foto"
          />
          <BacaButton
            className="flex row-start-6 col-end-5 col-span-1 text-xs"
            href="/focus-on/wanda"
          />
          <h2 className="-translate-x-5 row-start-5 col-start-4 col-span-2 text-6xl font-junicode h-fit w-fit flex flex-col items-start justify-start">
            <span className="uppercase">Wanda</span>{" "}
            <span className="font-ed-mentasta -translate-x-20 -translate-y-5">
              Roxanne
            </span>
          </h2>
          <div className="row-start-[8] col-start-2 col-span-10 border-t-2 border-t-red"></div>
          <div className="flex flex-col justify-start items-start col-start-8 row-start-3 col-span-4 text-sm gap-2">
            <p>
              <strong>Proses penerimaan dan pemaknaan diri </strong>
              bagi <span className="font-junicode text-xl">Kak Wanda</span>{" "}
              merupakan kunci transformasi pribadi yang Ia alami untuk bisa{" "}
              <span className="underline underline-offset-2 decoration-red">
                membantu sesama.
              </span>
            </p>
            <p className="decoration-[1px]">
              “Semakin ke sini, aku menemukan ‘puzzle diri’ aku sebagai manusia.
              Justru aku semakin <Underlined>engga sabar</Underlined> untuk{" "}
              <Underlined>bertambah tua</Underlined> karena aku yakin kehidupan
              aku jauh lebih seru. Aku menyadari bahwa aku lebih besar dari yang
              orang lain katakan padaku.
            </p>
            <p className="text-6xl font-junicode">
              &apos;<Underlined>You are not</Underlined>{" "}
              <em>
                too late, too old, <strong>to do something.&apos;</strong>
              </em>
            </p>
            <p>
              Untuk belajar nyaman dengan diri sendiri itu proses yang panjang.
              Tapi <Underlined>bukan jadi narsisme dan egoism</Underlined>,
              justru dengan itu aku bisa giving back apa yang aku punya.{" "}
              <strong>
                Merdeka dengan diri sendiri, maka aku akan bisa memerdekakan
                orang lain.”
              </strong>
            </p>
          </div>
          {/* <div className="row-start-1 col-end-[13] col-span-1">
            <Image
              alt="Line Decoration"
              width={154}
              height={399}
              src={"/images/chapter/4/decorations/line-4.png"}
              className="object-top-right object-scale-down"
            />
          </div> */}
        </section>
        <section className="bg-white-ivory grid-system-container gap-x-2 gap-y-2 text-red">
          <div className="row-start-5 row-span-3 col-start-3 col-span-7 flex items-center justify-start gap-6">
            <BacaButton className="self-start" href="/focus-on/abigail" />
            <Image
              width={227 * 2}
              height={228 * 2}
              className="h-full w-auto aspect-square"
              src={"/images/chapter/4/11.png"}
              alt="Foto"
            />
            <Image
              width={544 * 2}
              height={227 * 2}
              className="h-full"
              src={"/images/chapter/4/12.png"}
              alt="Foto"
            />
          </div>
          <Image
            width={3948 / 8}
            height={1728 / 8}
            className="row-start-1 col-span-5 col-start-1 -translate-x-1/3"
            src={"/images/chapter/4/decorations/line-3.png"}
            alt="Decorations"
          />
          <h2 className="-translate-x-5 row-start-4 col-start-3 col-span-2 text-6xl font-junicode h-fit w-fit flex flex-col items-start justify-start">
            <span className="uppercase">Abigail</span>{" "}
            <span className="font-ed-mentasta -translate-x-20 -translate-y-5">
              Limuria
            </span>
          </h2>
          <div className="flex flex-col justify-start items-start col-start-5 row-start-2 col-span-6 text-sm gap-2">
            <p>
              <span className="font-junicode text-xl">Kak Abigail</span>{" "}
              tersenyum bangga memikirkan komunitas yang Ia bangun. <br /> “Saat
              dipikir-pikir,
            </p>
            <p className="text-6xl font-junicode">
              I wouldn’t have done anything <strong>different</strong>
            </p>
            <p className="text-2xl font-junicode self-end -translate-y-full">
              <strong>[dalam hidup].</strong>
            </p>
            <p className="self-end text-right">
              Aku sangat puas. Membuka kanal informasi kepada masyarakat
              merupakan <br />
              sesuatu yang cukup eye opening untuk aku.”
            </p>
          </div>
          <div className="row-start-7 translate-x-1/3 col-start-7 col-span-6 border-t-2 border-t-red"></div>
        </section>
        <section className="bg-white-ivory grid-system-container gap-x-2 gap-y-2 text-red">
          <div className="flex flex-col justify-start items-start col-start-2 row-start-2 col-span-3 text-sm gap-2 text-justify">
            <p>
              <span className="font-junicode text-2xl">Kak Ayu</span> merasa
              bangga dengan kemampuan <Underlined>independen</Underlined> dan{" "}
              <Underlined>kepercayaannya</Underlined> untuk mencari jalan
              hidupnya sendiri.
            </p>
            <p>
              “Aku merasa kebahagiaan saat udah bisa mandiri. Dengan konteks aku
              tempat aku tumbuh, dulu aku melihat rasanya{" "}
              <span className="text-xl font-junicode">
                perempuan seperti <strong>‘harus diurus’</strong>
              </span>
              . Bukan{" "}
              <span className="font-junicode text-xl">
                <em>‘bangga’</em>{" "}
              </span>
              dalam konteks tertentu, tapi lebih merasa{" "}
              <span className="font-junicode text-xl">
                punya opportunity diberikan kepercayaan.{" "}
              </span>
              Kemampuan mengambil keputusan untuk bekerja hingga belajar
              sendiri. Terus sekarang aku mengisi kelas geothermal,{" "}
              <strong>‘wah’</strong> rasanya{" "}
              <Underlined>melihat ada cewek yang daftar</Underlined>. Cukup
              happy saat melihat semakin banyak cewek yang tertarik ke bidang
              ini.
            </p>
            <p>Mengutip yang pernah aku dengar dari guru yoga aku,</p>
          </div>
          <p className="row-start-6 translate-y-2/3 translate-x-6 col-start-3 col-span-4 text-[5rem] leading-none font-junicode uppercase">
            &quot;Do it at
          </p>
          <div className="grid grid-cols-6 grid-rows-4 row-start-2 col-start-6 col-span-6 row-span-4 gap-x-4 gap-y-2">
            <BacaButton
              href="/focus-on/ayu"
              className="row-start-3 col-start-1 col-span-1"
            />
            <div className="flex row-start-1 col-start-1 row-span-2 col-span-2 text-left">
              <Image
                className="object-scale-down h-full"
                src={"/images/chapter/4/13.png"}
                width={156 * 4}
                height={168 * 4}
                alt="Foto"
              />
            </div>
            <div className="row-start-1 col-span-4 col-start-3 row-span-2">
              <Image
                className="object-scale-down h-full"
                src={"/images/chapter/4/14.png"}
                width={156 * 6}
                height={355 * 6}
                alt="Foto"
              />
            </div>
            <div className="row-start-3 col-span-3 col-start-4 row-span-2">
              <Image
                className="object-scale-down h-full"
                src={"/images/chapter/4/15.png"}
                width={293 * 6}
                height={136 * 6}
                alt="Foto"
              />
            </div>
            <h2 className="-translate-x-5 row-start-3 col-start-3 col-span-2 text-6xl font-junicode h-fit w-fit flex flex-col items-start justify-start">
              <span className="uppercase">Ayu</span>{" "}
              <span className="font-ed-mentasta -translate-x-20 -translate-y-5">
                Utami
              </span>
            </h2>
          </div>
          <div className="flex flex-col justify-start text-6xl row-start-6 col-start-6 col-span-6 font-junicode">
            <p className="self-start flex gap-4 w-fit h-fit">
              <span className="text-2xl">(1)</span>
              <span>
                your own <strong>way,</strong>
              </span>
            </p>
            <p className="self-center flex gap-4 w-fit h-fit text-6xl">
              <span className="text-2xl">(2)</span>
              <span>
                your own <strong>pace,</strong>
              </span>
            </p>
            <p className="self-end flex gap-4 w-fit h-fit text-6xl">
              <span className="text-2xl">(3)</span>
              <span>
                your own <strong>time.&quot;</strong>
              </span>
            </p>
          </div>
        </section>
        <section className="pb-0 bg-white-ivory gap-x-4 gap-y-2 grid-system-container text-red">
          <div className="col-start-2 col-span-3 row-start-2 row-span-3">
            <Image
              className="relative z-10 object-scale-down object-left-top h-full"
              src={"/images/chapter/4/16.png"}
              alt="Foto"
              width={227 * 2}
              height={229 * 2}
            />
          </div>
          <div className="col-start-8 col-span-5 row-start-2 row-span-3">
            <Image
              className="relative z-10 object-scale-down object-left-top h-full"
              src={"/images/chapter/4/18.png"}
              alt="Foto"
              width={227 * 4}
              height={229 * 4}
            />
          </div>
          <div className="col-start-5 col-span-3 row-start-5 row-span-3">
            <Image
              className="relative z-10 object-scale-down object-right-bottom h-full"
              src={"/images/chapter/4/17.png"}
              alt="Foto"
              width={355 * 4}
              height={227 * 4}
            />
          </div>
          <div className="col-start-8 col-span-5 row-start-5 flex flex-col items-start justify-start gap-4">
            <p className=" text-2xl font-junicode">
              Ketimpangan sosial saat ini sudah tidak sustainable. Dengan
              menjadi jurnalis, ya itu sih inti (kepuasannya), secara kolektif
              dapat{" "}
              <em>
                <strong>mengubah dunia dan mempersempit ketimpangan.</strong>
              </em>
            </p>
            <p>
              Makanya, flagship-nya Project Multatuli kan{" "}
              <strong>
                Melayani yang Dipinggirkan, Mengawasi Kekuasaan agar Tidak
                Ugal-Ugalan.
              </strong>{" "}
              <Underlined>We take that very seriously.”</Underlined>
            </p>
          </div>
          <BacaButton
            className="w-fit col-start-3 row-start-5"
            href="/focus-on/evi"
          />
          <h2 className=" row-start-5 col-start-2 col-span-2 text-6xl font-junicode h-fit w-fit flex flex-col translate-y-10 items-start justify-start">
            <span className="uppercase">EVI</span>{" "}
            <span className="font-ed-mentasta translate-x-10 -translate-y-5">
              Mariani
            </span>
          </h2>
          <p className="text-justify row-start-6 translate-y-12 col-span-2 col-start-2">
            Membicarakan kepuasan terbesar,{" "}
            <span className="font-junicode text-3xl">Mbak Evi</span> kembali
            merefleksikan bagaimana jurnalis sepatutnya menempatkan dirinya di
            dunia.
          </p>
          <p className="row-start-2 col-span-3 text-justify col-start-5">
            Ia menyimpulkan bahwa jurnalis sebenarnya bukanlah aktor pasif yang
            duduk di kursi VIP melihat sejarah bergulir, tapi punya kuasa dalam
            pembuatan sejarah. Ia berkesimpulan bahwa jelas ketika hidup, gak
            mungkin gak punya keberpihakan. Selalu ada keberpihakan di setiap
            lini pekerjaan di dunia. “Saat ini ada urgensi aksi untuk isu
            ketimpangan dan ketidakadilan struktural. Kalau aku cuma diem aja
            dan memperkaya diri sendiri, wah bukannya gak pengen kaya, tapi aku
            pengen kaya bareng sebanyak-banyaknya orang lain.
          </p>
          <div className="row-start-[8] col-end-[13] col-span-6 -translate-y-full">
            <Image
              alt="Line Decoration"
              width={1098 * 2}
              height={277 * 2}
              src={"/images/chapter/4/decorations/line-5.png"}
              className="object-right-bottom object-scale-down"
            />
          </div>
        </section>
        <section className="bg-white-ivory grid-system-container gap-x-2 gap-y-2 text-red">
          <div className="row-start-2 col-start-2 row-span-3 col-span-2">
            <Image
              src={"/images/chapter/4/19.png"}
              alt="Foto"
              width={227 * 4}
              height={230 * 4}
              className="object-scale-down h-full"
            />
          </div>
          <div
            className="row-start-2 col-start-4 row-span-3 col-span-2 
          "
          >
            <Image
              src={"/images/chapter/4/20.png"}
              alt="Foto"
              width={293 * 4}
              height={227 * 4}
              className="object-scale-down  h-full"
            />
          </div>
          <Image
            src={"/images/chapter/4/21.png"}
            alt="Foto"
            width={543 * 2}
            height={227 * 2}
            className="row-start-5 col-start-2 row-span-1 col-span-4"
          />
          <Image
            width={3200 / 8}
            height={1616 / 8}
            className="row-start-1 col-span-5 col-start-10 translate-x-1/3"
            src={"/images/chapter/4/decorations/line-6.png"}
            alt="Decorations"
          />
          <p className="row-start-2 col-start-6 col-span-4">
            <span className="font-junicode text-2xl">Kak Pritta</span> puas
            dengan hidup dan kariernya saat ini. Ia rajin olahraga dan tinggal
            di tempat di mana Ia bisa sewaktu-waktu pulang dan menemui keluarga
            dengan mudah. Ia juga senang dengan fakta bahwa Ia bebas dari
            ancaman dan bencana. Kak Pritta berpendapat bahwa untuk saat ini{" "}
            <strong>
              fokusnya adalah menikmati hal-hal yang ada di sekitarnya.
            </strong>
          </p>
          <p className="text-4xl font-junicode col-start-7 row-start-4 col-span-5">
            <strong>&quot;</strong>Kalau ada yang <em>lebih baik</em>,{" "}
            <strong>akan hadir</strong> juga. Kalau kita <em>bersyukur</em> akan
            bisa menarik <strong>energi-energi positif.&quot;</strong>
          </p>
          <h2 className=" row-start-6 col-end-12 col-span-2 text-6xl font-junicode h-fit w-fit flex flex-col items-end justify-end">
            <span className="uppercase">Pritta</span>{" "}
            <span className="font-ed-mentasta -translate-x-20 -translate-y-5">
              Puspitasari
            </span>
          </h2>
          <BacaButton
            className="row-start-7 col-end-12 w-fit"
            href="/focus-on/pritta"
          />
        </section>
        <section className="bg-white-ivory grid-system-container gap-x-2 gap-y-2 text-red">
          <h2 className="-translate-x-5 row-start-2 col-start-8 col-span-2 text-6xl font-junicode h-fit w-fit flex flex-col items-start justify-start">
            <span className="uppercase">Irawati</span>{" "}
            <span className="font-ed-mentasta -translate-x-20 -translate-y-5">
              Puteri
            </span>
          </h2>
          <div className="row-start-2 col-start-2 row-span-3 col-span-3">
            <Image
              src={"/images/chapter/4/22.png"}
              alt="Foto"
              width={227 * 4}
              height={227 * 4}
              className="object-scale-down h-full"
            />
          </div>
          <div className="row-start-2 col-start-5 row-span-3 col-span-2">
            <Image
              src={"/images/chapter/4/23.png"}
              alt="Foto"
              width={293 * 4}
              height={227 * 4}
              className="object-scale-down h-full relative"
            />
          </div>
          <Image
            src={"/images/chapter/4/24.png"}
            alt="Foto"
            width={417 * 2}
            height={227 * 2}
            className="row-start-5 col-start-2 row-span-1 col-span-4 relative"
          />
          <Image
            src={"/images/chapter/4/decorations/line-7.png"}
            alt="Decorations"
            width={7792 / 5}
            height={1520 / 5}
            className="row-start-7 col-end-[-1] col-span-8 -translate-y-5"
          />
          <BacaButton
            className="row-start-3 col-start-7 w-fit mt-2"
            href="/focus-on/irawati"
          />
          <p className="row-start-4 col-start-7 col-span-4">
            Kebanggaan{" "}
            <span className="font-junicode text-2xl">Kak Irawati</span> kembali
            lagi ke dalam <Underlined>prioritas pada hidupnya,</Underlined>{" "}
            alasan Ia bekerja keras sejak muda.{" "}
            <span className="font-junicode text-xl">Keluarga.</span>
          </p>
          <p className="text-3xl font-junicode col-start-6 row-start-5 col-span-5">
            <strong>&quot;</strong>Kepuasan terbesar aku itu selain pencapaian
            akademik adalah{" "}
            <strong>transformasi yang aku lakukan terhadap keluarga.</strong>{" "}
            Sesuatu yang bisa bikin mereka happy dan lebih maju.
            <strong>&quot;</strong>
          </p>
        </section>
        <section className="bg-white-ivory grid-system-container gap-x-2 gap-y-2 text-red">
          <h2 className="-translate-x-5 row-start-6 col-start-3 col-span-2 text-6xl font-junicode h-fit w-fit flex flex-col items-start justify-start">
            <span className="uppercase">Nurul</span>{" "}
            <span className="font-ed-mentasta -translate-x-20 -translate-y-5">
              Izzati
            </span>
          </h2>

          <div className=" row-start-3 col-start-2 row-span-3 col-span-4">
            <Image
              src={"/images/chapter/4/25.png"}
              alt="Foto"
              width={313 * 4}
              height={190 * 4}
              className="object-scale-down h-full"
            />
          </div>
          <div className="row-start-3 col-end-8 row-span-3 col-span-2">
            <Image
              src={"/images/chapter/4/26.png"}
              alt="Foto"
              width={190 * 4}
              height={149 * 4}
              className="object-scale-down h-full"
            />
          </div>
          <div className="row-start-6 col-end-8 flex justify-end row-span-2 col-span-4">
            <Image
              src={"/images/chapter/4/27.png"}
              alt="Foto"
              width={159 * 2}
              height={274 * 2}
              className="object-scale-down h-full"
            />
          </div>
          <BacaButton
            className="row-start-7 col-start-2 w-fit mt-2"
            href="/focus-on/nurul"
          />
          <p className="row-start-2 col-start-2 col-span-6 text-justify">
            Dari pengalaman dan hidupnya sendiri,{" "}
            <span className="font-junicode text-2xl">Mba Nurul</span>{" "}
            menunjukkan kepada orang-orang di sekitarnya mengenai kepentingan
            pendidikan. Tak hanya itu, Ia{" "}
            <strong>memperluas definisi ‘sukses’ </strong> bagi{" "}
            <Underlined>
              seorang <strong>perempuan</strong>
            </Underlined>{" "}
            dari yang sebelumnya diketahui.
          </p>
          <div className="flex flex-col justify-start items-start col-start-8 row-start-3 col-span-4 text-sm gap-2 text-justify">
            <p>
              “Kalau ada yang saya banggakan, itu{" "}
              <Underlined>
                <strong>against the odds.</strong>
              </Underlined>{" "}
              Terutama di lingkup keluarga aku, karena dulu di Sumbawa itu{" "}
              <span className="text-xl font-junicode">
                <em>harapannya jadi PNS.</em>
              </span>{" "}
              Perempuan lagi [tidak ada harapan lebih besar dari itu].
            </p>

            <p className="text-4xl font-junicode">
              Kita itu bisa lho, jadi bentuk <em>orang keren</em> selain itu.
            </p>
            <p>
              {" "}
              Sekarang dalam konteks lingkungan keluarga besar aku, orang tua
              tidak lagi <Underlined>diktator</Underlined> dalam masalah
              pendidikan. Lebih <Underlined>mementingkan minat.</Underlined>
            </p>
            <p className="text-4xl text-right font-junicode">
              Tidak ada lagi banyak limitasi untuk perempuan.{" "}
            </p>
            <p>
              Saya berhasil dengan sekarang saya melihat om dan tante konsultasi
              kepada saya mengenai <strong>pendidikan</strong> anak mereka.”
            </p>
          </div>
          <div className="row-start-1 col-end-[13] col-span-4 translate-y-1/2">
            <Image
              alt="Line Decoration"
              width={926 * 2}
              height={241 * 2}
              src={"/images/chapter/4/decorations/line-9.png"}
              className="object-right-bottom object-scale-down"
            />
          </div>

          <Link
            href={"/chapter/5"}
            className="row-start-[8] col-span-1 col-start-11"
            onClick={resetSavedScroll}
          >
            <button className="px-11 pt-2 pb-1 text-3xl bg-none  text-black border-black border-2 font-junicode hover:text-white-ivory hover:bg-black">
              <em>NEXT</em>
            </button>
          </Link>
        </section>
      </main>
    </div>
  );
}
