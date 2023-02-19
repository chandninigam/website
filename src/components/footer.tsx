import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <section className={styles.subContainer}>
        <span>Connect with me:</span>
        <a href="https://github.com/chandninigam">Github</a>
        <a href="https://linkedin.com/in/chandni-nigam/">LinkedIn</a>
      </section>
    </footer>
  );
}
