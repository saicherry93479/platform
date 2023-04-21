import React from 'react'
import { PAST_WORKSHOPS } from '../../Constants/Constants'
import MissedEventCard from './MissedEventCard'

const Workshops = () => {
  return (
    <div className='flex flex-wrap gap-6 justify-center mt-6'>
      {
        PAST_WORKSHOPS.map((data,index)=><MissedEventCard key={index} data={data}></MissedEventCard>)
      }

    </div>
  )
}

export default Workshops