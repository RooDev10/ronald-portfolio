import styles from './Navbar.module.css';
import { FaBars } from 'react-icons/fa';
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
        <nav className={styles.navbar} aria-label="Navegación principal">

            <button
                className={styles.hamburger}
                aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
                aria-expanded={isOpen}
                aria-controls="navbar-menu"
                onClick={() => setIsOpen(!isOpen)}
            >
                <FaBars />
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

            <ul
                id="navbar-menu"
                className={`${styles.menu} ${isOpen ? styles.open : ''}`}
            >
                {menuItems.map((item, index) => (
                    <li key={item.link}>
                        <a
                            href={item.link}
                            aria-current={activeIndex === index ? 'true' : undefined}
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
