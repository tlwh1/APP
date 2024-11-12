import Image from "next/image";
import Head from "next/head";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>김개발의 포트폴리오</title>
        <meta name="description" content="웹 개발자 김개발의 포트폴리오 사이트입니다." />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          안녕하세요, <span className={styles.highlight}>김개발</span>입니다
        </h1>
        <p className={styles.description}>
          창의적인 웹 개발자를 꿈꾸며 성장하고 있습니다.
        </p>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>프로젝트</h2>
            <p>지금까지 진행한 프로젝트들을 소개합니다.</p>
          </div>
          <div className={styles.card}>
            <h2>기술 스택</h2>
            <p>React, Next.js, Node.js 등을 다룹니다.</p>
          </div>
          <div className={styles.card}>
            <h2>블로그</h2>
            <p>개발 경험과 지식을 공유합니다.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
