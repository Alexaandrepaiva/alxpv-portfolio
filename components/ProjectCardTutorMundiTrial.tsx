import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import TutorMundi from '@/public/tutor-mundi.png'
import HTML from '@/public/icons/html5-original.svg'
import CSS from '@/public/icons/css3-original.svg'
import JavaScript from '@/public/icons/javascript-original.svg'
import Nextjs from '@/public/icons/nextjs-original.svg'
import Github from '@/public/icons/github-original.svg'
import OpenLink from '@/public/icons/open-link.svg'

type Props = {}

export default function ProjectCard({}: Props) {
  return (
    <div className="w-full h-fit-content flex flex-col lg:flex-row items-center justify-between">
      <Image src={TutorMundi} alt="tutormundi" className="w-[300px] lg:w-[450px] h-fit-content object-cover rounded-sm pb-4 lg:pb-0"/>
      <div className="flex flex-col px-4 gap-y-2">
        <h2 className="text-ap-black font-bold text-xl lg:text-2xl">TutorMundi internship entrance exam</h2>
        <div className="flex flex-row justify-start items-center gap-2">
          <p className="font-bold text-base text-ap-gray">Developed with:</p>
          <Image src={HTML} alt="html" className="w-8 h-8"/>
          <Image src={CSS} alt="css" className="w-8 h-8"/>
          <Image src={JavaScript} alt="JavaScript" className="w-8 h-8"/>
          <Image src={Nextjs} alt="Nextjs" className="w-8 h-8"/>
        </div>
        <p className="text-ap-black font-light">As one of the challenges of the internship selection process, I was asked to program an evaluation page that was faithful to the Figma provided. The choice of programming languages and framework was free and I chose to develop it using Next.js. The expected behavior of this page was that when the user evaluate the monitoring, the clicked star and the ones on the left of it would turn gold. Aditionally, the confirm button is only enabled after a evaluation.</p>
        <div className="flex flw-row gap-4">
          <a href="https://alexaandrepaiva.github.io/TutorMundi/">
            <button className="bg-ap-white rounded-sm px-4 py-2 flex flw-row gap-x-2 border border-ap-black">
              <Image src={OpenLink} alt="Github code" className="w-6 h-6 text-ap-white"/>
              <p>Live</p>
            </button>
          </a>
          <a href="https://github.com/Alexaandrepaiva/TutorMundi">
            <button className="bg-ap-yellow rounded-sm px-4 py-2 flex flw-row gap-x-2 border border-ap-black">
              <Image src={Github} alt="Github code" className="w-6 h-6"/>
              <p>Code</p>
            </button>
          </a>
        </div>      
      </div>
    </div>
  )
}