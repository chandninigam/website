import Link from "next/link";
import Container from "../../components/container";
import Footer from "../../components/footer";
import Header from "../../components/header";

export default function Blogs() {
  return (
    <Container>
      <Header />
      <main>
        <ul>
          <li>
            <Link href="/blogs/my-first-blog">My First Blog</Link>
          </li>
          <li>
            <Link href="/blogs/my-second-blog">My Second Blog</Link>
          </li>
          <li>
            <Link href="/blogs/my-third-blog">My Third Blog</Link>
          </li>
        </ul>
      </main>
      <Footer />
    </Container>
  );
}
