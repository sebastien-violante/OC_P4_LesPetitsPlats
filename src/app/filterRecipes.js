// recoit le nouveau state de tags et les recettes affichées et déclenceh l'affichage des recettes filtrées
export default function filterRecipes(state, allRecipes) {
    
    
    let filteredRecipes = allRecipes
    if(state.search && state.search.length > 3) {
        const value = state.search.toLowerCase()
        filteredRecipes = filteredRecipes.filter((recipe) => {
            const isInName = recipe.name?.toLowerCase().includes(value)
            const isInDescription = recipe.description?.toLowerCase().includes(value)
            const isInIngredients = recipe.ingredients?.some((item) => item.ingredient?.toLowerCase().includes(value))
            return isInName || isInDescription || isInIngredients 
        })
    } 

    if(state.filters.ingredients) {
        filteredRecipes = filteredRecipes.filter((recipe) => {
            const isInIngredients = recipe.ingredients?.some((item) => item.ingredient.toLowerCase().includes(state.filters.ingredients.toLowerCase()))
            return isInIngredients
        })
    }

    if(state.filters.appareils) {
        filteredRecipes = filteredRecipes.filter((recipe) => {
            const isInAppareils = recipe.appliance.toLowerCase() === state.filters.appareils.toLowerCase()
            return isInAppareils
        })
        
    }

    if(state.filters.ustensils) {
        filteredRecipes = filteredRecipes.filter((recipe) => {
            const isInUstensils = recipe.ustensils?.some((ustensil) => ustensil === state.filters.ustensils.toLowerCase())
            return isInUstensils
        })
        
    }

    return (filteredRecipes)  

}
