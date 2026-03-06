import styles from './UstensilItem.module.css'

export default function UstensilItem({ustensil}) {
    return (
        <div className={styles.ustensilItem}>
            <p className={styles.ustensilName}>{ustensil}</p>
            <p className={styles.ustensilQuantity}>1</p>
        </div>
    )
}