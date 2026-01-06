import styles from "./Skills.module.css";
import skills from "../../data/skill";
import { useState, useEffect, useRef } from "react";
import { IoLogoJavascript } from "react-icons/io";
import {
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub,
  FaVuejs, FaJava, FaPython, FaMicrosoft, FaCogs, FaDatabase,
  FaAndroid, FaFire, FaLinux, FaDocker,
} from "react-icons/fa";

import {
  SiTailwindcss, SiFirebase, SiMongodb, SiMysql, SiFlutter,
  SiFigma, SiJetpackcompose, SiTypescript, SiFastapi,
} from "react-icons/si";

function Skills() {
  const [selectedId, setSelectedId] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Lógica para disparar la animación al entrar a la sección
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 } // Se activa cuando el 20% de la sección es visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleCardClick = (id) => {
    setSelectedId(selectedId === id ? null : id);
  };

  const iconMap = {
    HTML: <FaHtml5 color="#E34F26" />,
    CSS: <FaCss3Alt color="#1572B6" />,
    JavaScript: <IoLogoJavascript color="#F7DF1E" />,
    React: <FaReact color="#61DAFB" />,
    Vue: <FaVuejs color="#4FC08D" />,
    TypeScript: <SiTypescript color="#3178C6" />,
    "Tailwind CSS": <SiTailwindcss color="#06B6D4" />,
    "C#": <FaCogs color="#178600" />,
    Java: <FaJava color="#9c0a18ff" />,
    Python: <FaPython color="#54ab37ff" />,
    ".Net": <FaMicrosoft color="#512BD4" />,
    FastApi: <SiFastapi color="#009900" />,
    "Node.js": <FaNodeJs color="#339933" />,
    SQLServer: <FaDatabase color="#CC2927" />,
    MongoDB: <SiMongodb color="#47A248" />,
    MySQL: <SiMysql color="#4479A1" />,
    Dart: <FaFire color="#0175C2" />,
    Kotlin: <FaAndroid color="#178600" />,
    Flutter: <SiFlutter color="#0175C2" />,
    "Jetpack Compose": <SiJetpackcompose color="#4285F4" />,
    Linux: <FaLinux color="#070437ff" />,
    Git: <FaGitAlt color="#F05032" />,
    GitHub: <FaGithub color="#ffffff" />,
    Figma: <SiFigma color="#F24E1E" />,
    Docker: <FaDocker color="#2496ED" />,
    Firebase: <SiFirebase color="#FFCA28" />,
  };

  return (
    <section 
      id="Skills" 
      className={`${styles.skillsSection} ${isVisible ? styles.animate : ""}`}
      ref={sectionRef} 
    >
      <h1>Habilidades</h1>

      <div className={styles.skillsWrapper}>
        {skills.map((skill, index) => (
          <div
            key={skill.id_skill}
            className={styles.skillCard}
            onClick={() => handleCardClick(skill.id_skill)}
            style={{ 
                /* El retraso solo se aplica cuando la sección es visible */
                animationDelay: isVisible ? `${index * 0.12}s` : "0s" 
            }}
          >
            <div className={styles.cardContent}>
              <h3>{skill.category}</h3>

              {selectedId !== skill.id_skill && (
                <div className={styles.miniIcons}>
                  {skill.skills_list.slice(0, 3).map((item, i) => (
                    <span key={i}>{iconMap[item] || item}</span>
                  ))}
                </div>
              )}

              {selectedId === skill.id_skill && (
                <div className={styles.cardDetails}>
                  <ul className={styles.skillsGrid}>
                    {skill.skills_list.map((skillItem, i) => (
                      <li key={i}>
                        {iconMap[skillItem]}
                        <span>{skillItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;