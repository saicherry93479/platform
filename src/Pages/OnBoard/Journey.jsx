import React, { useEffect } from 'react'
import { JOURNEY_DATA } from '../../Constants/Constants'
import JourneyItem from './JourneyItem'

const Journey = () => {
    useEffect(()=>{
        animateOnScroll()
        

    },[])

    const animateOnScroll=()=>{
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
              const square = entry.target.querySelector('.journeyClass');
              const squareOne = entry.target.querySelector('.journeyClassOne');

            //   const index=entry.target.querySelector('.journeyIndex');
          
              if (entry.isIntersecting) {
                square.classList.add('cirriculumAnimationClass');
                squareOne.classList.add('cirriculumAnimationClass')
                // index.classList.add('journeyIndexAnimationClass')
                return; // if we added the class, exit the function
              }
          
              // We're not intersecting, so remove the class!
              square.classList.remove('cirriculumAnimationClass');
              squareOne.classList.remove('cirriculumAnimationClass');
            //   index.classList.remove('journeyIndexAnimationClass')
            });
          });
          
          const boxElList = document.querySelectorAll(".jouneyClassMain");
          boxElList.forEach((el) => {
            observer.observe(el);
          })

    }

  
  return (
    <section id='cirriculum' class="mx-auto max-w-6xl gap-4 py-9 md:py-16 pt-20 md:pt:30">
        <div class="flex flex-col md:gap-18">
            <h3 class="text-center text-backgroundColor text-[30px] font-semibold md:text-[36px]">The journey from 0 to 1</h3>
            <div class="flex min-h-screen flex-col justify-center">
                <div class="w-full py-3 px-2 sm:mx-auto sm:max-w-3xl sm:px-0">
                    <div class="relative font-inter text-sm antialiased">
                        <div class="absolute left-6 h-full w-1 -translate-x-1/2 transform bg-gray-200 sm:left-1/2 ">
                        </div>
                        {
                            JOURNEY_DATA.map((data,index)=><JourneyItem index={index} leftData={data.leftData} rightData={data.rightData} date={data.date}></JourneyItem>)
                        }

                    </div>
                </div>
            </div>
        </div>
    </section>
 )
}

export default Journey