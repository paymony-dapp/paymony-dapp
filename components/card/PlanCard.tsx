import Image from 'next/image';
import React from 'react';
import Card from '.';

interface PlanCardProps {
  image: string;
  name: string;
  num: number;
  amount?: number;
  interval?: string;
  category?: string;
}

const PlanCard = ({
  image,
  name,
  num,
  amount = 8,
  interval = 'monthly',
  category = 'Bills and utilities',
}: PlanCardProps) => {
  return (
    <Card>
      <Image src={image} alt='' height={44} width={44} objectFit='contain' />
      <h4 className='text-gray-200 py-3 text-lg font-semibold'>{name}</h4>
      <p className='text-gray-400 font-medium text-sm mb-1'>{category}</p>
      <div className='flex justify-between items-center'>
        <p className='text-gray-400 font-medium text-sm'>
          {amount}STUR/{interval}
        </p>
        <p className='flex text-xs text-green-400 py-1 px-2'>active</p>
      </div>
    </Card>
  );
};

export default PlanCard;
