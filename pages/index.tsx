import React from "react";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = ({ res }: any) => {
  console.log("resres", res);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {JSON.stringify(res)}
      {res.map((item: any) => {
        return <Image src={item.url} alt="" height={item.height} width={item.width}/>;
      })}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    "https://api.thecatapi.com/v1/images/search?format=json&limit=10"
  );
  const result = await res.json();
  console.log("res", res);
  return { props: { res: result } };
};

export default Home;
