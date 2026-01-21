import styles from './Navbar.module.css';
import { useState, useEffect } from "react";

function Navbar() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { name: 'Inicio', link: '#Home' },
        { name: 'Sobre mí', link: '#About' },
        { name: 'Habilidades', link: '#Skills' },
        { name: 'Proyectos', link: '#Projects' },
        { name: 'Contacto', link: '#Contacto' }
    ];

    useEffect(() => {
        const sections = menuItems.map(item =>
            document.querySelector(item.link)
        );

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const index = sections.indexOf(entry.target);
                        if (index !== -1) {
                            setActiveIndex(index);
                        }
                    }
                });
            },
            {
                root: null,
                rootMargin: "-50% 0px -50% 0px",
                threshold: 0
            }
        );

        sections.forEach(section => {
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <nav className={styles.navbar}>

            <button
                className={styles.hamburger}
                onClick={() => setIsOpen(!isOpen)}
            >
                ☰
            </button>

            <a
                href="#Home"
                className={styles.logo}
                onClick={() => {
                    setActiveIndex(0);
                    setIsOpen(false);
                }}
            >
                RoniDev
            </a>

            <ul className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <a
                            href={item.link}
                            className={activeIndex === index ? styles.active : null}
                            onClick={() => {
                                setActiveIndex(index);
                                setIsOpen(false);
                            }}
                        >
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;
