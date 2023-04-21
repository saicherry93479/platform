import React from 'react'
import Instagram from './Instagram'
import Twitter from './Twitter'
import Linkedin from './Linkedin'
import Youtube from './Youtube'
import Facebook from './Facebook'
import Logo from './Logo'

const Footer = () => {
  return (
    <section className='bg-backgroundColor border-[#1E1E1E]  border-t-[1px]'>

  
        <div className='onBoardSection 2xl:w-50%  py-[150px] !gap-20 !items-start sm:!justify-end lg:!flex-row-reverse  '>
            <div className='space-y-5'>
                <h1 className=' text-[20px] font-semibold'>Socials</h1>
                <div className='flex gap-3'>
                    <Instagram></Instagram>
                    <Twitter></Twitter>
                    <Linkedin></Linkedin>
                    <Youtube></Youtube>
                    <Facebook></Facebook>

                </div>
            </div>
            
            <div className='max-w-md'>
                <Logo></Logo>
                <p className='text-gray-400 mt-2'>If we've got a unique /original CAREER GOAL and an everlasting enthusiasm to achieve it, then CT shows the right path to reach alright HAPPY CAREER.</p>
            </div>
           
        </div>
    </section>
  )
}

export default Footer