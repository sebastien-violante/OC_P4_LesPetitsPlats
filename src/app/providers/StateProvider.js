'use client'

import { createContext, useContext, useReducer, useMemo } from "react"
import reducer from '../reducer'

const StateContext = createContext()

const initialState = {
    search: "",
    filters: {ingredients:[], ustensils:[], appareils:[]}
}

export function StateProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState)

    // Garde en mémoire l'objet tant que le "state" ne change pas
    const contextValue = useMemo(() => {
        return { state, dispatch }
    }, [state])

    return (
        <StateContext.Provider value={contextValue}>
            {children}
        </StateContext.Provider>
    )
}

export function useFilters() {
    return useContext(StateContext)
}
