import styles from './recipeCard.module.css'
import Image from 'next/image'
import IngredientItem from '../IngredientItem/IngredientItem'
import Link from 'next/link'

export default function RecipeCard({slug, image, name, time, description, ingredients}) {
    
    return(
        <Link href={`/recipe/${slug}`} className={styles.recipeCard}>
            <div className={styles.recipeCardHeader}>
                <Image height={253} width={380} className={styles.recipeImage} src={`/images/recipes/${image}`} alt={name} priority/>
                <div className={styles.recipeTimeTag}>{time}min</div>
            </div>
            <div className={styles.recipeContent}>
                <h2 className={styles.recipeTitle}>{name}</h2>
                <div className={styles.recipeDetails}>
                    <p className={styles.recipeLabel}>Recette</p>
                    <p className={styles.recipeDescription}>{description}</p>
                    <p className={styles.recipeLabel}>Ingrédients</p>
                    <div className={styles.recipeIngredients}>
                        {ingredients.map((ingredientItem, index) => (
                            <IngredientItem key={index} ingredient={ingredientItem} />
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    )
}