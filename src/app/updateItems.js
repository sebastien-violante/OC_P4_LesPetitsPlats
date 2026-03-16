/**
 * Trie un tableau de données par ordre alphabétique (français) et supprime les items donés en second paramètre
 * @param {array} array le tableau de valeurs
 * @param {string} item les valeurs à supprimer parmi les items car ce sont déjà des tags
 * @return {array} le tableau trié ne contenant plus item
 */
function sortAndFilter(array, items) {
    // initialisation d'un Set pour assurer l'unicité des données qui sont comparées en lowerCase
    const tempSet = new Set
    array.sort((a,b) => a.localeCompare(b, 'fr', {sensibility: 'base'}))
    array.forEach(data => tempSet.add(data.charAt(0).toUpperCase()+data.slice(1).toLowerCase()))
    // Suppression des tags sélectionnés de la liste des tags encore proposés
    if(items) {
        items.forEach(item => tempSet.delete(item))
    }
    return [...tempSet]
}

/**
 * Trie un tableau de données par ordre alphabétique (français) et supprime l'item donné dans ce tableau
 * @param {Object} state le state actuel
 * @param {Object} recipes la liste des recettes à afficher
 * @return {array} la liste des items (ingrédients, appareils et ustensils)
 */
export default function updateItems(state, recipes) {

    const ingredients = []
    const ustensils = []
    const appareils = []

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