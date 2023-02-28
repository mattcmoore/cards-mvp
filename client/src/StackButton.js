const StackButton = ({setShow}) => {
    return <div id="stack-btn" onClick={ () => setShow("DisplayStack") }></div>
    // return <div id="stack-btn" onClick={setShow("DisplayStack")}></div>
}

export default StackButton