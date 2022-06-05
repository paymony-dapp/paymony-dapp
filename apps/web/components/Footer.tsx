import React from "react";

const Footer = () => {
  return (
    <footer className='bg-gray-900'>
      <div className='relative max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 lg:pt-24'>
        <div className='absolute top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8'>
          <button
            onClick={() => window.scrollTo(0, 0)}
            className='inline-block p-2 text-blue-300 transition bg-gray-700 rounded-full sm:p-3 lg:p-4 hover:bg-blue-600 hover:text-white'
          >
            <span className='sr-only'>Back to top</span>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </div>

        <div className='lg:flex lg:items-end lg:justify-between'>
          <div>
            <h2 className='flex justify-center text-transparent text-lg sm:text-2xl italic bg-clip-text bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600 font-semibold lg:justify-start'>
              Paymony
            </h2>

            <p className='max-w-md mx-auto mt-6 leading-relaxed text-center text-gray-400 lg:text-left'>
              Automated payments Powered by the blockchain
            </p>
          </div>

          <nav className='mt-12 lg:mt-0' aria-labelledby='footer-navigation'>
            <h2 className='sr-only' id='footer-navigation'>
              Footer navigation
            </h2>

            <ul className='flex flex-wrap justify-center gap-6 lg:justify-end md:gap-8 lg:gap-12'>
              <li>
                <a
                  className='text-white transition hover:text-white/75'
                  href='/'
                >
                  About
                </a>
              </li>

              <li>
                <a
                  className='text-white transition hover:text-white/75'
                  href='/'
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  className='text-white transition hover:text-white/75'
                  href='/'
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  className='text-white transition hover:text-white/75'
                  href='/'
                >
                  Blog
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <p className='mt-12 text-sm text-center text-gray-400 lg:text-right'>
          Copyright &copy; 2022. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
