import React from 'react'
import Image from 'next/image'
import BestBet from '@/public/best-bet.png'
import HTML from '@/public/icons/html5-original.svg'
import CSS from '@/public/icons/css3-original.svg'
import Github from '@/public/icons/github-original.svg'
import OpenLink from '@/public/icons/open-link.svg'
import Python from '@/public/icons/python-original.svg'
import Flask from '@/public/icons/flask-original.svg'

type Props = {}

export default function ProjectCard({}: Props) {
  return (
    <div className="w-full h-fit-content flex flex-col lg:flex-row items-center justify-between">
      <Image src={BestBet} alt="bestbet" className="w-[300px] lg:w-[450px] h-fit-content object-cover rounded-sm pb-4 lg:pb-0"/>
      <div className="flex flex-col px-4 gap-y-2 max-w-2xl items-center lg:items-start">
        <h2 className="text-ap-black font-bold text-xl lg:text-2xl">Big data and machine learning project</h2>
        <div className="flex flex-row justify-start items-center gap-2">
          <p className="font-bold text-base text-ap-gray">Developed with:</p>
          <Image src={HTML} alt="html" className="w-8 h-8"/>
          <Image src={CSS} alt="css" className="w-8 h-8"/>
          <Image src={Python} alt="Python" className="w-8 h-8"/>
          <Image src={Flask} alt="Flask" className="w-8 h-8"/>
        </div>
        <p className="text-ap-black font-light text-center lg:text-start">As a machine learning group project at my university, my group and I developed a project intertwining big data and machine learning using Python and Flask. Focused on the rich tapestry of Brazilian football, our application delves into historical match results to fuel a neural network. This powerhouse of data analysis predicts likely match outcomes, considering variables like participating teams, tournament stages, and match kickoff times.</p>
        <div className="flex flw-row gap-4">
          <a href="https://best-bet-c199d07d0aa9.herokuapp.com/inputs">
            <button className="bg-ap-white rounded-sm px-4 py-2 flex flw-row gap-x-2 border border-ap-black">
              <Image src={OpenLink} alt="Github code" className="w-6 h-6 text-ap-white"/>
              <p>Live</p>
            </button>
          </a>
          <a href="https://github.com/luizgbraga/best-bet">
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