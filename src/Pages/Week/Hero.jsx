import React from 'react'
import DayCard from './DayCard'

const Hero = ({weekId}) => {
  return (
    <section class=" bg-backgroundColor  ">
        <div className=' min-h-screen widthRatios 2xl:w-50%  py-20 flex-col flex  justify-center '>
            <h1 className='text-yellow-500 text-[60px] lg:text-[100px] '>#{weekId}</h1>
            <h1 class="eventHeader ">
                        The days that actually <br/> help you grow!
            </h1>
            <p class="eventPara mb-10">
                        Get access to free LIVE events that help you explore your favorite fields and grow to the next level. They’re taken by industry experts having vast knowledge about their subject.
            </p>


            <div className='flex flex-wrap gap-6 md:gap-10'>

                {
                    [0,1,2,3,4,5].map((data,index)=><DayCard week={weekId} index={index}></DayCard>)
                }
            </div>
        </div>
        
        

    </section>
  )
}

export default Hero