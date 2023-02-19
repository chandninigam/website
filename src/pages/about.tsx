import { GetStaticPathsContext } from "next";
import Container from "../components/container";
import Footer from "../components/footer";
import Header from "../components/header";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";
import styles from "../styles/About.module.css";

interface IAboutProps {
  content: string;
}

export default function About(props: IAboutProps) {
  return (
    <Container>
      <Header activeTab="About" />
      <article
        className={styles.wrapper}
        dangerouslySetInnerHTML={{
          __html: props.content,
        }}
      />
      <Footer />
    </Container>
  );
}

export async function getStaticProps(ctx: GetStaticPathsContext) {
  const aboutContentPath = path.join("content");
  const aboutContent = fs.readFileSync(aboutContentPath + "/About.md", "utf-8");
  const { content } = matter(aboutContent);
  return {
    props: {
      content: marked(content),
    },
  };
}
