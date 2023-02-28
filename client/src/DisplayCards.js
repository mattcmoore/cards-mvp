import FlipCard from './FlipCard.js'
import {useEffect} from 'react'

const DisplayCards = ({cardData,show,setShow,setEditCardId,getEditCardData,deleteCard}) => {
   
   //HERE :(

   // useEffect(()=> {
   //    deleteCard()
   // },[])
   return(
        <div className={show === "DisplayCards" ? "display-cards" : "hidden"}>
            {cardData.map( (card,index) => (
               <FlipCard 
                  key={index}
                  id={card.id}
                  front={card.front_word} 
                  back={card.back_word} 
                  setShow={setShow}
                  setEditCardId={setEditCardId}
                  getEditCardData={getEditCardData}
               />
            ))}
        </div> 
   )
}

export default DisplayCards