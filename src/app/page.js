import styles from './page.module.css'
import Banner from '../components/Banner/Banner'
import TagForm from '../components/TagForm/TagForm'
import RecipeCard from '../components/RecipeCard/RecipeCard'
import recipesArray from '../data/recipes.json'

export default async function Home() {
    
    const recipesQuantity = recipesArray.length
    return (

        <>
            <Banner />
            <TagForm recipesQuantity={recipesQuantity}/>
            <div className={styles.recipeContainer}>
                {recipesArray.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </> 
    )
}