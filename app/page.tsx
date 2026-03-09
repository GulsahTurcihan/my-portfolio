import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Menu } from "@/components/Menu";

export default function Home() {
  return (
    <>
      <Container>
        <Header />
        <Hero />
        <Menu />
      </Container>
    </>
  );
}
