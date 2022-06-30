import React, { useEffect } from 'react';
import Layout from '../../components/Layout';
import { trpcClient } from '../../utils/trpcClient';

const Dashboard = () => {
  const { data } = trpcClient.useQuery(['health-check']);

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  return (
    <Layout>
      <h1 className='text-zinc-100 text-xl font-bold'>Dashboard</h1>
      <section className='grid sm:grid-col-2 md:grid-cols-3 lg:grid-col-4 gap-x-4'></section>
    </Layout>
  );
};

export default Dashboard;
