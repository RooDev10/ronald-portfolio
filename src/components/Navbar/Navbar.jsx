import styles from './Navbar.module.css';
import {useState } from "react";


function Navbar() {
    const [activeIndex, setActiveIndex] = useState(0);

    const menuItems = [
        { name: 'Home', link: '#Home' },
        { name: 'About', link: '#About' },
        { name: 'Skills', link: '#Skills' },
        { name: 'Projects', link: '#Projects' },
        { name: 'Contacto', link: '#Contacto' }
    ];


    return (
    <nav className={styles.navbar}>
        <a href="#" className={styles.logo}>RoniDev</a>

        <ul>
        {menuItems.map((item, index) => (
            <li key={index}>
            <a 
                href={item.link} 
                className={`${activeIndex === index ? styles.active : null}`}
                onClick={() => setActiveIndex(index)}
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