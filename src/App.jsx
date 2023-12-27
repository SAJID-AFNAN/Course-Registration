import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Header from './Components/Header/Header'
import Bookmarks from './Components/Bookmarks/Bookmarks'

function App() {
  const [cards, setCard] = useState([])
  const [credit, setCredit] = useState(0)
  const [timeHr, setTime] = useState(20)
  const [Price, setPrice] = useState(0)

  const handleAddCard = (corse, time, usd) => {
    //Adding Course Name
    const checkCard = cards.find(card => card === corse)
    // console.log((cards));
    if (!checkCard) {
      const newCard = [...cards, corse]
      setCard(newCard)
    }

    //Total Credit and Time Remaining
    const newCredit = credit + time;
    const timeRemaining = 20 - newCredit;
    if (newCredit <= 20) {
      setCredit(newCredit)
      setTime(timeRemaining)
    }

    //Adding Total Price
    const newPrice = Price + usd;
    setPrice(newPrice)
  }

  return (
    <>
      <Header></Header>
      <div className='flex bg-[#F3F3F3]'>
        <Blogs handleAddCard={handleAddCard}></Blogs>
        <Bookmarks cards={cards} credit={credit} timeHr={timeHr} Price={Price}></Bookmarks>
      </div>
    </>
  )
}

export default App
