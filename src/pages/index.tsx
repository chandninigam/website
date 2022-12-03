import Container from "../components/container";
import Header from "../components/header";
import Footer from "../components/footer";
import path from "path";
import fs from "fs";
import matter from "gray-matter";

export default function Home(props) {
  return (
    <Container>
      <Header />
      <div className="content">{props.content}</div>
      <Footer />
    </Container>
  );
}

export async function getServerSideProps(ctx) {
  const homeContentPath = path.join("content");
  console.log("homeContent", homeContentPath);
  const homeContent = fs.readFileSync(homeContentPath + "/Home.md", "utf-8");
  console.log("homeContent", homeContent);
  const { content } = matter(homeContent);
  console.log("content", content);
  return {
    props: { content },
  };
}
