import styles from './page.module.css'
import recipesArray from '@/src/data/recipes.json'
import Image from  'next/image'
import IngredientItem from '@/src/components/IngredientItem/IngredientItem'
import UstensilItem from '@/src/components/UstensilItem/UstensilItem'
import { notFound } from 'next/navigation'
import Link from 'next/link'
export default async function RecipeDetails({params}) {

    const { slug } = await params
    const recipe = recipesArray.find(recipe => recipe.slug === slug)
    if(!recipe) notFound()
    const recipeSteps = recipe.description?.split(/[,.;]/).map(step => step.trim()).filter(step => step !== '')
    
    return (
        <div className={styles.container}>
            <div className={styles.bannerContent}>
            </div>
            <Link href="/">
            <img className={styles.arrowBack} src={'/logos/arrowBack.png'} alt="retour à l'accueil"/>
            </Link>
            <div className={styles.recipeContainer}>
                <div className={styles.recipeImageContainer}>
                    <div className={styles.recipeImageWrapper}>
                        <Image width={606} height={738} className={styles.recipeImage} src={`/images/recipes/${recipe.image}`} alt={recipe.name}/>
                    </div>
                </div>
                <div className={styles.recipeDetails}>
                    <h2 className={styles.recipeTitle}>{recipe.name}</h2>
                    <p className={styles.recipeLabel}>Temps de préparation</p>
                    <div className={styles.recipeTimeTag}>{recipe.time}min</div>
                    <p className={styles.recipeLabel}>Ingrédients</p>
                    <div className={styles.ingredientsContainer}>
                        {recipe.ingredients.map((ingredient, index) => (
                            <IngredientItem className={styles.detailsIngredientItem} key={index} ingredient={ingredient}/>
                        ))}
                    </div>
                    <p className={styles.recipeLabel}>Ustensiles nécessaires</p>
                    {recipe.ustensils.map((ustensil, index) => (
                        <UstensilItem className={styles.detailsIngredientItem} key={index} ustensil={ustensil}/>
                    ))}
                    <p className={styles.recipeLabel}>Apareils nécessaires</p>
                    <UstensilItem className={styles.detailsIngredientItem} ustensil={recipe.appliance}/>
                    <p className={styles.recipeLabel}>Recette</p>
                    <ol className={styles.recipeSteps}>
                        {recipeSteps.map((step, index) => (
                            <li key={index}>{step}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    )
}