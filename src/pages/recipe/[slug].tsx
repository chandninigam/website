import { GetStaticPropsContext } from "next";
import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";
import Container from "../../components/container";
import Footer from "../../components/footer";
import Header from "../../components/header";
import path from "path";

interface IBlogProps {
  slug: string;
  data: Record<string, any>;
  markup: string;
}

export default function Blog(props: IBlogProps) {
  return (
    <Container>
      <Header activeTab="Recipes" />
      <main>
        <article
          dangerouslySetInnerHTML={{
            __html: props.markup,
          }}
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
