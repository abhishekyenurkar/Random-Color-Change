// import React from 'react'
// import Create from './components/Create'
// import Read from './components/Read'
// import Update from './components/Update'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// const App = () => {
//   return (
//     <>
//    <Router>
//  <Routes>
//     <Route exact path='/' element={<Create/>}/>
//     <Route exact path='/read' element={<Read/>}/>
//     <Route exact path='/update' element={<Update/>}/> 
//  </Routes>
//    </Router>
//     </>
//   )
// }

// export default App




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

