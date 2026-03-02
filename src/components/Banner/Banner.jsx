import styles from './Banner.module.css'
import Image from 'next/image'

export default function Banner() {

    return (
        <div className={styles.bannerContent}>
            <Image fill className={styles.bannerImage} src="/banner-picture.png" alt="bannière du site les petits plats"/>
            <div className={styles.bannerUp}>
                <Image width={180} height={25}  className={styles.bannerUpImage} src="/lespetitsplats.png" alt="les Petits Plats" />
                <Image width={22} height={22} className={styles.bannerUpImage} src="/point.png" alt="logo"/>
            </div>
            <div className={styles.bannerDown}>
                <h1>DÉCOUVREZ NOS RECETTES</h1>
                <h1>DU QUOTIDIEN,SIMPLES ET DÉLICIEUSES</h1>
                <form className={styles.form}>
                    <input className={styles.search} type="text" name="search" placeholder="Rechercher une recette, un ingrédient..."/>
                    <div className={styles.submit}>
                        <Image fill src="/logos/loop.png" alt="search logo" />
                    </div>
                    
                </form>
            </div>
            
        </div>
        
    )

}