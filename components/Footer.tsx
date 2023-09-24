import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

export default function Footer({}: Props) {
  return (
    <div className="h-20 flex w-full justify-center items-center max-w-5xl">
      <motion.div
        initial={{ y: -100, opacity: 0, scale: 0.5 }}
        animate={{ y: 0,opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        className="flex flex-row items-end justify-center"
      >
        <SocialIcon 
            url="https://www.instagram.com/alexaandrepaiva/"
            fgColor="#FF6188"
            bgColor="transparent"
            className="cursor-pointer"
            />

          <SocialIcon 
            url="https://github.com/Alexaandrepaiva"
            fgColor="#FFD866"
            bgColor="transparent"
            className="cursor-pointer"
            />

          <SocialIcon 
            url="https://www.linkedin.com/in/paiva240/"
            fgColor="#78DCE8"
            bgColor="transparent"
            className="cursor-pointer"
          />
      </motion.div>
    </div>
  )
}