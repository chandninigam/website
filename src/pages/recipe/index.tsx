import Link from "next/link";
import Container from "../../components/container";
import Footer from "../../components/footer";
import Header from "../../components/header";
import styles from "../../styles/Recipes.module.css";

export default function Recipes() {
  return (
    <Container>
      <Header activeTab="Recipes" />
      <main>
        <div className={styles.heading}>Recipe Lists</div>
        <ul>
          <li>
            <Link href="/recipe/maggie-nutrients" className="recipe-link">
              Maggie With Full Nutrients
            </Link>
          </li>
        </ul>
      </main>
      <Footer />
    </Container>
  );
}
