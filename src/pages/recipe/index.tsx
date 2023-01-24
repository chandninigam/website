import matter from "gray-matter";
import { GetStaticPropsContext } from "next";
import Link from "next/link";
import Container from "../../components/container";
import Footer from "../../components/footer";
import Header from "../../components/header";
import styles from "../../styles/Recipes.module.css";
import fs from "fs";
import { marked } from "marked";
import path from "path";

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
          <li>
            <Link href="/recipe/mixed-veg-soup" className="recipe-link">
              Mixed Veg Soup
            </Link>
          </li>
        </ul>
      </main>
      <Footer />
    </Container>
  );
}
