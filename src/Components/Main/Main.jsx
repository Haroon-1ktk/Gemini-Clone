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
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main