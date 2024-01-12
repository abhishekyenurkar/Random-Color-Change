




import React,{useState} from 'react';
import './App.css'
export default function App(){

 const [color,setcolor]=useState("");

 const handleColor=()=>{
  const val="#"+
  Math.floor(
    Math.random()*(256*256*256)
  ).toString(16)

  setcolor(val)
 }

 
  return(
    <>
    <div className="container" style={{background:color,height:'100vh'}}>
     

     <div className="col"><button className='btn btn-primary' onClick={handleColor}>Click ME!</button></div>
     
    </div>
    </>
  )
}

