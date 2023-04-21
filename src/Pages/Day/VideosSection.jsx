import React, { useEffect, useState } from 'react'

const VideosSection = ({videoCollection}) => {
    const [videos,setVideos]=useState(videoCollection)
    useEffect(()=>{
        carsoulFeature()
    },[videos])

    const carsoulFeature=()=>{
        if(videos.length<3){
            return
        }

        setTimeout(()=>{
            setVideos(p=>p.slice(1,p.length).concat(p[0]))
            
        },30000)

    }
  return (
    <section className='px-4 flex overflow-x-scroll gap-5 py-3 no-scrollbar h-[200px] md:h-[250px]' >

        {
            videos.map((video, index) => <iframe controls="controls" preload="metadata"
              className={`h-[100%] rounded-[5px] border-2 border-yellow-700 object-cover`} src={video} key={index}></iframe>)
        }
    

    </section>
  )
}

export default VideosSection