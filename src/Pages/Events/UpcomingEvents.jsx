import React from 'react'
import { UPCOMIN_EVENTS } from '../../Constants/Constants'
import UpcomingEventCard from './UpcomingEventCard'

const UpcomingEvents = () => {
  return (
    <section className='bg-[#161b22]'>
        <div className='min-h-[60vh] eventPageSection 2xl:w-50% '>
            <h2 class="eventHeader">Upcoming events for you</h2>
            <p class="eventPara !max-w-none">Join our Career Talkz community absolutely free and get access to valuable events by industry experts.</p>
            <div className='flex overflow-x-auto gap-8 pl-1 mt-8 max-w-full rounded no-scrollbar'>
              {
                UPCOMIN_EVENTS.map((data,index)=><UpcomingEventCard data={data} key={index}></UpcomingEventCard>)
              }

            </div>
        </div>
   
       

    </section>
  )
}

export default UpcomingEvents



{/* // <figure class="w-[350px] lg:h-[378px] rounded overflow-hidden text-left shadow-sm transition-shadow">
// <img src="https://i.ytimg.com/vi/SSo_EIwHSd4/maxresdefault.jpg" class="object-cover brightness-90 h-[200px] aspect-video" alt="How does blockchain work? | Blockchain systems rely on a peer-to-peer network of computers"/>
// <figcaption class="lg:flex lg:flex-col lg:justify-between lg:h-[180px] px-4 py-3 text-lg font-medium bg-surface-light">How does blockchain work? | Blockchain systems rely on a peer-to-peer network of computers
//   <button class="px-4 py-2 mt-4 w-full text-indigo-500 rounded border-2 border-current transition-all outline-none hover:text-indigo-600 hover:bg-indigo-300/10 focus:text-indigo-600 focus:bg-indigo-300/10">
//     Listen Now
//   </button>
// </figcaption>
// </figure> */}