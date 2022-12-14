import Link from "next/link";
import Container from "../../components/container";
import Footer from "../../components/footer";
import Header from "../../components/header";
import styles from "../../styles/Recipe.module.css";

export default function Blogs() {
  return (
    <Container>
      <Header activeTab="Recipes" />
      <main>
        <div className={styles.heading}>Recipe Lists</div>
        <ul>
          <li>
            <Link href="/blogs/Maggie_Nutrients" className="recipe-link">
              Maggie With Full Nutrients
            </Link>
          </li>
        </ul>
      </main>
      <Footer />
    </Container>
  );
}
