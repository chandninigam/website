import Footer from "../component/footer/main";
import Header from "../component/home/main";
import styles from "../../styles/Container.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <div className="content">Body</div>
      <Footer />
    </div>
  );
}
