import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCardTutorMundi from './ExperienceCardTutorMundi'
import ExperienceCardIC from './ExperienceCardIC'
import ExperienceCardImejCEO from './ExperienceCardImejCEO'
import ExperienceCardImejCoord from './ExperienceCardImejCoord'
import ExperienceCardImejTrainee from './ExperienceCardImejTrainee'
import ExperienceCardEcoime from './ExperienceCardEcoime'


type Props = {}

export default function Experience({}: Props) {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 2}}
    className="h-fit-content w-full py-12 md:py-20 bg-ap-black flex flex-col items-center"
    >
      <div className="w-full flex flex-col gap-6 md:gap-12 items-center justify-center max-w-5xl">
        <h1 className="text-ap-white text-3xl lg:text-4xl display-inline">
          My personal <span className="font-bold text-ap-yellow">experience</span>
        </h1>
        <div className="flex w-full flex-col lg:flex-rol items-start jusitfy-end gap-8 lg:gap-12 p-4 md:p-0">
          <ExperienceCardTutorMundi/>
          <ExperienceCardIC/>
          <ExperienceCardImejCEO/>
          <ExperienceCardImejCoord/>
          <ExperienceCardImejTrainee/>
          <ExperienceCardEcoime/>
        </div>
      </div>
    </motion.div>
  )
}