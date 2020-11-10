import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Thibaud Gerin - Fullstack developer</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <footer className={styles.footer}></footer>
    </div>
  );
}
