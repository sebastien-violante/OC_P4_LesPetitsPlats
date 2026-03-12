import styles from './TagForm.module.css'
import TagSelect from '../TagSelect/TagSelect'
import TagZone from '../TagZone/TagZone'

export default function TagForm({allTags, onTagChange, recipesNumber, tagMenuOpen, setTagMenuOpen, menuRefs, tagsSearch}) {

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
                    tagsSearch={tagsSearch}
                    />
                <TagZone 
                    label={"Appareils"} 
                    onTagChange={onTagChange} 
                    tags={allTags.appareils} 
                    name={"appareils"} 
                    isOpen={tagMenuOpen === "menuAppareils"}
                    toggle={() => setTagMenuOpen(prev => prev==="menuAppareils" ? null : "menuAppareils")}
                    refProp={el => (menuRefs.current[1] = el)}
                    tagsSearch={tagsSearch}
                    />
                <TagZone 
                    label={"Ustensiles"} 
                    onTagChange={onTagChange} 
                    tags={allTags.ustensils} 
                    name={"ustensils"} 
                    isOpen={tagMenuOpen === "menuUstensils"}
                    toggle={() => setTagMenuOpen(prev => prev==="menuUstensils" ? null : "menuUstensils")}
                    refProp={el => (menuRefs.current[2] = el)}
                    tagsSearch={tagsSearch}
                    />
            </div>     
            <p className={styles.recipesQuantity}>{recipesNumber} {recettes}</p>
        </div>
    )
}