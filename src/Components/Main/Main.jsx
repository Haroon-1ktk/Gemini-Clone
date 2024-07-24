import React, { useContext } from 'react'
import {assets} from '../../assets/assets';
import {Context} from '../../context/Context'
import './Main.css'
const Main = () => {
    const {input,loading,recentprompt,resultdata,showresult,onSent,setInput}=useContext(Context);
  return (
    <div className='main'>
        <div className="nav">
            <p>gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
          {!showresult ?
          <>
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
          </>: <div className='result'>
            <div className='result-title'>
                <img src={assets.user_icon} alt=''/>
                <p>{recentprompt}</p>
            </div>
            <div className="result-data">
                <img src={assets.gemini_icon} alt="" />
               {loading?
               <div className='loader'>
                <hr />
                <hr />
                <hr />
               </div>
               : <p dangerouslySetInnerHTML={{__html:resultdata}}></p>}
            </div>
            </div>}
            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" onChange={(e)=>setInput(e.target.value)} value={input} placeholder='Enter your prompt here...' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className="bottom-info">
                    Gemini may provide inaccurate info about people places etc please double check it
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main