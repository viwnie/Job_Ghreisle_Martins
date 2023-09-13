import { Navbar, Hero, About, Categorys, Experience, Works, Prices, Feedbacks, Contact, Footer } from "./components"

export default function Home() {
  return (
  <div >
    <Navbar />
    <Hero />
    <About />
    <Categorys />
    <Experience />
    <Works />
    {/* <Prices /> */}
    <Feedbacks />
    <Contact />
    <Footer />
  </div>
  )
}
