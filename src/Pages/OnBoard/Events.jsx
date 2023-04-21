import React from 'react'
import RightArrow from '../Utils/RightArrow'
import EventsImage from '../../assets/Events.png'
import Star from '../Utils/Star'
import EventsPoint from './EventsPoint'
import { ONBOARD_EVENT_DATA } from '../../Constants/Constants'
import HeroButton from './HeroButton'
import Header from './Header'
import { Link } from 'react-router-dom'



const Events = () => {
  return (
    <section id='events' className='bg-backgroundColor py-10 '>
        <div  className='onBoardSection 2xl:w-50%'>
        
       
            
            <div>
                <Header text={'Events'} borderLength='120%'></Header>
                               
                {
                    ONBOARD_EVENT_DATA.map((event, index) => (
                        <EventsPoint key={index} data={event}></EventsPoint>
                        
                    ))
                    
                }
                <Link to='events'>
                    <HeroButton text={'Ongoing Events'}></HeroButton>
                </Link>


            </div>
            <div>
                <img className='onBoardImage' src={EventsImage}></img>

            </div>
            
        </div>
        
       
    </section>
  )
}

export default Events