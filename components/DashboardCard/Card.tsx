import React, { Fragment } from 'react';
import Image from 'next/image';

interface CardProps {
  title: string;
  price: number;
  squircle: any;
  wallet: any;
}

const Card = ({ title, price, squircle, wallet }: CardProps) => {
  return (
    <div className='rounded-2xl bg p-6 mb-4 md:mb-0'>
      {wallet ? (
        <div className='flex justify-center items-center'>
          <Image
            src={squircle}
            alt=''
            className='mr-4'
            height={56}
            width={56}
          />
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
