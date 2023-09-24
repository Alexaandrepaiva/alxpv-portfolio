import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/oldcomponents/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import ProjectsGrid from '@/components/ProjectsGrid'
import ContactMe from '@/components/ContactMe'
import Link from 'next/link'
import { ChevronDoubleUpIcon } from '@heroicons/react/solid'

export default function LandingPage() {
  return (
    <div className="w-full">
      <section id="hero snap-center snap-mandatory">
        <Hero/>
      </section>

      <section id="about">
        <About/>
      </section>

      <section id="skills">
        <Skills/>
      </section>

      <section id="experience">
        <Experience/>
      </section>

      <section id="projects">
        <ProjectsGrid/>
      </section>

      <section id="contact">
        <ContactMe/>
      </section>

      <Link href="#hero">
        <footer className="absolute bottom-5 right-10 cursor-pointer">
          <div className="flex items-center md:items-end justify-center md:justify-end">
            <ChevronDoubleUpIcon className="text-ap-yellow bg-ap-darkgray rounded-full h-8 w-8 p-1"/>
          </div>
        </footer>
      </Link>
    </div>
  )
}
