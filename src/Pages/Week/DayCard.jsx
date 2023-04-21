import React from 'react'
import RightArrow from '../Utils/RightArrow'
import { useNavigate } from 'react-router-dom'

const DayCard = ({index,week}) => {
    const navigate=useNavigate()
    const clickHandler=()=>{
        navigate(`/mentorship/week/${week}/day/${index}`)
        
    }
  return (
    <div className=' bg-primary w-full md:w-[40%] p-2 px-6 md:px-10 cursor-pointer flex  gap-6 justify-between rounded-md items-center' onClick={clickHandler}>
        <p>Day {index}</p>
        <RightArrow></RightArrow>
    </div>
  )
}

export default DayCard