function sortAndFilter(array, item) {
    const tempSet = new Set
    array.sort()
    array.forEach(item => tempSet.add(item.toLowerCase()))
    // Suppression des tags sélectionnés de la liste des tags encore proposés
    if(item) {
        tempSet.delete(item)
    }
    
    return [...tempSet]
}

export default function updateTags(state, recipes) {

    // Initialisation des tags
    const ingredients = []
    const ustensils = []
    const appareils = []

    // Bouclage sur tableau de recettes pour remplir les ingrédients, ustensils et accessoires
    recipes.forEach(recipe => {
        appareils.push(recipe.appliance)
        recipe.ingredients.forEach(item => {
            ingredients.push(item.ingredient)
        })
        recipe.ustensils.forEach(ustensil => {
            ustensils.push(ustensil)
        })
    })

    const tags = {
        "ingredients" : sortAndFilter(ingredients, state.filters.ingredients),
        "appareils" : sortAndFilter(appareils, state.filters.appareils),
        "ustensils" : sortAndFilter(ustensils, state.filters.ustensils)
    }
    
    return (tags)
}