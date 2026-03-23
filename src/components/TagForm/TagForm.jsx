import styles from './TagForm.module.css'
import TagZone from '../TagZone/TagZone'

export default function TagForm({items, recipesNumber, tagMenuOpen, setTagMenuOpen, menuRefs}) {

    let recettes = recipesNumber <=1 ? " recette" : " recettes"
   
    return (
        <div className={styles.formContainer}>
            <div className={styles.tagContainer}>
                <TagZone 
                    label={"Ingredients"} 
                    name={"ingredients"} 
                    items={items.ingredients} 
                    isOpen={tagMenuOpen === "menuIngredients"}
                    toggle={() => setTagMenuOpen(prev => prev==="menuIngredients" ? null : "menuIngredients")}
                    refProp={el => (menuRefs.current[0] = el)}
                />
                <TagZone 
                    label={"Appareils"} 
                    name={"appareils"}
                    items={items.appareils} 
                    isOpen={tagMenuOpen === "menuAppareils"}
                    toggle={() => setTagMenuOpen(prev => prev==="menuAppareils" ? null : "menuAppareils")}
                    refProp={el => (menuRefs.current[1] = el)}
                />
                <TagZone 
                    label={"Ustensiles"} 
                    name={"ustensils"}
                    items={items.ustensils} 
                    isOpen={tagMenuOpen === "menuUstensils"}
                    toggle={() => setTagMenuOpen(prev => prev==="menuUstensils" ? null : "menuUstensils")}
                    refProp={el => (menuRefs.current[2] = el)}
                />
            </div>     
            <p className={styles.recipesQuantity}>{recipesNumber} {recettes}</p>
        </div>
    )
}