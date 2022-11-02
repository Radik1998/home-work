import React, { useEffect, useState }  from "react";
const Timer=()=>{
    const[time,setTime]=useState(new Date().getHours())
    const[seconds,setSeconds]=useState(new Date().getSeconds());
    const[minutes,setMinutes]=useState(new Date().getMinutes());
    useEffect(()=>{
       const timeout=setInterval(()=>{
setSeconds(seconds+1)
if(seconds===59){
    setMinutes(minutes+1);
    setSeconds(0)
}   
if(minutes===60){
    setTime(time+1)
    setMinutes(0)
}
if(time===23){
    setTime(0)
}
        },1000)
        return()=>clearInterval(timeout)
    })
    return(
        <h1>{time<10?"0"+time:time}:{minutes<10?"0"+minutes:minutes}:{seconds<10?"0"+seconds:seconds}</h1>

    )
}
export default Timer