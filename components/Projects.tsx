import React from 'react'
import { motion } from 'framer-motion'
import ProjectCardMilitaryRPG from './ProjectCardMilitaryRPG'
import ProjectCardTutorMundiTrial from './ProjectCardTutorMundiTrial'
import ProjectCardBestBet from './ProjectCardBestBet'

type Props = {}

export default function Projects({}: Props) {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className="h-fit-content py-12 md:py-20 w-full flex flex-col items-center bg-ap-white"
    >
      <div className="w-full flex flex-col gap-6 md:gap-12 items-center justify-center max-w-5xl">
        <h1 className="text-ap-black text-3xl lg:text-4xl display-inline">
          My personal <span className="font-bold text-ap-yellow">projects</span>
        </h1>
        <div className="flex w-full flex-col lg:flex-rol items-start jusitfy-end gap-8 lg:gap-12 p-4 md:p-0">
          <ProjectCardBestBet/>
          <ProjectCardTutorMundiTrial/>
          <ProjectCardMilitaryRPG/>
        </div>
      </div>

    </motion.div>
  )
}