export default function reducer(state, action) {
    switch(action.type) {
        case "search" :
            return {...state, search: action.value}
        case "tag" :
            return {...state,
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