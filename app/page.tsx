import { Navbar, Hero, About, Categorys, Experience, Works, Prices, Feedbacks, Contact, Footer } from "./components"

export default function Home() {
  return (
<div className="relative z-0 bg-primary" >
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Categorys />
      <Experience />
      <Works />
      <Prices />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
