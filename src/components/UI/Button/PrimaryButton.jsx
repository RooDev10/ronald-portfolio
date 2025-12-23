import styles from './PrimaryButton.module.css';

function PrimaryButton({text, url, color}) {
    return (
        <a href={url} className={styles.PrimaryBtn} style={{backgroundColor: color}}>{text}</a>
    )
}

export default PrimaryButton;