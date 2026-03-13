export default function reducer(state, action) {
    
    switch(action.type) {

                case "loaded" :
                    return action.payload

                case "search":
                    return { ...state, search: action.value }

                case "tag":
                   
                    const name = action.name || "appareils" // nécessaire car les appareils sont sous forme de tableau sans décomposition {name:..., }
                    
                    // Suppression d'un tag
                    if (action.mode === "removal") {
                        return {
                            ...state,
                            filters: {
                                ...state.filters,
                                [name]: state.filters[name].filter(
                                    tag => tag !== action.value
                                )
                            }
                        }
                    }
                    // Ajout d'un tag
                    return {
                        ...state,
                        filters: {
                            ...state.filters,
                            [name]: [
                                ...state.filters[name],
                                action.value
                            ]
                        }
                    }
                    default:
                        return state
            }
    }
    
