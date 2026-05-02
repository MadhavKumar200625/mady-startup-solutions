import React from 'react'
import Hero from './Hero'
import Story from './Story'
import Differentiator from './Differntiator'
import Founder from './Founder'
import Values from './Values'

const page = () => {
  return (
    <main className=" bg-gradient-to-b from-gray-100 to-gray-300">
      <Hero></Hero>
      <Story></Story>
      <Differentiator></Differentiator>
      <Founder></Founder>
      <Values></Values>
    </main>
  )
}

export default page