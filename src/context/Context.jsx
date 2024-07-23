import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context=createContext();

const ContextProvider=({children})=>{
    const [input,setInput]=useState('');
    const [recentprompt,setRecentprompt]=useState([]);
    const [prevprompt,setPrevprompt]=useState([]);
    const [showresult,setShowresult]=useState(false);
    const [loading,setLoading]=useState(false);
    const [resultdata,setResultdata]=useState("");

    //function for submting question
    const onSent=async(prompt)=>{
      setResultdata("")
      setShowresult(true)
      setLoading(true)
      const response =await run(input);
      setResultdata(response);
      setLoading(false);
      setInput("")
    }
   
    const ContextValue={
     onSent,
     prevprompt,
     setPrevprompt,
     setRecentprompt,
     recentprompt,
     showresult,
     loading,
     resultdata,
     input,
     setInput,

    }
    return(
        <Context.Provider value={ContextValue}>
        {children}
        </Context.Provider>
    )
}
export default ContextProvider;