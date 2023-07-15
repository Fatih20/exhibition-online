"use client";

import RedBar from "@/app/components/RedBar";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

function FirstChaper() {
  const [percent, setPercent] = useState(0);
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
        <section className="bg-black grid-system-container">
          <h2 className="col-start-2 col-span-3 row-start-4 text-white">
            <span className="text-[10rem] font-ed-mentasta outline-text-white text-black">
              <em>Wanita</em>
            </span>
            <span className="text-white text-7xl font-bold font-junicode uppercase translate-y-8 inline-block">
              LAHIR.
            </span>
          </h2>
          <p className="font-zmg col-span-3 col-start-9 row-start-4 whitespace-break-spaces text-sm h-fit">
            Ragam ras, suku, budaya, dan agama. Dalam interaksi kelas, geografi,
            dan ekspresi gender, tak terhitung variasi corak identitas. <br />
            {""}
            Upaya pameran ini hanya setetes air dari lautan pengalaman wanita
            Indonesia. <br />
            <strong>10 wanita. 10 cerita.</strong>
          </p>
          <p className="font-zmg text-2xl col-start-9 col-span-3 row-start-6">
            Semua cerita memiliki{" "}
            <span className="font-junicode">
              <em>permulaan</em>
            </span>
          </p>
        </section>
        <section className="grid-system-container bg-black font-zmg text-white text-sm p-5 text-justify">
          <Image
            src={"/images/chapter/1/speaker_1.png"}
            alt="Belanda"
            className="row-start-2 col-start-1 col-span-3 translate-x-5"
            width={293}
            height={430}
          ></Image>
          <Image
            src={"/images/chapter/1/belanda.png"}
            alt="Belanda"
            className="row-start-2 col-start-5 col-span-3 opacity-50"
            width={216}
            height={264}
          ></Image>
          <h2 className="relative z-10 text-red row-start-6 col-start-1 col-span-3 flex flex-col items-start justify-start -translate-y-5">
            <span className="text-2xl row-start-4 col-start-1 col-span-3 flex justify-start items-start font-junicode">
              (1) <span className="text-8xl uppercase">Karina</span>
            </span>{" "}
            <br />
            <span className="text-[7.25rem] font-ed-mentasta">Soemarwoto</span>
            <br />
            <span className="flex w-full text-3xl font-junicode self-stretch">
              <span className="flex-grow"> </span>
              1993
            </span>
          </h2>
          <h3 className="font-junicode text-4xl row-start-[8] col-start-1 col-span-3 uppercase">
            Konsultan Investasi <br /> Berkelanjutan, Fisikawan
          </h3>
          <p className="row-start-4 col-span-3 col-start-4 whitespace-break-spaces">
            Lahir di Bandung namun tumbuh besar hampir seluruh hidupnya di
            Belanda, hidup Kak Karina sebagai imigran generasi kedua di Belanda
            adalah contoh corak kisah diaspora Indonesia. Ia berpegang kepada
            identitasnya sebagai orang Indonesia dan juga beradaptasi dengan
            ekspektasi kultural tempat ia tumbuh.
          </p>
          <p className="row-start-4 col-span-3 col-start-7 whitespace-break-spaces">
            Menurut Kak Karina, utamanya ia tumbuh besar dengan tiga nilai:
            kerja keras, kejujuran, dan kewajiban sebagai seorang Muslim.
            Minatnya beragam, yang terefleksikan dari pengalamannya mempelajari
            Fisika Murni selama S1 dan S2 hingga mendesain mesin MRI selagi juga
            mengambil gelar humaniora di ‘Middle Eastern Studies’ Universitas
            Leiden. Sekarang, ia bekerja di bidang finance sebagai konsultan
            investasi.
          </p>
          <p className="row-start-4 col-span-3 col-start-10 whitespace-break-spaces">
            <span className="font-junicode">
              <em>
                “Dulu pada saat ditanya ingin jadi apa, aku ambisi banget, I
                want to be everything at once! Tapi sering umur, aku sadar bahwa
                ada prioritas dalam hidup, jadi tergantung dengan prioritas
                kita. Karier tidak tentu selalu jadi nomor satu. Kita bisa
                mengejar sampai tidak ada habisnya. tetapi suatu saat kita harus
                belajar juga untuk bahagia dengan apa yang kita punya. Selalu
                ada sesuatu yang lebih, jadi kita harus belajar merasa cukup.”,
              </em>
            </span>
            <br />
            <span className="text-justify">
              {"       "} ujarnya saat merefleksikan pertanyaan mengenai
              perbedaan nilai yang ia pegang sekarang pada umur 30 tahun dan
              masa lalulnya.
            </span>
          </p>
        </section>
        <section className="grid-system-container bg-black font-zmg text-white text-sm p-5 text-justify">
          <h2 className="relative z-10 text-white row-start-7 col-start-3 col-span-4 flex flex-col items-start justify-start -translate-y-5">
            <span className="text-2xl flex justify-start items-start font-junicode">
              (2) <span className="text-8xl uppercase">Wanda</span>
            </span>
            <br />{" "}
            <span className="text-[7.25rem] font-ed-mentasta -translate-x-24 -translate-y-5 flex items-start justify-start self-stretch">
              <span>Roxanne</span>
              <span className="flex-grow"> </span>
              <span className="text-3xl font-junicode">1992</span>
            </span>
            <br />
          </h2>
          <h3 className="uppercase text-[2.625rem] leading-none font-junicode col-start-2 col-span-1 row-start-2">
            penulis, <br /> pegiat <br /> gender
          </h3>
          <p className="row-start-4 col-span-3 col-start-7 whitespace-break-spaces">
            Lahir di pedesaan Jember, Jawa Timur dan dibesarkan bersama adik
            perempuannya oleh ibunya seorang diri, Kak Wanda memulai cerita
            dengan merefleksikan peran privelese dalam hidupnya.
            <br />
            <br />
            <span className="font-junicode">
              <em>
                “Aku rasa keluargaku lebih beruntung daripada keadaan orang
                sekitar di Jember, namun saat dibandingkan dengan keadaan dengan
                orang yang aku temui di S1 dan S2, aku bilang memang keluargaku
                tidak privelese. Lapisan privelese memang berbeda ya, tergantung
                pembandingnya.”,
              </em>
            </span>
            ujarnya. <br />
            <br />
            Terlepas dari latar belakangnya yang kompleks, Kak Wanda mengaku
            beruntung dapat mendapat belajar S1 Psikologi di Universitas
            Airlangga dan S2 Studi Gender di Universitas Indonesia.
          </p>
          <p className="row-start-4 col-span-3 col-start-10 whitespace-break-spaces">
            Kedua orang tua Kak Wanda menamatkan SMA dan menikah muda. Tumbuh
            besar, Kak Wanda mengambil banyak inspirasi dari sang
            ‘Tante’–satu-satunya lulusan S1 di keluarga besar mereka. Pendidikan
            dianggap menjadi kunci mobilitas bagi masa depan anak. Hal ini,
            beserta keinginan untuk independen mendorong Kak Wanda untuk
            merantau keluar Jember untuk S1.
          </p>
        </section>
        <section className="grid-system-container bg-white-ivory  font-zmg text-red text-sm text-justify pr-8 box-border">
          <div className="row-start-1 col-start-1 col-span-3 text-w\ bg-black text-white row-span-full grid-rows-8 grid grid-cols-1 box-border px-10">
            <p className="col-start-1 whitespace-break-spaces col-span-1 row-start-6">
              Proses pendidikan menjadi pengalaman transformatif terhadap hidup
              Kak Wanda seterusnya.{" "}
            </p>
          </div>
          <h2 className="relative z-10 row-start-2 col-start-4 col-span-4 flex items-start justify-start -translate-y-5">
            <span className="text-2xl flex flex-col-reverse justify-start items-start font-junicode">
              <span className="text-[2.625rem]">(3)</span>{" "}
              <span className="text-8xl uppercase">Wiwien</span>
            </span>{" "}
            <br />
            <span className="text-[7.25rem] font-ed-mentasta translate-y-10 -translate-x-4 flex flex-col-reverse items-start justify-start self-stretch gap-3">
              <span>Wiyonoputri</span>{" "}
              <span className="text-3xl font-junicode self-end">1956</span>
            </span>
            <br />
          </h2>{" "}
          <h3 className="uppercase row-start-4 -translate-y-9 col-start-7 col-span-2 font-junicode text-red text-2xl -translate-x-6">
            SPESIALIS INTERPRETASI <br /> HERITAGE DAN PARIWISATA <br />
            BERBASIS KOMUNITAS
          </h3>
          <p className="row-start-5 col-start-7 col-span-6 text-red whitespace-break-spaces -translate-x-6 text-justify">
            Masa kecil Bu Wiwien dijalani di Sukabumi, lalu pindah ke Condet,
            Jakarta Timur untuk menjalani sekolah dasarnya. Ketika ditanyakan
            mengenai hidupnya di Jakarta, ia bercerita dengan tertawa getir
            mengenai masa lalunya.
          </p>
          <p className="row-start-6 col-span-3 col-start-10 whitespace-break-spaces text-justify">
            <span className="font-junicode">
              <em>
                “Dulu tuh emang pulang sekolah, main-main. Kita betul-betul ke
                sekolah jalan kaki, sebagian besar teman saya pada gak pake
                sepatu dan kita cukup syok melihatnya. Kita udah malas ke
                sekolah. Padahal, kita gak tahu dulu Ibu saya berhutang untuk
                sekolah saya. Pindah ke Condet tuh gaada listrik, gaada apa-apa,
                harus main bekel dan belajar pas siang-siang karena di rumah
                juga gaada lantainya.”
              </em>
            </span>
            <br />
            <br />
            <span className="text-justify">
              Sempat dalam kondisi kekurangan, Bu Wiwien merasa keluarganya
              ‘bawa fun’ saja dan yakin atas harapan di kemudian hari.
            </span>
          </p>
        </section>
        <section className="grid-system-container bg-white-ivory  font-zmg text-red text-sm text-justify p-5 box-border">
          <p className="whitespace-break-spaces col-start-1 col-span-3 row-start-5">
            Lulus dari S1 Perencanaan Wilayah dan Kota ITB di bidang
            spesialisasi pariwisata, Bu Wiwien memulai karier sebagai peneliti.
            Ia juga terpilih dalam program leadership dan pengembangan
            berkelanjutan internasional, Lead. Pengalaman ini mempersiapkannya
            untuk bekerja sebagai konsultan pribadi bersama LSM “Rare” yang
            bekerjasama dengan organisasi seperti UNESCO dan British Council
            dalam memberdayakan komunitas. Hal ini membawanya berkeliling
            Indonesia, dari ujung barat Pulau Penyengat hingga ujung timur
            Wakatobi.
          </p>
          <Image
            alt="Sri Izzati"
            src={"/images/chapter/1/speaker_4.png"}
            width={303}
            height={493}
            className="col-start-4 row-start-1 col-span-3"
          />
          <h2 className="relative z-10 row-start-6 col-start-4 col-span-4 translate-x-5 translate-y-2 flex flex-col items-start justify-start">
            <span className="flex justify-start items-start font-junicode">
              <span className="text-4xl self-start">(4)</span>{" "}
              <span className="text-[10rem] font-ed-mentasta">Sri</span>
            </span>{" "}
            <span className="text-[10rem] font-junicode translate-y-12 -translate-x-4 flex flex-col-reverse items-start justify-start self-stretch gap-3">
              Izzati
            </span>
            <br />
          </h2>{" "}
          <h3 className="relative z-10 row-start-[8] row-span-1 col-start-4 col-span-4 flex items-start justify-start">
            <span className="uppercase font-junicode text-6xl">Penulis</span>{" "}
            <span className="text-3xl font-junicode self-end">1995</span>
          </h3>
          <div className="row-start-2 col-start-9 col-span-3 flex items-center justify-between">
            <Image
              src={"/images/chapter/1/KKPK/1.png"}
              alt="KKPK 1"
              width={101}
              height={148}
            />
            <Image
              src={"/images/chapter/1/KKPK/2.png"}
              alt="KKPK 2"
              width={101}
              height={148}
            />

            <Image
              src={"/images/chapter/1/KKPK/3.png"}
              alt="KKPK 3"
              width={101}
              height={148}
            />
          </div>
          <p className="col-start-7 col-span-6 row-start-4 whitespace-break-spaces text-black">
            Kecintaan Kak Izzati kepada membaca sudah dipupuk oleh keluarganya
            dari kecil.{" "}
            <span className="font-junicode">
              <em>
                “Iya, aku dari kecil tumbuh sama buku. Dulu juga, aku bisa baca
                dari umur tiga, karena memang udah dikenalkan sama huruf dan
                buku sejak awal, yang untungnya didukung dengan adanya
                perpustakaan kecil buku-buku dari kakak-kakakku,”
              </em>
            </span>
            celetuknya. Ia bahkan sudah menulis cerita pertamanya saat ia
            berumur 8 tahun, menerbitkan buku cerita di Mizan. Karyanya terkenal
            dalam seri “Kecil-Kecil Punya Karya” (KKPK), memberikannya rekor
            MURI sebagai penulis novel tercilik.
          </p>
          <p className="col-start-10 col-span-3 row-start-6 -translate-y-5 whitespace-break-spaces text-black">
            Melanjutkan studinya di S1 Psikologi UI atas rasa penasaran tentang
            kondisi manusia, panggilan untuk menulis fiksi tidak pernah
            meninggalkannya. Hal ini mendorongnya untuk belajar lagi di Columbia
            University, Amerika Serikat dengan jurusan MFA (Master of Fine
            Arts). Suatu lembar tak tertulis menunggu goresan pena lanjut
            darinya.
          </p>
        </section>
        <section className="grid-system-container bg-red  font-zmg text-white-ivory text-sm text-justify pr-5 box-border">
          <div className="bg-white-ivory row-span-full col-start-1 flex flex-col items-center justify-center col-span-3"></div>
          <h2 className="relative z-10 row-start-3 col-start-5 col-span-4 flex items-start justify-start -translate-y-5">
            <span className="flex justify-start items-start font-junicode">
              <span className="text-6xl">(5)</span>{" "}
              <span className="text-[11rem]">Ayu</span>
            </span>{" "}
            <br />
            <span className="text-[7.25rem] font-ed-mentasta translate-y-10 -translate-x-4 flex flex-col-reverse items-start justify-start self-stretch gap-3">
              <span>Utami</span>{" "}
              <span className="text-3xl font-junicode self-end">1992</span>
            </span>
            <br />
          </h2>{" "}
          <h3 className="font-junicode text-[2.5rem] leading-none row-start-5 col-start-8 col-span-3 uppercase">
            Insinyur <br /> Reservoir
          </h3>{" "}
          <p className="col-start-10 col-span-3 row-start-4 whitespace-break-spaces">
            Kak Ayu lahir di Jakarta, namun sempat belajar untuk studi sarjana
            Teknik Kimia di UGM. Terkait masa kecilnya, ia menggarisbawahi peran
            ibunya sebagai suri taulaudan di hidupnya. Kedua orangtuanya
            sama-sama bekerja sebagai insinyur.
          </p>
        </section>
      </main>
    </div>
  );
}

export default FirstChaper;
