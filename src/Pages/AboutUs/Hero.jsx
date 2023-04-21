import React from 'react'
import { ABOUT_US_DATA } from '../../Constants/Constants'

const Hero = () => {
  return (
    <section class="flex min-h-screen py-20 items-center justify-center text-center bg-backgroundColor pt-[120px] ">
        <div class="max-w-4xl w-[90%] center-elmen" >
            <div>
                <div class="max-w-6xl  font-semibold leading-relaxed md:text-3xl mb-4  ">
                    <h1 id="Headline" className='md:text-[30px]/[35px] text-[20px]/[25px] sm:text-[25px]/[30px] xl:text-[42px]/[55px]' style={{transformStyle: 'preserve-3d'}}>Community of tomorrow’s<br/>
                        <span class=" text-blue-400 md:px-2" >coders </span>
                        who actually change the world
                    </h1>
                </div>
                <p  class="md:text-[20px] text-[16px]   ">Empowering every individual because you don’t need fancy tags to make an impact
                </p>
            </div>
            <div class="mt-8 grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:mt-28 lg:grid-cols-4">
                {
                  ABOUT_US_DATA.map((data,index)=>
                    <div class="flex flex-col items-center justify-center ">
                        <img class="h-18 w-18 md:h-24 md:w-24" src={data.image}  alt="community"/>
                        <h3 class="mt-1 text-4xl font-semibold">{data.count}</h3><span class="">{data.title}</span>
                    </div>)
                }
                
            </div>
        </div>
    </section>
  )
}

export default Hero