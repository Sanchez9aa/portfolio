import { useContext } from 'react'
import { DarkContext } from '../../context'
import './toggle.css'

import Sun from '../../img/sun.png'
import Moon from '../../img/moon.png'

const Toggle = () =>{

    const dark = useContext(DarkContext)
    
    const handleClick = () =>{
        dark.dispatch({type:"TOGGLE"})
    }

    return (
        <div className="toggle">
            <img src={Sun} alt="" className="toggle-icon"/>
            <img src={Moon} alt="" className="toggle-icon"/>
            <div className="toggle-button" onClick={handleClick} style={{left: dark.state.darkmode ? 0 : 25}}></div>
        </div>
    )
}

export default Toggle