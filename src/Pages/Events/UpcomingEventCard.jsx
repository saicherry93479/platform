import React from 'react'

const UpcomingEventCard = ({data}) => {
  return (
    <a href="#" class="block rounded ring-offset-2 shadow-sm brightness-100 transition-all scale-100 outline-none hover:shadow-lg hover:scale-95 focus:scale-95 hover:brightness-95 focus:ring ring-offset-surface-lighter">
        <figure class="w-[350px] aspect-auto rounded overflow-hidden text-left ">
            <img src={data.image} class="brightness-90 w-full h-[200px]" alt="Cyber crimes in India">
            </img>
            <div class="px-4 py-3 text-xl font-medium bg-black">
            {data.name}<br/>
            <span class="text-sm text-amber-500">
                {data.time}
            </span>
            </div>
        </figure>
    </a>
  )
}

export default UpcomingEventCard