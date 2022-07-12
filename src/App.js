import './App.css';
import React from "react";
import DetailStudent from './DetailStudent';
import RegisterStudent from './RegisterStudent';
import LoginStudent from './LoginStudent';

import axios from 'axios';
import {useEffect} from "react"
function App() {
  useEffect(() => {
    axios.get("https://localhost:44351/api/Teachers").then(res=>{
      console.log('result',res.data)
    })
  }, [])
 return(
  <div>
    <DetailStudent></DetailStudent>
    <LoginStudent></LoginStudent>
    <RegisterStudent></RegisterStudent>
  </div>
 )
    
 
}

export default App;




