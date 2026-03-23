/**
 * Reducer qui renvoie un nouveau state en fonction de l'action donnée en second paramètre
 * @param {Object} state le state actuel
 * @param {Object} action la modification intervenue
 * @return {Object} un nouveau state qui prend en compte l'action fournie
 */

export default function reducer(state, action) {
    switch(action.type) {

        case "search":
            return {
                ...state,
                search: action.payload
            }
        case "addTag": {
            const { category, tag } = action.payload
            // éviter les doublons
            if (state.filters[category].includes(tag)) {
                return state
            }
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [category]: [
                        ...state.filters[category],
                        tag
                    ]
                }
            }
        }
        case "removeTag": {
            const { category, tag } = action.payload
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [category]: state.filters[category].filter(item => item !== tag)
                }
            }
        }
        default:
            return state
    }
}
    
