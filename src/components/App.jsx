import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../styles/App.css'
import Header from "./Header"
import Footer from './Footer'
import Home from './Home'
import SignUp from './SignUp'
import Match from './Match'
import facade from "../utils/loginFacade";
import Player from './Player'
import Admin from './Admin'
import EditPlayer from './EditPlayer'
import EditLocation from './EditLocation'
import EditMatch from './EditMatch'
import DeleteLocation from './DeleteLocation'
import DeletePlayer from './DeletePlayer'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
      <Header facade={facade} setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>

      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/match" element={<Match/>} />
        <Route path="/player" element={<Player/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/edit-player" element={<EditPlayer/>} />
        <Route path="/edit-location" element={<EditLocation/>} />
        <Route path="/edit-match" element={<EditMatch/>} />
        <Route path="/delete-location" element={<DeleteLocation/>} />
        <Route path="/delete-player" element={<DeletePlayer/>} />





      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
