import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Welcome } from "@/components/Welcome";

export default function Home() {
  return (
    <>
      <Header />
      <main className="py-[66px]">
        <Welcome />
      </main>
      <Footer />
    </>
  )
}
