import styles from './Hero.module.css';
import profile from '../../data/profile.js';
import PrimaryButton from '../UI/Button/PrimaryButton.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import { useEffect, useRef, useState } from 'react';

function Hero() {
    const [isVisible, setIsVisible] = useState(false);
    const heroRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.4
            }
        );

        if (heroRef.current) {
            observer.observe(heroRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className={styles.heroSection} id="Home" ref={heroRef}>

            <Navbar />

            <div className={`${styles.mountain} ${styles.mountainBack}`}></div>
            <div className={`${styles.mountain} ${styles.mountainMid}`}></div>
            <div className={`${styles.mountain} ${styles.mountainFront}`}></div>
            
            <header
                className={`${styles.heroHeader} ${
                    isVisible ? styles.heroShowText : styles.heroHiddenText
                }`}
            >
                <h1>{profile.name}</h1>
                <h3>{profile.rol}</h3>
                <p>{profile.description}</p>
                <div className={styles.heroButtons}>
                    <PrimaryButton text="Contactame" url={profile.git_url} color="#000000ff"/>
                    <PrimaryButton text="CV" url={profile.cv_url} color = "#18C4EA"/>
                </div>
            </header>

            <figure
                className={`${styles.profileImage} ${
                    isVisible ? styles.heroShowImage : styles.heroHiddenImage
                }`}
            >
                <img src={profile.image_profile} alt="profile image" />
                <div className={styles.socialLinks}>
                    <a href={profile.git_url}><i class="fab fa-github"></i></a>
                    <a href={profile.linkedin_url}><i class="fab fa-linkedin"></i></a>
                    <a href={profile.ig_url}><i class="fab fa-instagram"></i></a>
                </div>
            </figure>
        
        </section>
    );
}

export default Hero;