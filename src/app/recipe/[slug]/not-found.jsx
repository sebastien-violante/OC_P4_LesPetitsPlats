import styles from './notfound.module.css'
import BannerDownNotFound from "@/src/components/Banner/BannerDownNotFound"

export default function NotFound() {

    return (
        <div className={styles.bannerContentNotFound}>
                <BannerDownNotFound/>
        </div>
    )
}