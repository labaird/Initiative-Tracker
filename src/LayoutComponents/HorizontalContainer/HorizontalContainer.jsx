import styles from './HorizontalContainer.module.css';

export function HorizontalContainer(props) {
    const {children} = props;

    return (
        <div className={styles.HorizontalContainer}>
            {children}
        </div>
    )
}