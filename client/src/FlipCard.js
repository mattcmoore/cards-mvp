import {useState} from 'react'
const FlipCard = ({id,front,back,setShow,setEditCardId,getEditCardData}) => {
    const [flip, setFlip] = useState(false)

    const handleClick = () =>{
      setEditCardId(id)
      setShow("EditCard")
    }

    return(
        <div className="flip-card-container">
            <div 
                id={id}
                className={ `card ${flip ? "flip" : ""}` } 
                onMouseEnter={ ()=>setFlip(true) } 
                onMouseLeave={ ()=>setFlip(false) } 
                onClick={handleClick}
            >
                <div className="front"><p>{front}</p></div>
                <div className="back"><p>{back}</p></div>
            </div>
        </div>
    )
}

export default FlipCard