import styles from './Header.module.css'
import Image from 'next/image'

export default function Header() {

    return (
        <div className={styles.header}>
            <Image width={180} height={25} className={styles.logo} src="/logos/lesPetitsPlats.png" alt="site Les Petits Plats"/>
        </div>  
    )
}