import LogoButton from './LogoButton.js'
import StackButton from './StackButton.js'
import DisplayButton from './DisplayButton.js'


const Nav = ({setShow, getData}) => {
    return(
        <div id="nav">
            <LogoButton setShow={setShow} />
            <div id="menu-bar">
                <StackButton setShow={setShow} getData={getData} />
                <DisplayButton setShow={setShow} getData={getData} />
            </div>
        </div>
    )
}

export default Nav