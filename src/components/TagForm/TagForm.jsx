import styles from './TagForm.module.css'
import TagSelect from '../TagSelect/TagSelect'

export default function TagForm({recipesQuantity}) {

    return (
        <div className={styles.tagContainer}>
            <form className={styles.tagForm}>
                <TagSelect label={"Ingrédients"} />
                <TagSelect label={"Appareils"} />
                <TagSelect label={"Ustensiles"} />
            </form>
            <p className={styles.recipesQuantity}>{recipesQuantity} recettes</p>
        </div>
        
    )
}