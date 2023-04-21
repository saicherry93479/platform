import React from 'react'
import { useNavigate } from 'react-router-dom'

const WeekCard = ({index}) => {
    const navigate=useNavigate()

    const clickHandler=()=>{
            navigate(`/mentorship/week/${index}`)

    }
  return (
    <div className='weekCard' id={`week-${index}`} onClick={clickHandler} >
        <p>Week-{index}</p>
    </div>
  )
}

export default WeekCard



