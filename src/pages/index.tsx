import { GetStaticPathsContext } from "next";
import { Head } from "../components/head";
import Container from "../components/container";
import Header from "../components/header";
import Footer from "../components/footer";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";
import styles from "../styles/Home.module.css";

interface IHomeProps {
  content: string;
}

export default function Home(props: IHomeProps) {
  return (
    <Container>
      <Header activeTab="Home" />
      <main
        className={styles.content}
        dangerouslySetInnerHTML={{
          __html: props.content,
        }}
      />
      <Footer />
    </Container>
  );
}

export async function getStaticProps(ctx: GetStaticPathsContext) {
  const homeContentPath = path.join("content");
  // console.log("homeContent", homeContentPath);
  const homeContent = fs.readFileSync(homeContentPath + "/Home.md", "utf-8");
  // console.log("homeContent", homeContent);
  const { content } = matter(homeContent);

  // console.log("content", content);
  return {
    props: { content: marked(content) },
  };
}
