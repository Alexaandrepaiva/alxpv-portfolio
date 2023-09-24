import React from 'react'
import Image from 'next/image'
import IME from '@/public/ime.png'
import Python from '@/public/icons/python-original.svg'
import CLanguage from '@/public/icons/c-original.svg'
import Cplusplus from '@/public/icons/cplusplus-original.svg'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <div className="w-full h-fit-content flex flex-col lg:flex-row items-center justify-center gap-x-0 lg:gap-x-8 gap-y-4 lg:gap-y-0">
        <Image src={IME} alt="ime" className="w-32 h-32 lg:w-42 lg:h-42 rounded-full object-cover"/>
      <div className="flex flex-col px-4 gap-y-2 max-w-xl">
        <h2 className="text-ap-white font-bold text-xl lg:text-2xl">
          Scientific researcher -
          <span className="text-ap-yellow"> Instituto Militar de Engenharia</span>
        </h2>
        <div className="flex flex-row justify-start items-center gap-2">
          <p className="font-bold text-base text-ap-white/50">Worked with:</p>
          <Image src={Python} alt="c" className="w-8 h-8"/>
          <Image src={CLanguage} alt="c" className="w-8 h-8"/>
          <Image src={Cplusplus} alt="cpp" className="w-8 h-8"/>
        </div>
        <h3 className="text-ap-pink/60 font-base">February 2022 - <span className="text-ap-green/60 font-base">January 2024</span></h3>
        <p className="text-ap-white font-light">Member of a team responsible for studying environments and function behaviors and developing Python programs to optimize execution time. </p>    
      </div>
    </div>
  )
}