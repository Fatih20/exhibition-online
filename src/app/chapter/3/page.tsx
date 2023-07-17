'use client';

import RedBar from '@/app/components/RedBar';
import { useHorizontalScroll } from '@/utils/useHorizontalScroll';
import Image from 'next/image';
import React, { useState } from 'react';

const ThirdChapter: React.FC = () => {
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
        className="flex overflow-x-auto overflow-y-hidden items-start flex-nowrap whitespace-nowrap h-full justify-start scrollbar-hide"
      >
        {/* Jumbotron */}
        <section className="min-w-[100vw] h-full bg-red whitespace-break-spaces flex flex-col justify-center items-center text-white-ivory p-8 font-ed-mentasta text-justify">
          <p className="text-center text-[14rem]">Benang Merah</p>
          <p className="text-center text-5xl italic -mt-12">dalam</p>
          <p className="text-center text-6xl font-junicode">
            Hubungan <span className="font-ed-mentasta">&</span> Keluarga
          </p>
        </section>

        {/* Prologue */}
        <section className="min-w-[33vw] h-full bg-red whitespace-break-spaces flex flex-col items-center text-white-ivory p-8 font-zmg text-justify">
          <p className="mt-auto font-junicode text-5xl text-left">
            PENGALAMAN WANITA TAK LEPAS DARI RANAH DOMESTIK.
          </p>
          <p className="mt-8 mb-8">
            Terdapat ekspektasi dalam berhubungan. Sebuah peran lain untuk
            dimainkan. Narasi wanita dalam ranah privat seringkali diinterogasi,
            dinilai dalam stereotipe, dibebankan dengan prasangka. Setelah
            eksplorasi peran dalam ranah publik, pameran bergerak ke ranah
            domestik. Melalui ruang pameran, biarkan tiap narasi dilihat sebagai
            pilihan, bukan suatu penghakiman.
          </p>
        </section>

        <section className="min-w-[50vw] h-full bg-black whitespace-break-spaces relative overflow-hidden flex flex-col items-center text-white-ivory p-8 pb-0 font-zmg text-justify">
          <p className="mt-16 font-ed-mentasta text-8xl text-left">Menjadi</p>

          <div className="mt-8 flex w-full justify-around">
            <p className="font-junicode text-4xl">LAJANG.</p>
            <p className="font-junicode text-4xl">ISTRI.</p>
            <p className="font-junicode text-4xl">IBU.</p>
            <p className="font-junicode text-4xl">CHILDFREE.</p>
          </div>

          <Image
            src={'/images/chapter/3/flower-art-1.svg'}
            alt="Flower art 1"
            className="absolute -bottom-8 z-10"
            width={230}
            height={400}
          />
        </section>

        <section className="min-w-[66vw] h-full bg-black whitespace-break-spaces relative overflow-hidden flex flex-col text-white-ivory p-8 pb-16 font-zmg text-justify">
          <div className="flex mt-auto w-full text-left relative">
            <p className="w-1/2">
              Bagaimana cara anda memposisikan kepentingan keberadaan hubungan
              romantis di hidup anda?
            </p>
          </div>
          <div className="flex mt-8 w-full text-left">
            <div className="w-[12.5%]" />
            <p className="w-1/2">
              Apa arti dan ekspektasi yang Anda miliki dalam menjalin hubungan
              dengan seseorang?
            </p>
          </div>
          <div className="flex mt-8 w-full text-left">
            <div className="w-1/4" />
            <p className="w-1/2">
              Bagaimana cara Anda dan pasangan menyikapi ekspektasi dan peran
              masing-masing dalam hubungan?
            </p>
          </div>
          <div className="flex mt-8 w-full text-left">
            <div className="w-[37.5%]" />
            <p className="w-1/2">
              Bagaimana pendapat anda tentang ekspektasi setelah memiliki anak?
            </p>
          </div>
          <div className="flex mt-8 w-full text-left">
            <div className="w-1/2" />
            <p className="w-1/2">
              Bagaimana pendapat anda tentang topik childfree?
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ThirdChapter;
