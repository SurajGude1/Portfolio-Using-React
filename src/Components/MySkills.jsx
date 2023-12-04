import React from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee} from '@fortawesome/free-solid-svg-icons'
import './MySkills.css'

function MySkills() {

    var github = '/src/images/github.png';

    return (
        <>
            <div className="myskills-container">
                <h1>My Skills</h1>
                <div className="options">
                    <ul>
                        <li>All</li>
                        <li>Programming</li>
                        <li>Operating Systems</li>
                        <li>Tools</li>
                        <li>Soft Skills</li>
                    </ul>
                </div>
                <div className="skills">
                    <div className="skill-box box1"></div>
                    <div className="skill-box box2"></div>
                    <div className="skill-box box3"></div>
                    <div className="skill-box box4"></div>
                    <div className="skill-box box5"></div>
                    <div className="skill-box box6"></div>
                    <div className="skill-box box7"></div>
                    <div className="skill-box box8"></div>
                    <div className="skill-box box9"></div>
                    <div className="skill-box box10"></div>
                    <div className="skill-box box11"></div>
                    <div className="skill-box box12"></div>
                    <div className="skill-box box13"></div>
                    <div className="skill-box box14"></div>
                    <div className="skill-box box15"></div>
                    <div className="skill-box box16"></div>
                    <div className="skill-box box17"></div>
                    <div className="skill-box box18"></div>
                </div>
            </div>
        </>
    )
}

export default MySkills
