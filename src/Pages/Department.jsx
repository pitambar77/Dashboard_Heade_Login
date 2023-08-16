import { useState,useEffect } from "react"
import React  from 'react'

const Department=()=> {
  const [count, setCount]=useState(window.screen.width);

  const currentScreenWidth=()=>{
    setCount(()=>window.innerWidth)
  }
  useEffect(()=>{
    window.addEventListener('resize', currentScreenWidth);
    
    return ()=>{
      window.removeEventListener('resize',currentScreenWidth) 
    }
  })
  return (
    <>
    {/* <button onClick={()=>setCount(count+1)}>+</button> */}
    <h2>windows screen size {count}</h2>
    {/* <button onClick={()=>(count===0)? setCount(0):setCount(count-1)}>-</button> */}
    </>
  )
}
export default  Department
