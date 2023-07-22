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
    pageName: "Focus On : Evi",
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
          <div className="pl-10 row-start-2 col-span-8 col-start-1 flex flex-col items-start justify-start">
            <p className="font-junicode text-5xl w-fit h-fit flex translate-y-1/2">
              <em>
                focus
                <br />
                on
              </em>
            </p>
            <h2 className="col-span-6 font-junicode h-fit w-fit flex flex-col items-start justify-start self-center ">
              <span className="uppercase text-[10rem] leading-none self-center">
                Evi
              </span>{" "}
              <span className="font-ed-mentasta text-[12rem] leading-none -translate-x-32 -translate-y-10">
                Mariani
              </span>
            </h2>
            <ul className="w-full self-stretch flex items-start justify-end gap-10 -translate-y-5 text-3xl font-junicode box-border px-5">
              <li>projectmultatuli.org</li>
              <li>@projectm_org</li>
              <li>@evimariani</li>
            </ul>
          </div>
          <div className="col-start-1 row-start-7 row-end-[-1] col-span-full box-border pb-5 pl-5 flex items-end justify-start bg-bunga-evi bg-center bg-no-repeat bg-cover">
            <Link href={"/chapter/4"}>
              <button className="text-xl bg-none  text-white-ivory border-white-ivory border-2 font-junicode w-fit h-fit whitespace-break-spaces p-5 text-center align-middle hover:text-black hover:bg-white-ivory uppercase">
                Kembali
              </button>
            </Link>
          </div>
          <div className="col-span-5 row-start-1 col-start-9 row-span-full flex flex-col items-center justify-end">
            <Image
              className="max-h-full object-scale-down object-right-bottom block self-stretch"
              src={"/images/focus-on/speaker/Evi.png"}
              width={1873}
              height={2597}
              alt="Evi Mariani"
            />
          </div>
        </section>
        <section className="bg-black space-x-4 grid-system-container p-5 ">
          <div className="row-start-2 col-start-1 col-span-3 flex flex-col items-start justify-start gap-5 text-justify">
            <p className="text-sm">
              Bu Evi Mariani lahir di Bandung, tumbuh besar di keluarga
              Tionghoa-Indonesia yang beragama Katolik taat. Telah bekerja
              sebagai jurnalis dua dekade, Bu Evi belajar Ilmu Komunikasi di
              UGM, lalu melanjutkan studinya ke Belanda untuk belajar Studi
              Urban.
              <br />
              <br />
              Bu Evi, walaupun saat diwawancarai berapi-api membicarakan posisi
              ideologis, rupanya tidak mendasarkan pilihan karir maupun studinya
              dari idealisme tertentu. Saat masuk kuliah S1, mimpinya terbilang
              naif.
            </p>
            <p className="font-junicode">
              “Masuk ke Ilmu Komunikasi UGM, ada konsentrasi jurnalisme jadi
              memilih itu. Sesederhana alasannya pengen keluar negeri,
              jalan-jalan, dibayarin orang. Setelahnya, ikut pers mahasiswa dan
              hidup sebagai mahasiswa ilmu sosial-politik secara keseluruhan
              menjadi pengalaman formatif hidup.”
            </p>
            <Image
              src={"/images/focus-on/5.png"}
              alt="Habis Makan Jangan Lupa Minum"
              width={171}
              height={120}
              className="self-start"
            />{" "}
          </div>
          <div className="row-start-2 col-start-5 col-span-3 flex flex-col items-start justify-start gap-5 text-justify">
            <p className="text-sm">
              Paska lulus kuliah pada tahun 2001, Bu Evi lalu merantau ke
              Jakarta. Puluhan CV ia sebarkan ke koran-koran besar, namun
              berbulan-bulan tidak ada yang memberikan kesempatan wawancara.
              Selama setengah tahun, ia sempat menjadi penerjemah dahulu.
              Barulah kemudian, Tempo, Suara Pembaharuan, dan The Jakarta Post
              menawarkan pekerjaan. Ia memilih untuk bekerja di desk city The
              Jakarta Post. Pada awal karirnya, ia banyak melaporkan tentang
              isu-isu rakyat miskin kota, mulai dari kenaikan BBM hingga
              penggusuran paksa rumah rakyat. Disanalah ia mengaku jatuh cinta.
            </p>
            <Image
              src={"/images/focus-on/6.png"}
              alt="Habis Makan Jangan Lupa Minum"
              width={171}
              height={120}
              className="self-start"
            />{" "}
            <p className="font-junicode">
              “The measure of a success in journalism itu adalah bisa menelpon
              pejabat. (Sedangkan) aku gapernah berjabat tangan sama presiden
              sekalipun. I don’t think I’ve missed much juga. Aku jatuh cinta
              dengan desk city, akhirnya sempat menjadi kepala desk city pula di
              The Jakarta Post. S2 juga ambil Studi Urban.”
            </p>
          </div>
          <div className="row-start-2 col-start-9 col-span-3 flex flex-col items-start justify-start gap-5 text-justify">
            <p className="text-sm">
              Ketika ditemui untuk sesi wawancara, Bu Evi membawa serta anaknya
              yang rewel karena sempat sakit. Ia juga membicarakan sedikit
              tentang bagaimana ia bertemu suaminya. Mereka bertemu saat kuliah
              tiga dekade lalu, namun baru berpacaran pada tahun 2008.
              Kedatangannya ke Jogja juga berkaitan dengan urusan suaminya di
              ArtJog 2023. Suaminya seorang pegiat seni teater yang telah
              merintis Teater Garasi sejak kuliah.
            </p>
            <Image
              src={"/images/focus-on/7.png"}
              alt="Lalita Project"
              width={214}
              height={75}
              className="self-start"
            />{" "}
            <p className="text-sm">
              Membicarakan peran perempuan dan dinamika keluarga, Bu Evi
              berefleksi tentang dampak fenomena floating mass yang dimulai
              sejak Orde Baru.
              <br />
              <br />
              <span className="font-junicode text-base">
                “Saat ikut Sekolah Perempuan, aku mikir jauh kalau warisan Orde
                Baru floating mass ini sudah merasuk ke keluarga. Orang-orang
                (di dalamnya) dilatih untuk setiap kali bertemu daripada
                ngomongin politik seperti harga beras naik, efektivitas kartu
                BPJS, malah ngomongin kapan kawin. Sehingga, percakapan meja
                makan keluarga (telah) disanitasi menjadi soal masalah moral
                pribadi, bukan moral publik. Pembicaraan disana bukan lagi soal
                korupsi dan ketimpangan tapi moral pribadi tetangga (yang entah)
                LGBTQ atau bukan.”
              </span>
            </p>
          </div>
        </section>
        <section className="bg-black space-x-4 grid-system-container p-5">
          <div className="row-start-2 col-start-1 col-span-3 flex flex-col items-start justify-start gap-5 text-justify">
            <p className="text-sm">
              Floating mass adalah proyek rekayasa sosial buatan rezim Orde
              Baru. Proyek tersebut bertujuan untuk mengubah masyarakat
              Indonesia menjadi &quot;massa mengambang&quot; yang apatis soal
              politik partisipatoris demi mendukung misi pembangunan nasional.
              Melalui floating mass, pemerintah menekan ekspresi identitas
              politik rakyat serta menyetir agar rakyat memilih fokus kepada
              kemapanan hidup dan stabilitas ekonomi masing-masing. Bibit-bibit
              aktivitas politik seperti pengorganisasian keluhan sosial dibabat
              habis, mulai dari level formal hingga personal.
              <br />
              <br />
              <strong>Bangkitnya Kepekaan Politik saat Kuliah</strong>
              <br />
              Bu Evi mengaku betapa terbatas pengetahuan dirinya tentang keadaan
              sosial politik Indonesia sebelum masuk kuliah. Walaupun ia
              keturunan Tionghoa, ia tidak pernah mendengar nama Soe Hok Gie
              satu kali pun saat belia. Ia juga tidak pernah mendengar bahwa
              setidaknya ada setengah juta orang dibantai saat peristiwa 1965.
              Hal-hal itu diketahuinya lewat diskusi dan publikasi pers
              mahasiswa fakultas. Radikalisasi politiknya dimulai sejak pertama
              kali menginjakkan kaki di UGM.
            </p>
          </div>
          <div className="row-start-2 col-start-5 col-span-3 flex flex-col items-start justify-start gap-5 text-justify">
            <p className="font-junicode">
              “Pertama kali masuk kampus langsung dihadapkan sama demonstrasi
              Tegak 5 untuk hak-hak mahasiswa. Mereka berteriak bahwa kita
              kuliah dibayar uang rakyat! Aku saat itu hanya melihat berkeliling
              dan menyadari bahwa aku Cina sendiri diantara banyak orang.”
            </p>
            <p className="text-sm">
              Karir jurnalistik dan tulis-menulis pula ia rintis sejak kuliah.
              Bu Evi pernah menjadi pemimpin redaksi publikasi mahasiswa Suara
              dari Korps Mahasiswa Ilmu Komunikasi UGM. Selain itu, ia aktif
              dalam pembuatan tulisan di pers mahasiswa Sintesa. Bersama
              Sintesa, ia kemudian ambil peran dalam pembuatan edisi tulisan
              Indonesia Cemas sebagai respon jargon dirgahayu 50 tahun
              kemerdekaan RI yaitu Indonesia Emas. Bu Evi juga sempat bercerita
              dengan tertawa getir tentang pengalamannya meliput demonstrasi
              hingga dipentung, dikejar, dan ditangkap polisi.
            </p>

            <p className="font-junicode">
              “Tapi, terus polisinya ga mood nangkapin. Jadi, aku sama
              teman-teman diturunin dari mobil polisi.”
            </p>
          </div>
          <div className="row-start-2 col-start-9 col-span-3 flex flex-col items-center justify-start gap-5 text-justify">
            <p className="text-sm">
              <strong>Jurnalis atau Aktivis?</strong>
              <br />
              Ketika diwawancarai, Bu Evi banyak membicarakan tentang sepak
              terjangnya di ranah jurnalisme Indonesia. Terutama,
              konflik-konflik editorial yang ia sebut sebagai momen-momen
              tergelapnya sebagai jurnalis pada tahun 2015-2016. Bu Evi
              menjelaskan secara rinci jatuh bangun usahanya untuk
              mempertahankan prinsip di ruangan dimana prinsip-prinsip tersebut
              dipertanyakan oleh kolega kerjanya.
              <br />
              <br />
              Bu Evi tahu benar bahwa kolega-koleganya di The Jakarta Post
              terdiri dari kelompok berpendidikan ibukota yang beruntung. Tipe
              yang terbiasa memakai bahasa Inggris sejak kecil dan sudah
              terpapar pendidikan di luar negeri setidaknya sejak kuliah. Ia
              juga paham kalau The Jakarta Post sangat keukeuh perihal
              pemberitaan isu-isu HAM dan gender. Tapi, orang-orang tersebut
              punya sikap yang berbeda soal konflik kelas.
            </p>
            <Image
              src={"/images/focus-on/8.png"}
              alt="WIUI with Andovi"
              width={329}
              height={128}
              className="self-start"
            />{" "}
          </div>
        </section>
        <section className="bg-black space-x-4 grid-system-container p-5">
          <div className="row-start-2 col-start-1 col-span-3 flex flex-col items-start justify-start gap-5 text-justify">
            <p className="font-junicode">
              “(Saat pemberitaan penggusuran oleh Ahok di 2015 naik), aku
              berantem di editorial. (Kolegaku berkata), itu relokasi kan,
              kenapa kamu sebut forced eviction. Ya, aku bilang forced eviction.
              Awalnya, aku suka Ahok. Masuk akal kalau dia jadi media darling,
              misalnya dengan narasi keinginannya membersihkan PNS yang korupsi.
              Tapi, ketika dia mendzolimi yang lebih lemah dari dia, I don’t
              think it’s good leadership. Kamu kalau jadi leader kok sama yang
              lemah malah memfitnah.”
            </p>
            <p className="text-sm">
              Gesekan di ruang editorial ini menggagalkan promosinya untuk
              menjadi Managing Editor di The Jakarta Post. Mbak Evi kemudian
              protes ke redaksi pelaksana yang menganggapnya terlalu “aktivis”.
            </p>
            <Image
              src={"/images/focus-on/9.png"}
              alt=""
              width={330}
              height={94}
              className="self-start"
            />{" "}
            <p className="font-junicode">
              “Aku kaya gini karena aku homegrown Jakarta Post journalist.
              <em>I respect human rights, gender equality.</em> Ada banyak
              jurnalis disini yang jadi aktivis di isu-isu tersebut.
              <em>
                But, none of them you called an activist, not journalists.
              </em>{" "}
              Tapi, kenapa ketika aku defend the poor you call me an activist?”
            </p>
          </div>
          <div className="row-start-2 col-start-5 col-span-3 flex flex-col items-start justify-start gap-5 text-justify">
            <p className="text-sm">
              Walaupun sempat meragukan diri, tapi Mbak Evi bersyukur ia teguh
              dalam pendiriannya.
            </p>
            <p className="font-junicode">
              “(Penggusuran Ahok) merupakan human rights violation. Forced
              evictionnya tidak jauh berbeda dari zaman Sutiyoso-Fauzi Bowo,
              berita yang pernah aku liput juga saat masih menjadi cub reporter
              pada tahun 2003. It’s the same, ga transparan, ga partisipatoris,
              martabat orang diinjak-injak.”
            </p>

            <p className="font-junicode">
              “(Saat pemberitaan penggusuran oleh Ahok di 2015 naik), aku
              berantem di editorial. (Kolegaku berkata), itu relokasi kan,
              kenapa kamu sebut forced eviction. Ya, aku bilang forced eviction.
              Awalnya, aku suka Ahok. Masuk akal kalau dia jadi media darling,
              misalnya dengan narasi keinginannya membersihkan PNS yang korupsi.
              Tapi, ketika dia mendzolimi yang lebih lemah dari dia, I don’t
              think it’s good leadership. Kamu kalau jadi leader kok sama yang
              lemah malah memfitnah.”
            </p>
          </div>
          <div className="row-start-2 col-start-9 col-span-3 flex flex-col items-center justify-start gap-5 text-justify">
            <p className="font-junicode">
              “Perkembangan jurnalistik di Amerika menemukan bahwa yang disebut
              objektivitas itu ternyata rapuh banget, itu kumpulan
              subjektivitas. Lalu, kumpulan subjektivitas siapa? Jawabannya ya,
              orang-orang yang paling berkuasa di newsroom masing-masing. Kalau
              di Amerika white male cishet. Kalau di Indonesia ya kelas
              menengah. Mereka yang nuduh aku ga objektif adalah kumpulan
              subjektivitas kelas menengah yang Jakarta-centric,
              western-educated, privilege banget, kerja formal, rumah di Bekasi
              dan kerja di Jakarta ga masalah. Mereka ga paham kalau rumah yang
              digusur berarti nafkah orang di dalamnya juga digusur. Rumah bukan
              cuma buat tidur. Social fabric orang-orang didalamnya disitu pula.
              Rezekinya disitu.”
            </p>
            <p className="text-sm">
              Mbak Evi menilai kesetiaan kelas menengah untuk tidak dan takut
              berbicara isu-isu kelas alasannya ada di balik politik rekayasa
              sosial floating mass sejak Orde Baru. Kelas menengah diuntungkan
              dengan adanya kebijakan-kebijakan pembangunan serta terkena
              mobilitas sosial lewat pendidikan yang mereka punyai. Sehingga,
              ketika melihat penggusuran, alih-alih membacanya sebagai arena
              konflik politis antara pemerintah, rakyat, dan moda bisnis, mereka
              melihatnya sebagai kegagalan orang di dalamnya untuk meniti
              kehidupan yang lebih baik.
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
