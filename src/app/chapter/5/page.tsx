'use client';

import './5.css';
import RedBar from '@/app/components/RedBar';
import React, { FormEvent, useEffect, useState } from 'react';

interface Wish {
  name: string;
  message: string;
}

const FifthChapter: React.FC = () => {
  const [name, setName] = useState('');
  const [wish, setWish] = useState('');
  const [wishes, setWishes] = useState<Wish[]>([]);

  useEffect(() => {
    async function fetchWishes() {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_FORM_ENDPOINT as string}/dream`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const data = await res.json();

      setWishes(data);
    }

    fetchWishes();
  }, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(wishes);

    if (name === '' || wish === '') {
      console.log('Field is empty');
      return;
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_FORM_ENDPOINT as string}/dream`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          message: wish,
        }),
      }
    );

    const data = await res.json();

    setWishes([...wishes, data]);
  }

  return (
    <section className="h-screen w-full flex">
      <RedBar progressPercent={100} />
      <div className="w-2/3 bg-white-ivory p-8 mt-[52px] overflow-auto use-scrollbar font-junicode flex justify-center">
        <p className="text-center leading-5 cursor-default my-auto">
          {wishes.map((wish) => {
            const randomizer = Math.round(Math.random());
            return (
              <>
                <span
                  className={`text-3xl ${
                    randomizer ? 'text-red' : 'text-black'
                  } hover:text-[2rem] hover:bold transition-all`}
                >
                  ‘{wish.message}’
                  <span className="text-sm mr-8"> {wish.name}</span>
                </span>
              </>
            );
          })}
        </p>
      </div>
      <div className="w-1/3 h-full">
        <div className="bg-flower flex flex-col h-1/2 px-8 py-2">
          <p className="mt-auto font-ed-mentasta text-red text-8xl">Wanita</p>
          <p className="font-ed-mentasta text-red text-8xl w-full text-end">
            Indonesia
          </p>
        </div>
        <div className="bg-red text-white-ivory font-junicode flex flex-col justify-center items-center px-4 py-2 h-1/2">
          <form
            onSubmit={handleSubmit}
            autoComplete="off"
            className="flex flex-col gap-1"
          >
            <label>Nama</label>
            <input
              type="text"
              className="text-black p-2"
              onChange={(e) => setName(e.target.value)}
            />
            <label className="mt-4">
              Tulis harapan kamu untuk perempuan Indonesia di sini
            </label>
            <textarea
              rows={4}
              className="text-black p-2"
              onChange={(e) => setWish(e.target.value)}
            />

            <button
              type="submit"
              className="bg-red mb-2 text-white-ivory border-2 border-white-ivory hover:bg-white-ivory hover:text-red transition-colors py-2 px-4 font-junicode z-10 w-fit self-center mt-4"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FifthChapter;
