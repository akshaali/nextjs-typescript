import React from "react";
import type { GetStaticProps, NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
     <h1>Blog about Cats</h1>
     <h1>Cat picturesss</h1>
    </div>
  );
};

export default Home;
