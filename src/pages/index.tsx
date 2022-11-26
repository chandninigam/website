import Container from "../components/container";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Home() {
  return (
    <Container>
      <Header />
      <div className="content">Body</div>
      <Footer />
    </Container>
  );
}
