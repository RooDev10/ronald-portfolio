import project1 from "../assets/project1.webp"

const projects = [
    {
        id_project: 1,
        title: "JobOffersAPI",
        image: project1,    
        description: "JobOffers API es un backend desarrollado con .NET que busca explorar cómo diseñar, contenerizar y desplegar una aplicación siguiendo buenas prácticas reales. Más que ofrecer operaciones CRUD, se centra en la arquitectura, infraestructura y despliegue, utilizando Entity Framework Core con PostgreSQL, Docker y Docker Compose, y redes privadas con Tailscale para conectar de forma segura con un servidor propio bajo mi control, adentrándose así en prácticas modernas de backend y en la cultura DevOps.",
        technologies: ["C#", ".NET", "Tailscale", "Docker", "Linux"],
        githubUrl: "https://github.com/RooDev10/job-offers-api-test-docker.git", 
        demoUrl: "https://tudominio.com/app"           
    },
    
    
]

export default projects;