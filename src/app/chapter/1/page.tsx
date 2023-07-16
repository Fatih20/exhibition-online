"use client";

import RedBar from "@/app/components/RedBar";
import { useHorizontalScroll } from "@/utils/useHorizontalScroll";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function FirstChaper() {
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
        <section className="bg-black grid-system-container">
          <h2 className="w-fit h-fit col-start-2 col-span-3 row-start-4 text-white">
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
            src={"/images/chapter/1/speaker/1.png"}
            alt="Karina Soemarwoto"
            className="row-start-2 col-start-1 col-span-3 translate-x-5"
            width={293}
            height={431}
          ></Image>
          <Image
            src={"/images/chapter/1/belanda.png"}
            alt="Belanda"
            className="row-start-2 col-start-5 col-span-3 opacity-50"
            width={216}
            height={264}
          ></Image>
          <h2 className="w-fit h-fit relative z-10 text-red row-start-6 col-start-1 col-span-3 flex flex-col items-start justify-start -translate-y-5">
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
          <h2 className="w-fit h-fit relative z-10 text-white row-start-7 col-start-2 col-span-4 flex flex-col items-end justify-start -translate-y-5">
            <span className="text-4xl flex justify-start items-start font-junicode">
              (2) <span className="text-8xl uppercase">Wanda</span>
            </span>
            <span className="text-[7.25rem] leading-none font-ed-mentasta flex items-start justify-start self-stretch w-full">
              <span className="-translate-x-24 -translate-y-5">Roxanne</span>
              <span className="flex-grow"> </span>
              <span className="text-3xl font-junicode">1992</span>
            </span>
            <br />
          </h2>
          <Image
            src={"/images/chapter/1/speaker/2.png"}
            alt="Wanda Roxanne"
            className="row-start-4 col-start-3 col-span-3"
            width={403}
            height={532}
          ></Image>
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
          <Image
            src={"/images/chapter/1/speaker/3.png"}
            alt="Wiwien Wiyonoputri"
            className="row-start-3 col-start-4 col-span-5 translate-y-2"
            width={612 * 2}
            height={559 * 2}
          ></Image>
          <div className="row-start-1 col-start-1 col-span-3 text-w\ bg-black text-white row-span-full grid-rows-8 grid grid-cols-1 box-border px-10">
            <p className="col-start-1 whitespace-break-spaces col-span-1 row-start-6">
              Proses pendidikan menjadi pengalaman transformatif terhadap hidup
              Kak Wanda seterusnya.{" "}
            </p>
          </div>
          <h2 className="w-fit h-fit relative z-10 row-start-2 col-start-4 col-span-4 flex items-start justify-start -translate-y-5">
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
          <h3 className="uppercase row-start-4 col-start-7 col-span-2 font-junicode text-red text-2xl -translate-x-6">
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
          <Image
            src={"/images/chapter/1/speaker/4.png"}
            alt="Sri Izzati"
            className="col-start-4 row-start-1 col-span-3"
            width={303}
            height={496}
          ></Image>
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
          <h2 className="w-fit h-fit relative z-10 row-start-6 col-start-4 col-span-4 translate-x-5 translate-y-2 flex flex-col items-start justify-start">
            <span className="flex justify-start items-start font-junicode">
              <span className="text-4xl self-start">(4)</span>{" "}
              <span className="text-[10rem] font-ed-mentasta">Sri</span>
            </span>{" "}
            <span className="text-[10rem] font-junicode translate-y-12 -translate-x-4 flex flex-col-reverse items-start justify-start self-stretch gap-3">
              Izzati
            </span>
            <br />
          </h2>{" "}
          <h3 className="w-fit h-fit relative z-10 row-start-[8] row-span-1 col-start-4 col-span-4 flex items-start justify-start">
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
          <Image
            src={"/images/chapter/1/floral.png"}
            alt="Floral"
            className="row-start-1 col-start-4 col-span-2 -translate-x-5 z-0 relative"
            width={212 * 2}
            height={720 * 2}
          ></Image>
          <Image
            src={"/images/chapter/1/speaker/5.png"}
            alt="Ayu Utami"
            className="row-start-1 col-start-5 col-span-5 relative z-10"
            width={531 * 2}
            height={689 * 2}
          ></Image>
          <div className="bg-white-ivory row-span-full col-start-1 flex flex-col items-center justify-center col-span-3"></div>
          <h2 className="w-fit h-fit relative z-20 row-start-2 col-start-6 col-span-4 flex items-start justify-start">
            <span className="flex justify-start items-start font-junicode text-red">
              <span className="text-6xl">(5)</span>{" "}
              <span className="text-[11rem] leading-none">Ayu</span>
            </span>{" "}
            <br />
            <span className="text-[7.25rem] leading-none font-ed-mentasta translate-y-24 flex flex-col items-start justify-start self-stretch -translate-x-24">
              <span className="text-3xl font-junicode self-end translate-x-5 translate-y-5">
                1992
              </span>
              <span>Utami</span>{" "}
            </span>
            <br />
          </h2>{" "}
          <h3 className="w-fit h-fit font-junicode text-[2.5rem] leading-none row-start-5 col-start-8 col-span-3 uppercase relative z-20">
            Insinyur <br /> Reservoir
          </h3>{" "}
          <p className="col-start-10 col-span-3 row-start-4 whitespace-break-spaces">
            Kak Ayu lahir di Jakarta, namun sempat belajar untuk studi sarjana
            Teknik Kimia di UGM. Terkait masa kecilnya, ia menggarisbawahi peran
            ibunya sebagai suri taulaudan di hidupnya. Kedua orangtuanya
            sama-sama bekerja sebagai insinyur.
          </p>
        </section>
        <section className="grid-system-container bg-red  font-zmg text-white-ivory text-sm text-justify p-5 box-border">
          <Image
            src={"/images/chapter/1/speaker/6.png"}
            alt="Pritta Puspitasari"
            className="row-start-1 col-start-4 col-span-5"
            width={528 * 2}
            height={689 * 2}
          ></Image>
          <p className="col-start-1 col-span-2 row-start-4 whitespace-break-spaces">
            Dari pengalamannya menjadi salah satu ‘first female hire’ yang
            bekerja di bidang lapangan suatu perusahaan energi, Kak Ayu
            merupakan salah satu wanita yang membuka jalan dalam bidang STEM di
            Indonesia. Berkontribusi kembali dengan mengisi kelas pada inisiatif
            Jakarta Drilling School, suatu kursus profesional untuk sertifikasi
            industri, Kak Ayu memiliki kebanggaan tersendiri melihat wanita lain
            di bidangnya.
          </p>
          <h2 className="w-fit h-fit relative z-10 row-start-5 col-start-4 col-span-3 flex flex-col items-start justify-start">
            <span className="text-6xl flex justify-start items-start font-junicode">
              (6) <span className="text-[14.5rem]">Pritta</span>
            </span>{" "}
            <br />
            <span className="text-[10rem] font-ed-mentasta -translate-x-20">
              Puspitasari
            </span>
            <br />
            <span className="flex w-full text-3xl font-junicode self-stretch mt-5">
              <span className="flex-grow"> </span>
              <span>(1986)</span>
            </span>
          </h2>
          <h3 className="w-fit h-fit font-junicode text-4xl leading-none row-start-7 col-start-9 col-span-3 uppercase translate-y-3">
            Konsultan <br /> Lingkungan
          </h3>{" "}
          <p className="col-start-10 col-span-3 row-start-4 whitespace-break-spaces">
            Seorang ‘Sunda’ tulen, Kak Pritta lahir dan besar di Kopo, Bandung
            dari kecil hingga masa perkuliahannya. Besar di keluarga yang cukup,
            tapi tak berlebih membuat Kak Pritta dan keluarga paham tentang
            nilai pendidikan. Ayah Kak Pritta berprofesi sebagai guru SMP yang
            lalu bekerja di usaha mebel, sedangkan Ibu mengurus rumah tangga.
            Meskipun, datang dari keluarga dengan latar belakang ekonomi
            menengah ke bawah, fakta tersebut tidak membuat keluarga Kak Pritta
            mengesampingkan persoalan pendidikan
          </p>
        </section>
        <section className="grid-system-container bg-red  font-zmg text-white-ivory text-sm text-justify p-5 box-border">
          <div className="row-start-2 col-start-6 col-span-5 translate-x-5 w-fit h-fit relative">
            <p className="absolute top-[5rem] left-4 text-5xl font-junicode">
              (7)
            </p>
            <Image
              src={"/images/chapter/1/speaker/7.png"}
              alt="Abigail Limuria"
              className=""
              width={427 * 2}
              height={594 * 2}
            ></Image>
          </div>
          <p className="col-start-1 col-span-2 row-start-4 whitespace-break-spaces">
            <span className="font-junicode">
              <em>
                “Dulu Ayah selalu berpesan, kamu harus membaca koran. Kamu harus
                update dan tahu mengenai hal-hal di dunia.”
              </em>
            </span>
            <br />
            <br />
            Dari Ayahnya pula Kak Pritta belajar tentang kejujuran dimanapun
            lini pekerjaannya nanti beserta nilai disiplin waktu.
            <br />
            <br />
            Seorang lulusan S1 Teknik Lingkungan ITB dan langsung melanjutkan
            studi S2 ‘Urban Enviromental Management’ di Asian Institute of
            Technology, Thailand, ia memulai kariernya sebagai konsultan
            lingkungan. Kini kembali lagi ke perusahaan multinasional di Bangkok
            sebagai konsultan lingkungan senior, ia menggerakan proyek-proyek
            energi besar di Asia Tenggara.
          </p>
          <h2 className=" relative z-10 row-start-6 col-start-8 col-span-3 flex flex-col items-start justify-start w-fit h-fit">
            <span className="text-6xl flex justify-start items-start font-junicode w-fit">
              <span className="text-[12.5rem] leading-none">Abigail</span>
            </span>{" "}
            <span className="h-fit w-full flex items-end justify-start">
              {/* <span className="h-fit w-fit text-[9.375rem] leading-none font-ed-mentasta inline"> */}
              <span className="text-[9.375rem] leading-none font-ed-mentasta -translate-x-40 -translate-y-20">
                Limuria
              </span>
              <span className="flex-grow"></span>
              <span className="text-4xl font-junicode self-start">1995</span>
            </span>
          </h2>
          <h3 className="font-junicode text-4xl leading-none row-start-4 col-start-10 col-span-3 uppercase translate-y-3">
            PENDIRI WIUI <br />
            DAN BIJAK <br />
            MEMILIH
          </h3>{" "}
        </section>
        <section className="grid-system-container bg-red  font-zmg text-white-ivory text-sm text-justify pl-5 box-border">
          <p className="col-start-1 col-span-3 row-start-4 whitespace-break-spaces">
            Besar di lingkungan ibukota yang modern, Kak Abigail Limuria
            merupakan anak pertama dari dua bersaudara. Ia besar dengan
            nilai-nilai egalitarian. Kedua orangtua Kak Abigail sama-sama
            lulusan kampus di Amerika Serikat, maka tak heran jika Kak Abigail
            mulai berbicara Bahasa Indonesia dan Bahasa Inggris secara
            bersamaan. Kak Abigail mengaku beruntung karena orangtuanya
            senantiasa memupuk rasa ingin tahu yang ia miliki, sehingga ia
            merasa leluasa untuk mempertanyakan lingkungan sekitar.
          </p>
          <p className="col-start-4 col-span-3 row-start-4 whitespace-break-spaces">
            Lulus S1 dari Biola University, Amerika Serikat ia kembali dengan
            mimpi untuk Indonesia. Ia menulis buku Lalita yang berisi wawancara
            dengan 51 tokoh wanita Indonesia, mendirikan kanal media What is Up
            Indonesia untuk mengangkat isu sosial politik yang aksesibel, hingga
            Bijak Memilih yang bertujuan agar anak muda dapat membuat pilihan
            kandidiat didasari informasi pada pemilu 2024 nanti.
          </p>
          <Image
            src={"/images/chapter/1/lalita.png"}
            className="col-start-4 col-span-3 row-start-7 translate-y-5"
            width={163}
            height={204}
            alt="Lalita"
          />
          <Image
            src={"/images/chapter/1/floral_2.png"}
            alt="Floral"
            className="row-start-1 col-start-9 col-span-2 -translate-x-5 z-0 relative"
            width={212 * 2}
            height={720 * 2}
          ></Image>
          <Image
            src={"/images/chapter/1/speaker/8.png"}
            alt=""
            className="row-start-1 col-start-10 col-span-5"
            width={347 * 2.5}
            height={677 * 2.5}
          ></Image>
        </section>
        <section className="grid-system-container bg-black  font-zmg text-white-ivory text-sm text-justify p-5 box-border">
          <h2 className="relative z-10 row-start-2 col-start-1 col-span-4  w-fit h-fit flex items-end justify-start gap-1">
            <span className=" w-fit h-fit flex flex-col items-end justify-end">
              <span className="text-6xl flex justify-end items-start font-junicode w-full">
                <span className="self-start text-5xl">(8)</span>
                <span className="flex-grow"></span>
                <span className="text-9xl uppercase">Evi</span>
              </span>{" "}
              <span className="h-fit w-full flex items-end justify-start">
                <span className="text-[6.75rem] leading-none font-ed-mentasta text-right self-start -mt-10 -translate-x-2">
                  Mariani
                </span>
              </span>
            </span>
            <span className="text-4xl font-junicode -translate-y-5">1976</span>
          </h2>
          <h3 className="font-junicode text-4xl leading-none row-start-4 col-start-1 col-span-3 uppercase translate-y-5">
            jurnalis,
            <br />
            PENDIRI <br />
            project <br />
            multatuli
          </h3>{" "}
          <p className="col-start-1 col-span-4 row-start-6 whitespace-break-spaces">
            Bu Evi Mariani lahir di Bandung dan dibesarkan dalam keluarga
            Tionghoa-Indonesia beragama Katolik taat. Seorang anak ketiga dari
            empat bersaudara, generasi Bu Evi merupakan generasi pertama di
            keluarga yang dapat mengenyam pendidikan tinggi. Masa kecil Bu Evi
            terbilang eksklusif, melihat pendidikan taman kanak-kanak hingga SMA
            ia habiskan dalam lingkaran sekolah swasta. Datang dari keluarga
            pedagang dengan kemampuan ekonomi menengah, sang ayah bekerja
            sebagai pengusaha konveksi dan ibu mengurus warung kecil–membuat
            masalah biaya sekolah jadi lumayan pelik.
          </p>
          <p className="col-start-5 col-span-3 row-start-4 translate-y-5 whitespace-break-spaces">
            <span className="font-junicode">
              <em>
                “Dulu untuk masuk SMA diusahakan sekolah yang bagus. Mama dulu
                ngutang sama tante-tante untuk sekolahku. Aku juga diuntungkan
                oleh sistem subsidi silang di SMA Katolik swasta.”
              </em>
            </span>
            Bu Evi memahami bahwa ia hidup pada zaman di mana persoalan masuk
            SMA favorit dapat menjadi titik balik hidup. Pendidikan digunakan
            sebagai alat mobilitas sosial.
            <br />
            <br />
            Perihal kesenjangan gender di rumah saat masa kecil, Bu Evi mengakui
            bahwa keluarganya tidak terlalu patriarki. Papanya membantu
            pekerjaan domestik seperti memasak, mencuci baju, dan mengepel.
            Namun, ia kesal karena biasanya Papa hanya menyuruhnya seorang,
            alih-alih kedua kakak laki-lakinya, dalam melakukan
            pekerjaan-pekerjaan ini.
          </p>
          <p className="col-start-8 col-span-3 row-start-4 translate-y-5 whitespace-break-spaces">
            Lulus S1 Ilmu Komunikasi UGM menjadi awal kariernya sebagai jurnalis
            selama dua dekade. Dari pengalamannya menjadi Managing Director di
            kanal Jakarta Post, ia akhirnya tergerak untuk mendirikan inisiatif
            jurnalisme sendiri, yaitu Project Multatuli. Project Multatuli
            bergerak untuk mengangkat{" "}
            <strong>
              ‘suara yang dipinggirkan, komunitas yang diabaikan, dan isu
              mendasar yang disisihkan’.
            </strong>
          </p>
        </section>
        <section className="grid-system-container bg-black  font-zmg text-white-ivory text-sm text-justify p-5 box-border">
          <div className="row-start-3 col-start-1 col-span-4 relative z-20 w-fit h-fit">
            <p className="absolute left-0 top-10 font-junicode text-5xl">(9)</p>
            <Image
              src={"/images/chapter/1/speaker/9.png"}
              alt="Wanda Roxanne"
              className=""
              width={354}
              height={549}
            ></Image>
          </div>
          <h2 className="relative z-10 row-start-2 -translate-y-5 col-start-1 col-span-4  w-fit h-fit flex items-end justify-start gap-1">
            <span className=" w-fit h-fit flex flex-col items-end justify-end">
              <span className="text-6xl flex justify-end items-start font-junicode w-full">
                <span className="text-[13rem] leading-none">Nurul</span>
              </span>
              <span className="h-fit w-full flex flex-col items-end justify-end relative left-1/3 -translate-y-10">
                <span className="text-4xl font-junicode -mb-10">1980</span>
                <span className="text-[9rem] leading-none font-ed-mentasta text-right">
                  Izzati
                </span>
              </span>
            </span>
          </h2>
          <h3 className="font-junicode text-4xl leading-none row-start-5 col-start-4 col-span-3 uppercase -translate-x-20 translate-y-5 relative z-30">
            Wakil Rektor,
            <br />
            Biotechnologist,
            <br />
            Pendiri synbio.ID
          </h3>{" "}
          <p className="col-start-7 col-span-3 row-start-4 translate-y-5 whitespace-break-spaces">
            Tumbuh besar dengan alam di antara laut dan sawah Sumbawa, kisah
            Mbak Nurul adalah perjalanan ‘against all odds’. Ayahnya yang
            bekerja sebagai guru SD dan ibunya seorang IRT, menekankan
            kepentingan agama, attitude, dan kejujuran sejak kecil. Mengenai
            peran perempuan yang ia lihat, Mbak Nurul menceritakan dinamika
            lingkungan antara keluarga inti dan keluarga besarnya.
          </p>
          <p className="col-start-10 col-span-3 row-start-4 translate-y-5 whitespace-break-spaces">
            Merantau untuk pendidikan S1 Kimia Murni di Malang, Mba Nurul
            mendekatkan dirinya dengan bioteknologi selagi berkuliah S2
            Bioteknologi di Universitas Lund, Swedia. Pengalamannya menjadi
            ketua iGEM (International Genetically Engineered Machine) Lund,
            kompetisi biologi sintetik paling bergengsi di dunia, menjadi salah
            satu titik balik hidupnya. Ia kembali ke tanah Sumbawa sebagai wakil
            rektor Universitas Teknologi Sumbawa dan mendirikan komunitas
            biologi sintetik Indonesia melalui synbio.id.
          </p>
        </section>
        <section className="grid-system-container bg-black  font-zmg text-white-ivory text-sm text-justify p-5 box-border">
          <Image
            src={"/images/chapter/1/speaker/10.png"}
            alt="Irawati Puteri"
            className="row-start-1 col-start-3 col-span-5 "
            width={502 * 2}
            height={677 * 2}
          ></Image>
          <h2 className="relative z-10 row-start-5 col-start-3 col-span-4  w-fit h-fit flex flex-col items-start justify-start">
            <span className="text-red font-junicode flex w-fit h-fit items-start justify-start">
              <span className="text-5xl">(10)</span>
              <span className="text-[12.5rem] leading-none">Irawati</span>
            </span>
            <span className="text-red font-junicode flex w-full min-w-fit h-fit items-start justify-start self-stretch -translate-y-8">
              <span className="text-[9rem] leading-none font-ed-mentasta">
                Puteri
              </span>
              <span className="flex-grow"></span>
              <span className="text-4xl leading-none">1998</span>
            </span>
          </h2>
          <h3 className="font-junicode text-4xl leading-none row-start-7 col-start-8 col-span-3 uppercase">
            Kepala Legal &
            <br />
            kebijakan publik,
            <br />
            pendiri estafet
            <br />
            kebaikan 
          </h3>{" "}
          <p className="col-start-9 col-span-4 row-start-4 whitespace-break-spaces">
            Kak Irawati Puteri, kerap disapa Kak Ira, adalah seorang sulung dari
            tiga bersaudara yang dibesarkan dalam keluarga sederhana. Kedua
            orang tua Kak Ira sendiri tidak memiliki latar belakang pendidikan,
            tetapi memiliki kesadaran kepentingan hal tersebut dan mengutamakan
            pendidikan terbaik di Jakarta untuknya. Tak pernah merasa terbatas
            dengan peran gender, ia menitikberatkan ke tanggung jawabnya sebagai
            anak sulung untuk memerdekakan dan mengangkat derajat keluarga.
          </p>
        </section>
        <section className="grid-system-container bg-black  font-zmg text-white-ivory text-sm text-justify p-5 box-border">
          <p className="col-start-1 col-span-3 row-start-4 whitespace-break-spaces">
            Tidak berpasrah dengan keadaan, Kak Ira pun telah menjadi tulang
            punggung keluarga dengan bekerja sambilan dan mengikuti berbagai
            perlombaan sedari umur 15 tahun demi memenuhi kebutuhan. Banting
            tulang, mulai dari berjualan sticker, SPG freelance chicken nugget,
            guru les, dan banyak perjuangan lainnya. Ia berdedikasi untuk
            membiayai dana sekolah adiknya yang sempat mengalami putus sekolah.
            Kuliah S1 di Hukum UI sambil bekerja, ia juga berkontribusi kembali
            ke komunitas melalui inisiatif Estafet Kebaikan yang memberikan
            donasi sosial dalam bingkisan kado yang dipersonalisasi.
            <br />
            <br />
            <span className="font-junicode">
              <em>
                “Aku mengerti perasaan menjadi penerima bantuan. Mengemas dalam
                bentuk kado menjadi upaya memanusiakan sesama.”
              </em>
            </span>
          </p>
          <p className="col-start-4 col-span-2 row-start-4 whitespace-break-spaces">
            Tak hanya itu kontribusinya, ia menjadi kolaborator SejutaCita.id
            untuk mendirikan beasiswa dengan harapan membantu pelajar yang
            pernah dalam posisinya. Tembus 9 kampus top dunia untuk pendidikan
            S2-nya, kini Kak Ira akan memulai pendidikannya di Stanford Law
            School, Amerika Serikat.
          </p>
          <div className="row-start-3 row-span-full col-start-10 col-span-3 font-junicode flex flex-col justify-between items-end">
            <p className="text-3xl whitespace-break-spaces ">
              Permulaan cerita tidak mendefinisikan akhirnya. <br />
              <br />
              <span className="text-6xl">
                <strong>Pilihan</strong>
              </span>
              <br />
              kita yang menentukan.
            </p>
            <div className="flex flex-col items-end justify-end font-junicode text-2xl gap-5">
              <p className="text-right">
                <em>
                  telusuri pilihan yang <br /> diambil para narasumber
                </em>
              </p>
              <Link href={"/chapter/2-1"}>
                <button className="px-11 pt-2 pb-1 text-3xl bg-none  text-white-ivory border-white-ivory border-2 font-junicode hover:text-black hover:bg-white-ivory">
                  <em>NEXT</em>
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default FirstChaper;
