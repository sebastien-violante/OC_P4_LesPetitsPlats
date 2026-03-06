import styles from './TagZone.module.css'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function TagZone({label, tags,  onTagChange, name}) {

    
    // constante définissant l'état ouvert ou fermé de la zone de sélection des tags
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = (event) => {
        setIsOpen(!isOpen)
    }
    
    // constante initialisant les tags et permettant leur modification 
    const [filteredTags, setFilteredTags] = useState(tags)
    
    useEffect(() => {
        setFilteredTags(tags)
    }, [tags])

    // constante initialisant la recherche et permettant sa modification
    const [tagSearch, setTagSearch] = useState(null)

    const handleChange = (event) => {
        setFilteredTags(tags.filter(tag => tag.toLowerCase().includes(event.target.value)))
        setIsSearch(event.target.value)
    }

    const selectTag = (event) => {
        setTagSearch(event.target.innerText)
        onTagChange(event.target.innerText, name)
        
    }

    const deleteChosenTag = (event) => {
        onTagChange(null, name)
        setTagSearch(null)
        setIsSearch('')
    }

    const [isSearch, setIsSearch] = useState('')
    const deleteSearch = (event) => {
        setFilteredTags(tags.filter(tag => tag.toLowerCase().includes('')))
        setIsSearch('')
    }

    const number = filteredTags.length

    return (
        <div className={styles.tagContainer}>
            <div className={styles.tagZone}>
                <div className={styles.tagZoneHeader}>
                    <p className={styles.tagZoneTitle}>{label} - {number}</p>
                    <Image height={6} width={13} alt="arrow" className={isOpen ? styles.tagZoneArrowUp : styles.tagZoneArrowDown} src="/logos/downArrow.png" onClick={toggleOpen}/>
                </div>
                { isOpen && (
                    <div className={styles.tagZoneBottom}>
                        <div className={styles.tagZoneInput}>
                            <input type="text" className={styles.tagZoneInputField} onChange={handleChange} value={isSearch}/>
                            <Image height={14} width={14} alt="loop" className={styles.tagZoneLoop} src="/logos/loop.svg"/>
                            { isSearch != '' && (<Image height={6} width={6} alt="cross" className={styles.tagZoneCross} src="/logos/cross.svg" onClick={deleteSearch}/>)}
                        </div>
                        { tagSearch != null && (
                        <div className={styles.tagSearch}>
                            {tagSearch}
                            <Image height={17} width={17} alt="supprimer"  className={styles.proposalsCross} src="/logos/bigCross.svg" onClick={deleteChosenTag}/>
                        </div>
                        )}
                        <div className={styles.tagZoneProposals}>
                            {filteredTags.map(ingredient => (
                                <div className={styles.tagZoneProposal} key={ingredient} onClick={selectTag}>{ingredient}</div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            { tagSearch != null && !isOpen && (
                <div className={styles.deportedTag}>
                    <p>{tagSearch}</p>
                    <Image height={10} className={styles.bigCross} width={10} alt="cross" src="/logos/bigCross.png" onClick={deleteChosenTag}/>
                </div>
            )}
            
        </div>
    )
}