import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Angular from '@/public/icons/angularjs-original.svg'
import CLanguage from '@/public/icons/c-original.svg'
import Cplusplus from '@/public/icons/cplusplus-original.svg'
import Csharp from '@/public/icons/csharp-original.svg'
import CSSLanguage from '@/public/icons/css3-original.svg'
import Figma from '@/public/icons/figma-original.svg'
import Firebase from '@/public/icons/firebase-plain.svg'
import Git from '@/public/icons/git-original.svg'
import HTMLLanguage from '@/public/icons/html5-original.svg'
import Java from '@/public/icons/java-original.svg'
import JavaScriptLanguage from '@/public/icons/javascript-original.svg'
import Meteor from '@/public/icons/meteor-original.svg'
import MongoDB from '@/public/icons/mongodb-original.svg'
import Mysql from '@/public/icons/mysql-original.svg'
import NextLanguage from '@/public/icons/nextjs-original.svg'
import Node from '@/public/icons/nodejs-original.svg'
import Python from '@/public/icons/python-original.svg'
import ReactLanguage from '@/public/icons/react-original.svg'
import Sass from '@/public/icons/sass-original.svg'
import Tailwind from '@/public/icons/tailwindcss-plain.svg'
import TypeScript from '@/public/icons/typescript-original.svg'
import Vue from '@/public/icons/vuejs-original.svg'

type Props = {}

