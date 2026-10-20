import profile from '../../data/profile.js';
import styles from './About.module.css';
import { useState } from "react";
import useInView from '../../hooks/useInView.js';


function About() {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const { ref: sectionRef, isInView: isVisible } = useInView({ threshold: 0.3 });

    const handleMouseMove = (event) => {
        const card = event.currentTarget.getBoundingClientRect();

        const centerX = card.left + card.width / 2;
        const centerY = card.top + card.height / 2;

        const mouseX = event.clientX - centerX;
        const mouseY = event.clientY - centerY;

        const rotateX = (mouseY / (card.height / 2)) * -15;
        const rotateY = (mouseX / (card.width / 2)) * 15;

        setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 });
    };

    return (
        <section className={styles.aboutSection} id="About" ref={sectionRef}>
            <h1>Sobre mí</h1>

            <div className={styles.aboutWrapper}>
                <div className={styles.aboutContainer}>
                    <figure
                        className={`${styles.figureabout} ${
                            isVisible ? styles.showLeft : styles.hiddenLeft
                        }`}
                    >
                        <img
                            src={profile.profile_photo}
                            alt="Ronald Peralta, estudiante de Ingeniería de Software"
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            style={{
                                transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                                transition: 'transform 0.1s ease'
                            }}
                        />
                        <figcaption className="sr-only">Ronald Peralta en su día a día como desarrollador</figcaption>
                    </figure>

                    <div
                        className={`${styles.aboutDescription} ${
                            isVisible ? styles.showRight : styles.hiddenRight
                        }`}
                    >
                        <p>{profile.bio}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
