import styles from './Projects.module.css';
import projects from '../../data/projects.js';
import { useEffect, useRef } from 'react';

function Projects() {

    const cardsRef = useRef([]);

    useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          } else {
            entry.target.classList.remove(styles.visible);
          }
        });
      },
      {
        threshold: 0.3
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
        <section className={styles.projectsSection} id="Projects">
            <h1>Mis proyectos</h1>
            <p className={styles.projectsDescription}>Una colección de mis trabajos 
                recientes en desarrollo de software, diseño web y soluciones creativas.</p>

            <div className={styles.projectsWrapper}>
                <div className={styles.projectsContainer}>
                {projects.map((project, index) => (
                    <article 
                        key={project.id_project} 
                        ref={(el) => (cardsRef.current[index] = el)}
                        className={`${styles.projectCard} ${index % 2 !== 0 ? styles.reverse : ''}`}
                    >
                        {/* Bloque 1: Imagen */}
                        <div className={styles.projectImage}>
                            <img src={project.image} alt={project.title} />
                        </div>

                        {/* Bloque 2: Información */}
                        <div className={styles.projectContent}>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            
                            {/* Tags de tecnologías */}
                            <div className={styles.tags}>
                                {project.technologies.map((tech, i) => (
                                    <span key={i}>{tech}</span>
                                ))}
                            </div>

                            {/* Botones de Links */}
                            <div className={styles.projectLinks}>
                                <a href={project.githubUrl}><i class="fab fa-github"></i></a>
                                <a href={project.demoUrl}><i class="fas fa-external-link-alt"></i></a>
                            </div>
                        </div>
                    </article>
                ))}
                </div>
            </div>
            
        </section>
  );
}

export default Projects;