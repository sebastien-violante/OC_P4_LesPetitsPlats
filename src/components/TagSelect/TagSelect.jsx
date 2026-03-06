'use client'
import styles from './TagSelect.module.css'
import { useState } from 'react'
import Image from 'next/image'

export default function TagSelect({label, onTagChange, name, tags}) {

    const [value, setValue] = useState("")
    const handleChange = event => {
        const selectedTag = event.target.value
        setValue(event.target.value)
        onTagChange(selectedTag, name)
    }

    return (
        <div className={styles.tagSelectWrapper}>
            <label for={name}>{label}</label>
            <select 
                id={name} 
                value={value} 
                className={`${styles.tagSelect} ${label || undefined}`} 
                onChange={handleChange}
            >
                 <option value="">-- Sélectionner --</option>
                {tags.map(tag => (
                    <option key={tag} value={tag}>{tag}</option>
                ))}
                
            </select>
            <span className={styles.arrow}>
                <Image fill src="/logos/downArrow.png" alt="down arrow"/>
            </span>
        </div>
    )
}