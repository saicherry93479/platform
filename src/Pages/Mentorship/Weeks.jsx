import React from 'react'
import WeekCard from './WeekCard'
import Xarrow from "react-xarrows";
import CustomHeader from '../Utils/CustomHeader';


const Weeks = () => {
  return (
    <section className='py-20'>
        <div className='onBoardSection 2xl:w-50% !flex-col'>
            <CustomHeader data={'Week Details'}></CustomHeader>
        
        <div>
        {
            [0,1,2,3,4,5,6].map((data,index)=><WeekCard index={index}></WeekCard>)
        }
        </div>
        
        
        {
            [0,1,2,3,4,5].map((data)=><Xarrow
            color='rgba(0, 82, 195, 0.69)'
            headShape={'arrow1'}
            headSize={5}
            showHead={false}
            zIndex={2}
            strokeWidth={2}
           
            
        
            start={`week-${data}`} //can be react ref
            end={`week-${data+1}`} //or an id
        />)
        }
        

    </div>
</section>
  )
}

export default Weeks