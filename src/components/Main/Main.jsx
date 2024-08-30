import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export function Main() {

  useEffect(() =>{
    document.body.style.backgroundColor = "lightblue"

    return () => {
      document.body.style.backgroundColor = ""
    }
  },[])

  return (
    <>      
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
      </>
  );
}
