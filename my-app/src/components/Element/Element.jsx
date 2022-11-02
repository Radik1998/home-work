import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { InfoContext } from "../../App";
const Element=(prop)=>{
    let value=useContext(InfoContext)
    const [inputName,setName]=useState("")
    return(
        <div className="elem">
            <form>
                <input value={inputName} onChange={(e)=>{setName(e.target.value)}}/>
                <input value={inputName} onChange={(e)=>{setName(e.target.value)}}/>
                <button onClick={(event)=>{event.preventDefault()
                if(inputName){
                    value.setX(inputName)
                }
                }}>LOGIN</button>
            </form>
        </div>
    )
}
export default Element