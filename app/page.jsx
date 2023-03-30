import About from "./components/About"
import Header from "./components/Header"
import Contact from "./components/Contact"
import Portofolio from "./components/Portofolio"
import Skills from "./components/Skills"
import Blog from "./components/Blog"
import NavigationDots from "./components/NavigationDots"
import SocialMedia from "./components/SocialMedia"
import Head from 'next/head'


export default function Home() {
  

   return (
    <body className=' '>
     
       <Header />
       <Head>
        <title>My page title</title>
      </Head>
       <SocialMedia />
       <About />
       <Skills />
       <Portofolio />
       <Blog />
       <Contact />
       {/* <NavigationDots active={id}/> */}
    </body>
  )
}
