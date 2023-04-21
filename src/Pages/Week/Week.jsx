import React from 'react'
import { useParams } from 'react-router-dom'
import Hero from './Hero'

const Week = () => {

    const {weekId}=useParams()
  return (
    <section>
        <Hero weekId={weekId}></Hero>
    </section>
  )
}

export default Week