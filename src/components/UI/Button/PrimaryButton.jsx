import styles from './PrimaryButton.module.css';

function PrimaryButton({text, url, color}) {
    // Solo los enlaces web abren en otra pestaña; mailto: o tel: abren la app correspondiente
    const isExternal = /^https?:\/\//.test(url);

    return (
        <a
            href={url}
            className={styles.PrimaryBtn}
            style={{backgroundColor: color}}
            {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
        >
            {text}
        </a>
    )
}

export default PrimaryButton;
