import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./css/App.css";
import './css/Description.css'
import './css/Header.css'
import './css/Dropdown.css'
import Header from './Header'
import PhotoOfTheDay from './PhotoOfTheDay'
import Description from './Description'
import MarsRoverPhotos from './MarsRoverPhotos'

import {API_KEY} from './index'

function App() {
const [data, setData] = useState([])
const[desc, setDesc] = useState(null)

const openDesc = () => {
  setDesc(true)
}

const closeDesc = () =>{
  setDesc(null)
}

useEffect (() => {
  axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
  .then(res =>
    setData(res.data))
    .catch(err =>
      console.log(err))

      return () => {
        console.log('cleanup')  
      }    
}, [])   
  return (
    <div className="App">
        <Header date={data.date} title={data.title} />
        <PhotoOfTheDay hdurl={data.hdurl}/>
       <Description explanation={data.explanation}  closeDesc={closeDesc} openDesc={openDesc} desc={desc} />
        <MarsRoverPhotos/>
    </div>
  );
}

export default App;
