import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function RedBar({
  linkToGoBack = '/',
  progressPercent = 0,
}: {
  progressPercent?: number;
  linkToGoBack?: string;
}) {
  return (
    <header className="bg-red text-white-ivory p-3 w-full flex items-center justify-between fixed top-0 right-0 left-0 z-50">
      <Link
        href={linkToGoBack}
        className="flex flex-row items-center justify-center gap-3"
      >
        <Image
          src={'/icons/ArrowBack.svg'}
          alt="ArrowToGoBack"
          width={18}
          height={19}
        />
        <p className="text-xl font-junicode capitalize font-bold">
          <em>BACK</em>
        </p>
      </Link>
      <Image
        src={'/icons/Logo.svg'}
        alt={'Asa, Cerita, Wanita'}
        width={114}
        height={19}
      />
      <div className="w-20 h-4 border-white-ivory border-2 relative">
        <div
          className="h-full bg-white-ivory absolute top-0 bottom-0 left-0"
          style={{
            width: `${progressPercent >= 100 ? 100 : progressPercent}%`,
          }}
        ></div>
      </div>
    </header>
  );
}

export default RedBar;
