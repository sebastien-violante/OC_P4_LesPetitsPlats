export default function reducer(state, action) {
    switch(action.type) {

        case "search":
            return { ...state, search: action.value }

        case "tag":
            // Suppression d'un tag
            if (action.mode === "removal") {
                if(!action.name) action.name="appareils" // nécessaire car les appareils sont sous forme de tableau sans décomposition {name:..., }
                return {
                    ...state,
                    filters: {
                        ...state.filters,
                        [action.name]: state.filters[action.name].filter(
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
                    [action.name]: [
                        ...state.filters[action.name],
                        action.value
                    ]
                }
            }
        default:
            return state
    }
}