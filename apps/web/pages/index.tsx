import Image from "next/image";
import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Web() {
  return (
    <>
      <Navbar />
      <Head>
        <title>Automate Payments Seamlessly | Paymony</title>
        <meta
          name='description'
          content='Automate Payments Seamlessly with Paymony'
        />
      </Head>
      <section className='text-white bg-gray-900'>
        <div className='max-w-screen-xl px-4 py-32 mx-auto sm:px-6 lg:px-8 lg:h-screen lg:items-center lg:flex'>
          <div className='max-w-3xl mx-auto text-center'>
            <h1 className='text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'>
              Automated payments{" "}
              <span className='sm:block'>Powered by the blockchain. </span>
            </h1>

            <p className='max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl'>
              Paymony is a payment platform that combines the blockchain
              technology to create frictionless automated payments.
            </p>

            <div className='flex flex-wrap justify-center gap-4 mt-8'>
              <a
                className='block w-full px-12 py-3 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:text-white focus:outline-none focus:ring'
                href='/get-started'
              >
                Get Started
              </a>

              <a
                className='block w-full px-12 py-3 text-sm font-medium text-white border border-blue-600 rounded sm:w-auto hover:bg-blue-600 active:bg-blue-500 focus:outline-none focus:ring'
                href='/about'
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-gray-900'>
        <div className='max-w-screen-xl px-4 py-16 md:pb-32 lg:pb-56 sm:px-6 lg:px-8 mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-x-16 lg:items-center'>
            <div className='max-w-lg mx-auto text-center lg:text-left lg:mx-0'>
              <h2 className='text-3xl font-bold sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'>
                Keep Track of Your Payments
              </h2>

              <p className='mt-4 text-gray-300'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                vero aliquid sint distinctio iure ipsum cupiditate? Quis, odit
                assumenda? Deleniti quasi inventore, libero reiciendis minima
                aliquid tempora. Obcaecati, autem.
              </p>

              <a
                className='inline-flex items-center px-8 py-3 mt-8 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring'
                href='/get-started'
              >
                <span className='text-sm font-medium'> Get Started </span>

                <svg
                  className='w-5 h-5 ml-3'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M17 8l4 4m0 0l-4 4m4-4H3'
                  />
                </svg>
              </a>
            </div>

            <div className='grid grid-cols-2 gap-4 sm:grid-cols-3'>
              <a
                className='block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200'
                href='/accountant'
              >
                <span className='inline-block p-3 rounded-lg bg-gray-50'>
                  <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M12 14l9-5-9-5-9 5 9 5z'></path>
                    <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'></path>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
                    ></path>
                  </svg>
                </span>

                <h6 className='mt-2 font-bold text-zinc-200'>Accountant</h6>
              </a>

              <a
                className='block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200'
                href='/accountant'
              >
                <span className='inline-block p-3 rounded-lg bg-gray-50'>
                  <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M12 14l9-5-9-5-9 5 9 5z'></path>
                    <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'></path>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
                    ></path>
                  </svg>
                </span>

                <h6 className='mt-2 font-bold text-zinc-200'>Accountant</h6>
              </a>

              <a
                className='block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200'
                href='/accountant'
              >
                <span className='inline-block p-3 rounded-lg bg-gray-50'>
                  <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M12 14l9-5-9-5-9 5 9 5z'></path>
                    <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'></path>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
                    ></path>
                  </svg>
                </span>

                <h6 className='mt-2 font-bold text-zinc-200'>Accountant</h6>
              </a>

              <a
                className='block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200'
                href='/accountant'
              >
                <span className='inline-block p-3 rounded-lg bg-gray-50'>
                  <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M12 14l9-5-9-5-9 5 9 5z'></path>
                    <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'></path>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
                    ></path>
                  </svg>
                </span>

                <h6 className='mt-2 font-bold text-zinc-200'>Accountant</h6>
              </a>

              <a
                className='block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200'
                href='/accountant'
              >
                <span className='inline-block p-3 rounded-lg bg-gray-50'>
                  <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M12 14l9-5-9-5-9 5 9 5z'></path>
                    <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'></path>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
                    ></path>
                  </svg>
                </span>

                <h6 className='mt-2 font-bold text-zinc-200'>Accountant</h6>
              </a>

              <a
                className='block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200'
                href='/accountant'
              >
                <span className='inline-block p-3 rounded-lg bg-gray-50'>
                  <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M12 14l9-5-9-5-9 5 9 5z'></path>
                    <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'></path>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
                    ></path>
                  </svg>
                </span>

                <h6 className='mt-2 font-bold text-zinc-200'>Accountant</h6>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className='relative overflow-hidden text-gray-300 bg-gray-900'>
        <div className='lg:flex max-w-screen-xl mx-auto'>
          <div className='w-full p-12 text-center lg:w-1/2 sm:p-16 lg:p-24 lg:text-left'>
            <div className='max-w-xl mx-auto lg:ml-0'>
              <p className='text-sm font-medium'>Lorem ipsum dolor sit amet.</p>

              <h2 className='mt-2 text-2xl font-bold text-transparent sm:text-3xl md:text-4xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit
              </h2>

              <p className='hidden lg:mt-4 lg:block'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                egestas tempus tellus etiam sed. Quam a scelerisque amet
                ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
                quisque ut interdum tincidunt duis.
              </p>

              <a
                href=''
                className='inline-block mt-4 px-8 py-3 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:text-white focus:outline-none focus:ring'
              >
                Get started today
              </a>
            </div>
          </div>

          <div className='relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-auto'>
            <Image
              layout='fill'
              src='/woman-smiling.jpg'
              alt='Morbius'
              className='absolute inset-0 object-cover w-full h-full'
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
