'use client';

import './22.css';
import RedBar from '@/app/components/RedBar';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

const SecondPageSecond: React.FC = () => {
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
        {/* Section 1 */}
        <section className="min-w-[50vw] h-full bg-red whitespace-break-spaces flex justify-center items-center bg-flower">
          <div className="w-1/2">
            <p className="-rotate-90 font-ed-mentasta text-[10rem] translate-y-16 -translate-x-8">
              Memulai
            </p>
          </div>
          <div className="flex flex-col w-1/2 h-1/2 font font-zmg pr-8">
            <p className="w-full text-center">Merupakan</p>
            <p className="mt-8">eksplorasi masa kecil</p>
            <p className="mt-8 text-end">dan sosialisasi peran gender</p>
            <p className="mt-8">yang diberikan kepada narasumber</p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="min-w-[50vw] h-full bg-white-ivory whitespace-break-spaces flex flex-col items-end text-red p-8">
          <p className="mt-16 font-junicode text-5xl">TUMBUH</p>
          <p className="font-junicode text-5xl">DALAM PERAN</p>
          <p className="font-ed-mentasta text-7xl">Tradisional</p>

          <p className="my-8 font-zmg">
            Peran gender tradisional pada wanita dalam konteks ini adalah
            terjadinya proses sosialisasi mengenai pembagian kerja. Terdapat
            pesan adanya perbedaan ekspektasi dan peran antara laki-laki dan
            wanita pada masa kecil narasumber.
          </p>

          <iframe
            width="460"
            height="245"
            className="self-center"
            src="https://www.youtube.com/embed/GAeZBmkNnWM"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
          />
        </section>

        <section className="min-w-[100vw] h-full bg-white-ivory whitespace-break-spaces flex text-red font-zmg">
          <div className="w-1/4 h-3/4 p-8 flex flex-col justify-end">
            <p className="text-justify">
              Seringkali, ekspektasi ini mengangkat kepentingan wanita untuk
              fokus pada peran domestik sebagai urgensi utama. Selama proses
              wawancara, kita berbicara bagaimana narasumber memaknai peran
              tersebut.
            </p>
          </div>
          <div className="w-1/4 h-full p-8">
            <p className="mt-16 text-justify">
              Dalam konteks KAK KARINA, pembicaraan berputar di pengajaran nilai
              tanggung jawab untuk keluarga, dalam bentuk mengasuh dan
              memelihara (nurture). Dia juga berkomentar, untuknya sendiri ia
              juga tidak terlalu memaknai nilai ini sebagai tanggung jawab
              ‘wanita’, tetapi lebih tanggung jawab sebagai seorang ‘individu’.
              “Sebagai seorang anak dari orangtuaku, apa kewajibanku untuk
              mereka? Sebagai ibu seorang anak, apa kewajibanku? Kita harus
              menjaga komunitas, tak hanya unit keluarga.” <br />
              <br />
              Dalam konteks ‘tradisional’ sendiri, definisi ekspektasi juga
              berbeda. Meskipun terdapat titik berat dalam bagian domestik, KAK
              KARINA tidak diberikan limitasi spesifik dalam partisipasinya di
              domain lainnya.
            </p>
          </div>
          <div className="w-1/2 h-full p-8 relative">
            <p className="mt-16 w-3/4 text-justify">
              Hal ini berbeda dengan MBA NURUL dan KAK WANDA, dimana ekspektasi
              memiliki definisi yang lebih ketat. Contohnya, ada ekspektasi
              sekitar ‘untuk apa pendidikan tinggi yang jauh dari rumah’ hingga
              komentar mengenai perilaku apa yang ‘seperti seorang perempuan’.{' '}
              <br />
              <br />
              Selama proses hidupnya, MBA NURUL dan KAK WANDA berakhir untuk
              menciptakan nilai sendiri yang lebih relevan dengan konteks
              mereka. Mengutip KAK WANDA, “Ada perubahan pemahaman dan norma
              yang dulu dipercaya, membentuk nilai baru hasil dari apa yang
              didapat, dialami, dibaca, dan dipelajari. Dulu mungkin ada yang
              relevan buat mereka [orang tua], tapi enggak relevan buat aku.”
            </p>

            <Image
              src={'/images/chapter/2/2.png'}
              alt="2"
              className="absolute right-0 bottom-0"
              width={255}
              height={474}
            />
            <Image
              src={'/images/chapter/2/vstock-flower.png'}
              alt="flower"
              className="absolute right-[254px] bottom-0"
              width={148}
              height={340}
            />
          </div>
        </section>

        {/* Section 2 */}
        <section className="min-w-[33vw] h-full bg-white-ivory whitespace-break-spaces flex flex-col text-red font-zmg">
          <p className="mt-16 font-junicode text-5xl">
            TUMBUH DALAM KONTEKS PERAN{' '}
            <span className="font-ed-mentasta text-7xl">Gender</span> MINIM
          </p>
          <p className="mt-8 text-justify p-8">
            Dalam konteks ini, para narasumber tumbuh di lingkungan tanpa
            diferensiasi eksplisit mengenai peran ‘laki-laki’ maupun ‘wanita’.
            Hal ini juga muncul dengan beberapa variasi. KAK IZZATI tak memiliki
            saudara laki-laki untuk membandingkan pengalamannya, tumbuh bersama
            kakak-kakak perempuan supportif.
          </p>
          <p className="text-justify p-8 py-2">
            Beberapa narasumber, MBAK EVI dan BU WIWIEN berkomentar melihat
            sedikit perbedaan perilaku terhadap saudara laki-laki, tetapi tidak
            merasa dilimitasi secara signifikan. KAK PRITTA sendiri tumbuh dalam
            lingkungan egaliter. KAK AYU berkomentar melihat inspirasi dari
            ibunya yang juga bekerja di lapangan.
          </p>
        </section>

        <section className="min-w-[33vw] h-full bg-white-ivory whitespace-break-spaces flex flex-col items-end text-red">
          <Image
            src={'/images/chapter/2/3.png'}
            alt="3"
            width={364}
            height={324}
          />
          <p className="mt-16 font-junicode text-3xl w-1/2">
            “Melihat Ibu, aku jadi berpikir tidak masalah wanita bekerja
            apapun.”
          </p>
          <p className="mt-4 font-junicode italic text-2xl">Ayu Utami</p>
        </section>

        {/* Section 3 */}
        <section className="min-w-[58vw] h-full bg-white-ivory whitespace-break-spaces flex flex-col text-red font-zmg p-8 relative overflow-hidden">
          <div className="w-1/3 text-right pl-8">
            <p className="mt-16 font-junicode text-5xl w-full">SANG</p>
            <p className="font-junicode text-5xl w-full">“TOMBOY”</p>
          </div>
          <p className="w-1/2 text-justify mt-8">
            Ekspresi gender adalah pilihan individu untuk mengekspresikan gender
            mereka kepada dunia eksternal. Hal ini dapat dicapai melalui
            pakaian, rambut, perilaku, dan aspek lainnya. Dalam definisi
            ekspresi gender masyarakat yang kaku, ekspresi yang tak umum
            diasosiasikan sebagai ‘perempuan’ mendapatkan label ‘tomboy’. Dari
            KAK ABIGAIL yang merasa ‘cuek banget’, KAK PRITTA yang menikmati
            hobi trekking dan hiking, KAK WANDA yang tumbuh bersama sepupu
            laki-laki dan menjadi koordinator bola di SMA, hingga pakaian
            laki-laki dan rambut pendek BU WIWIEN, mereka memiliki subversi
            tersendiri atas ekspektasi wanita di masyarakat.
          </p>

          <Image
            src={'/images/chapter/2/flower-gif.gif'}
            alt="flower-gif"
            className="absolute right-0 bottom-0 translate-y-36 -translate-x-12 mix-blend-multiply"
            width={500}
            height={500}
          />
        </section>

        {/* Section 4 */}
        <section className="min-w-[75vw] h-full bg-white-ivory whitespace-break-spaces flex flex-col text-red">
          <div className="pt-12 h-1/2 w-full flex gap-2">
            <div className="self-end">
              <p className="font-junicode text-5xl">PENDIDIKAN</p>
              <p className="font-junicode text-5xl">YANG</p>
              <p className="font-junicode text-5xl">MEMBEBASKAN</p>
            </div>
            <Image
              src={'/images/chapter/2/4.png'}
              alt=""
              width={600}
              height={400}
            />
          </div>
          <div className="p-8 h-1/2 w-full flex gap-2">
            <p className="w-1/2">
              Pendidikan sering dianggap sebagai jalan emansipatoris yang banyak
              ditempuh oleh wanita dalam misinya untuk menghadapi dunia. Ketiga
              pembicara di pameran ini juga sama-sama percaya bahwa pendidikan
              adalah sarana otentikasi diri. Praktisnya, pendidikan dapat
              membebaskan, baik dari kungkungan patriarki maupun kelas
              sosio-ekonomi.
            </p>
            <Image
              src={'/images/chapter/2/5.png'}
              alt=""
              width={480}
              height={300}
            />
          </div>
        </section>

        {/* Section 5 */}
        <section className="min-w-[33vw] p-8 h-full bg-white-ivory whitespace-break-spaces flex flex-col text-red font-zmg">
          <p className="text-justify mt-8">
            MBAK EVI menyatakan bahwa saat masa sekolah dulu, memang ia hidup di
            zaman dimana persoalan masuk ‘sekolah favorit’ dapat menjadi tolak
            ukur nasib kehidupan di masa depan. Asal titisan jalan pendidikan
            dilalui secara cermat, kesejahteraan masa depan masih dapat
            diusahakan dengan baik. MBAK EVI melihat untuk sekarang keadaan
            sudah lebih kompleks dari tiga dekade lalu. <br />
            <br />
            MBAK PRITTA menyadari fakta bahwa walaupun keluarganya pernah dalam
            keadaan kekurangan, orang tuanya selalu mendorongnya untuk terus
            belajar dan mengenyam pendidikan. Hal yang sama juga dituntut atas
            KAK WANDA, KAK IRAWATI, MBA NURUL, dan BU WIWIEN. Mereka berefleksi
            atas hasil positif yang pendidikan berikan dalam hidup mereka.{' '}
            <br />
            <br />
            Untuk KAK ABIGAIL dan KAK IZZATI, keinginan untuk mencari dan
            menikmati ilmu pengetahuan didorong murni didorong oleh rasa ingin
            tahu. Orangtuanya telah memupuk nilai pendidikan sebagai sarana
            pemenuhan diri sedari kecil.
          </p>
        </section>
        <section className="min-w-[33vw] p-8 h-full bg-white-ivory whitespace-break-spaces flex flex-col text-red font-zmg relative overflow-hidden">
          <p className="mt-8 text-end font-junicode text-5xl">
            MELEPAS RANTAI KEHIDUPAN:
          </p>
          <p className="font-junicode text-5xl">MENJADI PIONIR DIRI SENDIRI</p>
          <p className="mt-8 text-justify">
            Publik kadang lupa bahwa mengarungi dunia sendirian di tempat asing
            merupakan tantangan yang tidak mudah bagi semua orang, terlebih bagi
            seorang perempuan. Bagi perempuan dari daerah-daerah jauh dan
            konservatif, mereka tidak hanya mempertaruhkan nasib masa depan,
            tetapi juga mendobrak norma dan identitas diri yang telah disematkan
            komunitasnya.
          </p>
          <Image
            src={'/icons/ButterflyBig.svg'}
            alt=""
            className="absolute bottom-0 -right-8"
            width={640}
            height={500}
          />
        </section>
        <section className="min-w-[33vw] p-8 h-full bg-white-ivory whitespace-break-spaces flex flex-col text-red font-zmg relative">
          <p className="text-justify mt-8">
            KAK WANDA harus meninggalkan Jember untuk belajar di Universitas
            Airlangga, Surabaya. Komunitasnya yang ragu sempat menawarinya
            mobil, namun sebagai gantinya ia harus bersekolah di Jember saja
            agar dekat dengan keluarga. Kak Wanda menolak dengan tegas. <br />
            <br />
            MBA NURUL yang berasal dari Sumbawa harus keluar dari pulaunya untuk
            belajar di Universitas Brawijaya, Malang, Jawa Timur. Tantangan
            kembali muncul ketika ia harus mengambil gelar master di Swedia.{' '}
            <br />
            <br />
            KAK AYU yang tinggal di Padang juga mengejar pendidikan di Pulau
            Jawa. Ia sempat dihantui oleh stigma keluarga besarnya di Aceh yang
            menganggap bahwa perempuan tidak perlu sekolah yang tinggi.
            &apos;Toh, bisa jadi guru aja.&apos;
          </p>
          <Image
            src={'/icons/ButterflySmall.svg'}
            alt=""
            className="absolute bottom-24 left-16"
            width={160}
            height={120}
          />
        </section>
        <section className="min-w-[33vw] p-8 h-full bg-white-ivory whitespace-break-spaces flex flex-col text-red font-zmg">
          <p className="text-justify mt-8">
            MBAK EVI menjadi salah satu dari sedikit mahasiswa Tionghoa di
            kampus negeri, UGM, saat dekade 90an. Besar di sekolah swasta
            Katolik Bandung seumur hidup membuat UGM menjadi arena petualangan
            baru. la belajar banyak dari petualangan tersebut, mulai dari
            berteman dengan orang-orang yang punya pemikiran berbeda hingga
            belajar lari dari kejaran polisi saat demo. KAK ABIGAIL yang tumbuh
            di lingkungan sekolah internasional area Jabodetabek mendapat
            eksposur tentang gerakan sosial politik malah ketika berada di Los
            Angeles, Amerika Serikat. Saat kuliah, ia berada di pusara gejolak
            politik gerakan feminis #MeTooMovement dan #BlackLivesMatter.
          </p>
        </section>
      </main>
    </div>
  );
};

export default SecondPageSecond;
