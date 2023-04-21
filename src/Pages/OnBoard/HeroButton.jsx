import React from 'react'
import RightArrow from '../Utils/RightArrow'

const HeroButton = ({text,route='/'}) => {
  return (
    <div className='heroButton'>
        
        <span>{text}</span>
        <RightArrow></RightArrow>
        
    </div>

  )
}

export default HeroButton