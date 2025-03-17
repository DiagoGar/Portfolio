import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Technologies } from "@/components/technologies";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Projects />
      <Technologies />
      <Footer />
    </main>
  );
}
