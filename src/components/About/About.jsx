import about from '../../data/about.js';
import styles from './About.module.css';
import { useState } from "react";
import useInView from '../../hooks/useInView.js';

function About() {
    const [order, setOrder] = useState(() => about.photos.map((_, index) => index));
    const { ref: sectionRef, isInView: isVisible } = useInView({ threshold: 0.3 });

    const activePhoto = about.photos[order[0]];

    // La foto del frente pasa al final de la pila
    const showNextPhoto = () => {
        setOrder(([first, ...rest]) => [...rest, first]);
    };

    return (
        <section
            className={`${styles.aboutSection} ${isVisible ? styles.animate : ""}`}
            id="About"
            ref={sectionRef}
        >
            <h1>Sobre mí</h1>

            <div className={styles.aboutWrapper}>
                <div className={styles.deckColumn}>
                    <button
                        type="button"
                        className={styles.deck}
                        onClick={showNextPhoto}
                        aria-label={`Foto ${order[0] + 1} de ${about.photos.length}: ${activePhoto.title}. Ver siguiente foto`}
                    >
                        {about.photos.map((photo, index) => {
                            const position = Math.min(order.indexOf(index), 3);

                            return (
                                <span key={photo.id} className={`${styles.photoCard} ${styles[`pos${position}`]}`}>
                                    <img src={photo.src} alt={position === 0 ? photo.alt : ""} draggable="false" />
                                </span>
                            );
                        })}

                        <span className={styles.photoBadge} aria-hidden="true">
                            <span className={styles.photoTitle}>{activePhoto.title}</span>
                            <span className={styles.photoCounter}>
                                {order[0] + 1} / {about.photos.length} • Clic para cambiar
                            </span>
                        </span>
                    </button>
                </div>

                <div className={styles.contentColumn}>
                    <span className={styles.topBadge}>{about.badge}</span>

                    <div className={styles.descriptionBox}>
                        {about.paragraphs.map((paragraph) => (
                            <p key={paragraph} className={styles.paragraph}>{paragraph}</p>
                        ))}
                    </div>

                    <ul className={styles.pillars}>
                        {about.pillars.map((pillar, index) => {
                            const { Icon } = pillar;

                            return (
                                <li key={pillar.id} className={styles.pillarItem} style={{ "--delay": `${0.35 + index * 0.12}s` }}>
                                    <article className={styles.pillarCard}>
                                        <Icon aria-hidden="true" className={styles.pillarIcon} />
                                        <h3>{pillar.title}</h3>
                                        <p>{pillar.text}</p>
                                    </article>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default About;
