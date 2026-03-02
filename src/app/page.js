'use client'
import { useEffect } from 'react'
import { useState } from 'react'
import styles from './page.module.css'
import Banner from '../components/Banner/Banner'
import TagForm from '../components/TagForm/TagForm'
import RecipeCard from '../components/RecipeCard/RecipeCard'
import recipesArray from '../data/recipes.json'

export default function Home() {
    
    const [recipes, setRecipes] = useState(recipesArray)
    let recipesQuantity = recipes.length

    console.log(recipes)
    useEffect(() => {
        const handleSearch = (value) => {
            if(value.length > 3) {
                setRecipes( prevRecipes => prevRecipes.filter((recipe) => {
                    const isInName = recipe.name?.toLowerCase().includes(value)
                    const isInDescription = recipe.description?.toLowerCase().includes(value)
                    const isInIngredients = recipe.ingredients?.some((ingredient) => ingredient.name?.toLowerCase().includes(value))
        
                    return isInName || isInDescription || isInIngredients
                }))
            }
        
        }
        const handleInput = (event) => handleSearch(event.target.value.toLowerCase())
        const searchInput = document.querySelector('input[type="text"]')
        searchInput.addEventListener('keyup', handleInput)
    
    }, [setRecipes])

    
    return (

        <>
            <Banner />
            <TagForm recipesQuantity={recipesQuantity}/>
            <div className={styles.recipeContainer}>
                {recipes.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </> 
    )
}