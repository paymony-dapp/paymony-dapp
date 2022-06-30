import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NotFound = () => {
  return (
    <main className='h-screen w-screen grid gap-y-2 place-items-center bg-slate-900 overflow-hidden'>
      <div className='space-y-6 flex flex-col items-center'>
        <h1 className='text-zinc-100 text-3xl md:text-4xl text-center font-semibold tracking-wide'>
          Page not found!
        </h1>
        <div className='h-64 md:h-80 aspect-video relative'>
          <Image
            src='/404-gif.gif'
            alt='404'
            layout='fill'
            objectFit='contain'
          />
        </div>
        <div className='flex w-full justify-center'>
          <Link href='/dashboard' replace>
            <a className='px-12 py-3 text-sm font-medium text-center text-white bg-blue-600 border border-blue-600 rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:text-white focus:outline-none focus:ring'>
              Go to Dashboard
            </a>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
