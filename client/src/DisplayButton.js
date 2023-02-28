const DisplayButton = ({setShow, getData}) => {
    return <div id="display-btn" onClick={ () => {setShow("DisplayCards"); getData()} }></div>
}

export default DisplayButton