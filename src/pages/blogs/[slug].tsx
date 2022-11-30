import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";
import Container from "../../components/container";
import Footer from "../../components/footer";
import Header from "../../components/header";

export default function Blog(props) {
  return (
    <Container>
      <Header />
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

export function getServerSideProps(ctx) {
  const slug = ctx.params.slug;
  console.log("slug", slug);
  const output = fs.readFileSync(`content/blogs/${slug}.md`, "utf-8");
  console.log("output", output);
  const { content, data } = matter(output);
  console.log("content", content);
  console.log("data", data);
  const markup = marked(content);
  console.log("markup", markup);
  return {
    props: {
      slug,
      data,
      markup,
    },
  };
}
