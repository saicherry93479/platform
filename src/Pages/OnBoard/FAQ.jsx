import React from 'react'
import Header from './Header'
import { FAQS_DATA } from '../../Constants/Constants'
import Plus from '../Utils/Plus'
import FAQPoint from './FAQPoint'

const FAQ = () => {
  return (
    <section className='bg-gradient-to-br from-[#141414] to-[#212b80] py-10 '>
        <div  className='onBoardSection 2xl:w-50% !block' >
            <Header text={'FAQs'}></Header>
            
            <div className='grid-cols-1 grid gap-8 lg:grid-cols-2 lg:gap-6'>
                <div className='space-y-6   w-full'>
                {
                    FAQS_DATA.map((faq,index)=>index%2===0?
                    <FAQPoint faq={faq}></FAQPoint>
                    :<></>)
                    
                }
                </div>
                <div className='space-y-6'>
                {
                    FAQS_DATA.map((faq,index)=>index%2===1?<FAQPoint faq={faq}></FAQPoint>:<></>)
                }
                </div>
                


            </div>
        </div>
        

    </section>
  )
}

export default FAQ