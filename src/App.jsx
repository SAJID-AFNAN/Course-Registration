import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Header from './Components/Header/Header'
import Bookmarks from './Components/Bookmarks/Bookmarks'

function App() {
  const [cards, setCard] = useState([])

  const handleAddCard = corse => {
    const newCard = [...cards, corse]
    setCard(newCard)
  }

  return (
    <>
      <Header></Header>
      <div className='flex bg-[#F3F3F3]'>
        <Blogs handleAddCard={handleAddCard}></Blogs>
        <Bookmarks cards={cards}></Bookmarks>
      </div>
    </>
  )
}

export default App
