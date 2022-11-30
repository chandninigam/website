import Link from "next/link";
import styles from "../styles/Header.module.css";

export interface NavData {
  text: string;
  link: string;
}

const NavTabs: Array<NavData> = [
  { text: "Home", link: "/" },
  { text: "Blogs", link: "/blogs" },
  { text: "About", link: "/about" },
  { text: "Contact", link: "/contact" },
];

export default function Header() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Chandni Nigam</h1>
      <nav className={styles.nav}>
        <ul className={styles.ulHeader}>
          {NavTabs.map((tab) => (
            <li className={styles.liHeader}>
              <Link href={tab.link}>{tab.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
