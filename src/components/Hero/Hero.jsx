import styles from './Hero.module.css';
import profile from '../../data/profile.js';
import PrimaryButton from '../UI/Button/PrimaryButton.jsx';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import useInView from '../../hooks/useInView.js';

function Hero() {
    const { ref: heroRef, isInView: isVisible } = useInView({ threshold: 0.4 });

    return (
        <section className={styles.heroSection} id="Home" ref={heroRef}>

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
                    <PrimaryButton text="Contáctame" url={profile.email_url} color="#172A41"/>
                    <PrimaryButton text="CV" url={profile.cv_url} color = "#18C4EA"/>
                </div>
            </header>

            <figure
                className={`${styles.profileImage} ${
                    isVisible ? styles.heroShowImage : styles.heroHiddenImage
                }`}
            >
                <img src={profile.image_profile} alt="Ronald Peralta, desarrollador de software" />
                <div className={styles.socialLinks}>
                    <a href={profile.git_url} target="_blank" rel="noopener noreferrer" aria-label="GitHub de Ronald Peralta"><FaGithub /></a>
                    <a href={profile.linkedin_url} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Ronald Peralta"><FaLinkedin /></a>
                    <a href={profile.ig_url} target="_blank" rel="noopener noreferrer" aria-label="Instagram de Ronald Peralta"><FaInstagram /></a>
                </div>
                <figcaption className="sr-only">Ronald Peralta, desarrollador de software</figcaption>
            </figure>
        
        </section>
    );
}

export default Hero;