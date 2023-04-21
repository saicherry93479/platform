import React from 'react'
import Hero from './Hero'
import UpcomingEvents from './UpcomingEvents'
import PastEvents from './PastEvents'

const Events = () => {
  return (
    <div>
        <Hero></Hero>
        <UpcomingEvents></UpcomingEvents>
        <PastEvents></PastEvents>
    </div>
  )
}

export default Events