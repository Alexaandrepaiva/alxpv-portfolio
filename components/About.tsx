import React from 'react'
import Image from 'next/image'
import MyPicture from '@/public/civil.jpg'
import { motion } from 'framer-motion'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className="h-fit-content w-full py-12 md:py-20 bg-ap-white flex flex-col items-center"
    >
      <div className="flex flex-col gap-6 md:gap-12 items-center justify-center max-w-3xl">
        <h1 className="text-ap-black text-3xl lg:text-4xl display-inline">
          A little <span className="font-bold text-ap-yellow">about</span> me
          </h1>
        <div className="flex flex-col items-center lg:flex-row gap-6">
          <Image src={MyPicture} alt="My picture" className='rounded-full w-48 h-48 lg:w-[3500px] lg:h-[500px] lg:rounded-sm object-cover'/>
          <p className="px-6 text-center lg:text-justify text-sm/6 lg:text-lg/6">I am Brazilian, but I have lived for three years in Guyana, where I attended high school, before joining the Military Institute of Engineering (IME). Having contact with different cultures encouraged me to transform ideas into innovative solutions that have a positive impact on society. To do this, I seek to be approved in the most difficult entrance exam in Brazil and study Computer Engineering. Still as a student, I reconcile academic demands and military obligations with volunteer programming work and I intend to continue improving my soft and programming skills in a company that values professionalism, creating value for customers in an innovative way.</p>
        </div>
      </div>
    </motion.div>
  )
}