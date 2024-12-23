import styles from './output.module.scss';

function Output (value) {

    console.log(value);
    return (
        <div className={styles.output}>
            <p className={styles.placeholder}>{value.value}</p>
        </div>

    )
}

export default Output;