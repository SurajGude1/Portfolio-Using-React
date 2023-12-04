import React from 'react'
import './Main.css'

function Main() {
  return (
    <div className='main-container'>
      <div className="content myimg"></div>

      <div className="content myinfo">
        <h3>Who am I ?</h3>
        <h2>Hi There ! I am Suraj Gude</h2>
        <ul className='mytags'>
          <li>Software Developer</li>
          <li>Java Developer</li>
          <li>DevOps</li>
        </ul>
        <ul className='myprofiles'>
        </ul>
        <p>
          As A Recent Graduate In Information Technology With A Solid Foundation In Programming Languages And Data Structures, I Am Eager To Embark On A Dynamic Career In The IT Industry. Equipped With A Strong Academic Background And Practical Experience Gained Through Projects And Coursework, I Am Poised To Contribute Innovative Solutions To Complex Technical Challenges. My Proficiency In Various Programming Languages, Coupled With A Keen Understanding Of Data Structures, Positions Me As A Valuable Asset To Any Forward-Thinking Organization.
        </p>

        <div className="myinfo-buttons">
          <button className='myinfo-btn my-resume'>My Resume</button>
          <button className='myinfo-btn about-me '>About Me</button>
        </div>

      </div>
    </div>
  )
}

export default Main
