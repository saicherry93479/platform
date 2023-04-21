import React from 'react'
import MentorShipImage from '../../assets/Mentroship.png'
import Header from './Header'
import { ONBOARD_MENTORSHIP_DATA } from '../../Constants/Constants'
import EventsPoint from './EventsPoint'
import HeroButton from './HeroButton'
import { Link } from 'react-router-dom'

const MentorShip = () => {
  return (
    <section id='mentorship' className='bg-gradient-to-br from-[#141414] to-[#212b80]  py-10 '>
        <div className='onBoardSection 2xl:w-50% !flex-col lg:!flex-row '>
            <div>
                <img className='onBoardImage' src={MentorShipImage}></img>

            </div>
            <div className='self-start'>
                <Header text={'Mentorship'} borderLength={'60%'}></Header>
                {
                    ONBOARD_MENTORSHIP_DATA.map((event, index) => (
                        <EventsPoint key={index} data={event}></EventsPoint>
                        
                    ))
                }
                <Link to='mentorship'>
                    <HeroButton text={'Learn Now'}></HeroButton>
                </Link>


            </div>


        </div>

    </section>
  )
}

export default MentorShip