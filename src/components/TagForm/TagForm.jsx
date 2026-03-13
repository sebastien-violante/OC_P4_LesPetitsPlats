import styles from './TagForm.module.css'
import TagSelect from '../TagSelect/TagSelect'
import TagZone from '../TagZone/TagZone'

export default function TagForm({allTags, onTagChange, recipesNumber, tagMenuOpen, setTagMenuOpen, menuRefs, ingredientsTags, ustensilsTags, appareilsTags}) {

    let recettes = recipesNumber <=1 ? " recette" : " recettes"
   
    return (
        <div className={styles.formContainer}>
            <div className={styles.tagContainer}>
                <TagZone 
                    label={"Ingredients"} 
                    onTagChange={onTagChange} 
                    tags={allTags.ingredients} 
                    name={"ingredients"} 
                    isOpen={tagMenuOpen === "menuIngredients"}
                    toggle={() => setTagMenuOpen(prev => prev==="menuIngredients" ? null : "menuIngredients")}
                    refProp={el => (menuRefs.current[0] = el)}
                    searchTags={ingredientsTags}
                    />
                <TagZone 
                    label={"Appareils"} 
                    onTagChange={onTagChange} 
                    tags={allTags.appareils} 
                    name={"appareils"} 
                    isOpen={tagMenuOpen === "menuAppareils"}
                    toggle={() => setTagMenuOpen(prev => prev==="menuAppareils" ? null : "menuAppareils")}
                    refProp={el => (menuRefs.current[1] = el)}
                    searchTags={appareilsTags}
                    />
                <TagZone 
                    label={"Ustensiles"} 
                    onTagChange={onTagChange} 
                    tags={allTags.ustensils} 
                    name={"ustensils"} 
                    isOpen={tagMenuOpen === "menuUstensils"}
                    toggle={() => setTagMenuOpen(prev => prev==="menuUstensils" ? null : "menuUstensils")}
                    refProp={el => (menuRefs.current[2] = el)}
                    searchTags={ustensilsTags}
                    />
            </div>     
            <p className={styles.recipesQuantity}>{recipesNumber} {recettes}</p>
        </div>
    )
}