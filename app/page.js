import Image from "next/image";
import Head from "next/head";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>나의 간단한 홈페이지</title>
        <meta name="description" content="간단한 넥스트.js 홈페이지" />
      </Head>
      <main>
        <h1>안녕하세요, 넥스트.js!</h1>
        <p>이곳은 나의 간단한 홈페이지입니다.</p>
      </main>
    </div>
  );
}
