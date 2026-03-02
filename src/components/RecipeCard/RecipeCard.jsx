import styles from './recipeCard.module.css'
import Image from 'next/image'
import IngredientItem from '../IngredientItem/IngredientItem'

export default function RecipeCard({recipe}) {
    console.log(recipe)
    return(
        <div className={styles.recipeCard}>
            <div className={styles.recipeCardHeader}>
                <Image className={styles.recipeImage} src={`/images/recipes/${recipe.image}`} alt="" fill/>
                <div className={styles.recipeTimeTag}>{recipe.time}min</div>
            </div>
            <div className={styles.recipeContent}>
                <h2 className={styles.recipeTitle}>{recipe.name}</h2>
                <div className={styles.recipeDetails}>
                    <p className={styles.recipeLabel}>Recette</p>
                    <p className={styles.recipeDescription}>{recipe.description}</p>
                    <p className={styles.recipeLabel}>Ingrédients</p>
                    <div className={styles.recipeIngredients}>
                        {recipe.ingredients.map(ingredientItem => (
                            <IngredientItem key={ingredientItem} ingredient={ingredientItem} />
                        ))}
                    </div>
                </div>
                
            </div>
        </div>
    )
}