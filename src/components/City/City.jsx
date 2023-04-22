import React from 'react'
import { motion } from 'framer-motion'

import './City.css'

export default function City() {

  const dayDuration = 12
  const carSpeed = dayDuration / 2

  return (
    <div className='animation-container'>
      <motion.div className='sun'
        initial={{
          x: -250,
          
        }}
        animate={{
          x: 'calc(100vw + 250px)',
          scale: [2, 1, 2]
        }}
        transition={{
          delay: dayDuration / 2,
          duration: dayDuration,
          repeatDelay: dayDuration,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <motion.div className='sky sky_day'
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          duration: dayDuration,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />
      <div className='sky sky_night'></div>

      <motion.div
        className='city__container'
        initial={{
          x: 0
        }}
        animate={{
          x: '-50%'
        }}
        transition={{
          duration: carSpeed,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
          <img className='city' src='/img/city6.png'/>
          <img className='city' src='/img/city6.png'/>
          <img className='city' src='/img/city6.png'/>
          <img className='city' src='/img/city6.png'/>
      </motion.div>

      <motion.img
        className='car'
        src='/img/m_car.png'
        initial={{
          x: 0
        }}
        animate={{
          x: '700%'
        }}
        transition={{
          duration: carSpeed,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}
