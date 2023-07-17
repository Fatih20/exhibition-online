import Image from 'next/image';
import React from 'react';

const MobileNotice: React.FC = () => {
  return (
    <div className="p-8 h-screen bg-white-ivory text-black flex flex-col items-center gap-4 relative">
      <h1 className="font-junicode text-5xl text-red mt-32">
        asa, cerita, <em className="font-ed-mentasta mr-2">W</em>anita
      </h1>
      <p className="text-center font-junicode">
        Saat ini pameran Asa, Cerita, Wanita. hanya tersedia dalam mode tampilan{' '}
        <span className="font-bold">desktop</span> untuk memberikan pengalaman
        maksimal.
      </p>
      <p className="text-center font-junicode">
        pantau terus informasi pameran melalui instagram{' '}
        <span className="font-bold italic underline">@asa.cerita.wanita</span>
      </p>

      <Image
        loading="eager"
        width={1200}
        height={900}
        src={'/images/home/speakers_compressed.png'}
        alt="Speakers of the event"
        className="absolute bottom-0"
      />
    </div>
  );
};

export default MobileNotice;
