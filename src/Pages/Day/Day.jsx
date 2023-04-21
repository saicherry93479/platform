import React from 'react'
import { useParams } from 'react-router-dom'
import Hero from './Hero'

const Day = () => {
    const {dayId}=useParams()
  return (
    <section>
        <Hero dayId={dayId}></Hero>
        
    </section>
  )
}

export default Day