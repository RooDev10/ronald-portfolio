import styles from './Contact.module.css';  
import profile from '../../data/profile.js';
import { FaWhatsapp  } from "react-icons/fa";
import {SiGmail, SiDiscord } from "react-icons/si";
import useInView from '../../hooks/useInView.js';

function Contact() {

    const { ref: sectionRef, isInView: isVisible } = useInView({ threshold: 0.3 });

    return (
        <section className={`${styles.contactSection} ${isVisible ? styles.visible : styles.hidden}`} id="Contacto" ref={sectionRef}>
            <h1>Contactame</h1>
            <p className={styles.contactDescription}>Abierto a colaborar en iniciativas innovadoras 
                que transforman ideas ambiciosas en resultados excepcionales.</p>
  

            <div className={styles.contactWrapper}>
                <div className={styles.contactContainer}>
                    <h3>Hablemos!</h3>  

                    <a href={profile.whatsapp_url} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                        <FaWhatsapp className={styles.icon} />
                        <div>
                            <span>WhatsApp</span>
                            <p>{profile.phone_display}</p>
                        </div>
                    </a>

                    <a href={profile.email_url} className={styles.contactLink}>
                        <SiGmail className={styles.icon} />
                        <div>
                            <span>Gmail</span>
                            <p>{profile.email}</p>
                        </div>
                    </a>

                    <a href={profile.discord_url} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                        <SiDiscord className={styles.icon} />
                        <div>
                            <span>Discord</span>
                            <p>{profile.discord_user}</p>
                        </div>
                    </a>

                    <p className={styles.contactSlogan}>Las grandes soluciones no empiezan con código, sino con visión.
                    Conectemos y construyamos lo que sigue.</p>
                </div>
            </div>


        </section>
    )
}

export default Contact;