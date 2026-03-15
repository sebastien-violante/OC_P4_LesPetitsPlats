'use client'
import { useReducer, useEffect, useState, useRef} from 'react'
import styles from './page.module.css'
import Banner from '../components/Banner/BannerDown'
import BannerUp from '../components/Banner/BannerUp'
import Footer from '../components/Footer/Footer'
import TagForm from '../components/TagForm/TagForm'
import RecipeCard from '../components/RecipeCard/RecipeCard'
import allRecipes from '../data/recipes.json'
import updateTags from './updateTags'
import filterRecipes from './filterRecipes'
import reducer from './reducer'
import Image from 'next/image'

export default function Home() {
    let tagsSearch = []

    const initialState = {
        search: "",
        filters: {ingredients:[], ustensils:[], appareils:[]}
    }
   
    const [state, dispatch] = useReducer(reducer, initialState)
    const [mounted, setMounted] = useState(false)
    const [tagMenuOpen, setTagMenuOpen] = useState(null)
    const menuRefs = useRef([])

    useEffect(() => {
        setMounted(true)
        const saved = sessionStorage.getItem("state")
        if (saved) {
            dispatch({
                type: "loaded",
                payload: JSON.parse(saved)
            })
        }
    }, [])

    useEffect(() => {
        if (!mounted) return 
        sessionStorage.setItem("state", JSON.stringify(state))
    }, [state, mounted])

    useEffect(() => {
        function handleClick(event) {
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
    
    if (!mounted) return null
        
    state.filters.ingredients.forEach(ingredient => tagsSearch.push({value: ingredient, type:"ingredients"}))
    state.filters.ustensils.forEach(ustensil => tagsSearch.push({value: ustensil, type:"ustensils"}))
    state.filters.appareils.forEach(appareil => tagsSearch.push({value: appareil, type:"appareils"}))
    const ingredientsTags = state.filters.ingredients
    const ustensilsTags = state.filters.ustensils
    const appareilsTags = state.filters.appareils
    const displayedRecipes = filterRecipes(state, allRecipes)
    const displayedTags = updateTags(state, displayedRecipes)
    const recipesNumber = displayedRecipes.length
    /**
     * Supprime le tag sélectionné pour la recherche et déclenche la mise à jour du state pour redéfinir les tags à afficher
    */
    function deleteTag(event) {
        const name = event.target.dataset.type
        const value = event.target.dataset.value
        dispatch({type:"tag", name, value, mode:"removal"})
    }

    

    return (
        <div className={styles.mainContainer}>
            <div className={styles.bannerContent}>
                <BannerUp/>
                <Banner onSearchChange={value => dispatch({type:"search", value})} search={state.search}/>
            </div>
            <TagForm 
                allTags={displayedTags} 
                recipesNumber={recipesNumber} 
                recipesSearch={state.search} 
                onTagChange={(name, value, mode) => dispatch({type:"tag", name, value, mode})}
                tagMenuOpen={tagMenuOpen}
                setTagMenuOpen={setTagMenuOpen}
                menuRefs={menuRefs}
                ingredientsTags={ingredientsTags}
                ustensilsTags={ustensilsTags}
                appareilsTags={appareilsTags}
            />
            <div className={styles.tagCollector}>
                { tagsSearch != null && (
                tagsSearch.map(tag => (
                    <div key={tag.value} className={styles.deportedTag}>
                        <p>{tag.value}</p>
                        <Image height={10} data-type={tag.type} data-value={tag.value} className={styles.bigCross} width={10} alt="cross" src="/logos/bigCross.png" onClick={deleteTag}/>
                    </div>
                ))
            )}
            </div>
            <div className={styles.recipeContainer}>
                {displayedRecipes.length === 0 && (<p className={styles.noRecipeMessage}>Aucune recette ne contient <span className={styles.spanNoRecipeMessage}>{state.search}</span>. Vous pouvez chercher "tarte aux pommes", "poisson", etc</p>)}
                {displayedRecipes.length >= 0 && (
                    displayedRecipes.map(recipe => (
                    <RecipeCard key={recipe.id} {...recipe} />
                )))}
                
                
            </div>
            <Footer />
        </div>
            
    )
}