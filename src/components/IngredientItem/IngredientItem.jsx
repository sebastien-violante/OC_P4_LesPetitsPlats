import styles from './IngredientItem.module.css'

export default function IngredientItem({ingredient}) {
    return (
        <div class={styles.ingredientItem}>
            <p className={styles.ingredientName}>{ingredient.ingredient}</p>
            <p className={styles.ingredientQuantity}>{ingredient.quantity} {ingredient.unit}</p>
        </div>
    )
}