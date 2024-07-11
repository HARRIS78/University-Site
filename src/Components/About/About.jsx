import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = ({SetPlayState}) => {
  return (
    <div className='about'>

      <div className="about-left">
        <img src={about_img} className='about-img' />
        <img src={play_icon} className='play-icon' onClick={()=>{SetPlayState(true)}}/>
      </div>


      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>NURTURING Tomorrow'sleaders today</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe suscipit consequatur dolor qui vitae enim, libero voluptates autem expedita, aliquam laboriosam eos? Quis sint officiis distinctio rerum repellendus voluptates nisi numquam. Expedita minus earum distinctio ipsa, dolor iste, aut velit vitae similique non ullam iure amet saepe, commodi voluptate tenetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, doloremque pariatur minima deleniti assumenda rerum, tenetur laboriosam odio cum ab, molestiae ipsum voluptate natus consectetur?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ducimus, nulla voluptatem cumque facere ea veritatis iusto, autem, hic vero deserunt sequi.</p>
      </div>

    </div>
  )
}

export default About
