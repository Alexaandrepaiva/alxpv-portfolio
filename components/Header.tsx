import React from 'react'
import Image from 'next/image'
import Logo from '@/public/icons/Alexandre-paiva-white.svg'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

function Header({}: Props) {
  return (
    <div className="absolute top-0 flex w-full justify-between items-center max-w-5xl pl-2 md:pl-0">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image src={Logo} alt="logo" className="w-20 h-20 object-cover rounded-full"/>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
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

export default Header