import React from 'react'
import Image from 'next/image'
import IMEJunior from '@/public/imejunior.jpeg'
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

export default function ExperienceCard({}: Props) {
  return (
    <div className="w-full h-fit-content flex flex-col lg:flex-row items-center justify-center gap-x-0 lg:gap-x-8 gap-y-4 lg:gap-y-0">
        <Image src={IMEJunior} alt="imejunior" className="w-32 h-32 lg:w-42 lg:h-42 rounded-full object-cover"/>
      <div className="flex flex-col px-4 gap-y-2 max-w-xl">
        <h2 className="text-ap-white font-bold text-xl lg:text-2xl">
          Programming Team Coordinator  -
          <span className="text-ap-yellow"> IME Júnior</span>
        </h2>
        <div className="flex flex-row justify-start items-center gap-2">
          <p className="font-bold text-base text-ap-white/50">Worked with:</p>
          <Image src={JavaScriptLanguage} alt="JavaScriptLanguage" className="w-8 h-8"/>
          <Image src={TypeScript} alt="TypeScript" className="w-8 h-8"/>
          <Image src={Tailwind} alt="Tailwind" className="w-8 h-8"/>
          <Image src={Mysql} alt="Mysql" className="w-8 h-8"/>
          <Image src={Figma} alt="Figma" className="w-8 h-8"/>
        </div>
        <h3 className="text-ap-pink/60 font-base">July 2022 - January 2023</h3>
        <p className="text-ap-white font-light">Responsible for contacting clients to analyze the feasibility of projects, draw up contracts, plan the execution of each project, monitor the development of each project and teaching new company members the programming languages used</p>    
      </div>
    </div>
  )
}