import { GetStaticPropsContext } from "next";
import { useState } from "react";
import Link from "next/link";
import Container from "../../components/container";
import Footer from "../../components/footer";
import Header from "../../components/header";
import styles from "../../styles/Recipes.module.css";
import style from "../../styles/Recipes.module.css";
import fs from "fs";
import { marked } from "marked";
import path from "path";
import matter from "gray-matter";
import { getTypeParameterOwner } from "typescript";
import { render } from "react-dom";

interface IRecipeDetail {
  title: string;
  id: number;
  date: string;
  slug: string;
}

interface IResultObject {
  result: [IRecipeDetail];
}

function List(recipe: IRecipeDetail) {
  const recipeName = () => {
    const str = recipe.slug;
    const str1 = str.replace("-", " ").split(" ");
    const newStr: string[] = [];
    str1.map((word, i) => {
      const w = word.charAt(0).toUpperCase() + word.slice(1);
      newStr.push(w);
    });
    return newStr.join(" ");
  };
  const getDate = (date: string) => {
    const months: Array<string> = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const actualDate = new Date(date.split("-").reverse().join("-"));
    const month = actualDate.getMonth();
    return `${actualDate.getDate()} - ${months[month]}`;
  };
  return (
    <li className={styles.list}>
      <div className={styles.dateWrapper}>{getDate(recipe.date)}</div>
      <Link href={`/recipe/${recipe.slug}`} className={styles.recipeLink}>
        {recipeName()}
      </Link>
    </li>
  );
}

function Logic(recipe: IRecipeDetail) {
  return (
    <div key={recipe.id}>
      <List {...recipe} />
    </div>
  );
}

export default function Recipes(props: IResultObject) {
  return (
    <Container>
      <Header activeTab="Recipes" />
      <main className={style.container}>
        <div className={styles.heading}>Recipe Lists</div>
        <ul className={styles.lists}>
          {props.result.map((recipe) => {
            return <Logic key={recipe.id} {...recipe} />;
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
