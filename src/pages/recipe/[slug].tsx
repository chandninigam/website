import { GetStaticPropsContext } from "next";
import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";
import Container from "../../components/container";
import Footer from "../../components/footer";
import Header from "../../components/header";
import styles from "../../styles/Recipe.module.css";

interface IRecipeProps {
  slug: string;
  data: Record<string, any>;
  markup: string;
}

export default function Recipe(props: IRecipeProps) {
  return (
    <Container>
      <Header activeTab="Recipes" />
      <main className={styles.wrapper}>
        <article
          dangerouslySetInnerHTML={{
            __html: props.markup,
          }}
          className={styles.container}
        />
      </main>
      <Footer />
    </Container>
  );
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export function getStaticProps(ctx: GetStaticPropsContext) {
  const slug = ctx.params!.slug as string;
  // console.log("params", ctx.params);
  // console.log("slug", slug);
  const output = fs.readFileSync(`content/recipe/${slug}.md`, "utf-8");
  // console.log("output", output);
  const { content, data } = matter(output);
  // console.log("content", content);
  // console.log("data", data);
  const markup = marked(content);
  // console.log("markup", markup);
  return {
    props: {
      slug,
      data,
      markup,
    },
  };
}
