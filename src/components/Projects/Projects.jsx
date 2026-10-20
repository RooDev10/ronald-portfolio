import styles from './Projects.module.css';
import projects from '../../data/projects.js';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useInViewItems } from '../../hooks/useInView.js';

function Projects() {

    const { registerRef, visibleIndices } = useInViewItems({ threshold: 0.3 });

  return (
        <section className={styles.projectsSection} id="Projects">
            <h1>Mis proyectos</h1>
            <p className={styles.projectsDescription}>Una colección de mis trabajos 
                recientes en desarrollo de software, diseño web y soluciones creativas.</p>

            <div className={styles.projectsWrapper}>
                <div className={styles.projectsContainer}>
                {projects.map((project, index) => {
                    const isVisible = visibleIndices.has(index);
                    return (
                    <article 
                        key={project.id_project} 
                        ref={(element) => registerRef(element, index)}
                        className={`${styles.projectCard} ${index % 2 !== 0 ? styles.reverse : ''} ${isVisible ? styles.visible : ''}`}
                    >
                        <div className={styles.projectImage}>
                            <img src={project.image} alt={project.title} />
                        </div>

                        <div className={styles.projectContent}>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>

                            <div className={styles.tags}>
                                {project.technologies.map((tech, i) => (
                                    <span key={i}>{tech}</span>
                                ))}
                            </div>

                            <div className={styles.projectLinks}>
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`Repositorio de ${project.title} en GitHub`}><FaGithub /></a>
                                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" aria-label={`Demo de ${project.title}`}><FaExternalLinkAlt /></a>
                            </div>
                        </div>
                    </article>
                    );
                })}
                </div>
            </div>
            
        </section>
  );
}

export default Projects;