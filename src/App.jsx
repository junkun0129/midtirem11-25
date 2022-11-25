import { useState } from 'react'
import styles from './App.module.scss'
import Map from "./Map/map";
import {Routes, Route, Link} from "react-router-dom"
import Login from './Login/Login';
import Book from './Book/Book';

function App() {

  const [User, setUser] = useState({
    userid: 0,
    firstName: "jumpei",
    secondName: "iwatani",
    Email: "onoyouko@icoud.com",
    password: "onoyouko09!",
    nickName: "jumanji"
  });
  
  
  return (
      <>
      

      <Routes>
        <Route path="/login" element = {<Login setUser = {setUser}></Login>}/>
        <Route path="/map" element = {<Map User = {User}></Map>}>[
          <Route path="new"element = {<Book/>} className={styles.jl}/>
        </Route>
        ]
      </Routes>
     
      {User?(<Link to = "/map">lets go to map</Link>):null}
      
      </>
    
  )
}

const Iwatani = ()=><h1>iwatani</h1>
export default App
