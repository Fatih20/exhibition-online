'use client';

import './4.css';
import RedBar from '@/app/components/RedBar';
import { useHorizontalScroll } from '@/utils/useHorizontalScroll';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export default function FourthChapter() {
  const [percent, setPercent] = useState(0);
  const containerRef = useHorizontalScroll({
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
            src={'/images/chapter/4/jumbo-question.svg'}
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
              src={'/images/chapter/4/1.png'}
              alt="1"
              className=""
              width={350}
              height={230}
            />
          </div>

          <div className="flex flex-col w-full">
            <p className="w-3/4">
              Dalam kariernya,{' '}
              <span className="font-junicode text-3xl">Kak Karina</span> senang
              jika bisa berpartisipasi membangun sistem ekonomi finansial yang
              berkelanjutan. Utamanya, Ia mementingkan{' '}
              <span className="font-bold">
                kemampuan kita berkontribusi kembali ke sesama.
              </span>
            </p>

            <p className="font-junicode text-4xl mt-8 flex">
              <p>“</p>
              <p>
                Dalam lini apa pun pekerjaan, memberikan pengaruh baik itu
                penting.{' '}
                <span className="italic">
                  It’s about <span className="font-bold">impact</span> and{' '}
                  <span className="font-bold">giving back</span> to your
                  community.
                </span>
                ”
              </p>
            </p>

            <div className="mt-8 w-1/3 self-end">
              <p className="text-end font-junicode text-5xl">KARINA</p>
              <p className="font-ed-mentasta text-6xl">Soemarwoto</p>

              <Link href={'/'} className="flex mt-4">
                <button className="ml-auto bg-white-ivory text-red border-2 border-red hover:bg-red hover:text-white-ivory transition-colors py-1 px-2 font-junicode z-10">
                  <p>BACA</p>
                  <p>SELENGKAPNYA</p>
                </button>
              </Link>
            </div>
          </div>

          <Image
            src={'/images/chapter/4/line-1.svg'}
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
              <span className="font-junicode text-3xl">Bu Wiwien</span>{' '}
              merefleksikan bagaimana interpretasi telah membukanya ke berbagai
              penghujung daerah dan budaya di seluruh Indonesia.
            </p>

            {/* Main */}
            <div className="w-full flex gap-4 h-full">
              <div className="flex flex-col w-[20%] h-full">
                <p className="text-justify">
                  <span className="font-junicode text-3xl">“PERTAMA,</span>{' '}
                  adalah pada saat <span className="underline">suatu plan</span>{' '}
                  [dalam konteks pelatihan pariwisata]{' '}
                  <span className="underline">berubah</span>{' '}
                  <span className="font-bold">menjadi suatu experience.</span>{' '}
                  Contohnya, melihat nelayan yang dulu bergetar saat menulis di
                  depan saya pada saat pelatihan, dapat{' '}
                  <span className="font-junicode italic text-lg">
                    berbicara dengan lantang
                  </span>{' '}
                  di depan{' '}
                  <span className="font-junicode italic text-lg">
                    bupati, direktur bank,
                  </span>{' '}
                  hingga{' '}
                  <span className="font-junicode italic text-lg">
                    artis-artis.
                  </span>{' '}
                  Dalam perubahan tersebut, saya{' '}
                  <span className="underline">berkontribusi</span> untuk memberi{' '}
                  <span className="font-junicode">bekal hidup</span> mereka ke
                  depannya.
                </p>

                <Link href={'/'} className="flex mt-auto">
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
                    saat saya bisa mengajak orang{' '}
                    <span className="font-bold">
                      yang awalnya{' '}
                      <span className="font-junicode italic text-lg">abai</span>
                    </span>{' '}
                    dengan sekitar <span className="underline">menjadi</span>{' '}
                    <span className="font-bold">
                      tersadarkan atas signifikansi{' '}
                      <span className="font-junicode italic text-lg">
                        sejarah.{' '}
                      </span>
                    </span>
                    Mereka jadi ingin{' '}
                    <span className="underline">
                      melakukan sesuatu untuk{' '}
                      <span className="tracking-[0.25em]">
                        tempat tinggalnya.
                      </span>
                    </span>
                  </p>
                  <Image
                    src={'/images/chapter/4/3.png'}
                    alt="3"
                    className=""
                    width={215}
                    height={165}
                  />
                </div>

                <Image
                  src={'/images/chapter/4/2.png'}
                  alt="2"
                  className="mt-auto self-center"
                  width={355}
                  height={175}
                />
              </div>

              <div className="flex flex-col w-[40%] h-full gap-4">
                <Image
                  src={'/images/chapter/4/4.png'}
                  alt="4"
                  className="mt-auto self-center"
                  width={350}
                  height={185}
                />

                <p className="text-justify">
                  <span className="font-junicode text-3xl">
                    KETIGA, saya belajar banyak.
                  </span>{' '}
                  Dengan mendampingi orang-orang membuat cerita, kita banyak
                  belajar sejarah Indonesia dari Pulau Flores hingga Pulau
                  Penyengat. Banyak yang saya ketahui karena mengobrol dengan
                  komunitas dan orang sekitar. Melalui{' '}
                  <span className="underline">cerita dan wisata</span>, terdapat
                  kesempatan untuk kita belajar dari budaya beragam.
                  <span className="font-bold">
                    {' '}
                    Proses ini yang saya rasakan.”
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="w-1/4 flex flex-col">
            <p className="font-junicode text-justify text-4xl">
              “Saya bertambah kaya{' '}
              <span className="font-bold">bukan dalam arti rupiah,</span> tapi
              kaya akan
              <span className="font-bold">
                {' '}
                pemahaman batin dan sejarah Indonesia
              </span>{' '}
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
              src={'/images/chapter/4/5.png'}
              alt="5"
              className="mt-auto self-center"
              width={180}
              height={240}
            />
          </div>
          <div className="flex flex-col w-[20%] h-[507px] mt-8">
            <Image
              src={'/images/chapter/4/6.png'}
              alt="6"
              className="self-center"
              width={180}
              height={480}
            />
          </div>
          <div className="flex flex-col w-[20%] h-[507px] mt-8">
            <Image
              src={'/images/chapter/4/7.png'}
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
              <span className="font-junicode text-3xl">Kak Izzati</span>{' '}
              berbicara mengenai dorongan untuk terus belajar dan efek inspirasi
              yang kita berikan ke sesama saat kita berbuat baik.
              <br />
              <br />
              “Paling senang ketika aku{' '}
              <span className="font-junicode">membantu orang.</span> Pada saat
              aku ngobrol sama orang-orang pinter gitu,{' '}
              <span className="underline">aku ingin kayak dia</span>, dan itu{' '}
              <span className="underline">selalu mendorong</span> aku untuk{' '}
              <span className="font-bold">belajar dan mencari ilmu.</span>
            </p>
            <p className="font-junicode text-justify text-5xl">
              ‘You make me want to do{' '}
              <span className="italic">good things.</span>’
            </p>
            <p>
              Karena aku ngerasain efek dari bantuan orang lain ke aku, jadi aku
              pengen juga bisa bikin orang lain ingin berbuat baik. Maka bisa
              membuat{' '}
              <span className="font-junicode italic">‘domino effect’</span> itu
              ke orang lain.”
            </p>

            <Link href={'/'} className="flex mt-auto">
              <button className="bg-white-ivory mb-2 text-red border-2 border-red hover:bg-red hover:text-white-ivory transition-colors py-1 px-2 font-junicode z-10">
                <p>BACA</p>
                <p>SELENGKAPNYA</p>
              </button>
            </Link>

            <Image
              src={'/images/chapter/4/line-2.svg'}
              alt="Line 2"
              className="absolute bottom-0 right-8"
              width={460}
              height={250}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
