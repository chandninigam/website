import { GetServerSidePropsContext } from "next";
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
      <Header />
      <div
        className="content"
        dangerouslySetInnerHTML={{
          __html: props.content,
        }}
      ></div>
      <Footer />
    </Container>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
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
