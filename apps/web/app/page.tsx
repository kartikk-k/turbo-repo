import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className={styles.ctas}>
        <a
          className={styles.primary}
          href={'#'}
          style={{ width: "100%", margin: "auto" }}
        >
          <Image
            className={styles.logo}
            src="/vercel.svg"
            alt="Vercel logomark"
            width={20}
            height={20}
          />
          Main Frontend 
        </a>
        {/* <a
          href={'#'}
          style={{ width: "100%", margin: "auto" }}
          className={styles.secondary}
        >
          Documentation
        </a> */}
      </div>
    </div>
  );
}
