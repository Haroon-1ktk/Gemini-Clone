import React from 'react'
import {assets} from '../../assets/assets'
import './Main.css'
const Main = () => {
  return (
    <div className='main'>
        <div className="nav">
            <p>gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello Dev...</span></p>
                <p>How can i help you?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest beautiful places to visit</p>
                    <img src={assets.compass_icon} alt=''/>
                </div>
                <div className="card">
                    <p>Briefly Summarize:urban plannig</p>
                    <img src={assets.bulb_icon} alt=''/>
                </div>
                <div className="card">
                    <p>Brainstorm Team bonding activites for our work retreat</p>
                    <img src={assets.message_icon} alt=''/>
                </div>
                <div className="card">
                    <p>Improve the readibilty of the following code</p>
                    <img src={assets.code_icon} alt=''/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main