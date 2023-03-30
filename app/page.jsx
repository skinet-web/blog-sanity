
import About from "./components/About"
import Header from "./components/Header"
import Contact from "./components/Contact"
import Portofolio from "./components/Portofolio"
import Skills from "./components/Skills"
import Blog from "./components/Blog"
import NavigationDots from "./components/NavigationDots"
import SocialMedia from "./components/SocialMedia"


export const metadata = {
   title: {
     default: 'Mihai S | Front-end',
   },
 }


export default function Home() {
  
 
   return (
    <>      
       <Header />     
       <SocialMedia />
       <About />
       <Skills />
       <Portofolio />
       <Blog />
       <Contact />         
    </>
  )
}
