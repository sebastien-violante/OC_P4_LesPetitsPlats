/**
* Recoit le nouveau state de filtres et les recettes affichées et déclenche l'affichage des recettes filtrées
* @param {Object} state - le state actuel
* @param {array} allRecipes - le tableau contenant toutes les recettes du site
* @return {array} filteredRecipes le tableau de recettes filtré
*/
export default function filterRecipes(state, allRecipes) {
        
    let filteredRecipes = allRecipes
    if(state.search && state.search.length > 2) {
        const value = state.search.toLowerCase()
        filteredRecipes = filteredRecipes.filter((recipe) => {
            const isInName = recipe.name?.toLowerCase().includes(value)
            const isInDescription = recipe.description?.toLowerCase().includes(value)
            const isInIngredients = recipe.ingredients?.some((item) => item.ingredient?.toLowerCase() === (value))
            return isInName || isInDescription || isInIngredients 
        })
    } 

    if(state.filters.ingredients) {
        filteredRecipes = filteredRecipes.filter((recipe) => {
            const isInIngredients = 
                state.filters.ingredients.length === 0 ||
                state.filters.ingredients.every((filterIngredient) => 
                    recipe.ingredients?.some((item) => 
                        item.ingredient.toLowerCase().includes(filterIngredient.toLowerCase())
            ))
        return isInIngredients
        })
    }

    if(state.filters.appareils) {
        filteredRecipes = filteredRecipes.filter((recipe) => {
            const isInAppareils = 
            state.filters.appareils.length === 0 ||
            state.filters.appareils.every((filterAppareil) =>
                recipe.appliance.toLowerCase() === filterAppareil.toLowerCase())     
        return isInAppareils
        
        })
    }

    if(state.filters.ustensils) {
        filteredRecipes = filteredRecipes.filter((recipe) => {
            const isInUstensils = 
                state.filters.ustensils.length === 0 ||
                state.filters.ustensils.every((filterUstensil) =>
                    recipe.ustensils?.some((item) => 
                       item.toLowerCase().includes(filterUstensil.toLowerCase()) 
                ))
        return isInUstensils
        
        })
    }

    return (filteredRecipes)  

}
