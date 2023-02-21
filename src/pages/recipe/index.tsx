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
import { get } from "https";

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
        {recipe.title}
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

export default function Recipes(props: any) {
  return (
    <Container>
      <Header activeTab="Recipes" />
      <main className={style.container}>
        <div className={styles.heading}>Recipe Lists</div>
        <ul className={styles.lists}>
          {Object.values(props).map((recipe: any) => {
            return (
              <>
                {Object.entries(recipe).map((each) => {
                  return (
                    <>
                      {each.map((r: any) => {
                        if (typeof r === "string") {
                          return (
                            <>
                              <div className={styles.yearWrapper}>
                                <div className={styles.yearText}>{r}</div>
                                <div className={styles.line}></div>
                              </div>
                            </>
                          );
                        }
                        return (
                          <>
                            {r.map((arr: IRecipeDetail) => {
                              return <Logic key={arr.id} {...arr} />;
                            })}
                          </>
                        );
                      })}
                    </>
                  );
                })}
              </>
            );
          })}
        </ul>
      </main>
      <Footer />
    </Container>
  );
}

// Date Correct Format
function dateCorrectFormat(date: string) {
  const str = date.split("-");
  const res = str.map((s) => {
    if (s.length === 1) {
      s = "0" + s;
    }
    return s;
  });
  return res.join("-");
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const recipes = fs.readdirSync(path.resolve("content/recipe"));
  const map: Record<string, Array<IRecipeDetail>> = {};
  for (const r of recipes) {
    const content = fs.readFileSync(
      path.resolve(`content/recipe/${r}`),
      "utf-8"
    );
    const { data } = matter(content);

    data.date = dateCorrectFormat(data.date);

    const year = new Date(
      data.date.split("-").reverse().join("-")
    ).getFullYear();

    if (map[year]) {
      map[year].push({
        ...data,
        slug: r.split(".md")[0],
      } as IRecipeDetail);
    } else {
      map[year] = [{ ...data, slug: r.split(".md")[0] } as IRecipeDetail];
    }
    map[year].sort((a, b) => b.id - a.id);
  }
  return { props: { map } };
}
