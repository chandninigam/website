import { GetStaticPropsContext } from "next";
import Link from "next/link";
import Container from "../../components/container";
import Footer from "../../components/footer";
import Header from "../../components/header";
import styles from "../../styles/Recipes.module.css";
import fs from "fs";
import { marked } from "marked";
import path from "path";
import matter from "gray-matter";

interface IRecipeDetail {
  title: string;
  id: number;
  date: string;
  slug: string;
}

interface IResultObject {
  result: [IRecipeDetail];
}
export default function Recipes(props: IResultObject) {
  return (
    <Container>
      <Header activeTab="Recipes" />
      <main>
        <div className={styles.heading}>Recipe Lists</div>
        <ul className={styles.lists}>
          {props.result.map((recipe) => {
            // const recipeName = () => {
            //   let nameReplace = recipe.slug.replace("-", " ");
            //   console.log("nameReplace", nameReplace);
            //   let words = nameReplace.split("");
            //   console.log("split before", words);
            //   words
            //     .map((word) => {
            //       return word[0].toUpperCase() + word.substring(1);
            //     })
            //     .join(" ");
            //   console.log("split after", words);
            // };
            return (
              <li key={recipe.id}>
                <Link
                  href={`/recipe/${recipe.slug}`}
                  className={styles.recipeLink}
                >
                  {recipe.slug}
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
      <Footer />
    </Container>
  );
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const recipes = fs.readdirSync(path.resolve("content/recipe"));
  const result = [];
  for (const r of recipes) {
    const content = fs.readFileSync(
      path.resolve(`content/recipe/${r}`),
      "utf-8"
    );
    const { data } = matter(content);
    result.push({ ...data, slug: r.split(".md")[0] });
  }
  result.sort((a, b) => Number(a) - Number(b));
  return { props: { result } };
}
