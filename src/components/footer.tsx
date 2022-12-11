import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <span className={styles.text}> Connect with me :</span>
        <a href="#" className={styles.anchor}>
          Github
        </a>
        <a href="#" className={styles.anchor}>
          LinkedIn
        </a>
      </div>
    </div>
  );
}
