import { useContext } from 'react'
import { DarkContext } from '../../context'
import './toggle.css'

const Toggle = () =>{

    const dark = useContext(DarkContext)
    
    const handleClick = () =>{
        dark.dispatch({type:"TOGGLE"})
    }

    return (
        <div className="toggle">
            <img src="Sun" alt="" className="toggle-icon"/>
            <img src="Moon" alt="" className="toggle-icon"/>
            <div className="toggle-button" onClick={handleClick} style={{left: dark.state.darkMode ? 0 : 25}}></div>
        </div>
    )
}