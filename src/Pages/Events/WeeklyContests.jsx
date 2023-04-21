import React from 'react'
import { PAST_WEEKLY_CONTEST } from '../../Constants/Constants'
import MissedEventCard from './MissedEventCard'

const WeeklyContests = () => {
  return (
    <div className='flex flex-wrap gap-6 justify-center mt-6'>
      {
        PAST_WEEKLY_CONTEST.map((data,index)=><MissedEventCard key={index} data={data}></MissedEventCard>)
      }

    </div>
  )
}

export default WeeklyContests