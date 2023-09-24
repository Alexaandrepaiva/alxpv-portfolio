import React from 'react'
import Image from 'next/image'
import RPG from '@/public/RPGCampo.png'
import CLanguage from '@/public/icons/c-original.svg'
import Github from '@/public/icons/github-original.svg'

type Props = {}

export default function ProjectCard({}: Props) {
  return (
    <div className="w-full h-fit-content flex flex-col lg:flex-row items-center justify-between">
        <Image src={RPG} alt="rpg" className="w-[300px] lg:w-[450px] h-fit-content object-cover rounded-sm pb-4 lg:pb-0"/>
      <div className="flex flex-col px-4 gap-y-2">
        <h2 className="text-ap-black font-bold text-xl lg:text-2xl">RPG Game -Military Basic Camp</h2>
        <div className="flex flex-row justify-start items-center gap-2">
          <p className="font-bold text-base text-ap-gray">Developed with:</p>
          <Image src={CLanguage} alt="c" className="w-8 h-8"/>
          <Image src={CLanguage} alt="c" className="w-8 h-8"/>
        </div>
        <p className="text-ap-black font-light">The game is based on a group of students going to a military field. However, right at the beginning of the journey, the player realizes that he brought his backpack completely empty, so the player has to decide to buy very few items with money he receives through an innovative, time-based system. After diverse choices of items and paths combined provide different paths with your squad through field activities, with almost non-existent resources, a task that few will be able to complete.</p>
        <div className="flex flw-row">
          <button className="bg-ap-yellow rounded-sm px-4 py-2 flex flw-row gap-x-2 border border-ap-black">
            <Image src={Github} alt="Github code" className="w-6 h-6"/>
            <p>Code</p>
          </button>
        </div>      
      </div>
    </div>
  )
}