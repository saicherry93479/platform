import React, { useEffect, useState } from 'react'
import Logo from './Logo';
import Google from './Google';
import { Link } from 'react-router-dom';


const NavBar = () => {
  const [click,setClick]=useState(false)
 
  const scrollDisable=()=> {
    // To get the scroll position of current webpage
    TopScroll = window.pageYOffset || document.documentElement.scrollTop;
    LeftScroll = window.pageXOffset || document.documentElement.scrollLeft,
    
    // if scroll happens, set it to the previous value
    window.onscroll = function() {
    window.scrollTo(LeftScroll, TopScroll);
            };
    }
  
  const clickHandler=()=>{
    console.log("NavBar  ::: clickHandler ::: came")
    setClick(a=>!a)

  }


  return (
    <header className={`fixed  z-20 w-full   transition-all duration-200 ${click?'bg-backgroundColor':''} `}>
      <nav className={`  flex items-center  pt-4 pb-3   justify-between w-[90%] lg:w-[80%] xl:w-[70%] 2xl:w-50% center-elment  `}>
        <Link to='' className='navButton'>
          <Logo></Logo>
        </Link>
        <div className='hidden lg:flex navButton items-center   gap-3 !cursor-default'>
          <a   href='#cirriculum'className='navItem'>Cirriculum</a>
          <Link to='/mentorship' className='navItem'>Mentorship</Link>
          <Link to='/events' className='navItem'>Events</Link>
          <Link to={'aboutUs'} className='navItem'>About Us</Link>
        </div>
        <div className='navButton hidden lg:block   !bg-primary font-semibold '  style={{transform:'none'}}>
          <a>Login with Google</a>
        </div>
        <div class="flex gap-3 lg:hidden">
          <button class="navSmallScreenButton" >
            <Google></Google>
          </button>
          <button class="navSmallScreenButton" onClick={clickHandler}>
           
              <div class="absolute left-1/2 top-1/2 block w-5 -translate-x-1/2 -translate-y-1/3 transform " >
                <span aria-hidden="true" class={`absolute block h-[1.5px] w-5 transform bg-gray-50 transition duration-300 ease-in-out ${click===true? 'rotate-45':'-translate-y-[7px]'}`}></span>
                <span aria-hidden="true" class={`absolute block h-[1.5px] w-5 transform bg-gray-50 transition duration-300 ease-in-out ${click===true?'opacity-0':'opacity-100'}`}></span>
                <span aria-hidden="true" class={`absolute block h-[1.5px] w-5 transform bg-gray-50 transition duration-300 ease-in-out ${click===true? '-rotate-45':'translate-y-[7px]'}`} ></span>
              </div>
          </button>
        </div>
        


      </nav>
      
        <div className={`transform  ${click?'translate-x-0':'-translate-x-[200%]'} duration-300  center-elment bg-backgroundColor  border-[#1E1E1E]  border-t-[1px]   w-[90%] lg:w-[80%] xl:w-[70%] 2xl:w-50%   py-4 lg:hidden`}>
        <a  href='#cirriculum' className='mb-2 text-[18px] cursor-pointer'>Cirriculum</a>
        <br/>
        <a href='#events'  className='mb-2 text-[18px] cursor-pointer'>Mentorship</a>
        <br/>
        <a href='#mentorship'  className='mb-2 text-[18px] cursor-pointer'>Events</a>
        <br/>
        <Link to={'aboutUs'} className='mb-2 !text-[18px] cursor-pointer'>About Us</Link>

    </div>
      
      
    </header>
  )
}

export default NavBar