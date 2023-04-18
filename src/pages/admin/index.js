import React from "react";

import Head from "next/head";
import Header from "../../../components/admin/Header";
import Layout from "../../../components/admin/Layout";

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
        </Layout>
      </main>
    </div>
  );
};

export default Home;