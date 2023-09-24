import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function HelloCircles({}: Props) {
  return (
    <div className="absolute">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
          scale: [1, 2, 2, 3, 1],
          borderRadius: ["20%", "20%", "50%", "80%", "20%"],
        }}
        transition={{ duration: 2.5 }}
        className="relative flex justify-center items-center"
      >
        <div className="absolute border border-ap-blue/20 rounded-full h-[100px] w-[100px] mt-52 animate-ping"/>
        <div className="absolute border border-ap-green/20 rounded-full h-[200px] w-[200px] mt-52 animate-ping"/>
        <div className="absolute border border-ap-yellow/20 rounded-full h-[325px] w-[325px] mt-52 animate-ping"/>
      </motion.div>
    </div>
  )
}