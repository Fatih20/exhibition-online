"use client";

import "./23.css";
import RedBar from "@/components/RedBar";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

const SecondPageThird: React.FC = () => {
  const [percent, setPercent] = useState(0);
  const containerRef = useRef(null);
  const router = useRouter();

  return (
    <div className="flex flex-nowrap whitespace-nowrap h-screen items-start justify-start w-screen scrollbar-hide text-white">
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
        {/* Side Header */}
        <section className="text-sm min-w-[50vw] h-full whitespace-break-spaces flex justify-center items-center bg-flower text-white-ivory">
          <div className="w-1/2">
            <p className="-rotate-90 font-ed-mentasta text-[10rem] translate-y-16 -translate-x-8">
              Menjadi
            </p>
          </div>
          <div className="flex flex-col w-1/2 h-1/2 font font-zmg pr-8">
            <p className="w-full">Merupakan eksplorasi</p>
            <p className="mt-8 text-end">proses ‘tumbuh kembang’</p>
            <p className="mt-8">yang dijalani narasumber</p>
            <p className="mt-auto text-end">baik dari sisi pribadi</p>
            <p className="mt-8">maupun profesional</p>
          </div>
        </section>

        {/* Section 1 */}
        <section className="text-sm min-w-[50vw] h-full bg-red whitespace-break-spaces flex flex-col text-white-ivory p-8 font-zmg">
          <div className="mt-32 flex ml-2">
            <p className="text-xl mr-2 -ml-8 z-10 font-junicode">(1)</p>
            <p className="font-junicode text-5xl">BIAR</p>
          </div>
          <p className="ml-2 font-junicode text-5xl">DIA</p>
          <p className="ml-2 font-ed-mentasta text-7xl">Berkelana</p>

          <p className="my-8 font-zmg">
            Berkelana ke tempat-tempat baru, berinteraksi dengan budaya baru,
            dan berbicara dengan orang-orang baru dapat memiliki{" "}
            <span className="font-bold">efek transformatif</span> terhadap diri.
            Melalui pengalamannya belajar di negara Skandinavia, MBA NURUL
            menemukan gaya hidup work-life balance dan peran gender yang sangat
            berbeda dari Sumbawa. Melalui pekerjaanya sekeliling Indonesia,
            bertemu dengan orang-orang Bajo mempertemukan BU WIWIEN dengan
            masyarakat egaliter. “Justru saya yang belajar dari mereka, bukan
            sebaliknya.”
          </p>
        </section>

        <section className="text-sm min-w-[50vw] h-full bg-red whitespace-break-spaces flex flex-col items-center text-white-ivory p-8 font-zmg">
          <iframe
            width="500"
            height="260"
            className="self-center mt-16"
            src="https://www.youtube.com/embed/36QsVJZcKrs"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
          />

          <div className="mt-8 w-full">
            <Image
              src={"/images/chapter/2/6.png"}
              alt="6"
              className="inline-block"
              width={180}
              height={180}
            />
            <Image
              src={"/images/chapter/2/7.png"}
              alt="7"
              className="ml-16 inline-block"
              width={400}
              height={300}
            />
          </div>
        </section>

        {/* Section 2 */}
        <section className="text-sm min-w-[50vw] h-full bg-red whitespace-break-spaces flex flex-col text-white-ivory p-8 font-zmg">
          <div className="mt-16 flex">
            <div>
              <div className="flex">
                <p className="text-xl mr-2 -ml-8 z-10 font-junicode">(2)</p>
                <p className="font-junicode text-5xl">HADAPI</p>
              </div>
              <p className="font-junicode text-5xl">KERAGUAN</p>
              <p className="font-junicode text-5xl">HADAPI</p>
              <p className="font-ed-mentasta text-7xl">Dunia</p>
            </div>

            <Image
              src={"/images/chapter/2/8.png"}
              alt="8"
              className="ml-auto inline-block"
              width={320}
              height={185}
            />
          </div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/rQV8dTMMjZQ"
            className="self-center mt-16"
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </section>
        <section className="text-sm min-w-[66vw] h-full bg-red whitespace-break-spaces flex flex-col text-white-ivory p-8 font-zmg overflow-hidden">
          <div className="mt-16 flex gap-8">
            <p className="text-justify w-1/2">
              Dalam dunia yang menuntut konformasi dan sedikit toleransi atas
              kesalahan, banyak wanita mengalami{" "}
              <span className="font-bold">keraguan diri.</span> ‘Apakah saya
              mampu? Apakah saya melakukan hal yang benar?’ Dua narasumber
              bercerita tentang proses mereka menumbuhkan kepercayaan atas
              kompetensi. Dulu, KAK WANDA membutuhkan 7 tahun untuk
              menyelesaikan kuliah S1. Masa S2, ia lulus ‘summa cum laude’ dan
              menjadi representasi mahasiswa di pidato kelulusan.{" "}
              <span className="font-bold">
                Ia menemukan kembali kecintaan dirinya untuk belajar sekaligus
                kepercayaan dirinya.
              </span>
            </p>
            <p className="text-justify ml-auto w-1/2">
              MBA NURUL mendeskripsikan dirinya sebagai seseorang yang tidak
              terlalu percaya diri saat berkuliah di luar. Setelah ia dipercaya
              menjadi ketua tim iGEM (kompetisi biologi sintetis terbesar di
              dunia) dan mendapatkan apresiasi tulus dari tim dan supervisornya,
              <span className="font-bold">
                {" "}
                ia berhasil membuktikan dirinya dengan kerja keras.
              </span>
              <br />
              <br />
              Dalam kariernya, MBA EVI pernah ragu saat mendapatkan label tidak
              objektif.{" "}
              <span className="font-bold">
                Tapi ia bersyukur untuk ‘never waver’ atau tidak goyah.{" "}
              </span>
              Ia menyadari bahwa newsroom banyak dipenuhi oleh orang privelese
              ibukota yang disetiri subjektivitasnya sendiri dengan abai tentang
              dinamika kelas.
            </p>
          </div>

          <Image
            src={"/images/chapter/2/9.png"}
            alt="9"
            className="self-center mt-auto"
            width={530}
            height={353}
          />
        </section>

        {/* Section 3 */}
        <section className="text-sm min-w-[33vw] h-full bg-red whitespace-break-spaces flex flex-col text-white-ivory p-8 font-zmg">
          <div className="flex mt-auto mb-8">
            <p className="text-xl mr-2 font-junicode">(3)</p>
            <p className="mt-auto mb-8 font-junicode text-5xl">
              CAKRAWALA BARU DAN{" "}
              <span className="font-ed-mentasta text-7xl -ml-10">Pikiran</span>{" "}
              TERBUKA
            </p>
          </div>
          <p className="mt-8 mb-8 text-justify">
            Masyarakat sering menuntut pemuda untuk membawa perubahan yang
            berarti. Namun, narasi yang seringkali luput dari jargon tersebut
            adalah pemuda harus terlebih punya pikiran dan hati terbuka dalam
            melihat masalah di dalam diri dan ruang-ruang di sekitarnya.
            Pembicara kami percaya bahwa{" "}
            <span className="font-bold">
              ada momen tertentu yang membuat pandangannya terhadap dunia
              bergeser jauh.
            </span>{" "}
            Itu merupakan harga yang harus mereka bayar untuk melakukan
            perubahan.
          </p>
        </section>
        <section className="text-sm min-w-[33vw] h-full bg-red whitespace-break-spaces flex flex-col text-white-ivory p-8 font-zmg">
          <Image
            src={"/images/chapter/2/10.png"}
            alt="10"
            className="self-end mt-8"
            width={460}
            height={300}
          />
          <p className="mt-auto mb-8 text-justify">
            MBAK EVI menyatakan bahwa hari-harinya sebagai{" "}
            <span className="font-bold">mahasiswa Fisipol UGM </span>
            merupakan salah satu masa transformatif dalam hidupnya. Lulus dari
            kampus tersebut, MBAK EVI tidak hanya membawa pulang gelar sarjana,
            tetapi juga membawa bekal pengetahuan tentang berdarahnya Genosida
            1965, berkeloknya perlawanan Soe Hok Gie, dan kepekaan politik
            kolektif yang tajam.
          </p>
        </section>
        <section className="text-sm min-w-[33vw] h-full bg-red whitespace-break-spaces flex flex-col text-white-ivory p-8 font-zmg">
          <p className="mt-auto mb-8 text-justify">
            Lulus dari kampus di Los Angeles, Amerika Serikat, KAK ABIGAIL
            kemudian bertanya-tanya tentang tokoh perempuan inspiratif di
            Indonesia. Kemudian, Ia{" "}
            <span className="font-bold">
              mewawancarai dan menulis buku tentang 51 tokoh perempuan tersebut.
            </span>{" "}
            Pembicaraan dengan wanita-wanita ini membuat KAK ABIGAIL sadar bahwa
            politik bukanlah sesuatu yang jauh dan abstrak, tetapi dekat dan
            mempengaruhi aspek hidup sehari-hari.
            <br />
            <br />
            Datang dari latar belakang kelas pekerja, KAK IRAWATI tidak pernah
            dapat mengartikulasikan masalah di sekitarnya dengan baik. Berkuliah
            sebagai{" "}
            <span className="font-bold">
              mahasiswa hukum di Universitas Indonesia
            </span>{" "}
            memberikannya kecakapan dan pengetahuan untuk memahami isu
            struktural.
          </p>
        </section>

        {/* Section 3 */}
        <section className="text-sm min-w-[50vw] h-full bg-red whitespace-break-spaces flex flex-col text-white-ivory p-8 pb-0 font-zmg overflow-hidden">
          <div className="mt-16 flex">
            <p className="text-xl mr-2 font-junicode">(3)</p>
            <p className="font-junicode text-5xl">
              <span className="italic">PRIDE AND PREJUDICE:</span> AGENSI
              PEREMPUAN PEKERJA
            </p>
          </div>
          <p className="mt-8 mb-8 text-justify">
            Perempuan pekerja seringkali{" "}
            <span className="font-bold">
              tidak hanya berkelahi batin dengan ekspektasi masyarakat di
              sekitarnya, tetapi juga dengan intuisi dirinya sendiri.
            </span>{" "}
            Secara eksternal, komunitas yang patriarkis seringkali melihat
            mereka dengan tatapan ragu. Secara internal, mereka merasa bangga
            berada di posisinya saat ini, namun mengamini bahwa keraguan
            masyarakat ikut pula menggerogoti jiwanya. Pembicara-pembicara di
            pameran ini percaya bahwa penting untuk{" "}
            <span className="font-bold">
              mencari komunitas yang secara tulus dapat memahami mereka.
            </span>
          </p>
          <Image
            src={"/images/chapter/2/11.png"}
            alt="11"
            className="mt-auto self-center"
            width={520}
            height={290}
          />
        </section>
        <section className="text-sm min-w-[50vw] h-full bg-red whitespace-break-spaces relative flex flex-col text-white-ivory p-8 pb-0 font-zmg overflow-hidden">
          <p className="mt-16 text-justify">
            KAK KARINA menyatakan bahwa ada banyak{" "}
            <span className="font-bold">
              keraguan dan stereotip yang melekat tentang kapabilitas perempuan
            </span>{" "}
            di bidangnya, yaitu ilmu fisika. Ia kembali menekankan komunitas
            yang dapat dipercaya sebagai ‘antidote’ dari hambatan tersebut.
            <br />
            <br />
            KAK AYU juga berkomentar dengan pernyataan yang serupa, apalagi
            keraguan{" "}
            <span className="font-bold">
              kapabilitas perempuan yang bekerja dalam ranah STEM yang
              memerlukan penerjunan lapangan.
            </span>{" "}
            Hambatannya pun tidak hanya formal, namun juga sosial. Kak Ayu
            mengaku bahwa penting untuk membangun pertemanan yang tulus,
            termasuk dengan pria di sekitarnya yang ia percayai.
            <br />
            <br />
            Sebagai perempuan pekerja yang memakai hijab, KAK IZZATI bangga dan
            puas dengan pencapaiannya karena dapat menjadi representasi dan
            panutan bagi perempuan berhijab lainnya yang ingin berkarir di lini
            sebagai penulis. Namun, Kak Izzati khawatir bahwa dengan hijab pula,
            norma ‘kepantasan’ Islam juga otomatis melekat dengan dirinya pun
            karyanya. Padahal, dalam{" "}
            <span className="font-bold">
              konteks kekaryaan, perlu terdapat derajat seperasi dengan
              penulisnya.
            </span>{" "}
            Kekhawatiran akan asosiasi ini merupakan bentuk nyata perang
            identitas yang selalu dihadapi oleh seorang perempuan Muslim di
            ruang publik.
          </p>

          <Link
            href={"/chapter/2-4"}
            className="mt-auto mb-8 flex justify-end w-full"
          >
            <button
              className="bg-red text-white-ivory border-2 border-white-ivory hover:bg-white-ivory hover:text-red transition-colors text-xl py-2 px-4 font-junicode z-10"
              onClick={() => router.push("/chapter/2-4")}
            >
              LANJUT
            </button>
          </Link>

          <Image
            src={"/images/chapter/2/art-butterfly.svg"}
            alt=""
            className="absolute left-48"
            width={620}
            height={685}
          />
        </section>
      </main>
    </div>
  );
};

export default SecondPageThird;
