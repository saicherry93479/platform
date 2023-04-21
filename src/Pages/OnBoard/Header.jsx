import React from 'react'

const Header = ({text,borderLength='100%'}) => {
  return (
    <div className='w-min  mb-4 '>
        <h1 className='header mb-3'>{text}</h1>
        <div className={`h-2 w-[${borderLength}]  rounded-full bg-primary`} ></div>
    </div>
  )
}

export default Header