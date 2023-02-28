import {useState, useEffect} from 'react'
import ColorPicker from './ColorPicker.js'

const NewCard = ({show, newCard, setNewCard, postNewCard}) => {
    // on keydown enter it flips the card revealing another form and a color picker
    // when card-back and color picker have both been inputted post the form data and reset 
    const [flip, setFlip] = useState(false)
    const [color, setColor] = useState("")
    const [value, setValue] = useState("")


    const submitFront = (event) => {
        if(event.key === "Enter"){
            setNewCard({
                ...newCard,
                front_word: value
              })
              setValue("")
            setFlip(true)
        }
    }

    //HERE :(

    const submitBack = (event) => {
        if(event.key === "Enter") {
            setNewCard({...newCard, back_word : value})
            console.log(newCard)
            postNewCard(newCard)
            setNewCard({})
            setValue("")
            setFlip(false)
        }
    }

    const handleChange = (event) => {
        // 👇 Get input value from "event"
        setValue(event.target.value);
      };

    return(
        <div id="new-card-container" className={show === "NewCard" ? "card-container" : "hidden"}>
            <div className={`card ${flip ? "flip" : ""}`}>
                <div className="front" >
                    <input type="text" onChange={handleChange} onKeyPress={(e) => {submitFront(e)}} autoFocus></input>
                </div>
                <div className="back">
                    <input type="text"  onChange={handleChange}  onKeyPress={(e)=> submitBack(e)} autoFocus></input>
                    <ColorPicker />
                </div>
            </div>
        </div>
    )
}

export default NewCard