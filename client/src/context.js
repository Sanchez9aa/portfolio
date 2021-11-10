import { createContext, useReducer } from "react";

export const DarkContext = createContext()

const INITIAL_STATE = { darkmode: false}

const darkReducer = (state, {type, payload}) => {
    switch(type){
        case "TOGGLE":
            return {darkmode: !state.darkmode}
        default:
            return state
    }
}

export const DarkProvider = (props) =>{
    const [state, dispatch ] = useReducer(darkReducer, INITIAL_STATE)
    return (
        <DarkContext.Provider value={{state, dispatch}}>
            {props.children}
        </DarkContext.Provider>
    )
}