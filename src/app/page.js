'use client'
import { useReducer } from 'react'
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
import initiateTags from './initiateTags'

export default function Home() {
    
    const [state, dispatch] = useReducer(reducer, {
        search: "",
        filters: {ingredients:"", ustensils:"", appareils:""}
    })
    
    const displayedRecipes = filterRecipes(state, allRecipes)
    const displayedTags = updateTags(state, displayedRecipes)
    const recipesNumber = displayedRecipes.length
    
    return (
        <>
            <div className={styles.bannerContent}>
                <BannerUp/>
                <Banner onSearchChange={value => dispatch({type:"search", value})}/>
            </div>
            
            <TagForm allTags={displayedTags} recipesNumber={recipesNumber} recipesSearch={state.search} onTagChange={(value, name) => dispatch({type:"tag", name, value})}/>
            <div className={styles.recipeContainer}>
                {displayedRecipes.map(recipe => (
                    <RecipeCard key={recipe.id} {...recipe} />
                ))}
            </div>
            <Footer />
        </>
            
    )
}