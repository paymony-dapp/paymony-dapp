import Image from 'next/image';
import React from 'react';
import Layout from '../../components/Layout';

const Dashboard = () => {
  return (
    <Layout>
      <h1 className='text-zinc-100 text-xl font-bold'>Dashboard</h1>
      <section className='grid sm:grid-col-2 md:grid-cols-3 lg:grid-col-4 gap-x-4'></section>
    </Layout>
  );
};

export default Dashboard;
