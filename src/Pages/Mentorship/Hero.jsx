import React from 'react'

const Hero = () => {
  return (
    <section class="flex min-h-[60vh] py-20 items-center justify-center text-center bg-backgroundColor pt-[120px] ">
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
            </div>

    </section>
  )
}

export default Hero