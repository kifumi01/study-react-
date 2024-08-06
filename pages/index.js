import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Links } from "../components/Links";
import { Headline } from "@/components/Headline";
import { Main } from "../components/Main";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Test Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Headline title="Index Head line">
          <code>Test Code</code>
      </Headline>
      <Main/>
      <Links />
      </>
  );
}
