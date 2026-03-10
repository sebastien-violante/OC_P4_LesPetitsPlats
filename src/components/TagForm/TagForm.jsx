import styles from './TagForm.module.css'
import TagSelect from '../TagSelect/TagSelect'
import TagZone from '../TagZone/TagZone'

export default function TagForm({allTags, onTagChange, recipesNumber, recipesSearch}) {
/*    return (
        <div className={styles.tagContainer}>
            <form className={styles.tagForm}>
                <TagSelect label={"Ingrédients"} tags={tagIngredients} />
                <TagSelect label={"Appareils"} tags={tagAppareils} />
                <TagSelect label={"Ustensiles"} tags={tagUstensils} />
                <TagSelect label={"Ingrédients"} onTagChange={onTagChange} name={"ingredients"} tags={allTags.ingredients}/> 
               <TagSelect label={"Appareils"} onTagChange={onTagChange} name={"appareils"} tags={allTags.appareils}/> 
               <TagSelect label={"Ustensils"} onTagChange={onTagChange} name={"ustensils"} tags={allTags.ustensils}/> 
            </form>
            <p className={styles.recipesQuantity}>? recettes</p>
        </div>
        
    )*/
    let recipesResult = ''
    switch(recipesNumber) {
        case 0 : 
            recipesResult = `Aucune recette ne contient ${recipesSearch}. Vous pouvez chercher "tarte aux pommes", "poisson",etc`
            break
        case 1 : 
            recipesResult = `${recipesNumber} recette`
            break
        default :
            recipesResult = `${recipesNumber} recettes`
    }

    return (
            <div className={styles.formContainer}>
                <div className={styles.tagContainer}>
                    <TagZone label={"Ingredients"} onTagChange={onTagChange} tags={allTags.ingredients} name={"ingredients"}/>
                    <TagZone label={"Appareils"} onTagChange={onTagChange} tags={allTags.appareils} name={"appareils"}/>
                    <TagZone label={"Ustensils"} onTagChange={onTagChange} tags={allTags.ustensils} name={"ustensils"}/>
                </div>     
                <p className={styles.recipesQuantity}>{recipesResult}</p>
            </div>
    )
}