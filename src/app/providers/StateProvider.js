'use client'

import { createContext, useContext, useReducer } from "react"
import reducer from '../reducer'

const StateContext = createContext()

const initialState = {
    search: "",
    filters: {ingredients:[], ustensils:[], appareils:[]}
}

export function StateProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <StateContext.Provider value={{state, dispatch}}>
            {children}
        </StateContext.Provider>
    )
}

export function useFilters() {
    return useContext(StateContext)
}
