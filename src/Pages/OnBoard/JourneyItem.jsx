import React, { useEffect } from 'react'

const JourneyItem = ({date,leftData,rightData,index}) => {

  
  return (
    
        <div class="group relative mt-6 pl-12 sm:ml-2 sm:mt-0 sm:mb-6 sm:pl-0 md:ml-0 jouneyClassMain" style={{opacity: 1, transform:'none'}}>
                <div>
                    <div class="flex flex-col items-center py-[60px] sm:flex-row sm:group-odd:flex-row-reverse sm:group-even:flex-row  ">
                        <div class="mx-auto flex w-full items-center justify-start ">
                            <div class="w-full pl-4 sm:group-odd:pl-10 sm:group-even:pr-10 journeyClass">
                                <div class="w-fit rounded p-2 sm:group-odd:float-left sm:group-even:float-right text-[16px] text-backgroundColor bg-yellow-50">{date}</div>
                            </div>
                        </div>
                        <div class="absolute left-6 top-1/2 flex h-12 w-12 -translate-y-4 -translate-x-1/2 transform items-center justify-center rounded-full border-4 border-gray-200  p-2 text-[20px] sm:top-auto sm:left-1/2 sm:translate-y-0 journeyIndex bg-yellow-300 transition-transform duration-1000 ease-in">
                            <p className='text-white'>{index}</p>
                        </div>
                        <div class="mx-auto flex w-full items-center justify-start journeyClassOne  ">
                            <div class="w-full pl-4 sm:group-odd:pr-10 sm:group-even:pl-10">
                                <div class="rounded p-2">
                                    <div class="flex flex-col gap-3 ">
                                        <p class="text-[20px] font-semibold text-backgroundColor">{leftData}</p>
                                        <p class="text-[16px] font-normal text-gray-400">{rightData}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    
  )
}

export default JourneyItem