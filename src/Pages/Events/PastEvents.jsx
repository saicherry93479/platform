import React, { useState } from 'react'
import PastEventButton from './PastEventButton'
import WeeklyContests from './WeeklyContests'
import Workshops from './Workshops'
import DSR from './DSR'

const PastEvents = () => {
    const [current,setCurrent]=useState(0)
  return (
    <section className='bg-backgroundColor'>
        <div className='eventPageSection 2xl:w-50% '>
          <h2 class="eventHeader">If you missed something, access it right here</h2>
          <div className='flex overflow-x-auto flex-wrap gap-8 justify-center p-4 mx-auto mt-4 max-w-2xl no-scrollbar'>
              <PastEventButton text={'Weekly Contest'} index={0} current={current} setCurrent={setCurrent}></PastEventButton>
              <PastEventButton text={'Workshops'} index={1} current={current} setCurrent={setCurrent}></PastEventButton>
              <PastEventButton text={'Doubt Resolution Sessions'} index={2} current={current} setCurrent={setCurrent}></PastEventButton>

          </div>
          {
            current===0 && <WeeklyContests></WeeklyContests>
          }
          {
            current===1 && <Workshops></Workshops>
          }
          {
            current===2 && <DSR></DSR>
          }


        </div>

    </section>
  )
}

export default PastEvents