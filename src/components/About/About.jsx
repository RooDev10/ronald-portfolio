import profile from '../../data/profile.js';
import styles from './About.module.css';
import { useState, useRef, useEffect } from "react";


function About() {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

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

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            setIsVisible(entry.isIntersecting);
        },
        {
            threshold: 0.3
        }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

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
                            alt="photo image"
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            style={{
                                transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                                transition: 'transform 0.1s ease'
                            }}
                        />
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
