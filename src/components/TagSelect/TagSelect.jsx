'use client'
import styles from './TagSelect.module.css'
import { useState } from 'react'
import Image from 'next/image'

export default function TagSelect({label}) {

    const [value, setValue] = useState("")

    return (
        <div className={styles.tagSelectWrapper}>
        <select className={`${styles.tagSelect} ${label || undefined}`} value={value} onChange={(event) => setValue(event.target.value)}>
            <option value="" disabled hidden>{label}</option>
        </select>
        <span className={styles.arrow}>
            <Image fill src="/logos/downArrow.png" alt=""/>
        </span>
        </div>
    )
}