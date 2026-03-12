/**
 * Trie un tableau de données par ordre alphabétique (français) et supprime l'item donné dans ce tableau
 * Permet de mettre à jour les tags après changement d'un des paramètres de state et de ne plus faire apparaître dans la 
 * liste des propositions le tag qui a donné lieu à cette mise à jour
 * @param {array} array le tableau de valeurs
 * @param {string} item la valeur à supprimer dans le tableau
 * @return {array} le tableau trié ne contenant plus item
 */
function sortAndFilter(array, item) {
    // initialisation d'un Set pour assurer l'unicité des données qui sont comparées en lowerCase
    const tempSet = new Set
    array.sort((a,b) => a.localeCompare(b, 'fr', {sensibility: 'base'}))
    array.forEach(item => tempSet.add(item.charAt(0).toUpperCase()+item.slice(1).toLowerCase()))
    // Suppression des tags sélectionnés de la liste des tags encore proposés
    if(item) {
        item.forEach(data => tempSet.delete(data))
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