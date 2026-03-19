import styles from './Banner.module.css'
import Image from 'next/image'

export default function BannerUp() {

    return (
        <div className={styles.bannerUp}>
                <Image width={180} height={25} className={styles.bannerUpImage} src="/logos/lesPetitsPlats.png" alt="site Les Petits Plats" preload={true}/>
        </div>  
    )
}