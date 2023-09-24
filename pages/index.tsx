import Head from "next/head"
import Header from "@/components/Header"
import Hello from "@/components/Hello"
import Experience from "@/components/Experience"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="relative w-screen flex flex-col items-center bg-ap-black">
      <Head>
        <title>Alexandre Paiva - Portfolio</title>
      </Head>
      <Header/>
      <Hello/>
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Footer/>
    </div>
  )
}
