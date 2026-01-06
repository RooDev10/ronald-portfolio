import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";

const projects = [
    {
        id_project: 1,
        title: "Project One",
        image: project1,                  // Ruta a la imagen del proyecto
        description: "TaskMaster Pro es una herramienta de gestión de tareas que ayuda a equipos e individuos a organizar y priorizar proyectos de manera eficiente. Con una interfaz intuitiva, puedes crear, asignar y seguir tareas fácilmente. Además, se integra con herramientas populares como Slack, Google Calendar y Trello para centralizar todo tu trabajo.",
        technologies: ["React", "Firebase", "Tailwind CSS"],
        githubUrl: "https://github.com/tu-usuario/repo", // Link al código
        demoUrl: "https://tudominio.com/app"             // Link al deploy
    },
    {
        id_project: 2,
        title: "Project Two",
        image: project2,  
        description: "SocialBoost es una plataforma diseñada para ayudar a marcas, influencers y empresas a aumentar su presencia en redes sociales. A través de análisis avanzados y herramientas de automatización, SocialBoost facilita la creación de contenido atractivo, la programación de publicaciones y el análisis de desempeño en tiempo real. Con una interfaz sencilla, puedes gestionar todas tus cuentas desde un solo lugar.",
        technologies: ["React", "Firebase", "Tailwind CSS"],
        githubUrl: "https://github.com/tu-usuario/repo",
        demoUrl: "https://tudominio.com/app"
    },
    {
        id_project: 3,
        title: "Project Three",
        image: project3, 
        description: "FitTrack es una aplicación móvil de seguimiento de actividad física diseñada para ayudarte a alcanzar tus metas de salud y bienestar. Con una interfaz intuitiva, FitTrack te permite monitorear tus entrenamientos, hábitos alimenticios y progreso físico de manera sencilla. Con estadísticas detalladas y recomendaciones personalizadas, es como tener un entrenador personal en tu bolsillo.",
        technologies: ["React", "Firebase", "Tailwind CSS"],
        githubUrl: "https://github.com/tu-usuario/repo",
        demoUrl: "https://tudominio.com/app"
    },
    
]

export default projects;