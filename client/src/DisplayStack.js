import {useState} from 'react'
import FlipCard from './FlipCard.js'

const DisplayStack = ({cardData,show}) => {
    return(
        <div id="stack-container" className={show === "DisplayStack" ? "card-container" : "hidden"} style={{backgroundColor:"green"}}>

        </div>
    )
} 

export default DisplayStack