import React, { useEffect, useState } from 'react'

const BlogsSection = ({blogCollection}) => {
    const [colors,setColors]=useState([])
    useEffect(()=>{
        generateRandomColors()

    },[])

    const generateRandomColors=()=>{

        let colorsCurrent=[]
        console.log('blog collection is ',blogCollection)
        for(let i=0;i<blogCollection.length;i++){
            let color='#'+Math.floor(Math.random()*16777215).toString(16)
            colorsCurrent.push(color)

        }
        console.log("colors are ",colorsCurrent)
        

        setColors(colorsCurrent)
        console.log("colors after are ",colors)

    }
  return (
    <section className='px-4 flex overflow-x-scroll gap-5 py-3 no-scrollbar ' >

    {
             blogCollection.map((data,index)=>
            <div key={index} className={`blogCard h-fit cursor-pointer `} style={{backgroundColor:colors[index]}}>
                <p className='text-[20px]'>{data.name}</p>
                <div className='ml-[20px] mt-[10px]'>
                {
                    data.points.map((point,index)=><p className='text-[18px] text-ellipsis overflow-hidden whitespace-nowrap '>{index}. {point} </p>)
                }
                </div>

            </div>)
        }

    </section>
  )
}

export default BlogsSection