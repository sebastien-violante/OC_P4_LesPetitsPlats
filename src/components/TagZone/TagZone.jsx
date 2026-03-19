'use client' 
import styles from './TagZone.module.css'
import { useState, useRef, useEffect, useMemo } from 'react'

export default function TagZone({label, items,  onTagChange, name, isOpen, toggle, refProp, tags}) {
    
    // Initialisation des constantes globales
    const [isSearch, setIsSearch] = useState('')   
    
    // valeur saisie dans le champ de recherche du tag
    const filteredItems = useMemo(() => {
        return items.filter(item => item.toLowerCase().includes(isSearch.toLowerCase())) 
    }, [items,isSearch]) 
    const inputRef = useRef(null)
  
    /**
     * Affiche la valeur de recherche saisie
     * @param {Event} event - évènement déclenché par le champ input
    */
    function handleSearch(event) {
        setIsSearch(event.target.value)
    }

    /**
     * Permet l'affichage du tag sélectionné et déclenche la mise à jour du state pour redéfinir les tags à afficher
     * @param {Event} event - évènement déclenché par le champ input
    */
    function selectTag(tag) {
        onTagChange(name, tag)
        deleteSearch()  
    }
  
    function removeSelectedTag(event) {
        onTagChange(name, event.target.dataset.name, "removal")
    }

    /**
     * Supprime la recherche effectuée dans le champ de la tagZone
    */
    function deleteSearch () {
        setIsSearch('')
    }
    
    useEffect(() => {
        if(isOpen) inputRef.current.focus()
    }, [isOpen])

    return (
        <div className={styles.tagContainer}>
            <div className={styles.tagZone}>
                <div className={styles.tagZoneHeader} >
                    <p className={styles.tagZoneTitle}>{label}</p>
                    <img alt="ouvrir ou fermer la liste" className={isOpen ? styles.tagZoneArrowUp : styles.tagZoneArrowDown} src="/logos/downArrow.png" onClick={toggle}/>
                </div>
                <div className={`${styles.tagZoneBottom} ${isOpen ? styles.tagZoneBottomExpanded : ""}`}   ref={refProp}>
                    <div className={styles.tagZoneInput}>
                        <input type="search" className={styles.tagZoneInputField} onChange={handleSearch} value={isSearch} ref={inputRef}/>
                        <img alt="loop" className={styles.tagZoneLoop} src="/logos/loop.svg"/>
                        { isSearch != '' && (<img alt="effacer la recherche" className={styles.tagZoneCross} src="/logos/cross.svg" onClick={deleteSearch}/>)}
                    </div>
                    { tags.length > 0 && (
                        tags.map(tag => (
                            <div key={tag} className={styles.tagSearch}>
                                {tag}
                                <div className={styles.deleteTag} data-name={tag} onClick={removeSelectedTag}>
                                    <img  data-name={tag} className={styles.deleteTagCross} src="/logos/deleteTag.png" alt="delete tag"/>
                                </div>
                            </div>
                        ))
                    )}
                    <ul className={styles.tagZoneProposals}>
                        {filteredItems.map(item => (
                            <li className={styles.tagZoneProposal} key={item} onClick={() => selectTag(item)}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>            
        </div>
    )
}