import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Header from './Components/Header/Header'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cards, setCard] = useState([])
  const [credit, setCredit] = useState(0)
  const [timeHr, setTime] = useState(20)
  const [Price, setPrice] = useState(0)

  const handleAddCard = (corse, time, usd) => {
    //Adding Course Name
    const checkCard = cards.find(card => card === corse)
    if (!checkCard) {
      if (time <= timeHr) {
        const newCard = [...cards, corse]
        setCard(newCard)
      }
    }
    else {
      toast.warning("Already Selected this Course")
    }

    //Total Credit and Time Remaining
    const newCredit = credit + time;
    const timeRemaining = 20 - newCredit;
    const checkTime = cards.find(card => card === corse)
    if (!checkTime && newCredit <= 20) {
      setCredit(newCredit)
      setTime(timeRemaining)
    }
    else if (time >= timeHr) {
      toast.warning("You don't have enough credit")
    }

    //Adding Total Price
    const checkAmount = cards.find(card => card === corse)
    if (!checkAmount) {
      const newPrice = Price + usd;
      setPrice(newPrice)
    }
  }

  return (
    <>
      <Header></Header>
      <div className='flex lg:flex-row flex-col-reverse md:px-6 lg:px-0 bg-[#F3F3F3]'>
        <Blogs handleAddCard={handleAddCard}></Blogs>
        <Bookmarks cards={cards} credit={credit} timeHr={timeHr} Price={Price}></Bookmarks>
      </div>
    </>
  )
}

export default App
