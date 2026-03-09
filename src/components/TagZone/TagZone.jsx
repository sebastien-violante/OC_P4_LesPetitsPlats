import styles from './TagZone.module.css'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function TagZone({label, tags,  onTagChange, name}) {
    
    // Initialisation des constantes globales
    const [isOpen, setIsOpen] = useState(false)             // état fermé/ouvert de la zone de tag
    const [tagSearch, setTagSearch] = useState(null)        // présence ou non d'un tag sélectionné parmi la liste des propositions
    const [isSearch, setIsSearch] = useState('')            // valeur saisie dans le champ de recherche du tag
    const filteredTags = tags.filter(tag => tag.toLowerCase().includes(isSearch.toLowerCase()))  // tags filtrés en fonction de la valeur du champ de saisie
    const number = filteredTags.length                      // nécessaire à l'affichage du nombre de recettes
    
    /**
     * Affecte ou enlève l'état open à la zone de tag
    */
    function toggleOpen () {
        setIsOpen(!isOpen)
    }
       
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
        setTagSearch(event.target.innerText)
        onTagChange(event.target.innerText, name)  
    }
  
    /**
     * Supprime le tag sélectionné pour la recherche et déclanche la mise à jour du state pour redéfinir les tags à afficher
    */
    function deleteTag() {
        setTagSearch(null)
        onTagChange(null, name)
        setIsSearch('')
    }

    /**
     * Supprime la recherche effectuée dans le champ de la tagZone
    */
    function deleteSearch () {
        setIsSearch('')
    }

    return (
        <div className={styles.tagContainer}>
            <div className={styles.tagZone}>
                <div className={styles.tagZoneHeader}>
                    <p className={styles.tagZoneTitle}>{label} - {number}</p>
                    <Image height={6} width={13} alt="arrow" className={isOpen ? styles.tagZoneArrowUp : styles.tagZoneArrowDown} src="/logos/downArrow.png" onClick={toggleOpen}/>
                </div>
                {isOpen && (
                    <div className={styles.tagZoneBottom}>
                        <div className={styles.tagZoneInput}>
                            <input type="text" className={styles.tagZoneInputField} onChange={handleSearch} value={isSearch}/>
                            <Image height={14} width={14} alt="loop" className={styles.tagZoneLoop} src="/logos/loop.svg"/>
                            { isSearch != '' && (<Image height={6} width={6} alt="cross" className={styles.tagZoneCross} src="/logos/cross.svg" onClick={deleteSearch}/>)}
                        </div>
                        { tagSearch != null && (
                        <div className={styles.tagSearch}>
                            {tagSearch}
                            <Image height={17} width={17} alt="supprimer"  className={styles.proposalsCross} src="/logos/bigCross.svg" onClick={deleteTag}/>
                        </div>
                        )}
                        <ul className={styles.tagZoneProposals}>
                            {filteredTags.map(tag => (
                                <li className={styles.tagZoneProposal} key={tag} onClick={selectTag}>{tag}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            { tagSearch != null && !isOpen && (
                <div className={styles.deportedTag}>
                    <p>{tagSearch}</p>
                    <Image height={10} className={styles.bigCross} width={10} alt="cross" src="/logos/bigCross.png" onClick={deleteTag}/>
                </div>
            )}
            
        </div>
    )
}