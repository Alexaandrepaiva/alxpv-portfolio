import React from 'react'
import Image from 'next/image'
import IMEJunior from '@/public/imejunior.jpeg'
import Canva from '@/public/icons/canva-original.svg'
import Notion from '@/public/icons/icons8-notion-50.png'
import Trello from '@/public/icons/icons8-trello-48.png'
import PowerBI from '@/public/icons/icons8-power-bi-48.png'


type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <div className="w-full h-fit-content flex flex-col lg:flex-row items-center justify-center gap-x-0 lg:gap-x-8 gap-y-4 lg:gap-y-0">
        <Image src={IMEJunior} alt="imejunior" className="w-32 h-32 lg:w-42 lg:h-42 rounded-full object-cover"/>
      <div className="flex flex-col px-4 gap-y-2 max-w-xl">
        <h2 className="text-ap-white font-bold text-xl lg:text-2xl">
        CEO  -
          <span className="text-ap-yellow"> IME Júnior</span>
        </h2>
        <div className="flex flex-row justify-start items-center gap-2">
          <p className="font-bold text-base text-ap-white/50">Worked with:</p>
          <Image src={Notion} alt="Notion" className="w-8 h-8"/>
          <Image src={Trello} alt="Trello" className="w-8 h-8"/>
          <Image src={Canva} alt="Canva" className="w-8 h-8"/>
          <Image src={PowerBI} alt="PowerBI" className="w-8 h-8"/>
        </div>
        <h3 className="text-ap-pink/60 font-base">January 2023 - <span className="text-ap-green/60 font-base">January 2024</span></h3>
        <p className="text-ap-white font-light">Legal and administrative representative, responsible for the strategic direction, cohesive and productive functioning of the whole company, panning and managing the callendar of all the teams of the company</p>    
      </div>
    </div>
  )
}