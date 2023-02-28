import {useState,useEffect} from 'react'
import ColorPicker from './ColorPicker.js'

const EditCard = ({show, setShow, editCard, editCardId,getEditCardData,deleteCard,deleteCardId,setDeleteCardId}) => {
    const [flip, setFlip] = useState(false)
    const [color, setColor] = useState("")
    const [input, setInput] = useState("")



    const handleClick = () => {
        deleteCard()  
    }
    console.log(editCard[0])
    // const id = editCard[0].id
    const why = editCardId;
    return(
        <div className={show === "EditCard" ? "card-container" : "hidden"}>
       
        <div className={`card ${flip ? "flip" : ""}`}>
            <p className="delete" onClick={handleClick}>x</p> 
            <div className="front" >
                <input type="text" autoFocus></input>
            </div>
            <div className="back">
                <input type="text" autoFocus></input>
                <ColorPicker />
            </div>
        </div>
    </div>
    )
}

export default EditCard