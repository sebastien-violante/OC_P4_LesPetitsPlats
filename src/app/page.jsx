'use client'
import { useEffect, useState, useRef } from 'react'
import { useFilters } from './providers/StateProvider'
import styles from './page.module.css'
import BannerDown from '../components/Banner/BannerDown'
import TagForm from '../components/TagForm/TagForm'
import RecipeCard from '../components/RecipeCard/RecipeCard'
import allRecipes from '../data/recipes.json'
import updateItems from './updateItems'
import filterRecipes from './filterRecipes'
import Image from 'next/image'

export default function Home() {
    
    const menuRefs = useRef([]) 
    
    const { state, dispatch } = useFilters()

    // Remplissage d'un tableau de tags destiné à l'affichage des filtres appliqués
    let tagsSearch = []  
    state.filters.ingredients.forEach(ingredient => tagsSearch.push({value: ingredient, type:"ingredients"}))
    state.filters.ustensils.forEach(ustensil => tagsSearch.push({value: ustensil, type:"ustensils"}))
    state.filters.appareils.forEach(appareil => tagsSearch.push({value: appareil, type:"appareils"}))
    
    // Détermination des recettes à afficher et des items proposés en fonction du state
    const displayedRecipes = filterRecipes(state, allRecipes)
    const recipesNumber = displayedRecipes.length
    const items = updateItems(state, displayedRecipes)
    
    // Gestion de l'état ouvert/fermé de la zone de liste des items (ingrédients, appareils, ustensiles)
    const [tagMenuOpen, setTagMenuOpen] = useState(null) 
    useEffect(() => {
        function handleClick(event) {
            console.log(menuRefs)
            const clickedInside = menuRefs.current.some(ref => ref?.contains(event.target))
            if (!clickedInside) {
                setTagMenuOpen(null)
            }
        }
        document.addEventListener("mousedown", handleClick)
        return () => {
            document.removeEventListener("mousedown", handleClick)
        }
    }, [])
    
        
   /**
    * Supprime un filtre et déclenche un nouveau calcul de state
    * @param {Event} event l'élément déclencheur
    */
    function removeTag(tag) {
        dispatch({
            type: "removeTag",
            payload: {
                category: tag.type,
                tag : tag.value
            }
        })
    }
    
    return (
        <div className={styles.mainContainer}>
            <div className={styles.bannerContent}>
                <BannerDown/>
            </div>
            <TagForm 
                items={items} 
                recipesNumber={recipesNumber} 
                recipesSearch={state.search} 
                tagMenuOpen={tagMenuOpen}
                setTagMenuOpen={setTagMenuOpen}
                menuRefs={menuRefs}
                preload={true}
            />
            <div className={styles.tagCollector}>
                { tagsSearch != null && (
                tagsSearch.map(tag => (
                    <div key={tag.value} className={styles.deportedTag}>
                        <p>{tag.value}</p>
                        <Image 
                            height={10} 
                            width={10} 
                            className={styles.bigCross}  
                            alt="cross" 
                            src="/logos/bigCross.png" 
                            onClick={() => removeTag(tag)}
                        />
                    </div>
                ))
            )}
            </div>
            <div className={styles.recipeContainer}>
                {(displayedRecipes.length === 0 && state.search.length > 2) && (<p className={styles.noRecipeMessage}>Aucune recette ne contient <span className={styles.spanNoRecipeMessage}>{state.search}</span>. Vous pouvez chercher "tarte aux pommes", "poisson", etc</p>)}
                {displayedRecipes.length >= 0 && (
                    displayedRecipes.map(recipe => (
                    <RecipeCard key={recipe.id} {...recipe} />
                )))}
                
                
            </div>
        </div>     
    )
}