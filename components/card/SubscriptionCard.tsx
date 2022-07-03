import Image from 'next/image';
import React from 'react';
import Card from './card';

interface SubscriptionCardProps {
  image: string;
  name: string;
  num: number;
  amount?: number;
  interval?: string;
}

const SubscriptionCard = ({
  image,
  name,
  num,
  amount = 8,
  interval = 'monthly',
}: SubscriptionCardProps) => {
  return (
    <Card>
      <Image src={image} alt='' height={44} width={44} objectFit='contain' />
      <h4 className='text-gray-200 py-3 text-lg font-semibold'>{name}</h4>
      <div className='flex justify-between items-center'>
        <div className='flex text-gray-400 items-center'>
          <div className=' border-green-500 text-white text-xs h-6 w-6 rounded-full flex justify-center items-center border-2 mr-3'>
            {num}
          </div>
          <span>days left</span>
        </div>
        <span className='text-gray-400 font-medium text-sm'>
          {amount}STUR/{interval}
        </span>
      </div>
    </Card>
  );
};

export default SubscriptionCard;
