import React from "react";

import Head from "next/head";
import Header from "../../../components/admin/Header";
import Layout from "../../../components/admin/Layout";
import TopCards from "../../../components/admin/TopCards";
import BarChart from "../../../components/admin/BarChart";
import RecentOrders from "../../../components/admin/RecentOrders";

const Home = () => {
  return (
    <div>
      <Head>
        <title>eBazar admin panel</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-[#D3D3D3] min-h-screen">
        <Layout>
          <Header />
          <TopCards />
          <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
            <BarChart />
            <RecentOrders />
          </div>
        </Layout>
      </main>
    </div>
  );
};

export default Home;
