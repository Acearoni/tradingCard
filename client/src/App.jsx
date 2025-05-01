import { useState, useEffect } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import CreateCard from './components/CreateCard'
import DisplayPacks from './components/DisplayPacks'
import CardList from './components/CardList'
import axios from 'axios'

function App() {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/collection')
      .then(res => setCollection(res.data))
      .catch(err => console.log(err));
  }, []);

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
