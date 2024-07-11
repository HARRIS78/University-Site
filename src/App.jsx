import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/Videoplayer/VideoPlayer'


const App = () => {

  const [playState, SetPlayState] = useState(false);

  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="container">
        <Title title='what we offer' subtitle='our program'></Title>
      <Programs></Programs>
      <About SetPlayState={SetPlayState}></About>
      <Title title='Campus Photos' subtitle='Gallery'></Title>
      <Campus></Campus>
      <Title title='What students says' subtitle='TESTIMONIALS'></Title>
      <Testimonials></Testimonials>
      <Title title='Get in touch' subtitle='Contact Us'></Title>
      <Contact></Contact>
      <Footer></Footer>
      </div>
      <VideoPlayer playState={playState} SetPlayState={SetPlayState}></VideoPlayer>
    </div>
  )
}

export default App
