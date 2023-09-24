import React from 'react'
import Image from 'next/image'
import Ecoime from '@/public/ECOIMERacing.jpeg'
import Arduino from '@/public/icons/arduino-original.svg'
import CLanguage from '@/public/icons/c-original.svg'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <div className="w-full h-fit-content flex flex-col lg:flex-row items-center justify-center gap-x-0 lg:gap-x-8 gap-y-4 lg:gap-y-0">
        <Image src={Ecoime} alt="Ecoime" className="w-32 h-32 lg:w-42 lg:h-42 rounded-full object-cover"/>
      <div className="flex flex-col px-4 gap-y-2 max-w-xl items-center lg:items-start">
        <h2 className="text-ap-white font-bold text-xl lg:text-2xl">
          Electronics Team Programmer -
          <span className="text-ap-yellow"> ECO IME Racing</span>
        </h2>
        <div className="flex flex-row justify-start items-center gap-2">
          <p className="font-bold text-base text-ap-white/50">Worked with:</p>
          <Image src={Arduino} alt="c" className="w-8 h-8"/>
          <Image src={CLanguage} alt="c" className="w-8 h-8"/>
        </div>
        <h3 className="text-ap-pink/60 font-base">February 2021 - June 2021</h3>
        <p className="text-ap-white font-light text-center lg:text-start">Member of the programming team responsible for developing the first electric and independet car at Military Engineering Institute (IME). The programming tasks involved controlling the functioning of the electronic components to optimize its performance and turn the car into self-driving.</p>    
      </div>
    </div>
  )
}