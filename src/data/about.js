import { FaLayerGroup, FaDocker, FaBrain } from "react-icons/fa";
import photo from "../assets/photo.webp";
import avatar from "../assets/avatarPNG.webp";

// El mazo acepta cualquier cantidad de fotos: basta con agregar más objetos aquí
const about = {
    badge: "Rol actual: Software Engineer & Product Builder",
    photos: [
        { id: 1, src: photo, title: "En el día a día", alt: "Ronald Peralta en su día a día como desarrollador" },
        { id: 2, src: avatar, title: "Listo para el próximo reto", alt: "Retrato de Ronald Peralta" },
    ],
    paragraphs: [
        "Soy estudiante de Ingeniería de Software, disciplinado y enfocado en crear soluciones bien estructuradas. Desarrollo aplicaciones web y móviles con .NET, React, Vue y Flutter, cuidando la arquitectura y la mantenibilidad para que evolucionen con el tiempo.",
        "Complemento el desarrollo con prácticas DevOps, usando Docker para contenerizar aplicaciones y lograr despliegues confiables. Me apasionan la IA y el aprendizaje automático, y busco mejorar constantemente para afrontar los retos actuales del software.",
    ],
    pillars: [
        { id: 1, Icon: FaLayerGroup, title: "Arquitectura Escalable", text: "Principios de diseño y código mantenible." },
        { id: 2, Icon: FaDocker, title: "Prácticas DevOps", text: "Contenedores con Docker y despliegues confiables." },
        { id: 3, Icon: FaBrain, title: "Innovación & IA", text: "Aprendizaje continuo y soluciones modernas." },
    ],
};

export default about;
