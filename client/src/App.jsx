import { useState } from 'react'
import './App.css'
import {Link, Route, Routes} from 'react-router-dom'
import CreateCard from './components/CreateCard'

function App() {

  return (
    <>
      <h1>Trading Card DB</h1>
      <Link to="/cards">Add Card</Link>

      <Routes>
        <Route path='/cards' element={<CreateCard/>}/>
        <Route path='/' element={<div>Welcome to the Trading Card DB!</div>} /> //WE WILL CHANGE THIS LATER
      </Routes>
    </>
  )
}

export default App
