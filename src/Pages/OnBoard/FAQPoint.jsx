import React, { useState } from 'react'
import Plus from '../Utils/Plus'
import Minus from '../Utils/Minus'

const FAQPoint = ({faq}) => {

    const [click,setClick]=useState(false)

    const clickHandler=()=>{
        setClick(p=>!p)

    }
  return (
    <div className='overflow-hidden rounded-lg border-2 border-[#DEE3EA]/30  '>
        <div className={`flex  items-center gap-[5px] w-full cursor-pointer justify-between  bg-gray-900 p-5 text-left  outline-none `} onClick={clickHandler}>
                <p>{faq.QUESTION}</p>
                {
                    click?<Minus></Minus>:<Plus></Plus>
                }
        </div>
        {
            click?
            <div className=' p-5 rounded-b-md bg-gray-900 text-gray-100 border-t-2 border-[#DEE3EA]/30'>
                <p>{faq.ANSWER}</p>
            </div>:
            <></>
        }     
    </div>
  )
}

export default FAQPoint