'use client'
import styles from './Banner.module.css'
import Image from 'next/image'

export default function BannerUp() {

    return (
        <div className={styles.bannerUp}>
                <Image width={180} height={25}  className={styles.bannerUpImage} src="/lespetitsplats.png" alt="les Petits Plats" />
                <Image width={22} height={22} className={styles.bannerUpImage} src="/point.png" alt="logo"/>
        </div>  
    )

}