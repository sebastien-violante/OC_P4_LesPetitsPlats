import Link from "next/link"
import styles from './notfound.module.css'
import BannerUp from "@/src/components/Banner/BannerUp"
import BannerDownNotFound from "@/src/components/Banner/BannerDownNotFound"

export default function NotFound() {

    return (
        <div className={styles.bannerContentNotFound}>
                <BannerUp/>
                <BannerDownNotFound/>
        </div>
    )
}