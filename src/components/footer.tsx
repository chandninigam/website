import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <span className={styles.text}> Connect with me :</span>
        <a href="https://github.com/chandninigam" className={styles.anchor}>
          Github
        </a>
        <a
          href="https://linkedin.com/in/chandni-nigam/"
          className={styles.anchor}
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
