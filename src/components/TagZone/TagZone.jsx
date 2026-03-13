import styles from './TagZone.module.css'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'

export default function TagZone({label, tags,  onTagChange, name, isOpen, toggle, refProp, tagsSearch, searchTags}) {
    
    // Initialisation des constantes globales
    const [tagSearch, setTagSearch] = useState([])          // présence ou non d'un tag sélectionné parmi la liste des propositions
    const [isSearch, setIsSearch] = useState('')            // valeur saisie dans le champ de recherche du tag
    const filteredTags = tags.filter(tag => tag.toLowerCase().includes(isSearch.toLowerCase()))  // tags filtrés en fonction de la valeur du champ de saisie
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
    function selectTag (event) {
        setTagSearch([...tagSearch, event.target.innerText])
        onTagChange(name, event.target.innerText)  
    }
  
    function removeSelectedTag(event) {
        onTagChange(name, event.target.dataset.name, "removal")
        setTagSearch(tagSearch.filter(tag => tag.toLowerCase() != event.target.dataset.name.toLowerCase()))
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
                <div className={styles.tagZoneHeader}>
                    <p className={styles.tagZoneTitle}>{label} - {number}</p>
                    <Image height={6} width={13} alt="arrow" className={isOpen ? styles.tagZoneArrowUp : styles.tagZoneArrowDown} src="/logos/downArrow.png" onClick={toggle}/>
                </div>
                {isOpen && (
                    <div className={styles.tagZoneBottom} ref={refProp}>
                        <div className={styles.tagZoneInput}>
                            <input type="text" className={styles.tagZoneInputField} onChange={handleSearch} value={isSearch} ref={inputRef}/>
                            <Image height={14} width={14} alt="loop" className={styles.tagZoneLoop} src="/logos/loop.svg"/>
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
                                <li className={styles.tagZoneProposal} key={tag} onClick={selectTag}>{tag}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>            
        </div>
    )
}