export default function Skills({}: Props) {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className="h-fit-content py-12 md:py-20 w-full max-w-5xl flex flex-col items-center"
    >
      <div className="flex flex-col gap-12 items-center justify-center max-w-3xl">
        <h1 className="text-ap-white text-3xl lg:text-4xl display-inline">
          Technical <span className="font-bold text-ap-yellow">Skills</span>
          </h1>
        <div className="min-h-fit grid grid-cols-3 gap-4 md:max-w-5xl md:grid-cols-7 md:gap-x-12 md:gap-y-8">
          <motion.div
            initial={{
              opacity: 0
            }}
            transition={{ duration: 1, }}
            whileInView={{ opacity: 1 }}
          >
            <div className="group relative flex flex-col items-center cursor-pointer hover:scale-125 transition ease-in-out duration-200">
              <Image
                src={HTMLLanguage}
                alt="HTML"
                className="w-12 h-12 lg:w-24 lg:h-24 md:w-16 md:h-16"
              />
              <p className="text-center text-ap-white" >HTML</p>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0
            }}
            transition={{ duration: 1, }}
            whileInView={{ opacity: 1 }}
          >
            <div className="group relative flex flex-col items-center cursor-pointer hover:scale-125 transition ease-in-out duration-200">
              <Image
                src={CSSLanguage}
                alt="CSS"
                className="w-12 h-12 lg:w-24 lg:h-24 md:w-16 md:h-16"
              />
              <p className="text-center text-ap-white" >CSS</p>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0
            }}
            transition={{ duration: 1, }}
            whileInView={{ opacity: 1 }}
          >
            <div className="group relative flex flex-col items-center cursor-pointer hover:scale-125 transition ease-in-out duration-200">
              <Image
                src={Tailwind}
                alt="Tailwind"
                className="w-12 h-12 lg:w-24 lg:h-24 md:w-16 md:h-16"
              />
              <p className="text-center text-ap-white" >TailwindCSS</p>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0
            }}
            transition={{ duration: 1, }}
            whileInView={{ opacity: 1 }}
          >
            <div className="group relative flex flex-col items-center cursor-pointer hover:scale-125 transition ease-in-out duration-200">
              <Image
                src={Sass}
                alt="Sass"
                className="w-12 h-12 lg:w-24 lg:h-24 md:w-16 md:h-16"
              />
              <p className="text-center text-ap-white" >Sass</p>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0
            }}
            transition={{ duration: 1, }}
            whileInView={{ opacity: 1 }}
          >
            <div className="group relative flex flex-col items-center cursor-pointer hover:scale-125 transition ease-in-out duration-200">
              <Image
                src={JavaScriptLanguage}
                alt="JavaScriptLanguage"
                className="w-12 h-12 lg:w-24 lg:h-24 md:w-16 md:h-16"
              />
              <p className="text-center text-ap-white" >JavaScript</p>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0
            }}
            transition={{ duration: 1, }}
            whileInView={{ opacity: 1 }}
          >
            <div className="group relative flex flex-col items-center cursor-pointer hover:scale-125 transition ease-in-out duration-200">
              <Image
                src={TypeScript}
                alt="TypeScript"
                className="w-12 h-12 lg:w-24 lg:h-24 md:w-16 md:h-16"
              />
              <p className="text-center text-ap-white" >TypeScript</p>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0
            }}
            transition={{ duration: 1, }}
            whileInView={{ opacity: 1 }}
          >
            <div className="group relative flex flex-col items-center cursor-pointer hover:scale-125 transition ease-in-out duration-200">
              <Image
                src={Node}
                alt="Node"
                className="w-12 h-12 lg:w-24 lg:h-24 md:w-16 md:h-16"
              />
              <p className="text-center text-ap-white" >Node.js</p>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0
            }}
            transition={{ duration: 1, }}
            whileInView={{ opacity: 1 }}
          >
            <div className="group relative flex flex-col items-center cursor-pointer hover:scale-125 transition ease-in-out duration-200">
              <Image
                src={Angular}
                alt="Angular"
                className="w-12 h-12 lg:w-24 lg:h-24 md:w-16 md:h-16"
              />
              <p className="text-center text-ap-white" >Angular</p>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0
            }}
            transition={{ duration: 1, }}
            whileInView={{ opacity: 1 }}
          >
            <div className="group relative flex flex-col items-center cursor-pointer hover:scale-125 transition ease-in-out duration-200">
              <Image
                src={Vue}
                alt="Vue"
                className="w-12 h-12 lg:w-24 lg:h-24 md:w-16 md:h-16"
              />
              <p className="text-center text-ap-white" >Vue</p>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0
            }}
            transition={{ duration: 1, }}
            whileInView={{ opacity: 1 }}
          >
            <div className="group relative flex flex-col items-center cursor-pointer hover:scale-125 transition ease-in-out duration-200">
              <Image
                src={Meteor}
                alt="Meteor"
                className="w-12 h-12 lg:w-24 lg:h-24 md:w-16 md:h-16"
              />
              <p className="text-center text-ap-white" >Meteor.js</p>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0
            }}
            transition={{ duration: 1, }}
            whileInView={{ opacity: 1 }}
          >
            <div className="group relative flex flex-col items-center cursor-pointer hover:scale-125 transition ease-in-out duration-200">
              <Image
                src={NextLanguage}
                alt="NextLanguage"
                className="w-12 h-12 lg:w-24 lg:h-24 md:w-16 md:h-16"
              />
              <p className="text-center text-ap-white" >Next.js</p>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0
            }}
            transition={{ duration: 1, }}
            whileInView={{ opacity: 1 }}
          >
            <div className="group relative flex flex-col items-center cursor-pointer hover:scale-125 transition ease-in-out duration-200">
              <Image
                src={ReactLanguage}
                alt="ReactLanguage"
                className="w-12 h-12 lg:w-24 lg:h-24 md:w-16 md:h-16"
              />
              <p className="text-center text-ap-white" >React</p>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0
            }}
            transition={{ duration: 1, }}
            whileInView={{ opacity: 1 }}
          >
            <div className="group relative flex flex-col items-center cursor-pointer hover:scale-125 transition ease-in-out duration-200">
              <Image
                src={Python}
                alt="Python"
                className="w-12 h-12 lg:w-24 lg:h-24 md:w-16 md:h-16"
              />
              <p className="text-center text-ap-white" >Python</p>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0
            }}
            transition={{ duration: 1, }}
            whileInView={{ opacity: 1 }}
          >
            <div className="group relative flex flex-col items-center cursor-pointer hover:scale-125 transition ease-in-out duration-200">
              <Image
                src={Java}
                alt="Java"
                className="w-12 h-12 lg:w-24 lg:h-24 md:w-16 md:h-16"
              />
              <p className="text-center text-ap-white" >Java</p>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0
            }}
            transition={{ duration: 1, }}
            whileInView={{ opacity: 1 }}
          >
            <div className="group relative flex flex-col items-center cursor-pointer hover:scale-125 transition ease-in-out duration-200">
              <Image
                src={CLanguage}
                alt="CLanguage"
                className="w-12 h-12 lg:w-24 lg:h-24 md:w-16 md:h-16"
              />
              <p className="text-center text-ap-white" >C</p>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0
            }}
            transition={{ duration: 1, }}
            whileInView={{ opacity: 1 }}
          >
            <div className="group relative flex flex-col items-center cursor-pointer hover:scale-125 transition ease-in-out duration-200">
              <Image
                src={Cplusplus}
                alt="Cplusplus"
                className="w-12 h-12 lg:w-24 lg:h-24 md:w-16 md:h-16"
              />
              <p className="text-center text-ap-white" >C++</p>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0
            }}
            transition={{ duration: 1, }}
            whileInView={{ opacity: 1 }}
          >
            <div className="group relative flex flex-col items-center cursor-pointer hover:scale-125 transition ease-in-out duration-200">
              <Image
                src={Csharp}
                alt="Csharp"
                className="w-12 h-12 lg:w-24 lg:h-24 md:w-16 md:h-16"
              />
              <p className="text-center text-ap-white" >C#</p>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0
            }}
            transition={{ duration: 1, }}
            whileInView={{ opacity: 1 }}
          >
            <div className="group relative flex flex-col items-center cursor-pointer hover:scale-125 transition ease-in-out duration-200">
              <Image
                src={Mysql}
                alt="Mysql"
                className="w-12 h-12 lg:w-24 lg:h-24 md:w-16 md:h-16"
              />
              <p className="text-center text-ap-white" >MySQL</p>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0
            }}
            transition={{ duration: 1, }}
            whileInView={{ opacity: 1 }}
          >
            <div className="group relative flex flex-col items-center cursor-pointer hover:scale-125 transition ease-in-out duration-200">
              <Image
                src={MongoDB}
                alt="mongoDB"
                className="w-12 h-12 lg:w-24 lg:h-24 md:w-16 md:h-16"
              />
              <p className="text-center text-ap-white" >MongoDB</p>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0
            }}
            transition={{ duration: 1, }}
            whileInView={{ opacity: 1 }}
          >
            <div className="group relative flex flex-col items-center cursor-pointer hover:scale-125 transition ease-in-out duration-200">
              <Image
                src={Firebase}
                alt="firebase"
                className="w-12 h-12 lg:w-24 lg:h-24 md:w-16 md:h-16"
              />
              <p className="text-center text-ap-white" >Firebase</p>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0
            }}
            transition={{ duration: 1, }}
            whileInView={{ opacity: 1 }}
          >
            <div className="group relative flex flex-col items-center cursor-pointer hover:scale-125 transition ease-in-out duration-200">
              <Image
                src={Figma}
                alt="figma"
                className="w-12 h-12 lg:w-24 lg:h-24 md:w-16 md:h-16"
              />
              <p className="text-center text-ap-white" >Figma</p>
            </div>
          </motion.div>

        </div>
      </div>

    </motion.div>
  )
}