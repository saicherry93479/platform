import React from 'react'

const MissedEventCard = ({data}) => {
  return (
    <figure class="w-[350px] lg:h-[378px] rounded overflow-hidden text-left shadow-sm transition-shadow">
            <img src={data.image} class="object-cover brightness-90 h-[200px] aspect-video" alt="How does blockchain work? | Blockchain systems rely on a peer-to-peer network of computers">
            </img>
            <figcaption class="lg:flex lg:flex-col lg:justify-between lg:h-[180px] px-4 py-3 text-lg font-medium bg-navBackground">
              {data.name}
              <button class="px-4 py-2 mt-4 w-full text-indigo-500 rounded border-2 border-current transition-all outline-none hover:text-indigo-600 hover:bg-indigo-300/10 focus:text-indigo-600 focus:bg-indigo-300/10">
                {data.buttonText}
              </button>
            </figcaption>
    </figure>
  )
}

export default MissedEventCard