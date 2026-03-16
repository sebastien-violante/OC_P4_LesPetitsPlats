import styles from './Banner.module.css'
import Footer from '../Footer/Footer'
import Link from 'next/link'

export default function BannerDownNotFound() {

    return (
        <>
            <div className={styles.bannerDownNotFound}>
                <h1>404 :(</h1>
                <h2>La page que vous demandez est introuvable.</h2>
                <Link className={styles.backToMenu} href="/">Retourner à l'accueil</Link>
            </div>
            <Footer/>
        </>
        
    )

}