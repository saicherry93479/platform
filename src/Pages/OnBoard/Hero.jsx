import React from 'react'
import RightArrow from '../Utils/RightArrow'
import HeroButton from './HeroButton'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='flex min-h-screen py-20 items-center justify-center text-center bg-backgroundColor '>
        <div class="max-w-4xl w-[90%] center-elmen">
            <h1 class=" text-4xl min-[700px]:text-5xl  lg:text-8xl font-extrabold !text-textColor ">Inspire. Educate. Empower</h1>
            <h2 class="my-6 headerPara  ">This is an 8-week problem-solving curriculum that offers a comprehensive approach <br className=' hidden lg:block'/> to
            <span className='text-yellow-400'> coding concepts, emphasizing mastery of DSA and preparing students </span>

            </h2>
            <div class="flex flex-wrap justify-center gap-5">
                <a href='#cirriculum'>
                  <HeroButton text="Cirriculum" ></HeroButton>
                </a>
                <Link to='/events'>
                  <HeroButton text="Events" ></HeroButton>
                </Link>
                <Link to='/mentorship'>
                  <HeroButton text="MentoShip" ></HeroButton>  
                </Link> 
            </div>
        </div>

    </section>
  )
}

export default Hero