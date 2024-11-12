"use client";

import Image from "next/image";
import Head from "next/head";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/api/data');
        if (!response.ok) {
          throw new Error('네트워크 응답이 좋지 않습니다.');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

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
        {error && <p className={styles.error}>{error}</p>}
        {data && (
          <>
            <p className={styles.description}>{data.message}</p>
            <h2>프로젝트</h2>
            <ul>
              {data.projects.map((project, index) => (
                <li key={index}>{project}</li>
              ))}
            </ul>
            <h2>기술 스택</h2>
            <ul>
              {data.tech_stack.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </>
        )}
      </main>
    </div>
  );
}