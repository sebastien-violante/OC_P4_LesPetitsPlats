import styles from './TagForm.module.css'
import TagZone from '../TagZone/TagZone'

export default function TagForm({items, onTagChange, recipesNumber, tagMenuOpen, setTagMenuOpen, menuRefs, tags}) {

    let recettes = recipesNumber <=1 ? " recette" : " recettes"
   
    return (
        <div className={styles.formContainer}>
            <div className={styles.tagContainer}>
                <TagZone 
                    label={"Ingredients"} 
                    onTagChange={onTagChange} 
                    items={items.ingredients} 
                    name={"ingredients"} 
                    isOpen={tagMenuOpen === "menuIngredients"}
                    toggle={() => setTagMenuOpen(prev => prev==="menuIngredients" ? null : "menuIngredients")}
                    refProp={el => (menuRefs.current[0] = el)}
                    tags={tags.ingredients}
                    />
                <TagZone 
                    label={"Appareils"} 
                    onTagChange={onTagChange} 
                    items={items.appareils} 
                    name={"appareils"} 
                    isOpen={tagMenuOpen === "menuAppareils"}
                    toggle={() => setTagMenuOpen(prev => prev==="menuAppareils" ? null : "menuAppareils")}
                    refProp={el => (menuRefs.current[1] = el)}
                    tags={tags.appareils}
                    />
                <TagZone 
                    label={"Ustensiles"} 
                    onTagChange={onTagChange} 
                    items={items.ustensils} 
                    name={"ustensils"} 
                    isOpen={tagMenuOpen === "menuUstensils"}
                    toggle={() => setTagMenuOpen(prev => prev==="menuUstensils" ? null : "menuUstensils")}
                    refProp={el => (menuRefs.current[2] = el)}
                    tags={tags.ustensils}
                    />
            </div>     
            <p className={styles.recipesQuantity}>{recipesNumber} {recettes}</p>
        </div>
    )
}