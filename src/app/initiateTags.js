function sortAndFilter(array) {
    const tempSet = new Set
    array.sort()
    array.forEach(item => tempSet.add(item.toLowerCase()))

    return [...tempSet]
}

export default function initiateTags(array) {
    // Initialisation des tags
    const ingredients = []
    const ustensils = []
    const appareils = []

    // Bouclage sur tableau de recettes pour remplir les ingrédients, ustensils et accessoires
    array.forEach(recipe => {
        
        appareils.push(recipe.appliance)
        recipe.ingredients.forEach(item => {
            ingredients.push(item.ingredient)
        })
        recipe.ustensils.forEach(ustensil => {
            ustensils.push(ustensil)
        })
        
    })

    const tags = {
        "ingredients" : sortAndFilter(ingredients),
        "appareils" : sortAndFilter(appareils),
        "ustensils" : sortAndFilter(ustensils)
    }
    
    return (tags)
}