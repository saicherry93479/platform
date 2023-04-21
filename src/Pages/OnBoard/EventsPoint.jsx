import React from 'react'
import Star from '../Utils/Star'

const EventsPoint = ({data}) => {
  return (
    <div className='flex gap-4 items-base my-4'>
        <div>
            <Star></Star>
        </div>
        <span className='headerPara'>
            {data}
        </span>
    </div>
  )
}

export default EventsPoint