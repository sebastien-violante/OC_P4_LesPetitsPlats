import styles from './Banner.module.css'
import Footer from '../Footer/Footer'
export default function BannerDownNotFound() {

    return (
        <>
            <div className={styles.bannerDownNotFound}>
                <h1>404 :(</h1>
                <h2>La page que vous demandez est introuvable.</h2>
            </div>
            <Footer/>
        </>
        
    )

}