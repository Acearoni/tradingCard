import { useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import CreateCard from './components/CreateCard'
import DisplayPacks from './components/DisplayPacks'
import CardList from './components/CardList'

function App() {
  const [collection, setCollection] = useState([]);
  return (
    <>
      <h1>Trading Card DB</h1>
      <Link to="/cards">Add Card</Link>
      <br></br>
      <Link to="/packs">View All Packs</Link>

      <Routes>
        <Route path="/" element={<CardList collection={collection} />} />
        <Route path="/cards" element={<CreateCard />} />
        <Route path="/packs" element={<DisplayPacks setCollection={setCollection} />} />
      </Routes>
    </>
  )
}

export default App
