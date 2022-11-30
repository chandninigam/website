import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Chandni Nigam</h1>
      <nav className={styles.nav}>
        <ul className={styles.ulHeader}>
          <li className={styles.liHeader}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.liHeader}>
            <Link href="/blogs">Blogs</Link>
          </li>
          <li className={styles.liHeader}>
            <Link href="/about">About</Link>
          </li>
          <li className={styles.liHeader}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
