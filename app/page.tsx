import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";

export default function Home() {
  return (
    <>
      <Container>
        <Header />
        <Hero />
        <ServicesSection />
      </Container>
    </>
  );
}
