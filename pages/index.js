import localFont from "next/font/local";
import styles from '../styles/Home.module.css'; // CSS 모듈을 사용

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>©KAYO STUDIO</h1>
        <p>(Based in Prague)</p>
        <p>Crafting impactful brands and websites that drive growth and success.</p>
      </header>

      <section className={styles.projects}>
        <h2>PROJECTS</h2>
        <p>Explore our recent projects showcasing creativity, innovation, and impactful design solutions.</p>
        <div className={styles.projectGrid}>
          <div className={styles.projectItem}>acme</div>
          <div className={styles.projectItem}>kanba</div>
        </div>
      </section>
    </div>
  );
}
