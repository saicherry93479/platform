import React from 'react'
import EventImage from '../../assets/EventsImage.webp'
const Hero = () => {
  return (
    <section className='bg-backgroundColor'>
        <div className='  min-h-screen flex flex-col lg:flex-row-reverse justify-evenly items-center    center-elment w-[90%] center-elment  lg:w-[85%] xl:w-[70%] 2xl:w-50% py-10  '>
                <img className=' w-[100%] lg:w-[60%] mb-4 lg:mb-0 max-w-xl' src={EventImage}>

                </img>
                <div class="flex flex-col text-center lg:items-start lg:text-left my-10 ">
                    <strong class="text-[20px]">
                        <span class="text-amber-500">CAREER</span> 
                        <span class="text-indigo-500"> TALKZ </span>
                          EVENTS
                    </strong>
                    <h1 class="eventHeader">
                        The events that actually <br/> help you grow!
                    </h1>
                    <p class="eventPara">
                        Get access to free LIVE events that help you explore your favorite fields and grow to the next level. They’re taken by industry experts having vast knowledge about their subject.
                    </p>
                    <button class="px-8 py-2 mt-4 bg-indigo-600 rounded-lg border-2 border-indigo-600 ring-offset-2 shadow-sm transition-all duration-100 outline-none hover:shadow-md hover:bg-indigo-700 hover:border-indigo-700 focus:ring ring-offset-slate-900">
                        Get Started
                    </button>
                </div>
        </div>
    </section>
  )
}

export default Hero