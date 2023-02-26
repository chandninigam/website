import { GetStaticPathsContext } from "next";
import Container from "../components/container";
import Footer from "../components/footer";
import Header from "../components/header";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";
import styles from "../styles/Contact.module.css";

interface IContactProps {
  content: string;
}

export default function Contact(props: IContactProps) {
  return (
    <Container>
      <Header activeTab="Contact" />
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
  const contactContentPath = path.join("content");
  const contactContent = fs.readFileSync(
    contactContentPath + "/Contact.md",
    "utf-8"
  );
  const { content } = matter(contactContent);
  return {
    props: {
      content: marked(content),
    },
  };
}
