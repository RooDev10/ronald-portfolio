import styles from "./Skills.module.css";
import skills from "../../data/skill";
import techIcons from "../../data/techIcons.js";
import useInView from "../../hooks/useInView.js";

function Skills() {
  const { ref: sectionRef, isInView: isVisible } = useInView({ threshold: 0.2 });

  return (
    <section
      id="Skills"
      className={`${styles.skillsSection} ${isVisible ? styles.animate : ""}`}
      ref={sectionRef}
    >
      <h1>Habilidades</h1>

      <div className={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <article
            key={skill.id_skill}
            className={styles.skillCard}
            style={{ "--accent": skill.accent, "--delay": `${index * 0.12}s` }}
          >
            <h3>{skill.category}</h3>

            <ul className={styles.techList}>
              {skill.skills_list.map((tech) => {
                const { Icon, color, lowContrast } = techIcons[tech] ?? {};

                return (
                  <li key={tech} className={styles.techPill} style={{ "--tech-color": color }}>
                    {Icon && (
                      <Icon
                        aria-hidden="true"
                        color={color}
                        className={`${styles.techIcon} ${lowContrast ? styles.lowContrast : ""}`}
                      />
                    )}
                    <span>{tech}</span>
                  </li>
                );
              })}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
