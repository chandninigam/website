import { GetStaticPathsContext } from "next";
import Container from "../components/container";
import Header from "../components/header";
import Footer from "../components/footer";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";

interface IHomeProps {
  content: string;
}

export default function Home(props: IHomeProps) {
  return (
    <Container>
      <Header activeTab="Home" />
      <main
        className="content-wrapper"
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
  const homeContent = fs.readFileSync(homeContentPath + "/Home.md", "utf-8");
  const { content } = matter(homeContent);

  return {
    props: { content: marked(content) },
  };
}
