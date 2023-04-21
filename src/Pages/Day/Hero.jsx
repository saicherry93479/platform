import React, { useState } from 'react'
import CustomHeader from '../Utils/CustomHeader'
import PastEventButton from '../Events/PastEventButton'
import VideosSection from './VideosSection'
import BlogsSection from './BlogsSection'
import OthersSection from './OthersSection'
import { TEMPORARY_BLOG_COLLECTION, TEMPORARY_VIDEO_COLLECTION } from '../../Constants/Constants'

const Hero = ({dayId}) => {
  const [current,setCurrent]=useState(0)
  return (
    <section>
        <div className='min-h-screen widthRatios 2xl:w-50%  py-20 '>
                <div className='my-10'>
                </div>
                <CustomHeader data={`Day Insights`} center={false} dayId={dayId}></CustomHeader>


                <div className='flex flex-col lg:flex-row gap-10 items-center  lg:h-[300px] mb-[40px]'>
                  <div className="rounded-3xl w-full lg:w-[60%] lg:h-[300px] ">
                     
                      <div className="h-[100%]   aspect-video overflow-hidden rounded-xl border-2 border-yellow-700 object-cover">
                          <video  className='h-auto w-[100%] '  playsinline="" controls="true" autoPlay={false} src="https://files.bluelearn.in/OTHER/bluelearn.mov" autoplay="">
                          </video>
                      </div>
                  
                  </div>
                  <div className='daysCard w-full !h-[300px] lg:h-[100%] min-w-[200px] '>
                    {
                      [0,1,2,3,4,5,6,7].map((data,index)=><div className='dayCard'>
                        <p className='text-[18px] font-[500] mr-auto text-black '>Problem - {data}</p>

                      </div>)
                    }

                  </div>

                </div>

                <div>
                  <CustomHeader data={'Resources'} center={false}></CustomHeader>
                  <div className='flex flex-row overflow-x-auto flex-wrap gap-2 md:gap-8  p-4  mt-4 max-w-2xl no-scrollbar'>
                      <PastEventButton text={'Videos'} index={0} current={current} setCurrent={setCurrent} color={true}></PastEventButton>
                      <PastEventButton text={'Blogs'} index={1} current={current} setCurrent={setCurrent} color={true}></PastEventButton>
                      <PastEventButton text={'Other'} index={2} current={current} setCurrent={setCurrent} color={true}></PastEventButton>

                  </div>
                  {
                    current===0 && <VideosSection videoCollection={TEMPORARY_VIDEO_COLLECTION}></VideosSection>
                  }
                  {
                    current===1 && <BlogsSection blogCollection={TEMPORARY_BLOG_COLLECTION}></BlogsSection>
                  }
                  {
                    current===2 && <OthersSection></OthersSection>
                  }
                      {/* <video width="400" controls="controls" preload="metadata" src="https://www.w3schools.com/html/mov_bbb.mp4#t=0.5">
              
    </video> */}
                </div>
        </div>

    </section>
  )
}

export default Hero