'use client'
import styles from './Banner.module.css'
import Image from 'next/image'
import { useState } from 'react'

export default function Banner({onSearchChange}) {

    const [isSearch, setIsSearch] = useState('')

    const deleteSearch = () => {
        setIsSearch('')
    }

    return (
        <div className={styles.bannerDown}>
            <h1>DÉCOUVREZ NOS RECETTES</h1>
            <h1>DU QUOTIDIEN,SIMPLES ET DÉLICIEUSES</h1>
            <form className={styles.form}>
                <input className={styles.search} type="text" name="search" placeholder="Rechercher une recette, un ingrédient..." onChange={event => onSearchChange(event.target.value)}/>
                <div className={styles.submit}>
                    <Image fill src="/logos/loopcta.svg" alt="search logo" />
                    { isSearch != '' && (<Image height={13} width={13} alt="cross" className={styles.tagZoneCross} src="/logos/cross.svg" onClick={deleteSearch}/>)}
                </div>
            </form>
        </div>
    )

}