import Image from 'next/image';
import React from 'react';
import Layout from '../../components/Layout';

const Dashboard = () => {
  return (
    <Layout>
      <section className='grid sm:grid-col-2 md:grid-cols-3 lg:grid-col-4 gap-x-4 pt-20 max-w-screen-xl mx-auto'></section>
    </Layout>
  );
};

export default Dashboard;
