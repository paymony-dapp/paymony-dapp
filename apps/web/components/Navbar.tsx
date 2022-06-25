import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className='bg-gray-900 py-2 fixed top-0 inset-x-0'>
      <div className='max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='md:flex md:items-center md:gap-12'>
            <a
              className='block text-transparent text-lg md:text-2xl italic bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'
              href='/'
            >
              <h2 className='font-semibold'>Paymoni</h2>
            </a>
          </div>

          <div className='flex items-center gap-4'>
            <div className='sm:gap-4 sm:flex'>
              <Link href='/dashboard'>
                <a className='block w-full px-8 py-3 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:text-white focus:outline-none focus:ring'>
                  Visit Dashboard
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
