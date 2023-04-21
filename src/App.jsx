import React from 'react'
import NavBar from './Pages/Utils/NavBar'
import OnBoard from './Pages/OnBoard/OnBoard'
import Events from './Pages/Events/Events'
import Journey from './Pages/OnBoard/Journey'
import Footer from './Pages/Utils/Footer'
import AboutUs from './Pages/AboutUs/AboutUs'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import MentorShip from './Pages/Mentorship/MentorShip'
import Week from './Pages/Week/Week'
import Page404 from './Pages/Utils/Page404'
import Day from './Pages/Day/Day'
import ScrollToTop from './Pages/Utils/ScrollToTop'

const App = () => {
  return (
    <Router>
      <NavBar></NavBar>
      <ScrollToTop></ScrollToTop>
      <Routes>
        <Route path='' element={<OnBoard></OnBoard>}></Route>
        <Route path='events' element={<Events></Events>}></Route>
        <Route  path='aboutUs' element={<AboutUs></AboutUs>}></Route>
        <Route path='mentorShip' element={<MentorShip></MentorShip>}></Route>
        <Route path='mentorship/week/:weekId' element={<Week></Week>}></Route>
        <Route path='*' element={<Page404></Page404>}></Route>
        <Route path='mentorship/week/:weekId/day/:dayId' element={<Day></Day>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  )
}

export default App