import styles from './HorizontalContainer.module.css';

export function HorizontalLayout(props) {
    const {children} = props;

    return (
        <div className={styles.HorizontalContainer}>
            {children.map((child, i) => {
                return (
                    <div key={i}>{child}</div>
                );
            })}
        </div>
    )
}