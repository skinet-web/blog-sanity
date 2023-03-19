import About from "./components/About"
import Header from "./components/Header"
import Contact from "./components/Contact"
import Portofolio from "./components/Portofolio"
import Skills from "./components/Skills"


export default function Home() {
  return (
    <div className=' '>       
       <Header />
       <About />
       <Skills />
       <Portofolio />
       <Contact />
    </div>
  )
}
