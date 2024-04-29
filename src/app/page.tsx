import Sidebar from "./components/Sidebar";
import Hero from "./sections/Hero"



export default function Home() {
  return(
    <>
      <Sidebar />
    <main className="ml-48">
      <Hero />
    </main>
    </>
  )

}
