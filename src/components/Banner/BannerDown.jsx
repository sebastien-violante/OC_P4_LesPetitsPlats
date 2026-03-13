'use client'
import styles from './Banner.module.css'
import Image from 'next/image'
import { useState } from 'react'

export default function Banner({onSearchChange, search}) {

    const [isSearch, setIsSearch] = useState('')

    const deleteSearch = () => {
        setIsSearch('')
    }
    console.log(search)
    return (
        <div className={styles.bannerDown}>
            <h1>DÉCOUVREZ NOS RECETTES</h1>
            <h1>DU QUOTIDIEN,SIMPLES ET DÉLICIEUSES</h1>
            <form className={styles.form}>
                <label htmlFor="searchInput"></label>
                <input id="searchInput" className={styles.searchInput} value={search} type="search" name="searchInput" placeholder="Rechercher une recette, un ingrédient..." onChange={event => onSearchChange(event.target.value)}/>
                <button type="submit" className={styles.searchSubmit}><Image height={50} width={50} src="/logos/loopcta.svg" alt="search logo" /></button>
            </form>
        </div>
    )

}