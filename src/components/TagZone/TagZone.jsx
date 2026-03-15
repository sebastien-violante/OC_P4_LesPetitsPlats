import styles from './TagZone.module.css'
import Image from 'next/image'
import { useState, useRef, useEffect, useMemo } from 'react'

export default function TagZone({label, tags,  onTagChange, name, isOpen, toggle, refProp, searchTags}) {
    
    // Initialisation des constantes globales
    const [isSearch, setIsSearch] = useState('')            // valeur saisie dans le champ de recherche du tag
    const filteredTags = useMemo(() => {
        return tags.filter(tag => tag.toLowerCase().includes(isSearch.toLowerCase())) 
    }, [tags,isSearch]) 
    const number = filteredTags.length                      // nécessaire à l'affichage du nombre de recettes
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
                <div className={styles.tagZoneHeader} onClick={toggle}>
                    <p className={styles.tagZoneTitle}>{label} - {number}</p>
                    <img alt="ouvrir ou fermer la liste" className={isOpen ? styles.tagZoneArrowUp : styles.tagZoneArrowDown} src="/logos/downArrow.png"/>
                </div>
                {isOpen && (
                    <div className={styles.tagZoneBottom} ref={refProp}>
                        <div className={styles.tagZoneInput}>
                            <input type="text" className={styles.tagZoneInputField} onChange={handleSearch} value={isSearch} ref={inputRef}/>
                            <img alt="loop" className={styles.tagZoneLoop} src="/logos/loop.svg"/>
                            { isSearch != '' && (<Image height={6} width={6} alt="cross" className={styles.tagZoneCross} src="/logos/cross.svg" onClick={deleteSearch}/>)}
                        </div>
                        { searchTags.length > 0 && (
                            searchTags.map(tag => (
                                <div key={tag} className={isSearch ? styles.tagSearchNotEmpty : styles.tagSearch}>
                                    {tag}
                                    <div className={styles.deleteTag} data-name={tag} onClick={removeSelectedTag}>
                                        <Image  data-name={tag} height={17} width={17} src="/logos/deleteTag.png" alt="delete tag"/>
                                    </div>
                                </div>
                            ))
                        )}
                        
                        <ul className={styles.tagZoneProposals}>
                            {filteredTags.map(tag => (
                                <li className={styles.tagZoneProposal} key={tag} onClick={() => selectTag(tag)}>{tag}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>            
        </div>
    )
}