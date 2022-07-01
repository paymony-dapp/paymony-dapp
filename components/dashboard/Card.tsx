import React, { Fragment } from 'react';

const Card = ({ title, price, squircle, wallet }: any) => {
  return (
    <div className='rounded-2xl bg p-6 mb-4 md:mb-0'>
      {wallet ? (
        <div className='flex justify-center items-center'>
          <img src={squircle} alt='' className='w-14 h-14 mr-4' />
          <div>
            <h3 className='text-[#B0B0B0]'>{title}</h3>
            <h2 className='font-bold text-5xl text-white'>{price}</h2>
          </div>
        </div>
      ) : (
        <Fragment>
          <h3 className='text-[#B0B0B0]'>{title}</h3>
          <h2 className='font-bold text-5xl text-white my-4'>{price}</h2>
        </Fragment>
      )}
    </div>
  );
};

export default Card;
