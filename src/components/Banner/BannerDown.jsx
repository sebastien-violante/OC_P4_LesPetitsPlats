import styles from './Banner.module.css'
import Image from 'next/image'

export default function Banner({onSearchChange, search}) {

    return (
        <div className={styles.bannerDown}>
            <h1>DÉCOUVREZ NOS RECETTES</h1>
            <h1>DU QUOTIDIEN,SIMPLES ET DÉLICIEUSES</h1>
            <form className={styles.form}>
                <label htmlFor="searchInput"></label>
                <input id="searchInput" className={styles.searchInput} value={search} type="search" name="searchInput" placeholder="Rechercher une recette, un ingrédient..." onChange={event => onSearchChange(event.target.value)}/>
                {search && <img src="/logos/bigCross.png" onClick={() => {onSearchChange('')}} className={styles.deleteSearchCross} alt="effacer la recherche"/>}
                <button type="submit" className={styles.searchSubmit}><Image height={50} width={50} src="/logos/loopcta.svg" alt="rechercher une recette" preload={true}/></button>
            </form>
        </div>
    )
}