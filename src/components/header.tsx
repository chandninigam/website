import Link from "next/link";
import styles from "../styles/Header.module.css";
import { useState } from "react";

export interface NavData {
  text: string;
  link: string;
}

const NavTabs: Array<NavData> = [
  { text: "Home", link: "/" },
  { text: "Recipes", link: "/recipe" },
  { text: "About", link: "/about" },
  { text: "Contact", link: "/contact" },
];

/**
 * Tab Component
 */
export function Tab(props: { tab: NavData; activeTab: string }) {
  if (props.tab.text === props.activeTab) {
    return (
      <li className={styles.liHeader}>
        <Link href={props.tab.link} className={styles.active}>
          {props.tab.text}
        </Link>
      </li>
    );
  }
  return (
    <li className={styles.liHeader}>
      <Link href={props.tab.link} className={styles.link}>
        {props.tab.text}
      </Link>
    </li>
  );
}

/**
 * Header
 */
export default function Header(props: { activeTab: string }) {
  return (
    <header className={styles.wrapper}>
      <div className={styles.headerContent}>
        <h1 className={styles.heading}>
          <Link href="/" className={styles.headerTitleLink}>
            Chandni Nigam
          </Link>
        </h1>
        <nav className={styles.nav}>
          <ul className={styles.ulHeader}>
            {NavTabs.map((tab) => (
              <Tab tab={tab} activeTab={props.activeTab} key={tab.text} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
