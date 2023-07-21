"use client";

import RedBar from "@/components/RedBar";
import { useHorizontalScroll } from "@/utils/useHorizontalScroll";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ThirdChapter: React.FC = () => {
  const [percent, setPercent] = useState(0);
  const { elRef: containerRef, resetSavedScroll } = useHorizontalScroll({
    pageName: "Chapter 3",
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
        <section className="min-w-[33vw] h-full bg-red whitespace-break-spaces flex flex-col items-center text-white-ivory p-8 font-zmg text-sm text-justify">
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

        <section className="min-w-[50vw] h-full bg-black whitespace-break-spaces relative overflow-hidden flex flex-col items-center text-white-ivory p-8 pb-0 font-zmg text-sm text-justify">
          <p className="mt-16 font-ed-mentasta text-8xl text-left">Menjadi</p>

          <div className="mt-8 flex w-full justify-around">
            <p className="font-junicode text-4xl">LAJANG.</p>
            <p className="font-junicode text-4xl">ISTRI.</p>
            <p className="font-junicode text-4xl">IBU.</p>
            <p className="font-junicode text-4xl">CHILDFREE.</p>
          </div>

          <Image
            src={"/images/chapter/3/flower-art-1.svg"}
            alt="Flower art 1"
            className="absolute -bottom-8 z-10"
            width={230}
            height={400}
          />
        </section>

        <section className="min-w-[66vw] h-full bg-black whitespace-break-spaces relative overflow-hidden flex flex-col text-white-ivory p-8 pb-16 font-zmg text-sm text-justify">
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

        {/* Section 1 */}
        <section className="min-w-[66vw] h-full bg-red whitespace-break-spaces flex text-white-ivory p-8 font-zmg text-sm text-justify relative">
          <div className="w-1/2">
            <Image
              src={"/images/chapter/3/bird-1.svg"}
              alt="Flower art 1"
              className="ml-16 mt-6"
              width={365}
              height={530}
            />
          </div>
          <div className="w-1/2 flex flex-col">
            <p className="mt-auto font-ed-mentasta text-8xl -ml-16">Menjadi</p>
            <p className="font-junicode text-7xl">LAJANG</p>
            <p className="mt-4 mb-24 w-1/2">
              Lajang, fase tanpa pasangan. Dalam masyarakat yang mementingkan
              peran domestik wanita, status lajang itu sendiri dapat membawa
              tekanan dari sekitar.
            </p>
          </div>
        </section>
        <section className="min-w-[45vw] h-full bg-red whitespace-break-spaces flex text-white-ivory p-8 font-zmg text-sm text-justify relative">
          <iframe
            className="mt-8"
            width="620"
            height="440"
            src="https://www.youtube.com/embed/V4n946MDktg"
            title="YouTube video player"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </section>
        <section className="min-w-[25vw] h-full bg-red whitespace-break-spaces flex text-white-ivory p-8 font-zmg text-sm text-justify relative">
          <p className="mt-8">
            KAK WANDA, sebagai seorang penggiat gender membuka topik ini dalam
            bukunya,{" "}
            <span className="font-bold">
              Menjadi Perempuan Lajang Bukan Masalah.
            </span>{" "}
            Buku kumpulan tulisan Kak Wanda dari berbagai isu dilihat dari lensa
            psikologi dan gender ini menjadi{" "}
            <span className="font-bold">
              upaya memberi ruang dan representasi terhadap isu ini.
            </span>{" "}
            Isu lajang bukan masalah yang biasa saja untuk banyak orang karena
            tuntutan ‘buruan nikah, punya pasangan’.
            <br />
            <br />
            “Waktu aku aktif di Twitter, ada yang bilang ‘kok bisa sih ada orang
            terus-terusan single umur ... --coba lihat teman yang sudah menikah,
            sudah mapan’, Jadi kita itu selalu{" "}
            <span className="font-bold">dibandingkan.</span> Lajang menjadi
            anggapan <span className="font-bold">‘tidak beruntung’</span> atau{" "}
            <span className="font-bold">‘stuck’.</span> Saat aku memberikan
            counter-narasi ceritaku, mereka malah bilang aku harus ‘evaluasi
            diri’ atau berasumsi aku ‘tidak akan pernah mau menikah’.” KAK WANDA
            menyadari bahwa asumsi ini terjadi juga akibat{" "}
            <span className="font-bold">
              terbatasnya pengetahuan orang kepada pengalaman orang lain.
            </span>
          </p>
        </section>
        <section className="min-w-[30vw] h-full bg-red whitespace-break-spaces flex flex-col text-white-ivory p-8 font-zmg text-sm text-justify relative">
          <p className="font-junicode text-4xl mt-8 text-start">
            “Dulu aku pikir pasangan itu untuk ‘saling melengkapi’, karena ada
            yang ‘kurang’ dari aku atau individu lain. Sekarang, aku sendiri itu
            sudah lengkap. Bersama orang lain itu untuk menambah kebahagaiaan,
            bukan hanya karena kesepian.”
          </p>

          <Image
            src={"/images/chapter/3/1.png"}
            alt="1"
            className="mt-8"
            width={270}
            height={155}
          />
          <Image
            src={"/images/chapter/3/2.png"}
            alt="2"
            className="absolute bottom-24 -right-6 z-10"
            width={100}
            height={150}
          />
        </section>
        <section className="min-w-[25vw] h-full bg-red flex flex-col text-white-ivory p-8 font-zmg text-sm text-justify relative">
          <div className="mt-auto relative mb-40 font-junicode text-2xl z-10">
            <p>Sentimen</p>
            <p className="ml-16">‘lajang sebagai pilihan’</p>
            <p className="ml-32">ini juga disetujui oleh narasumber lainnya.</p>
          </div>
        </section>
        <section className="min-w-[25vw] h-full bg-red whitespace-break-spaces flex flex-col gap-4 text-white-ivory p-8 font-zmg text-sm text-justify relative">
          <p className="mt-16">
            Bagi KAK AYU, ia menjawab ‘memang belum waktunya’, mereferensikan
            keadaannya belum bertemu dengan yang tepat.{" "}
            <span className="font-bold">
              Menghadapi diri sendiri juga bagian dari proses tersebut.
            </span>
          </p>
          <Image
            src={"/images/chapter/3/gif/1.gif"}
            alt="1-gif"
            className=""
            blurDataURL={"/images/blur.jpg"}
            placeholder="blur"
            width={130}
            height={130}
          />
        </section>
        <section className="min-w-[25vw] h-full bg-red whitespace-break-spaces flex flex-col gap-4 text-white-ivory p-8 font-zmg text-sm text-justify relative">
          <p className="mt-16">
            KAK IRA merasakan pernikahan bukan sesuatu dengan urgensi.{" "}
            <span className="font-bold">
              Kasih sayang dapat didapatkan dari mana saja, seperti dari
              keluarga.
            </span>{" "}
            Ia juga berkomentar pengalaman menghadapi persepsi orang kepada
            dirinya sebagai seseorang yang ‘ambisius’ maupun ‘serius’ akan juga
            bersikap yang sama dalam hubungan romantis.{" "}
            <span className="font-bold">
              Padahal, cara memandang tanggung jawab karier dan hubungan pasti
              berbeda.
            </span>
          </p>
          <Image
            src={"/images/chapter/3/gif/2.gif"}
            alt="2-gif"
            className=""
            blurDataURL={"/images/blur.jpg"}
            placeholder="blur"
            width={130}
            height={130}
          />
        </section>
        <section className="min-w-[25vw] h-full bg-red whitespace-break-spaces flex flex-col gap-4 text-white-ivory p-8 font-zmg text-sm text-justify relative">
          <p className="mt-16">
            Sambil tertawa, KAK PRITTA berkata “Usaha ya usaha, tapi kita jangan
            sampai asal memilih. Baju aja milih, apa lagi pasangan.{" "}
            <span className="font-bold">
              Untuk sekarang, aku menikmati hidup saja.
            </span>
            ”
          </p>
          <Image
            src={"/images/chapter/3/gif/3.gif"}
            alt="3-gif"
            className=""
            blurDataURL={"/images/blur.jpg"}
            placeholder="blur"
            width={130}
            height={130}
          />
        </section>

        {/* Section 2 */}
        <section className="min-w-[60vw] h-full bg-white-ivory whitespace-break-spaces overflow-hidden flex flex-col text-red p-8 pb-0 font-zmg text-sm text-justify relative">
          <p className="mt-40 font-ed-mentasta text-8xl ml-16">Menjadi</p>
          <p className="font-junicode text-7xl ml-32">BERPASANGAN</p>
          <Image
            src={"/images/chapter/3/kupu-1.png"}
            alt="Kupu 1"
            className="absolute -bottom-8 left-1/2 -translate-x-1/2"
            blurDataURL={"/images/blur-white.jpg"}
            placeholder="blur"
            width={640}
            height={500}
          />
        </section>
        <section className="min-w-[40vw] h-full bg-white-ivory whitespace-break-spaces flex flex-col gap-4 justify-center text-red p-8 pb-0 font-zmg text-sm text-justify relative">
          <p className="text-left w-2/3 self-start">
            Dalam konteks narasumber yang diwawancara, wanita yang memiliki
            status ‘berpasangan’ melakukannya dalam peran sebagai ‘istri’.
            <br />
            <br />
            Sebuah benang merah yang dimiliki oleh semua narasumber adalah hal
            berikut:
          </p>
          <p className="text-center font-junicode text-3xl italic w-2/3">
            kesamaan nilai dan
          </p>
          <p className="text-left font-junicode text-3xl italic w-2/3">
            kemampuan
          </p>
          <p className="text-right font-junicode text-3xl italic w-2/3">
            komunikasi ekspektasi
          </p>
        </section>

        <section className="min-w-[50vw] h-full bg-white-ivory whitespace-break-spaces flex flex-col text-red p-8 font-zmg text-sm text-justify relative">
          <iframe
            className="mt-8 self-center"
            width="620"
            height="440"
            src="https://www.youtube.com/embed/0Si9B2qLmWE"
            title="YouTube video player"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </section>
        <section className="min-w-[25vw] h-full bg-white-ivory whitespace-break-spaces flex flex-col text-red p-8 font-zmg text-sm text-justify relative">
          <p className="mt-16">
            MBA NURUL yang tidak tertarik dengan konsep ‘pacaran’ kembali ke
            Sumbawa tanpa ekspektasi, hanya untuk segera dilamar oleh teman
            kuliahnya, saat S2 di Sweden. Selagi{" "}
            <span className="font-bold">
              memutuskan salah satu keputusan terbesar dalam hidupnya, ia
              membuat list pros/cons, berdiskusi kepada orang terpercaya, dan
              secara menyeluruh berdiskusi mengenai value yang dipegang.
            </span>
            <br />
            <br />
            Dengan pengertian semisi dan sevisi dengan suaminya, konflik dapat
            diselesaikan dengan baik. “Serunya punya goals yang sama, kita bisa
            mengejar mimpi bareng-bareng”, ujar MBA NURUL dan keluarga kecilnya
            yang sekarang ingin melanjutkan studi ke luar negeri bersama.
          </p>
          <Image
            src={"/images/chapter/3/gif/4-11.gif"}
            alt="4-11-gif"
            className="mt-4"
            blurDataURL={"/images/blur.jpg"}
            placeholder="blur"
            width={130}
            height={130}
          />
        </section>
        <section className="min-w-[25vw] h-full bg-white-ivory whitespace-break-spaces flex flex-col text-red p-8 font-zmg text-sm text-justify relative">
          <p className="mt-16">
            KAK KARINA setuju. Penting saat{" "}
            <span className="font-bold">
              memulai hubungan sudah melihat kecocokan prioritas dan nilai.
            </span>{" "}
            Hal ini penting terutama dalam konteks identitasnya sebagai diaspora
            Indonesia, suaminya yang British, dan ekspektasi kultural di Belanda
            tempat mereka tumbuh bersama. Setelah itu,{" "}
            <span className="font-bold">empati dan komunikasi terbuka</span>{" "}
            menjadi kunci penyelesaian konflik.
          </p>
          <Image
            src={"/images/chapter/3/gif/5.gif"}
            alt="5-gif"
            className="mt-4"
            blurDataURL={"/images/blur.jpg"}
            placeholder="blur"
            width={130}
            height={130}
          />
        </section>
        <section className="min-w-[25vw] h-full bg-white-ivory whitespace-break-spaces flex flex-col text-red p-8 font-zmg text-sm text-justify relative">
          <p className="mt-16">
            Untuk BU WIWIEN, kecocokan tersebut tumbuh dari awal mula basis
            pertemanan. Setelah berteman 8 tahun lebih, BU WIWIEN menemukan
            sosok suami yang juga <span className="font-bold">suportif</span>{" "}
            terhadap karier dan pilihan hidupnya.
          </p>
          <Image
            src={"/images/chapter/3/gif/6.gif"}
            alt="6-gif"
            className="mt-4"
            blurDataURL={"/images/blur.jpg"}
            placeholder="blur"
            width={130}
            height={130}
          />
          <p className="mt-8">
            KAK ABIGAIL berkomentar bahwa ia mengerti kepentingan dikotomi peran
            laki-laki dan perempuan di masa lalu.{" "}
            <span className="font-bold">
              Namun, perbedaan peran ini sudah tidak terlalu lagi relevan dalam
              kehidupan modern.
            </span>
          </p>
          <Image
            src={"/images/chapter/3/gif/7.gif"}
            alt="7-gif"
            className="mt-4"
            blurDataURL={"/images/blur.jpg"}
            placeholder="blur"
            width={130}
            height={130}
          />
        </section>
        <section className="min-w-[25vw] h-full bg-white-ivory whitespace-break-spaces flex flex-col text-red p-8 font-zmg text-sm text-justify relative">
          <p className="mt-16">
            KAK IZZATI sendiri masih belum lama menikah. Dalam prosesnya, ia
            masih terus mempelajari fitrah peran istri dan ‘melek’ atas diskursi
            peran ibu dan anak. Dalam menyikapi pasangan, KAK IZZATI juga
            memastikan{" "}
            <span className="font-bold">
              komunikasi yang sepenuhnya transparan.
            </span>{" "}
            Proses ini tidak cuma untuk saling menerima ‘mentah-mentah’, tapi
            untuk saling ‘challenge’ satu sama lain. “Menyenangkan untuk bersama{" "}
            <span className="font-bold">orang yang bisa diajak ngobrol.</span>{" "}
            Kamu juga harus kenal diri sendiri untuk tahu value mana yang{" "}
            <span className="font-bold">nonkompromi bagimu.</span>”
          </p>
          <Image
            src={"/images/chapter/3/gif/8.gif"}
            alt="8-gif"
            className="mt-4"
            blurDataURL={"/images/blur.jpg"}
            placeholder="blur"
            width={130}
            height={130}
          />
        </section>

        <section className="min-w-[50vw] h-full bg-black whitespace-break-spaces overflow-hidden flex flex-col items-end text-white-ivory p-8 pb-0 font-zmg text-sm text-justify relative">
          <div className="flex mt-24">
            <p className="font-junicode text-3xl -mr-20">(3)</p>
            <p className="font-ed-mentasta mr-16 text-8xl">Menjadi</p>
          </div>
          <p className="font-junicode text-7xl z-10 relative">IBU</p>
          <iframe
            className="mt-8 self-end mr-12"
            width="580"
            height="350"
            src="https://www.youtube.com/embed/gH4m47_0BIM"
            title="YouTube video player"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </section>
        <section className="min-w-[25vw] h-full bg-black whitespace-break-spaces flex flex-col items-center justify-center text-white-ivory p-8 font-zmg text-sm text-justify">
          <p className="text-left">
            Peran seorang ibu untuk mendidik, menjaga, dan merawat anak adalah
            hal yang sering dipasangkan sebagai ‘kodrat’ wanita.
          </p>
        </section>
        <section className="min-w-[25vw] h-full bg-black whitespace-break-spaces flex flex-col items-center justify-center text-white-ivory p-8 font-zmg text-sm text-justify relative">
          <Image
            src={"/images/chapter/3/kupu-small.svg"}
            alt="Kupu small"
            className="absolute top-1/4 -left-16 z-10"
            width={107}
            height={80}
          />
          <Image
            src={"/images/chapter/3/kupu-big.svg"}
            alt="Kupu big"
            className="absolute top-[15%] -right-16 z-20"
            width={160}
            height={120}
          />
          <div className="relative">
            <p className="text-left">
              Dari wawancara dengan narasumber yang memiliki anak, kita memulai
              dengan komentar pengaruh pekerja rumah tangga pada peran ini.
            </p>

            <audio
              className="absolute top-full translate-y-full"
              controls
              src="/audio/Evi Mariani - Menjadi Ibu.mp3"
            >
              Your browser does not support the
              <code>audio</code> element.
            </audio>
          </div>
        </section>
        <section className="min-w-[50vw] h-full bg-black whitespace-break-spaces overflow-hidden flex flex-col items-center text-white-ivory p-8 pb-0 font-zmg text-sm text-justify relative">
          <Image
            src={"/images/chapter/3/kupu-small.svg"}
            alt="Kupu small"
            className="absolute top-[20%] left-1/2 z-10"
            width={107}
            height={80}
          />
          <Image
            src={"/images/chapter/3/flower-art-1.svg"}
            alt="Flower art 1"
            className="absolute -bottom-8 left-[10%] z-10"
            width={230}
            height={400}
          />
          <Image
            src={"/images/chapter/3/kupu-trail.svg"}
            alt="Kupu trail"
            className="absolute bottom-0 left-1/2 z-10"
            width={273}
            height={260}
          />
        </section>

        <section className="min-w-[25vw] h-full bg-black whitespace-break-spaces flex flex-col text-white-ivory p-8 font-zmg text-sm text-justify relative">
          <p className="mt-16">
            Salah satu aspek penting yang diungkit dari BU EVI adalah peran
            keberadaan{" "}
            <span className="font-bold">pekerja rumah tangga (PRT)</span> dalam
            mengurus anak dan bagaimana hal ini menentukan{" "}
            <span className="font-bold">
              proses peminggiran wanita di dunia kerja.
            </span>
            <br />
            <br />
            Seseorang yang punya privelese untuk mempekerjakan PRT mungkin{" "}
            <span className="font-bold">
              tidak akan terlalu terpengaruh konflik prioritas.
            </span>{" "}
            BU EVI juga mengakui bahwa mempekerjakan PRT juga berkontribusi
            terhadap konflik prioritas wanita lain. Hal ini dapat berkontribusi
            terhadap konflik prioritas dalam diri PRT-nya dimana dirinya harus
            bekerja meski mengabaikan anaknya sendiri.
          </p>

          <iframe
            className="absolute bottom-8 -left-16"
            width="440"
            height="280"
            src="https://www.youtube.com/embed/gH4m47_0BIM"
            title="YouTube video player"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </section>
        <section className="min-w-[25vw] h-full bg-black whitespace-break-spaces flex flex-col text-white-ivory p-8 font-zmg text-sm text-justify relative">
          <p className="mt-16">
            Konflik muncul pada saat orang tak punya PRT. Karena{" "}
            <span className="font-bold">
              beban mengurus anak jatuh lebih besar ke wanita,
            </span>{" "}
            terjadi beberapa kasus saat anak sakit ia harus izin, ada
            permasalahan di sekolah, jadi diminta
            <span className="font-bold">
              prioritas antara anak dan pekerjaan.
            </span>{" "}
            Sehingga muncul{" "}
            <span className="font-bold">stereotype dalam recruitment</span>{" "}
            bahwa mengambil wanita dengan anak akan lebih “merepotkan”
            dibandingkan laki-laki atau wanita lajang.
            <br />
            <br />
            BU EVI mengakhiri dengan{" "}
            <span className="font-bold">
              kepentingan negosiasi dengan pasangan
            </span>{" "}
            dan
            <span className="font-bold">
              peraturan regulasi pemerintah
            </span>{" "}
            untuk membantu menjaga hak-hak wanita.
          </p>
          <Image
            src={"/images/chapter/3/gif/9.gif"}
            alt="9-gif"
            className="mt-4"
            blurDataURL={"/images/blur.jpg"}
            placeholder="blur"
            width={130}
            height={130}
          />
        </section>
        <section className="min-w-[25vw] h-full bg-black whitespace-break-spaces flex flex-col text-white-ivory p-8 font-zmg text-sm text-justify relative">
          <p className="mt-16">
            Sebagai ibu dari seorang bayi berusia 3 bulan, konflik yang dialami
            KAK KARINA sejalan dengan diskusi BU EVI. Tanpa PRT dan akses
            keluarga besar seperti Indonesia di Belanda, KAK KARINA{" "}
            <span className="font-bold">harus memilih prioritasnya.</span>{" "}
            Sesuai dengan komunikasi ekspektasi, suaminya memiliki privelese
            untuk bekerja dan ia memiliki peran untuk menjaga anak di rumah.
            <br />
            <br />
            “Realitanya, kamu adalah ibu dari anak itu.{" "}
            <span className="font-bold">
              Tidak semua hal bisa didelegasi, sebaik apapun suami atau
              pembagian pekerjaan rumah.
            </span>
            Memang berbeda, ini fakta saja. Tapi ini bukan berarti suatu
            ‘pengorbanan’ atau ‘kamu tidak akan bisa memiliki karier’, maksudku
            kita harus bekerja lebih keras sebagai wanita.”
          </p>
          <Image
            src={"/images/chapter/3/gif/5.gif"}
            alt="5-gif"
            className="mt-4"
            blurDataURL={"/images/blur.jpg"}
            placeholder="blur"
            width={130}
            height={130}
          />
        </section>
        <section className="min-w-[25vw] h-full bg-black whitespace-break-spaces flex flex-col text-white-ivory p-8 font-zmg text-sm text-justify relative">
          <p className="mt-16">
            Dalam mengasuh anak, BU NURUL juga berkomentar mengenai{" "}
            <span className="font-bold">pentingnya lingkungan kerja</span> yang
            suportif. Di lingkungan kampus Universitas Teknik Sumbawa, tempat BU
            NURUL bekerja sebagai wakil rektor, banyak civitas yang juga datang
            membawa anak. Hal ini membantu upaya mengurus anak bagi pasangan
            yang keduanya aktif bekerja.
          </p>
          <Image
            src={"/images/chapter/3/gif/4-11.gif"}
            alt="4-11-gif"
            className="mt-4"
            blurDataURL={"/images/blur.jpg"}
            placeholder="blur"
            width={130}
            height={130}
          />
        </section>

        {/* Section 2 */}
        <section className="min-w-[60vw] h-full bg-red whitespace-break-spaces overflow-hidden flex flex-col items-center text-white-ivory p-8 pb-0 font-zmg text-sm text-justify relative">
          <Image
            src={"/images/chapter/3/bird-2.png"}
            alt="Bird 2"
            className="absolute -top-8"
            blurDataURL={"/images/blur-red.jpg"}
            placeholder="blur"
            width={620}
            height={420}
          />
          <div className="flex mt-auto w-2/3">
            <p className="font-junicode text-3xl -mr-20">(4)</p>
            <p className="font-ed-mentasta text-left text-8xl">Menjadi</p>
          </div>
          <p className="font-junicode text-7xl z-10 relative">CHILDFREE</p>
          <p className="w-1/2 text-left mb-24">
            Childfree merupakan kata yang mendeskripsikan keadaan kepada orang
            dewasa yang tidak memiliki anak. Dalam konteks Indonesia, kata
            childfree, terutama childfree atas pilihan sendiri (voluntary)
            sempat menjadi polemik.
          </p>
        </section>
        <section className="min-w-[40vw] h-full bg-red whitespace-break-spaces flex flex-col items-center text-white-ivory p-8 pb-0 font-zmg text-sm text-justify relative">
          <iframe
            className="mt-32"
            width="580"
            height="420"
            src="https://www.youtube.com/embed/2o555S6MOgw"
            title="YouTube video player"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </section>
        <section className="min-w-[25vw] h-full bg-red whitespace-break-spaces flex flex-col text-white-ivory p-8 pb-0 font-zmg text-sm text-justify relative">
          <p className="mt-16">
            Topik ini menjadi fokus riset thesis KAK WANDA, dimana ia memulai
            konsep otoritas tubuh yang dimiliki wanita. Yakni, ia bisa{" "}
            <span className="font-bold">
              memilih dan memiliki kontrol atas tubuhnya sendiri.
            </span>{" "}
            Namun dalam prakteknya, hal ini belum terjadi karena adanya stigma.
            Hal ini juga berat karena memiliki anak sering kali menyangkut beban
            ganda bagi wanita.
            <br />
            <br />“
            <span className="font-bold">Childfree adalah hak asasi.</span>{" "}
            Wanita punya dan boleh memiliki hak kesehatan seksual dan
            reproduksi. Jadi kita bisa saling memahami, saling berempati, tak
            hanya mengecap bahwa ‘perempuan tidak punya anak itu apa atau
            sebagainya’. Dicap stigma dan mitos, padahal cerita perempuan itu
            berbeda-beda.”
          </p>

          <Image
            src={"/images/chapter/3/gif/10-12.gif"}
            alt="10-12-gif"
            className="mt-4"
            blurDataURL={"/images/blur.jpg"}
            placeholder="blur"
            width={130}
            height={130}
          />
        </section>
        <section className="min-w-[25vw] h-full bg-red whitespace-break-spaces flex flex-col justify-center text-white-ivory p-8 pb-0 font-zmg text-sm text-justify relative">
          <Image
            src={"/images/chapter/3/3.png"}
            alt="png"
            className=""
            blurDataURL={"/images/blur-red.jpg"}
            placeholder="blur"
            width={320}
            height={300}
          />

          <Link
            href={"/chapter/4"}
            className="absolute bottom-8 right-16 cursor-pointer"
            onClick={resetSavedScroll}
          >
            <button className="bg-red text-white-ivory border-2 border-white-ivory hover:bg-white-ivory hover:text-red transition-colors  text-xl py-2 px-4 font-junicode z-10">
              LANJUT
            </button>
          </Link>
        </section>
      </main>
    </div>
  );
};

export default ThirdChapter;
