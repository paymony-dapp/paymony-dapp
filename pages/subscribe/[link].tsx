import { TRPCError } from '@trpc/server';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { trpcApiClient } from '../../utils/trpcClient';

const PlanPage = () => {
  const [plan, setPlan] = useState<any>();
  const pathname = location.pathname;
  const pathnameArray = pathname.split('/');
  const link = pathnameArray[pathnameArray.length - 1];
  console.log('link:', link, pathname);
  useEffect(() => {
    const getPlan = async () => {
      try {
        const planData = await trpcApiClient.query('plans.findByLink', link);
        const { createdAt, updatedAt, ...rest } = planData;
        setPlan({ ...rest });
      } catch (error) {
        console.log(error);
      }
    };
    getPlan();
  }, [link]);

  // console.log(plan);
  return (
    <main className='min-h-screen w-screen bg-slate-900 text-zinc-100'>
      {plan ? JSON.stringify(plan) : ''}
    </main>
  );
};

export default PlanPage;
