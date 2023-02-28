import './App.css';
import Nav from './Nav.js'
import NewCard from './NewCard.js'
import DisplayCards from './DisplayCards.js'
import EditCard from './EditCard.js'
import DisplayStack from './DisplayStack.js'
import {useState, useEffect} from 'react'

function App() {
  const [cardData, setCardData] = useState([])
  const [show, setShow] = useState("NewCard")
  const [newCard, setNewCard] = useState({})
  const [editCardId, setEditCardId] = useState(1)
  const [editCard, setEditCard] = useState([])
  const [deleteCardId, setDeleteCardId] = useState(0)

  const getData = async () => {
    const res = await fetch("http://localhost:4000")
    const data = await res.json()
    setCardData(data)
  }

  const getEditCardData = async () => {
    const id = editCardId
    console.log(id)
    try{
      const res = await fetch(`http://localhost:4000/cards/${id}`)
      const data = await res.json()
      setEditCard(data)
    }catch(e){
      console.log(e)
    }
  }

  //HERE :(

  useEffect(() => {
    getEditCardData()
    }, [editCardId])

  useEffect(() => {
    setShow("NewCard")
    // setNewCard({})
    getData()

    }, [])

    
  //   useEffect(()=> {
  //     deleteCard()
  // },[cardData])

  const postNewCard = async (data) => {
    const settings = {
      method: 'POST',
      headers: {
      'Content-Type':'application/json'
      },
      body: JSON.stringify(data)
    }
    console.log(data)
    try{
      const res = await fetch("http://localhost:4000/cards",settings)
      const data = await res.json();
      console.log(data)  
    }catch (e) {
      console.log(e)  
    }    
  }
  
  const deleteCard = async () => {
    const settings = {
      method: 'DELETE',
      headers: {
        'Content-Type':'text/plain'
      }
    }
    const id = editCardId
    try{
      const res = await fetch(`http://localhost:4000/cancel/${id}`, settings)
      const data = await res.json()
      
      // console.log(data)
    }catch(e){
      console.log(e)
    }
    setShow("DisplayCards")
  }
    
  return (
    <div className="App">
      <Nav 
        setShow={setShow} 
        getData={getData} 
      />
      <div id="container">
        <NewCard 
          show={show} 
          newCard={newCard} 
          setNewCard={setNewCard} 
          postNewCard={postNewCard}
        /> 
        <DisplayCards 
          cardData={cardData} 
          show={show} 
          setShow={setShow} 
          setEditCardId={setEditCardId}
          getEditCardData={getEditCardData}  
          deleteCard={deleteCard}
        />
        <EditCard 
          show={show} 
          setShow={setShow} 
          editCard={editCard} 
          editCardId={editCardId} 
          getEditCardData={getEditCardData} 
          deleteCard={deleteCard}
          deleteCardId={deleteCardId}
          setDeleteCardId={setDeleteCardId}
        />
        <DisplayStack 
          cards={cardData} 
          show={show}  
        />
      </div>
    </div>
  )
}

export default App;
