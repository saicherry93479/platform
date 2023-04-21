import React from 'react'


// customheader for mentorship page
// and day page

const CustomHeader = ({data,center=true,dayId}) => {
  return (
    <div className={`flex ${center==true?'justify-center':''}  gap-[10px] mb-10`}>
        <div class="w-min">
                    <p class="text-backgroundColor  text-[40px] whitespace-nowrap  lg:text-[50px] ">{data} <span className='text-primary'>{dayId?`#${dayId}`:''}</span> </p>

                    <img className='' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAU4AAAAKCAYAAADb7benAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJUSURBVHgB7ZpLctQwEIa7FUMoNjEniNhSFJPcIEfIklAcIkfgNBSsmBsQTjCmimKLcoNhk0fVxB1JGfkh2xlJ5Ukymf42suWWLT/0u1stBMZCs+Mcdl/vBTdYkAyyIwizuzMOt406r22QA2AO0dg2Ce2iSb2OgvGZ6+c1DzM1djhsi/cdR9WtKrWt6Npnnu31xX88nAb2kRkbdBv05/MEFotTGJXUweqTPHglMMz2oBrbnvh7Ao5NW1HbovcjcoLNQt2iFs7iZKaLA2AYhlmNqjdJDR7r9bhFv0ePEdFDFXEZp6rM23XOYes4XBJWo5bnULaPiIW+hwKynQLffT2vu+r6UZz81MURbC0YEZ5ZVJgZBdpB3IdTwjlEEX1/S8xHXq7d08DDbwoSsFMs8GodUwkyzMwMThq+vhB71cD26Z1uGYyuZNR1mTVAZ5DRKb7//rsWztlHqV/GwbgvI3Ww+qQN3tTByDCbyN0Ydoi8Ldie0ArYrxs2RRllfxsW6gpRHiMwDMNE0hbpjudc7/d53IOJTRyo76U7L1tFYc5hqxwuaat3xT9busSu6ccLPGuG4I37kvZnIWgChEfQisbLKQvnhkN/P+0D088iYpXCo6AFhcQDe3EjP5Po1R2txhHJ46AEcYiNzxzo8u2qxJcVVEQznalL+oLLih/AiSGGYbYRunwTumLA6KWZAsxgR0ygJBZNhmGeK6q960J5nbgVNMUP4cusXN4kg5uXvwCvzY4EZhNRwAyh4GkzUvI0EFyxWD+F6NUdTWKSxyEJ4qv5Q601vQVFCOLV6eAMDgAAAABJRU5ErkJggg==" width="100%" alt="underline" class="sc-ckEbSK eZQJlM"/>
        </div>
    </div>
  )
}

export default CustomHeader