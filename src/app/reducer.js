/**
 * Reducer qui modifie le state en vigueur en fonction de l'action donnée en second paramètre
 * @param {Object} state le state actuel
 * @param {Object} action la modification intervenue
 * @return {Object} un nouveau state qui prend en compte l'action fournie
 */

export default function reducer(state, action) {
    
    switch(action.type) {
        // si le type est "loaded", c'est qu'un state a été trouvé en sessionStorage. C'est ce state qui est renvoyé
        case "loaded" :
            return action.payload
        // si le type est search, c'est qu'au moins 3 caractères ont été saisis dans le champ de recherche
        case "search":
            return { ...state, search: action.value }
        // si le type est tag, c'est qu'un filtre a été appliqué dans l'une des tagZones
        case "tag":
            const name = action.name || "appareils" // nécessaire car les appareils sont sous forme de tableau sans décomposition {name:..., }
            // si le mode est removal, le filtre sélectionné est supprimé
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
            // sinon, le filtre est appliqué pour modifier le state
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
        // par défaut, le state actuele st renvoyé
        default:
            return state
    }
}
    
