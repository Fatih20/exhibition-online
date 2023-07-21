'use client';

import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const secret = 'kopinikmat';

const Admin: React.FC = () => {
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(true);
  const [nav, setNav] = useState('visitor');

  const [visitors, setVisitors] = useState([]);
  const [dreams, setDreams] = useState([]);
  const [feedback, setFeedback] = useState([]);

  // Get all data
  useEffect(() => {
    async function fetchData() {
      // Get visitors
      const visitorRes = await fetch(
        `${process.env.NEXT_PUBLIC_FORM_ENDPOINT as string}/visitor`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const visitorData = await visitorRes.json();
      setVisitors(visitorData);

      // Get dreams
      const dreamRes = await fetch(
        `${process.env.NEXT_PUBLIC_FORM_ENDPOINT as string}/dream`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const dreamData = await dreamRes.json();
      setDreams(dreamData);

      // Get feedback
      const feedbackRes = await fetch(
        `${process.env.NEXT_PUBLIC_FORM_ENDPOINT as string}/feedback`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const feedbackData = await feedbackRes.json();
      setFeedback(feedbackData);
    }

    fetchData();
  }, []);

  const handleSubmit = () => {
    if (password === secret) {
      setIsAdmin(true);
    } else {
      toast.error('Failed to enter: wrong password', {
        position: 'top-center',
      });
    }
  };

  return (
    <>
      {isAdmin ? (
        <>
          <div className="bg-white-ivory text-black h-screen flex w-full">
            <nav className="bg-gray-100 w-1/5 h-full p-4 flex flex-col gap-4">
              <p className="font-junicode text-red text-3xl self-center border-b-red border-b mb-4">
                asa, cerita,{' '}
                <span className="font-ed-mentasta text-4xl">Wanita</span>
              </p>
              <p
                onClick={() => setNav('visitor')}
                className={`hover:bg-rose-100 hover:text-red transition-colors px-4 py-2 rounded-md cursor-pointer ${
                  nav === 'visitor' && 'border border-red text-red'
                }`}
              >
                Visitors
              </p>
              <p
                onClick={() => setNav('dream')}
                className={`hover:bg-rose-100 hover:text-red transition-colors px-4 py-2 rounded-md cursor-pointer ${
                  nav === 'dream' && 'border border-red text-red'
                }`}
              >
                Dreams
              </p>
              <p
                onClick={() => setNav('feedback')}
                className={`hover:bg-rose-100 hover:text-red transition-colors px-4 py-2 rounded-md cursor-pointer ${
                  nav === 'feedback' && 'border border-red text-red'
                }`}
              >
                Feedback
              </p>
            </nav>

            {/* Visitors */}
            <div
              className={`p-8 font-zmg overflow-auto w-full ${
                nav !== 'visitor' && 'hidden'
              }`}
            >
              <h1 className="font-junicode text-5xl font-bold">Visitors</h1>
              <p className="font-junicode text-3xl mt-4">
                Current count: {visitors.length}
              </p>
              <div className="w-full mt-8">
                <div className="w-full flex font-bold">
                  <p className="w-[10%]">Title</p>
                  <p className="w-[30%]">Name</p>
                  <p className="w-[20%]">Asal</p>
                  <p className="w-[30%]">Tahu info dari mana</p>
                </div>
                {visitors.map((visitor: any, idx) => (
                  <div
                    key={idx}
                    className={`w-full flex ${idx % 2 == 0 && 'bg-white'}`}
                  >
                    <p className="w-[10%]">{visitor.title}</p>
                    <p className="w-[30%]">{visitor.name}</p>
                    <p className="w-[20%]">{visitor.origin}</p>
                    <p className="w-[30%]">{visitor.exhibition_info_source}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Dreams */}
            <div
              className={`p-8 font-zmg overflow-auto w-full ${
                nav !== 'dream' && 'hidden'
              }`}
            >
              <h1 className="font-junicode text-5xl font-bold">Dreams</h1>
              <p className="font-junicode text-3xl mt-4">
                Current count: {dreams.length}
              </p>
              <div className="w-full mt-8">
                <div className="w-full flex font-bold">
                  <p className="w-[15%]">Name</p>
                  <p className="w-[85%]">Dreams</p>
                </div>
                {dreams.map((dream: any, idx) => (
                  <div
                    key={idx}
                    className={`w-full flex ${idx % 2 == 0 && 'bg-white'}`}
                  >
                    <p className="w-[15%]">{dream.name}</p>
                    <p className="w-[85%]">{dream.message}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Feedback */}
            <div
              className={`p-8 font-zmg overflow-auto w-full ${
                nav !== 'feedback' && 'hidden'
              }`}
            >
              <h1 className="font-junicode text-5xl font-bold">Dreams</h1>
              <p className="font-junicode text-3xl mt-4">
                Current count: {feedback.length}
              </p>
              <div className="w-full mt-8">
                <div className="w-full flex font-bold">
                  <p className="w-[15%]">Name</p>
                  <p className="w-[85%]">Feedback</p>
                </div>
                {feedback.map((fb: any, idx) => (
                  <div
                    key={idx}
                    className={`w-full flex ${idx % 2 == 0 && 'bg-white'}`}
                  >
                    <p className="w-[15%]">{fb.name}</p>
                    <p className="w-[85%]">{fb.feedback}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="bg-red text-black h-screen w-full flex justify-center items-center font-junicode">
          <div className="w-1/3 bg-white-ivory flex flex-col gap-4 p-16 rounded-3xl justify-center">
            <label>Password</label>
            <input
              type="password"
              className="p-2"
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <button
              onClick={() => handleSubmit()}
              className="mt-8 w-full self-center bg-white-ivory text-red border-2 border-red hover:bg-red hover:text-white-ivory transition-colors  text-xl py-2 px-4 font-junicode z-10"
            >
              Enter
            </button>
          </div>
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export default Admin;
