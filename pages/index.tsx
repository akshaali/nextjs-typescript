import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Home Page</h1>
      <Link href="/blog">
        <a>
          <h2>Blog about Cats</h2>
        </a>
      </Link>
      <Link href="/cats">
        <a>
          <h2>Cat picturesss</h2>
        </a>
      </Link>
    </div>
  );
};

export default Home;
