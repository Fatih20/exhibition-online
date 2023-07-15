'use client';

import './21.css';
import RedBar from '@/app/components/RedBar';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

const SecondChapter: React.FC = () => {
  const [percent, setPercent] = useState(0);
  const [currentCard, setCurrentCard] = useState(0);
  const containerRef = useRef(null);

  return (
    <div className="flex flex-nowrap whitespace-nowrap h-screen items-start justify-start w-screen scrollbar-hide">
      <RedBar progressPercent={percent} />
      <main
        ref={containerRef}
        className="flex overflow-x-auto items-start flex-nowrap whitespace-nowrap h-full justify-start scrollbar-hide"
        onWheel={(e) => {
          (containerRef.current as any).scrollLeft += e.deltaY;
        }}
        onScroll={(e) => {
          const scrollRight = (containerRef.current as any).scrollLeft ?? 1;
          const windowWidth = (containerRef.current as any).scrollWidth ?? 1;
          const docWidth = Math.max(
            document.body.scrollWidth,
            document.documentElement.scrollWidth,
            document.body.offsetWidth,
            document.documentElement.offsetWidth,
            document.body.clientWidth,
            document.documentElement.clientWidth
          );

          const totalDocScrollLength = windowWidth - docWidth;
          const scrollPostion = Math.ceil(
            (scrollRight / totalDocScrollLength) * 100
          );

          setPercent(scrollPostion);
        }}
      >
        {/* Section 1 */}
        <section className="bg-black h-full min-w-[100vw] relative">
          <div className="absolute top-28 left-24 whitespace-break-spaces font-ed-mentasta text-[12.5rem] z-20">
            Benang
          </div>
          <div className="absolute bottom-28 right-24 whitespace-break-spaces font-ed-mentasta text-[12.5rem] z-20">
            Merah
          </div>
          <Image
            src={'/images/chapter/2/1.png'}
            alt="1"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            width={474}
            height={298}
          />
          <div className="w-[474px] h-[298px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red opacity-25 z-10"></div>
          <div className="border-t-2 w-full border-red absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        </section>

        {/* Section 2 */}
        <section className="bg-black h-full min-w-[100vw] relative font-zmg">
          <div className="grid-system-container">
            <div className="row-start-2 col-start-2 col-end-6 whitespace-break-spaces text-lg z-20">
              adalah upaya kami menjawab{' '}
              <span className="font-bold">pertanyaan premis</span> pameran
              asa.cerita.wanita, yaitu:
            </div>
            <div className="row-start-4 col-start-5 col-end-8 font-junicode text-4xl">
              <p>“Bagaimana wanita Indonesia</p>
              <p className="ml-24">memaknai pilihan hidup mereka?”</p>
            </div>
            <div className="row-start-5 whitespace-break-spaces col-start-7 col-end-12 mt-4">
              <p>
                Tim pameran mengambil{' '}
                <span className="font-bold">
                  kesamaan tematik yang berulang muncul
                </span>{' '}
                <span className="text-red">(AKA ‘benang merah’)</span> dalam
                wawancara 10 wanita yang kami lakukan. Hal ini diolah menjadi{' '}
                <span className="font-bold">
                  wawasan dan pola yang mengikat
                </span>
                , sesuatu yang takjub mengingat narasi dan latar belakang
                narasumber sangat berbeda.
              </p>
              <p className="mt-4">
                Benang merah lahir secara{' '}
                <span className="font-bold">organik dari narasumber</span>,
                muncul sebagai respons dari pertanyaan tanpa ekspektasi dari tim
                pameran mengenai jawaban tertentu.{' '}
                <span className="font-bold">
                  Harapan kami adalah mempertahankan “suara” mereka.
                </span>{' '}
                Tiap pilihan dan keputusan, tak peduli seberapa besar
                perbedaanya itu, merupakan upaya kami untuk{' '}
                <span className="font-bold">belajar dari satu sama lain.</span>
              </p>
            </div>
          </div>
          <div className="border-t-2 w-full border-red absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        </section>

        {/* Section 3 */}
        <section className="bg-white-ivory h-full min-w-[100vw] relative font-zmg flex overflow-hidden">
          <div className="h-full w-[500px] flex justify-center items-center relative p-8">
            <div
              className={`absolute z-[5] h-full w-full bg-black opacity-50 ease-in-out ${
                currentCard == 0 && 'hidden'
              }`}
            ></div>
            {/* Card 1 */}
            <div
              className={`absolute h-60 w-48 border-white rounded-2xl flex justify-center items-center text-white z-10 card card-1 ${
                currentCard !== 1 && 'card-1-on'
              }`}
            ></div>
            {/* Card 2 */}
            <div
              className={`absolute h-60 w-48 border-white rounded-2xl flex justify-center items-center text-white z-10 card card-2 ${
                currentCard !== 2 && 'card-2-on'
              }`}
            ></div>
            {/* Card 3 */}
            <div
              className={`absolute h-60 w-48 border-white rounded-2xl flex justify-center items-center text-white z-10 card card-3 ${
                currentCard !== 3 && 'card-3-on'
              }`}
            ></div>
          </div>

          {/* Right section */}
          <div className="h-full w-full whitespace-break-spaces">
            <div className="h-1/2 w-3/4 flex flex-col justify-center text-black">
              <p>
                Untuk belajar dari sesama, tidak berarti menerima secara
                ‘mentah’ pengalaman mereka. Terutama dalam ranah identitas,
                dimana{' '}
                <span className="font-bold">
                  prasangka dan stereotipe melabeli kita dalam ‘kotak-kotak’
                </span>{' '}
                yang mustahil menampung keseluruhan diri kita.
              </p>
              <p className="mt-16">
                <span className="font-bold">Keluar dari kotak!</span> Temukan
                paradigma baru atau kunjungi paradigma lama dengan pemahaman
                baru.
              </p>
            </div>
            <div className="h-1/2 w-3/4 flex flex-col items-end text-red font-junicode pt-8">
              <p className="text-4xl">Memandang dunia dari mata orang lain</p>
              <p className="text-4xl">adalah upaya untuk membangun</p>
              <p className="text-5xl">dunia kita sendiri.</p>
              <button
                className="mt-8 border-2 border-red px-4 py-2 text-3xl cursor-pointer"
                onClick={() => setCurrentCard(1)}
              >
                Mulai
              </button>
            </div>
          </div>

          {/* Absolute popup */}
          <div
            className={`absolute right-0 bg-black h-full w-3/4 whitespace-break-spaces z-10 popup ${
              currentCard == 0 && 'popup-hidden-right'
            }`}
          >
            {/* 1 */}
            <div
              className={`flex flex-col items-center text-white transition ${
                currentCard != 1 && 'hidden'
              }`}
            >
              <p className="mt-28 text-[10rem] font-ed-mentasta">Memula</p>
              <p className="text-center w-1/2">
                Merupakan eksplorasi masa kecil dan sosialisasi peran gender
                yang diberikan kepada narasumber
              </p>

              <div className="flex flex-col font-junicode text-2xl gap-2 mt-8 p-8">
                <p>Apa nilai, norma, atau budaya yang diyakini?</p>
                <p>
                  Selama masa kecil, bagaimana Anda dibesarkan oleh lingkungan
                  sosial?
                </p>
                <p>
                  Selama masa kecil, bagaimana Anda diajarkan untuk memaknai
                  peran gender Anda sebagai wanita?
                </p>
              </div>

              <button
                className="bg-white-ivory text-red border-2 border-red self-end mr-16 text-xl py-2 px-4"
                onClick={() => setCurrentCard(2)}
              >
                NEXT
              </button>
            </div>

            {/* 2 */}
            <div
              className={`flex flex-col items-center text-white transition ${
                currentCard != 2 && 'hidden'
              }`}
            >
              <p className="mt-28 text-[10rem] font-ed-mentasta">Menjadi</p>
              <p className="text-center w-1/2">
                Merupakan eksplorasi proses ‘tumbuh kembang’ yang dijalani
                narasumber, baik dari sisi pribadi hingga professional.
              </p>

              <div className="flex flex-col font-junicode text-2xl gap-2 mt-8 p-8">
                <p>
                  Bolehkah Anda bercerita mengenai awal mula perjalanan studi
                  dan karier Anda hingga saat ini?
                </p>
                <p>Tujuan apa yang ingin Anda selesaikan dalam bidang ini?</p>
                <p>
                  Selama proses studi/karier, isu berbasis gender apa yang
                  paling prevalen dalam bidang Anda?
                </p>
              </div>

              <div className="self-end mr-16 flex gap-2">
                <button
                  className="bg-white-ivory text-red border-2 border-red text-xl py-2 px-4"
                  onClick={() => setCurrentCard(1)}
                >
                  PREV
                </button>
                <button
                  className="bg-white-ivory text-red border-2 border-red  text-xl py-2 px-4"
                  onClick={() => setCurrentCard(3)}
                >
                  NEXT
                </button>
              </div>
            </div>

            {/* 3 */}
            <div
              className={`flex flex-col items-center text-white transition ${
                currentCard != 3 && 'hidden'
              }`}
            >
              <p className="mt-28 text-[10rem] font-ed-mentasta">Memula</p>
              <p className="text-center w-1/2">
                Merupakan eksplorasi masa kecil dan sosialisasi peran gender
                yang diberikan kepada narasumber
              </p>

              <div className="flex flex-col font-junicode text-2xl gap-2 mt-8 p-8">
                <p>Apa nilai, norma, atau budaya yang diyakini?</p>
                <p>
                  Selama masa kecil, bagaimana Anda dibesarkan oleh lingkungan
                  sosial?
                </p>
                <p>
                  Selama masa kecil, bagaimana Anda diajarkan untuk memaknai
                  peran gender Anda sebagai wanita?
                </p>
              </div>

              <div className="self-end mr-16 flex gap-2">
                <button
                  className="bg-white-ivory text-red border-2 border-red text-xl py-2 px-4"
                  onClick={() => setCurrentCard(2)}
                >
                  PREV
                </button>
                <button
                  className="bg-white-ivory text-red border-2 border-red  text-xl py-2 px-4"
                  onClick={() => setCurrentCard(0)}
                >
                  LANJUT
                </button>
              </div>
            </div>
          </div>

          <div className="border-t-2 w-full border-red absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        </section>
      </main>
    </div>
  );
};

export default SecondChapter;
