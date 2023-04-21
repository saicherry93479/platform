import React from 'react'

const VideoSection = () => {
  return (
    <section className="">
        <div className='mx-auto max-w-6xl py-9 md:py-16 widthRatios 2xl:w-50%  '>
            <div className="rounded-3xl bg-yellow-50 px-2 py-6 md:p-20">
                <div className="text-center text-sm font-semibold md:text-[25px]/[35px] text-backgroundColor">We’re on a mission to empower the next generation to discover better ways to learn, earn, and network.</div>
                <div className="mt-12 aspect-video overflow-hidden rounded-3xl border-2 border-yellow-700 object-cover">
                    <video playsinline="" controls="true" src="https://files.bluelearn.in/OTHER/bluelearn.mov" autoplay="">
                    </video>
                </div>
            </div>
        </div>
    </section>
  )
}

export default VideoSection