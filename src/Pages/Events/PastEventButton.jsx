import React from 'react'

const PastEventButton = ({text,index,current,setCurrent,color=false}) => {

    const clickHandler=()=>{
        setCurrent(index);
    }

  return (
    <button className={` ${current===index?'pastEventPageActiveButton':'pastEventPageInactiveButton'} ${color===true?'text-gray-400 border-gray-400':''}`} onClick={clickHandler}>
            {text}
    </button>
  )
}

export default PastEventButton