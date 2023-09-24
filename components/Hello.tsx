import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import Image from 'next/image'
import Profile from '@/public/Hero.jpeg'
import { motion } from 'framer-motion'
import data from "@/data.json"
import Download from '@/public/icons/icons8-baixar-52.png'

type Props = {}

export default function Hello({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Computer Engineer", "Full Stack Developer", "Tennis Enthusiast", "Coffe Lover"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="h-fit-content w-full flex flex-col justify-center items-center gap-y-4 pt-20 pb-8 md:pb-16"
    >
      <Image src={Profile} alt="Hello" className="relative w-32 h-32 rounded-full object-cover mb-4"/>
      <h1 className="text-ap-white text-3xl lg:text-4xl tracking-wide text-center">
        {data.hello.greetings}<span className="font-bold text-ap-yellow">{data.hello.name}</span>
      </h1>
      <h2 className="text-2xl lg:text-3xl font-semibold px-10 text-gray-400">
        <span className="mr-2">{text}</span>
        <Cursor cursorColor="#fdf9f3"/>
      </h2>
      <p className="text-lg lg:text-xl font-regular max-w-3xl pt-4 text-ap-white text-center">{data.hello.description}</p>
      <button className="bg-ap-yellow rounded-sm px-4 py-2 hover:scale-125 transition ease-in-out duration-200">
        <div className="flex flw-row gap-x-4">
          <Image src={Download} alt="Download" className="w-5 h-5"></Image>
          <p>{data.hello.button}</p>
        </div>
      </button>
    </motion.div>
  )
}