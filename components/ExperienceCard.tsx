import React from 'react'
import Image from 'next/image'
import TutorMundi from '@/public/TutorMundi.jpeg'
import Figma from '@/public/icons/figma-original.svg'
import JavaScriptLanguage from '@/public/icons/javascript-original.svg'
import Meteor from '@/public/icons/meteor-original.svg'
import MongoDB from '@/public/icons/mongodb-original.svg'
import ReactLanguage from '@/public/icons/react-original.svg'
import Sass from '@/public/icons/sass-original.svg'

export default function ExperienceCard(
  { position, company, date, description}:
  { position: string, company: string, date: string, description: string }){
  return (
    <div className="w-full h-fit-content flex flex-col lg:flex-row items-center justify-center gap-x-0 lg:gap-x-8 gap-y-4 lg:gap-y-0">
        <Image src={TutorMundi} alt="ime" className="w-32 h-32 lg:w-42 lg:h-42 rounded-full object-cover"/>
      <div className="flex flex-col px-4 gap-y-2 max-w-xl items-center lg:items-start">
        <h2 className="text-ap-white font-bold text-xl lg:text-2xl">
          {position}
          <span className="text-ap-yellow">{company}</span>
        </h2>
        <div className="flex flex-row justify-start items-center gap-2">
          <p className="font-bold text-base text-ap-white/50">Worked with:</p>
          <Image src={JavaScriptLanguage} alt="c" className="w-8 h-8"/>
          <Image src={Sass} alt="c" className="w-8 h-8"/>
          <Image src={ReactLanguage} alt="c" className="w-8 h-8"/>
          <Image src={Meteor} alt="c" className="w-8 h-8"/>
          <Image src={MongoDB} alt="cpp" className="w-8 h-8"/>
          <Image src={Figma} alt="cpp" className="w-8 h-8"/>
        </div>
        <h3 className="font-base text-ap-green/60 ">{date}</h3>
        <p className="text-ap-white font-light text-center lg:text-start">{description}</p>    
      </div>
    </div>
  )
}