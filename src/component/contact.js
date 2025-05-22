'use client';

import { useState } from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
export default function Contact() {
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
      const form = e.target;
      const data = new FormData(form);
  
      const res = await fetch('https://formspree.io/f/xrbqvzan', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });
  
      if (res.ok) {
        setStatus('Thanks for your message!');
        form.reset();
      } else {
        setStatus('Oops! Something went wrong.');
      }
    };
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 px-6 md:px-10 lg:px-18 pt-16 pb-24 container mx-auto">
      <div className='flex flex-col gap-3 lg:gap-0'>
        <h2 className="text-[2.5rem] md:text-[3rem] bebasneue ">Let’s connect</h2>
        <p>
          Say hello at{" "}
          <a href="mailto:nnoromchibuikepromise@gmail.com" className='underline font-bold'>
            nnoromchibuikepromise@gmail.com
          </a>
        </p>
        <div className="flex gap-3 mt-3">
          <div className="p-3 rounded-full bg-gray-800 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
            <a href="www.linkedin.com/in/chibuike-nnorom-04635923a">
              <FaLinkedinIn className="text-[#D3E97A]" />
            </a>
          </div>
          <div className="p-3 rounded-full bg-gray-800 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
            <a href="https://github.com/Kandibalay">
              <FaGithub className="text-[#D3E97A]" />
            </a>
          </div>
          <div className="p-3 rounded-full bg-gray-800 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
            <a href="#">
              <FaXTwitter className="text-[#D3E97A]" />
            </a>
          </div>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col md:mx-auto lg:mx-0 max-w-md text-white gap-4">
          <label className='flex flex-col'>
            Name:
            <input name="name" required className=" p-2 rounded bg-gray-800 outline-none" />
          </label>
          <label className='flex flex-col'>
            Email:
            <input
              name="email"
              type="email"
              required
              className="p-2 rounded bg-gray-800 outline-none"
            />
          </label>
          <label className='flex flex-col'>
            Subject:
            <input name="subject" required className=" p-2 rounded bg-gray-800 outline-none" />
          </label>
          <label className='flex flex-col'>
            Message:
            <textarea name="message" required className=" p-2 rounded bg-gray-800 outline-none" />
          </label>
          <button
            type="submit"
            className="bg-[#D3E97A] text-black w-[50%] lg:w-[20%] font-bold py-2 px-4 rounded-full hover:bg-gray-800 hover:text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          >
            Submit
          </button>
          {status && <p className='text-white bg-[#222222] rounded-full text-center w-full'>{status}</p>}
        </form>
      </div>
    </div>
  );
}
