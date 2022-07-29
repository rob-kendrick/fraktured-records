import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/Home.module.css";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import Header from "../Header/Header";
import ScrollTracker from "../Scroll/Scroll";
import LandingPage from "../LandingPage/LandingPage";
import ImageParallax from "../ImageParallax/ImageParallax";

export default function Home() {
  const [slides, setSlides] = useState([
    {
      url: "http://localhost:3000/assets/promo/heartbreak.png",
      title: "Heartbreak",
    },
    {
      url: "http://localhost:3000/assets/promo/musician.jpeg",
      title: "Musician",
    },
    {
      url: "http://localhost:3000/assets/promo/baliperform1.JPG",
      title: "Bali White performing",
    },
  ]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Fraktvred Records</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <LandingPage />

        <div className={styles.banner}>
          <ImageParallax
            url={"http://localhost:3000/assets/promo/heartbreak.png"}
          />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
